/**
 * create an interactive GUI for players
 * @param {} player the target player
 * @param {number} rows the number of rows (1-6)
 * @param {string} title the title at the top of the GUI
 * @param {} items the clickable items in the GUI
 * @returns {undefined}
 * @example
 * // create an interface with 2 clickable items
 * // one attempts to teleport you to your bed via an event listener
 * // the other teleports you to spawn with a command
 * // 13 and 15 are the slot numbers
 * // slot numbers can be from zero to (rows * 9) - 1
 * jx.interface(player, 3, 'Got Respawns?', {
 *    13: {
 *       stack: $(jx.spawn.item('red_bed')).meta('displayName', 'Bed Spawn Location').item,
 *       event: 'respawn-bed'
 *    },
 *    15: {
 *       stack: $(jx.spawn.item('bedrock').meta('displayName', 'Server Spawn Location')).item,
 *       command: '/spawn'
 *    }
 * });
 * 
 * // event listener for the bed teleport option
 * jx.event.on('respawn-bed', function (player) {
 *    var instance = jx.player(player).instance;
 *    if (instance.bedSpawnLocation) {
 *       jx.text(player, '&3Teleporting...');
 *       instance.teleport(instance.bedSpawnLocation);
 *    } else {
 *       jx.text(player, '&cNo bed spawn set!');
 *    }
 * })
 */
module.exports = function (player, rows, title, items) {
   player = jx.player(player).instance;
   player.closeInventory();
   var inv = server.createInventory(player, Number(rows) * 9, title.toString());
   var data = jx.data.server('interface');
   var uuid = inv.hashCode().toString();
   data[uuid] = {};
   Object.keys(items).forEach(function (slot) {
      var item = items[slot];
      inv.setItem(slot, item.stack);
      data[uuid][slot] = { command: item.command, event: item.event };
   });
   player.openInventory(inv);
};

global.___init___.push(function (jx) {
   jx.data.store.server.interface = {};
   jx.event.player.click(function (player, inventory, instance, event) {
      var data = jx.data.server('interface');
      var hash = inventory.hashCode().toString();
      if (data[hash]) {
         event.setCancelled(true);
         var item = data[hash][event.slot];
         if (item.event) {
            jx.event.fire(item.event, instance);
         }
         if (item.command) {
            instance.chat(item.command);
         }
      }
   });
   jx.event.player.close(function (player, inventory) {
      var data = jx.data.server('interface');
      var hash = inventory.hashCode().toString();
      if (data[hash]) {
         data[hash] = void 0;
      }
   });
});
