module.exports = {
   /**
    * converts an inventory to a json-serializable object
    * @param {} inventory
    * @returns {object}
    * @example
    * // save a chest's inventory
    * var inventory = jx.storage.inventory.save(chest.blockState.inventory);
    */
   save: function (inventory) {
      var output = {};
      jx.ar(inventory).forEach(function (item, slot) {
         if (item !== null) {
            output[slot] = jx.storage.item.save(item);
         }
      });
      return output;
   },
   /**
    * converts the output of jx.storage.inventory.save to an Inventory
    * @param {} holder
    * @param {} data
    * @returns {object}
    * @example
    * // load a previously saved inventory into a chest block
    * jx.storage.inventory.load(chest, inventory);
    */
   load: function (holder, data) {
      holder.inventory.clear();
      Object.keys(data).forEach(function (key) {
         holder.inventory.setItem(key, jx.storage.item.load(data[key]));
      });
   },
   /**
    * displays a stored inventory for a specific player
    * @param {} player
    * @param {} data
    * @param {string} title
    * @returns {object}
    * @example
    * // display an inventory, perhaps a player vault
    * jx.storage.inventory.open(player, inventory, 'Your Vault');
    */
   open: function (player, data, title) {
      var instance = jx.player(player).instance;
      var inv = server.createInventory(instance, 6 * 9, title);
      jx.storage.inventory.load({ inventory: inv }, data);
      instance.openInventory(inv);
   }
};
