module.exports = {
   /**
    * @callback jx_event_player_break
    * @param {*} [player] the player that broke the block
    * @param {*} [block] the block broken
    * @param {*} [instance] the instance of the relevant player
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player breaks a block
    * @param {jx_event_player_break} listener the script to execute
    * @example
    * // prevent diamond ore from dropping diamonds without fortune
    * jx.event.player.break(function (player, block, instance, event) {
    *    if (_(block) === 'diamond_ore' && !$(instance.itemInHand).enchantment('fortune')) {
    *       event.setCancelled(true);
    *    }
    * });
    */
   break: function (listener) {
      jx.event.on('blockBreak', function (event) {
         listener(jx.player(event.player), event.block, event.player, event);
      });
   },
   /**
    * @callback jx_event_player_chat
    * @param {*} [player] the player that sent the message
    * @param {string} [message] the message sent
    * @param {*} [instance] the instance of the relevant player
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player sends a chat message
    * @param {jx_event_player_chat} listener the script to execute
    * @example
    * // play a sound when someone else mentions your username in chat
    * jx.event.player.chat(function (player, message, instance, event) {
    *    jx.all(function (target) {
    *       if (message.contains(target.name)) jx.spawn.sound(target, 'block.note.block.pling');
    *    }, player);
    * });
    */
   chat: function (listener) {
      jx.event.on('asyncPlayerChat', function (event) {
         listener(jx.player(event.player), event.message, event.player, event);
      });
   },
   /**
    * @callback jx_event_player_click
    * @param {*} [player] the player that clicked the inventory
    * @param {*} [inventory] the inventory clicked
    * @param {*} [instance] the instance of the relevant player
    * @param {*} [item] the item in the targeted slot
    * @param {*} [cursor] the item on the relevant player's cursor
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player clicks an inventory slot
    * @param {jx_event_player_click} listener the script to execute
    * @example
    * // explode the player when TNT is clicked in an inventory
    * jx.event.player.click(function (player, inventory, instance, item, cursor, event) {
    *    if (_(item) === 'tnt') {
    *       instance.location.world.createExplosion(instance.location, 5);
    *    }
    * });
    */
   click: function (listener) {
      jx.event.on('inventoryClick', function (event) {
         if (!event.inventory || !event.inventory.hashCode) {
            return false;
         }
         var e = event;
         listener(jx.player(e.whoClicked), e.inventory, e.whoClicked, e.currentItem, e.cursor, e);
      });
   },
   /**
    * @callback jx_event_player_close
    * @param {*} [player] the player that clicked the inventory
    * @param {*} [inventory] the inventory clicked
    * @param {*} [instance] the instance of the relevant player
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player closes an inventory
    * @param {jx_event_player_close} listener the script to execute
    * @example
    * // log 'hello world' if a player closes an inventory when above Y=200
    * jx.event.player.close(function (player, inventory, instance, event) {
    *    if (instance.location.y > 200) console.log('hello world');
    * });
    */
   close: function (listener) {
      jx.event.on('inventoryClose', function (event) {
         listener(jx.player(event.player), event.inventory, event.player, event);
      });
   },
   /**
    * @callback jx_event_player_craft
    * @param {*} [player] the player who formed the recipe
    * @param {string} [recipe] the recipe formed
    * @param {*} [result] the item to be crafted
    * @param {*} [inventory] the relevant crafting inventory
    * @param {*} [instance] the relevant player's instance
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player forms a recipe in a crafting inventory
    * @param {jx_event_player_craft} listener the script to execute
    * @example
    * // make crafted diamond swords unbreakable
    * jx.event.player.craft(function (player, recipe, result, inventory, event) {
    *    if (recipe === 'minecraft:diamond_sword') {
    *       event.setResult($(result).meta('unbreakable', true).item);
    *    }
    * });
    */
   craft: function (listener) {
      jx.event.on('prepareItemCraft', function (event) {
         var e = event;
         var p = jx.player(e.view.player);
         var r = e.recipe ? (e.recipe.key ? e.recipe.key.toString() : null) : null;
         listener(p, r, e.inventory.result, e.inventory, p.instance, e);
      });
   },
   /**
    * @callback jx_event_player_command
    * @param {*} [player] the player that sent the command
    * @param {string} [command] the command sent
    * @param {*} [instance] the instance of the relevant player
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player sends a command
    * @param {jx_event_player_command} listener the script to execute
    * @example
    * // store all commands sent by players in server data
    * jx.event.player.command(function (player, command, instance, event) {
    *    var log = jx.util.auto(jx.data.server(), 'command-log', []);
    *    log.push({ player: player.name, command: command });
    * });
    */
   command: function (listener) {
      jx.event.on('playerCommandPreprocess', function (event) {
         listener(jx.player(event.player), event.message, event.player, event);
      });
   },
   /**
    * @callback jx_event_player_hunger
    * @param {*} [player] the player whose food level changed
    * @param {number} [level] the updated food level
    * @param {*} [instance] the instance of the relevant player
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player's food level changes
    * @param {jx_event_player_hunger} listener the script to execute
    * @example
    * // disable the hunger system
    * jx.event.player.hunger(function (player, level, instance, event) {
    *    if (level < 20) event.setCancelled(true);
    * });
    */
   hunger: function (listener) {
      jx.event.on('foodLevelChange', function (event) {
         listener(jx.player(event.player), Number(event.level), event.player, event);
      });
   },
   /**
    * @callback jx_event_player_join
    * @param {*} [player] the player who joined the server
    * @param {*} [instance] the instance of the relevant player
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player joins the server
    * @param {jx_event_player_join} listener the script to execute
    * @example
    * // disable join messages for opped players
    * jx.event.player.join(function (player, instance, event) {
    *    if (instance.op) event.setJoinMessage(null);
    * });
    */
   join: function (listener) {
      jx.event.on('playerJoin', function (event) {
         listener(jx.player(event.player), event.player, event);
      });
   },
   /**
    * @callback jx_event_player_interact
    * @param {'block'|'entity'|'none'} [type] the interaction type
    * @param {*} [player] the player who interacted
    * @param {*} [target] the clicked block or entity if applicable
    * @param {*} [instance] the instance of the relevant player
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player interacts with something
    * @param {jx_event_player_interact} listener the script to execute
    * @example
    * // prevent players from modifying item frames
    * jx.event.player.join(function (type, player, target, instance, event) {
    *    if (type === 'block' && _(target) === 'item_frame') event.setCancelled(true);
    * });
    */
   interact: function (listener) {
      jx.event.on('playerInteract', function (event) {
         if (event.clickedBlock) {
            listener('block', jx.player(event.player), event.clickedBlock, event.player, event);
         }
         listener('none', jx.player(event.player), null, event.player, event);
      });
      jx.event.on('playerInteractEntity', function (event) {
         listener('entity', jx.player(event.player), event.clickedEntity, event.player, event);
      });
   },
   /**
    * @callback jx_event_player_mode
    * @param {*} [player] the player whose gamemode changed
    * @param {'ADVENTURE'|'CREATIVE'|'SPECTATOR'|'SURVIVAL'} [to] the gamemode being changed to
    * @param {*} [instance] the instance of the relevant player
    * @param {'ADVENTURE'|'CREATIVE'|'SPECTATOR'|'SURVIVAL'} [from] the gamemode being changed from
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player's gamemode changes
    * @param {jx_event_player_mode} listener the script to execute
    * @example
    * // per-gamemode inventory
    * jx.event.player.mode(function (player, to, instance, from, event) {
    *    var data = jx.data.server('per-mode-inv');
    *    data[from] = jx.storage.inventory.save(instance.inventory);
    *    jx.storage.inventory.load(instance, data[to] || {});
    * });
    */
   mode: function (listener) {
      jx.event.on('playerGameModeChange', function (event) {
         var from = event.player.gameMode.toString();
         var to = event.newGameMode.toString();
         listener(jx.player(event.player), to, event.player, from, event);
      });
   },
   /**
    * @callback jx_event_player_move
    * @param {*} [player] the player who moved
    * @param {*} [location] the location being moved to
    * @param {*} [instance] the instance of the relevant player
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player moves or turns their head
    * @param {jx_event_player_move} listener the script to execute
    * @example
    * // lock a player's movement if they look straight down
    * jx.event.player.move(function (player, location, instance, event) {
    *    var data = player.data('movement');
    *    if (data.locked === true) event.setCancelled(true);
    *    if (location.pitch === 90) data.locked = true;
    * });
    */
   move: function (listener) {
      jx.event.on('playerMove', function (event) {
         listener(jx.player(event.player), event.player.location, event.player, event);
      });
   },
   /**
    * @callback jx_event_player_open
    * @param {*} [player] the player who opened the inventory
    * @param {*} [inventory] the inventory being opened
    * @param {*} [instance] the instance of the relevant player
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player opens an inventory
    * @param {jx_event_player_open} listener the script to execute
    * @example
    * // spook the player if they open a trapped chest
    * jx.event.player.open(function (player, inventory, instance, event) {
    *    if (_(inventory.holder.block) === 'trapped_chest') {
    *       jx.spawn.sound(player, 'entity.creeper.primed');
    *    }
    * });
    */
   open: function (listener) {
      jx.event.on('inventoryOpen', function (event) {
         listener(jx.player(event.player), event.inventory, event.player, event);
      });
   },
   /**
    * @callback jx_event_player_place
    * @param {*} [player] the player that placed the block
    * @param {*} [block] the block placed
    * @param {*} [instance] the instance of the relevant player
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player places a block
    * @param {jx_event_player_place} listener the script to execute
    * @example
    * // prevent players not in creative from placing bedrock
    * jx.event.player.place(function (player, block, instance, event) {
    *    if (player.gameMode.toString() !== 'CREATIVE' && _(block) === 'bedrock') {
    *       event.setCancelled(true);
    *    }
    * });
    */
   place: function (listener) {
      jx.event.on('blockPlace', function (event) {
         listener(jx.player(event.player), event.block, event.player, event);
      });
   },
   /**
    * @callback jx_event_player_quit
    * @param {*} [player] the player who left the server
    * @param {*} [instance] the instance of the relevant player
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player leaves the server
    * @param {jx_event_player_quit} listener the script to execute
    * @example
    * // disable quit messages for opped players
    * jx.event.player.quit(function (player, instance, event) {
    *    if (instance.op) event.setQuitMessage(null);
    * });
    */
   quit: function (listener) {
      jx.event.on('playerQuit', function (event) {
         listener(jx.player(event.player), event.player, event);
      });
   },
   /**
    * @callback jx_event_player_sleep
    * @param {*} [player] the player who laid down
    * @param {*} [instance] the instance of the relevant player
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player lays down in a bed
    * @param {jx_event_player_sleep} listener 
    * @example
    * // skip the night when one player lays down
    * jx.event.player.sleep(function (player, instance, event) {
    *    server.getWorld('world').setTime(0);
    * });
    */
   sleep: function (listener) {
      jx.event.on('playerBedEnter', function (event) {
         if (event.bedEnterResult.toString() === 'OK') {
            listener(jx.player(event.player), event.player, event);
         }
      });
   },
   /**
    * @callback jx_event_player_teleport
    * @param {'chorus_fruit'|'command'|'end_gateway'|'end_portal'|'ender_pearl'|'nether_portal'|'plugin'|'spectate'|'unknown'} [cause] the teleport cause
    * @param {*} [player] the player who teleported
    * @param {*} [instance] the instance of the relevant player
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player teleports
    * @param {jx_event_player_teleport} listener 
    * @example
    * // disable spectator menu teleportation
    * jx.event.player.teleport(function (cause, player, instance, event) {
    *    if (cause === 'spectate') event.setCancelled(true);
    * });
    */
   teleport: function (listener) {
      jx.event.on('playerTeleport', function (event) {
         var cause = event.cause.toString().toLowerCase();
         listener(cause, jx.player(event.player), event.player, event);
      });
   },
   /**
    * @callback jx_event_player_wake
    * @param {*} [player] the player who stopped laying down
    * @param {*} [instance] the instance of the relevant player
    * @param {*} [event] the event data
    */
   /**
    * execute a script when a player stops laying down in a bed
    * @param {jx_event_player_wake} listener 
    * @example
    * // send 'hello world' to the console when a player wakes up
    * jx.event.player.wake(function (player, instance, event) {
    *    console.log('hello world');
    * });
    */
   wake: function (listener) {
      jx.event.on('playerBedLeave', function (event) {
         listener(jx.player(event.player), event.player, event);
      });
   }
};
