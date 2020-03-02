module.exports = {
   /**
    * convert an item stack into a json-serializable object
    * @param {*} stack the item stack to convert
    * @returns {*} the converted item stack
    * @example
    * // store the item in player's hand in a variable
    * var item = jx.storage.item.save(player.instance.itemInHand);
    */
   save: function (stack) {
      var data = {};
      var meta = stack.itemMeta;
      data.type = _(stack) || 'air';
      data.amount = stack.amount;
      data.name = meta.displayName || void 0;
      data.ench = $(stack).enchantment();
      data.attr = $(stack).attribute();
      data.flag = $(stack).flag();
      data.data = $(stack).data();
      if (data.amount === 1) {
         data.amount = void 0;
      }
      if (!Object.keys(data.ench).length) {
         data.ench = void 0;
      }
      if (!data.attr.length) {
         data.attr = void 0;
      }
      if (!data.flag.length) {
         data.flag = void 0;
      }
      if (meta.unbreakable) {
         data.ubab = true;
      }
      if (meta.lore) {
         data.lore = jx.ar(meta.lore);
      }
      if (!Object.keys(data.data).length) {
         data.data = void 0;
      }
      if (meta.damage) {
         data.damage = meta.damage;
      }
      switch (_(stack)) {
         case 'enchanted_book':
            data.unique = {};
            jx.ar(meta.storedEnchants.entrySet()).map(function (key) {
               data.unique[key.key.key.key] = key.value;
            });
            break;
         case 'potion':
         case 'tipped_arrow':
            var pot = meta.basePotionData;
            data.unique = {
               type: pot.type,
               extended: pot.extended,
               upgraded: pot.upgraded
            };
            break;
         case 'writable_book':
         case 'written_book':
            data.unique = {
               pages: jx.ar(meta.spigot().pages).map(function (page) {
                  return jx.ar(page).map(jx.util.textComponent.to);
               }),
               title: meta.title,
               author: meta.author,
               generation: meta.generation
            };
            break;
         case 'filled_map':
            data.unique = meta.mapId;
            break;
         case 'firework_star':
            if (meta.effect) {
               data.unique = {
                  type: meta.effect.type.toString(),
                  colors: jx.ar(meta.effect.colors).map(function (color) {
                     return {
                        red: color.red,
                        green: color.green,
                        blue: color.blue
                     };
                  }),
                  fades: jx.ar(meta.effect.fadeColors).map(function (color) {
                     return {
                        red: color.red,
                        green: color.green,
                        blue: color.blue
                     };
                  }),
                  flicker: meta.effect.hasFlicker(),
                  trail: meta.effect.hasTrail()
               };
            }
            break;
         case 'spawner':
            // todo: add support for spawnData
            var state = meta.blockState;
            data.unique = {
               type: state.spawnedType.name().toLowerCase(),
               first: state.delay,
               nearby: state.maxNearbyEntities,
               max_next: state.maxSpawnDelay,
               min_next: state.minSpawnDelay,
               active_dist: state.requiredPlayerRange,
               count: state.spawnCount,
               range: state.spawnRange
            };
            break;
         case 'firework_rocket':
            data.unique = {
               power: meta.power,
               effects: jx.ar(meta.effects).map(function (effect) {
                  return {
                     type: effect.type.toString(),
                     colors: jx.ar(effect.colors).map(function (color) {
                        return {
                           red: color.red,
                           green: color.green,
                           blue: color.blue
                        };
                     }),
                     fades: jx.ar(effect.fadeColors).map(function (color) {
                        return {
                           red: color.red,
                           green: color.green,
                           blue: color.blue
                        };
                     }),
                     flicker: effect.hasFlicker(),
                     trail: effect.hasTrail()
                  };
               })
            };
            break;
         case 'player_head':
            data.unique = {
               owner: meta.owner,
               textures: []
            };
            if (meta.playerProfile) {
               jx.ar(meta.playerProfile.properties).forEach(function (entry) {
                  if (entry.name === 'textures') {
                     data.unique.textures.push(entry.value);
                  }
               });
            }
            if (!data.unique.textures.length) {
               data.unique.textures = null;
            }
            break;
      }
      if (_(stack).endsWith('banner')) {
         data.unique = {};
         jx.ar(meta.patterns).forEach(function (pattern, key) {
            data.unique[key] = { color: pattern.color.name(), shape: pattern.pattern.name() };
         });
      }
      if (meta.blockState && meta.blockState.inventory) {
         data.inventory = jx.storage.inventory.save(meta.blockState.inventory);
      }
      return data;
   },
   /**
    * convert a json-serializable object into an item stack
    * 
    * designed to accept the output of jx.storage.item.save as input data
    * @param {*} data the object to convert
    * @returns {*} the converted object
    * @example
    * // store a converted object in a variable
    * var item = jx.storage.item.load(data);
    */
   load: function (data) {
      var stack = jx.spawn.item(data.type, data.amount || 1);
      if (data.name) {
         $(stack).meta('displayName', data.name);
      }
      Object.keys(data.ench || {}).forEach(function (name) {
         $(stack).enchantment(name, data.ench[name]);
      });
      Object.keys(data.data || {}).forEach(function (key) {
         $(stack).data(key, data.data[key]);
      });
      (data.attr || []).forEach(function (modifier) {
         $(stack).attribute(modifier.name, modifier.amount, modifier.operation, modifier.slot);
      });
      (data.flag || []).forEach(function (flag) {
         $(stack).flag(flag);
      });
      var meta = stack.itemMeta;
      if (data.ubab) {
         meta.setUnbreakable(true);
      }
      if (data.lore) {
         meta.setLore(data.lore);
      }
      if (data.damage) {
         meta.setDamage(data.damage);
      }
      if (data.unique) {
         switch (data.type) {
            case 'enchanted_book':
               Object.keys(data.unique).forEach(function (key) {
                  meta.addStoredEnchant(jx.api.enchantment[key], data.unique[key], true);
               });
               break;
            case 'potion':
            case 'tipped_arrow':
               var pot = data.unique;
               var potionData = org.bukkit.potion.PotionData;
               meta.setBasePotionData(new potionData(pot.type, pot.extended, pot.upgraded));
               break;
            case 'writable_book':
            case 'written_book':
               if (data.unique.pages.length) {
                  meta.pages = (new Array(data.unique.pages.length).join('x.') + 'x').split('.');
                  data.unique.pages.forEach(function (page, index) {
                     var internal = meta.spigot().pages[index];
                     internal[0] = jx.util.textComponent.from({ text: '', extra: page });
                     meta.spigot().setPage(index + 1, internal);
                  });
               }
               if (data.unique.title != null) {
                  meta.setTitle(data.unique.title);
               }
               if (data.unique.author != null) {
                  meta.setAuthor(data.unique.author);
               }
               if (data.unique.generation != null) {
                  var generation = org.bukkit.inventory.meta.BookMeta.Generation;
                  meta.setGeneration(generation[data.unique.generation]);
               }
               break;
            case 'filled_map':
               meta.setMapId(data.unique);
               break;
            case 'spawner':
               // todo: add support for spawnData
               var state = meta.blockState;
               state.spawnedType = jx.api.entityType[data.unique.type];
               state.delay = data.unique.first;
               state.maxNearbyEntities = data.unique.nearby;
               state.maxSpawnDelay = data.unique.max_next;
               state.minSpawnDelay = data.unique.min_next;
               state.requiredPlayerRange = data.unique.active_dist;
               state.spawnCount = data.unique.count;
               state.spawnRange = data.unique.range;
               meta.blockState = state;
               break;
            case 'firework_rocket':
               meta.setPower(data.unique.power);
               data.unique.effects.forEach(function (fx) {
                  var effect = org.bukkit.FireworkEffect.builder();
                  effect.with(org.bukkit.FireworkEffect.Type[fx.type]);
                  fx.colors.forEach(function (color) {
                     var color = org.bukkit.Color;
                     effect.withColor(color.fromRGB(color.red, color.green, color.blue));
                  });
                  fx.fades.forEach(function (color) {
                     effect.withFade(org.bukkit.Color.fromRGB(color.red, color.green, color.blue));
                  });
                  if (fx.flicker) {
                     effect.flicker();
                  }
                  if (fx.trail) {
                     effect.trail();
                  }
                  meta.addEffect(effect.build());
               });
               break;
            case 'firework_star':
               var effect = org.bukkit.FireworkEffect.builder();
               effect.with(org.bukkit.FireworkEffect.Type[data.unique.type]);
               data.unique.colors.forEach(function (color) {
                  effect.withColor(org.bukkit.Color.fromRGB(color.red, color.green, color.blue));
               });
               data.unique.fades.forEach(function (color) {
                  effect.withFade(org.bukkit.Color.fromRGB(color.red, color.green, color.blue));
               });
               if (data.unique.flicker) {
                  effect.flicker();
               }
               if (data.unique.trail) {
                  effect.trail();
               }
               meta.setEffect(effect.build());
               break;
            case 'player_head':
               data.unique.forEach(function (texture) {});
               break;
         }
         if (data.type.endsWith('banner')) {
            Object.keys(data.unique).forEach(function (key) {
               var value = data.unique[key];
               var shape = value.shape ? org.bukkit.block.banner.PatternType[value.shape] : void 0;
               var pattern = org.bukkit.block.banner.Pattern;
               meta.addPattern(new pattern(org.bukkit.DyeColor[value.color], shape));
            });
         }
      }
      if (data.inventory) {
         var state = meta.blockState;
         jx.storage.inventory.load(state, data.inventory);
         meta.setBlockState(state);
      }
      stack.setItemMeta(meta);
      return stack;
   }
};
