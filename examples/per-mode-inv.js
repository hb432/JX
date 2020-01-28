// import module
var jx = require('./../index');
// listen for mode change
jx.event.player.mode(function (player, from, to, instance) {
   // get stored data
   var data = player.data('per-mode-inv');
   // store current gamemode inventory
   data[from] = jx.storage.inventory.save(instance.inventory);
   // check if new gamemode has inventory data
   if (data[to]) {
      // load new gamemode inventory
      jx.storage.inventory.load(instance, data[to]);
   } else {
      // clear inventory
      instance.inventory.clear();
   }
});
