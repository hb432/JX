module.exports = function (subject) {
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
};
