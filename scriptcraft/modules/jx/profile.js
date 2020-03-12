module.exports = function (player) {
   player = jx.player(player);
   return {
      save: function (name) {
         var instance = player.instance;
         var data = player.data('profile');
         var profile = {
            exp: instance.exp,
            level: instance.level,
            health: instance.health,
            foodLevel: instance.foodLevel,
            inventory: jx.storage.inventory.save(instance.inventory),
            enderChest: jx.storage.inventory.save(instance.enderChest),
            effects: $(instance).effect(),
            location: jx.util.json(instance.location)
         };
         if (name) data[name] = profile;
         return profile;
      },
      load: function (input, teleport) {
         var instance = player.instance;
         var data = player.data('profile');
         if (jx.ty(input) === 'string') profile = data[input];
         else profile = input;
         jx.ar(org.bukkit.potion.PotionEffectType.values()).forEach(function (entry) {
            if (instance.getPotionEffect(entry)) instance.removePotionEffect(entry);
         });
         $(instance).mod({ effects: profile.effects });
         jx.storage.inventory.load({ inventory: instance.enderChest }, profile.enderChest);
         jx.storage.inventory.load(instance, profile.inventory);
         instance.foodLevel = profile.foodLevel;
         instance.health = profile.health;
         instance.level = profile.level;
         instance.exp = profile.exp;
         if (teleport) instance.teleport(jx.util.loc(profile.location));
      },
      reset: function (teleport) {
         var instance = player.instance;
         jx.ar(org.bukkit.potion.PotionEffectType.values()).forEach(function (entry) {
            if (instance.getPotionEffect(entry)) instance.removePotionEffect(entry);
         });
         instance.enderChest.clear();
         instance.inventory.clear();
         instance.foodLevel = 20;
         instance.health = 20;
         instance.level = 0;
         instance.exp = 0;
         if (teleport) instance.teleport(server.worlds.get(0).spawnLocation);
      }
   };
};
