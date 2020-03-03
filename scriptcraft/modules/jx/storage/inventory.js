module.exports = {
   /**
    * store the contents of an inventory in a json-serializable object
    * @param {*} inventory the inventory to store
    * @returns {*} the stored inventory
    * @example
    * // store a player's inventory in a variable
    * var inventory = jx.storage.inventory.save(player);
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
    * load the contents of a stored inventory into an inventory holder
    * 
    * designed to accept the output of jx.storage.inventory.save as input data
    * @param {{
    *    inventory: *
    * }} holder the inventory holder to modify
    * @param {*} data the stored inventory to load
    * @example
    * // replace a player's inventory with a stored inventory
    * jx.storage.inventory.load(player, inventory);
    */
   load: function (holder, data) {
      if (holder.inventory.clear) holder.inventory.clear();
      Object.keys(data).forEach(function (key) {
         holder.inventory.setItem(key, jx.storage.item.load(data[key]));
      });
   },
   /**
    * display the contents of a stored inventory for a player
    * 
    * designed to accept the output of jx.storage.inventory.save as input data
    * @param {*} player the player to display the inventory to
    * @param {*} data the stored inventory to display
    * @param {*} [title] the inventory title
    * @example
    * // display a stored inventory for a player
    * jx.storage.inventory.open(player, data, 'stored inventory');
    */
   open: function (player, data, title, rows) {
      var instance = jx.player(player).instance;
      var inv = server.createInventory(instance, rows || 6 * 9, title);
      jx.storage.inventory.load({ inventory: inv }, data);
      instance.openInventory(inv);
   }
};
