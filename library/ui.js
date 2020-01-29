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
   jx.event.player.click(function (x, inventory, instance, event) {
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
   jx.event.player.close(function (x, inventory) {
      var data = jx.data.server('interface');
      var hash = inventory.hashCode().toString();
      if (data[hash]) {
         data[hash] = void 0;
      }
   });
});
