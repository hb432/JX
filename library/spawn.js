module.exports = {
   /**
    * set the block at a location and return it
    * @param {} location the location of the block
    * @param {string} type the block type to set it to
    * @returns {}
    * @example
    * // set the block at 420x, 69y, 1337z to stone
    * jx.spawn.block({ world: 'world', x: 420, y: 69, z: 1337 }, 'stone');
    * 
    * // set the block below player location to netherrack
    * var location = jx.player(player).instance.location;
    * location.y -= 1;
    * jx.spawn.block(location, 'stone');
    */
   block: function (location, type) {
      return $(jx.util.loc(location).block).set(type).block;
   },
   /**
    * spawn an entity at a location
    * @param {} location the location to spawn the entity
    * @param {string} type the entity type
    * @returns {}
    * @example
    * // executed from chat, spawn zombie at sender location
    * jx.spawn.entity(self.location, 'zombie');
    */
   entity: function (location, type) {
      location = jx.util.loc(location);
      return location.world.spawnEntity(location, jx.api.entityType[type.toString()]);
   },
   /**
    * create a new item
    * @param {string} type the item type
    * @param {number} [amount=1] optional item amount (default: 1)
    * @returns {}
    * @example
    * // create 8 ender pearls
    * jx.spawn.item('ender_pearl', 8);
    */
   item: function (type, amount) {
      return new org.bukkit.inventory.ItemStack(jx.api.material[type.toString()], Number(amount) || 1);
   },
   /**
    * play a sound for a player
    * @param {} player the target player
    * @param {string} type the sound name
    * @param {{category:string,volume:number,pitch:number,location:object}} options
    * @returns {}
    * @example
    * // play the creeper ignite sound to player
    * jx.spawn.sound(player, 'entity.creeper.primed')
    * 
    * // a little melody, perhaps?
    * jx.util.multi(jx.spawn.sound, {
    *    0: [player, 'block.note.block.basedrum'],
    *    0: [player, 'block.note.block.bit', { pitch: 1 }],
    *    250: [player, 'block.note.block.bit', { pitch: 0.75 }],
    *    500: [player, 'block.note.block.basedrum'],
    *    500: [player, 'block.note.block.snare'],
    *    500: [player, 'block.note.block.bit', { pitch: 1 }],
    *    750: [player, 'block.note.block.bit', { pitch: 0.75 }],
    *    1000: [player, 'block.note.block.basedrum'],
    *    1000: [player, 'block.note.block.bit', { pitch: 1 }],
    *    1250: [player, 'block.note.block.bit', { pitch: 0.75 }],
    *    1500: [player, 'block.note.block.basedrum'],
    *    1500: [player, 'block.note.block.snare'],
    *    1500: [player, 'block.note.block.bit', { pitch: 1 }],
    *    1750: [player, 'block.note.block.bit', { pitch: 0.75 }]
    * });
    */
   sound: function (player, type, options) {
      options = options || {};
      player = jx.player(player).instance;
      var type = jx.api.sound[type.toString()];
      var category = jx.api.soundCategory[(options.category || 'master').toString()];
      var location = jx.util.loc(options.location || player.location);
      player.playSound(location, type, category, options.volume || 1, options.pitch || 1);
   }
};
