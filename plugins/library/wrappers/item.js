module.exports = function (subject) {
   var item = subject;
   var that = {
      get item () {
         return item;
      }
   };
   that.type = _(item);
   that.enchantment = function (type, level) {
      var enchantments = {};
      item.enchantments.entrySet().forEach(function (entry) {
         var name = jx.api.enchantment[entry.key.name];
         enchantments[name] = Number(entry.value);
      });
      if (type) {
         type = type.toString();
         if (level) {
            item.addUnsafeEnchantment(jx.api.enchantment[type], Number(level));
            return that;
         } else {
            return enchantments[type];
         }
      } else {
         return enchantments;
      }
   };
   that.attribute = function (type, value, operation, slot) {
      var meta = item.itemMeta;
      if (type) {
         type = type.toString();
         if (value != null) {
            var uuid = java.util.UUID.randomUUID();
            var operation = jx.api.operation[(operation || 'add_number').toString()];
            var slot = slot ? jx.api.equipmentSlot[slot.toString()] : null;
            var modifier = new org.bukkit.attribute.AttributeModifier(uuid, type, Number(value), operation, slot);
            meta.addAttributeModifier(jx.api.attribute[type], modifier);
            item.setItemMeta(meta);
            return that;
         } else {
            meta.getAttributeModifiers(jx.api.attribute[type]);
         }
      } else {
         if (meta.attributeModifiers) {
            return jx.ar(meta.attributeModifiers.values()).map(function (modifier) {
               return {
                  name: modifier.name,
                  amount: modifier.amount,
                  operation: jx.api.operation[modifier.operation],
                  slot: jx.api.equipmentSlot[modifier.slot || ''] || null
               };
            });
         } else {
            return [];
         }
      }
   };
   that.meta = function (property, value) {
      var meta = item.itemMeta;
      if (property) {
         var name = jx.util.pascal(property.toString());
         if (value != null) {
            meta['set' + name](value);
            item.setItemMeta(meta);
            return that;
         } else {
            return meta[property];
         }
      } else {
         return meta;
      }
   };
   that.amount = function (amount) {
      if (amount != null) {
         item.setAmount(Number(amount));
         return that;
      } else {
         return Number(item.amount);
      }
   };
   that.flag = function (type) {
      var meta = item.itemMeta;
      if (type) {
         meta.addItemFlags([ jx.api.itemFlag['hide_' + type] ]);
         item.setItemMeta(meta);
         return that;
      } else {
         return jx.ar(meta.itemFlags).map(function (flag) {
            return jx.api.itemFlag[flag.toString()].split('hide_')[1];
         });
      }
   };
   that.mod = function (options) {
      if (options.amount) {
         that.setAmount(options.amount);
      }
      if (options.flags) {
         options.flags.forEach(function (flag) {
            that.flag(flag);
         });
      }
      if (options.meta) {
         Object.keys(options.meta).forEach(function (property) {
            that.meta(property, options.meta[property]);
         });
      }
      if (options.enchantments) {
         Object.keys(options.enchantments).forEach(function (enchantment) {
            that.enchantment(enchantment, Number(options.enchantments[enchantment]));
         });
      }
      if (options.attributes) {
         options.attributes.forEach(function (attribute) {
            that.attribute(attribute.name, attribute.amount, attribute.operation, attribute.slot);
         });
      }
      return that;
   };
   return that;
};
