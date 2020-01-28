module.exports = {
   break: function (listener) {
      jx.event.on('blockBreak', function (event) {
         listener(jx.player(event.player), event.block, event.player, event);
      });
   },
   chat: function (listener) {
      jx.event.on('asyncPlayerChat', function (event) {
         listener(jx.player(event.player), event.message, event.player, event);
      });
   },
   click: function (listener) {
      jx.event.on('inventoryClick', function (event) {
         if (!event.inventory || !event.inventory.hashCode) {
            return false;
         }
         listener(jx.player(event.whoClicked), event.inventory, event.whoClicked, event);
      });
   },
   close: function (listener) {
      jx.event.on('inventoryClose', function (event) {
         listener(jx.player(event.player), event.inventory, event.player, event);
      });
   },
   craft: function (listener) {
      jx.event.on('prepareItemCraft', function (event) {
         if (event.recipe && event.recipe.key) {
            listener(event.recipe.key.toString(), event.inventory.result, event.inventory, event);
         }
      });
   },
   command: function (listener) {
      jx.event.on('playerCommandPreprocess', function (event) {
         listener(jx.player(event.player), event.message, event.player, event);
      });
   },
   hunger: function (listener) {
      jx.event.on('foodLevelChange', function (event) {
         listener(jx.player(event.player), Number(event.level), event.player, event);
      });
   },
   join: function (listener) {
      jx.event.on('playerJoin', function (event) {
         listener(jx.player(event.player), event.player, event);
      });
   },
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
   mode: function (listener) {
      jx.event.on('playerGameModeChange', function (event) {
         var current = event.player.gameMode.toString();
         listener(jx.player(event.player), current, event.newGameMode.toString(), event.player, event);
      });
   },
   move: function (listener) {
      jx.event.on('playerMove', function (event) {
         listener(jx.player(event.player), event.player.location, event.player, event);
      });
   },
   open: function (listener) {
      jx.event.on('inventoryOpen', function (event) {
         listener(jx.player(event.player), event.inventory, event.player, event);
      });
   },
   place: function (listener) {
      jx.event.on('blockPlace', function (event) {
         listener(jx.player(event.player), event.block, event.player, event);
      });
   },
   quit: function (listener) {
      jx.event.on('playerQuit', function (event) {
         listener(jx.player(event.player), event.player, event);
      });
   },
   sleep: function (listener) {
      jx.event.on('playerBedEnter', function (event) {
         if (event.bedEnterResult.toString() === 'OK') {
            listener(jx.player(event.player), event.player, event);
         }
      });
   },
   teleport: function (listener) {
      jx.event.on('playerTeleport', function (event) {
         listener(event.cause.toString().toLowerCase(), jx.player(event.player), event.player, event);
      });
   },
   wake: function (listener) {
      jx.event.on('playerBedLeave', function (event) {
         listener(jx.player(event.player), event.player, event);
      });
   }
};
