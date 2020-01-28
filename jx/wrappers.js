module.exports = {
   $: function (object, arg2) {
      var type = jx.ty(object);
      if (type.contains('.entity.')) {
         return jx.entity(object);
      } else if (type.contains('.block.')) {
         return jx.block(object);
      } else if (type.contains('ItemStack')) {
         return jx.item(object);
      } else if (type === 'string') {
         var match = false;
         jx.all(function (player) {
            if (!match && player.name.toLowerCase() === object.toLowerCase()) {
               match = object;
            }
         });
         if (!match) {
            jx.all(function (player) {
               if (!match && player.name.toLowerCase().startsWith(object.toLowerCase())) {
                  match = player.name;
               }
            });
         }
         if (arg2 && !match) {
            var players = jx.data.server('players');
            Object.keys(players).forEach(function (player) {
               var value = players[player];
               if (!match && value.toLowerCase().startsWith(object.toLowerCase())) {
                  match = value;
               }
            });
         }
         if (match) {
            return jx.player(match);
         } else {
            return null;
         }
      } else {
         return null;
      }
   },
   block: function (subject) {
      var block = subject;
      var that = {
         get block () {
            return block;
         }
      };
      that.type = _(block);
      return that;
   },
   entity: function (subject) {
      var entity = subject;
      var that = {
         get entity () {
            return entity;
         }
      };
      that.type = _(entity);
      that.effect = function (type, level, time, force) {
         if (type) {
            type = jx.api.potionEffectType[type.toString()];
            if (level) {
               time = Number(time || -1);
               var ticks = time === -1 ? 2147483647 : time * 20;
               var effect = type.createEffect(ticks, Number(level === void 0 ? 1 : level) - 1);
               entity.addPotionEffect(effect, force || true);
               return that;
            } else if (Number(level) === 0) {
               entity.removePotionEffect(type);
               return that;
            } else {
               return entity.getPotionEffect(type);
            }
         } else {
            var output = {};
            jx.ar(org.bukkit.potion.PotionEffectType.values()).forEach(function (entry) {
               var effect = entity.getPotionEffect(entry);
               if (effect) {
                  output[jx.api.potionEffectType[effect.type.name.toString()]] = {
                     time: Number(effect.duration),
                     level: Number(effect.amplifier)
                  };
               }
            });
            return output;
         }
      };
      that.attribute = function (type, value) {
         if (type) {
            type = type.toString();
            if (value) {
               entity.getAttribute(jx.api.attribute[type]).setBaseValue(Number(value));
               return that;
            } else {
               return Number(entity.getAttribute(jx.api.attribute[type]).baseValue);
            }
         } else {
            return jx.ar(org.bukkit.attribute.Attribute.values()).map(function (entry) {
               return Number(entity.getAttribute(entry).baseValue);
            });
         }
      };
      that.equip = function (equipment) {
         var nothing = jx.spawn.item('air');
         entity.equipment.setItemInMainHand(equipment.itemInMainHand || nothing);
         entity.equipment.setItemInOffHand(equipment.offhand || nothing);
         entity.equipment.setHelmet(equipment.helmet || nothing);
         entity.equipment.setChestplate(equipment.chestplate || nothing);
         entity.equipment.setLeggings(equipment.leggings || nothing);
         entity.equipment.setBoots(equipment.boots || nothing);
         return that;
      };
      that.heal = function (amount) {
         entity.setHealth(Number(amount || entity.maxHealth));
         return that;
      };
      that.feed = function (amount) {
         entity.setFoodLevel(Number(amount || 20));
         return that;
      };
      that.damage = function (amount) {
         entity.damage(Number(amount || entity.health + 1));
         return that;
      };
      that.clear = function () {
         entity.inventory.clear();
         return that;
      };
      that.give = function (item) {
         entity.inventory.addItem(jx.api.material[item.toString()]);
         return that;
      };
      that.take = function (item) {
         entity.inventory.remove(jx.api.material[item.toString()]);
         return that;
      };
      that.tag = function (tag, add) {
         add ? entity.addScoreboardTag(tag.toString()) : entity.removeScoreboardTag(tag.toString());
         return that;
      };
      that.mod = function (options) {
         if (options.health) {
            options.health = Number(options.health);
            entity.setMaxHealth(options.health);
            entity.setHealth(options.health);
         }
         if (options.equipment) {
            that.equip(options.equipment);
         }
         if (options.effects) {
            Object.keys(options.effects).forEach(function (effect) {
               var value = options.effects[effect];
               that.effect(effect, Number(value.level || 1), Number(value.time || -1), true);
            });
         }
         if (options.attributes) {
            Object.keys(options.attributes).forEach(function (attribute) {
               that.attribute(attribute, Number(options.attributes[attribute]));
            });
         }
         return that;
      };
      return that;
   },
   item: function (subject) {
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
   }
};

module.exports.init = function (jx) {
   global.$ = jx.$;
};
