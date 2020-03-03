module.exports = function (subject) {
   var block = subject;
   var that = {
      get block () {
         return block;
      },
      get instance () {
         return block;
      }
   };
   that.data = function (key, value) {
      var meta = block.state;
      var type = org.bukkit.persistence.PersistentDataType.STRING;
      var container = meta.persistentDataContainer;
      var set = null;
      if (container) {
         set = container.raw.entrySet();
      } else {
         // dirty data storage, need a cleaner method
         var path = [ loc.world.name, loc.chunk.x + ':' + loc.chunk.z, loc.y, loc.x + ':' + loc.z ];
         container = {
            set: function (key, type, value) {
               jx.util.traverse(persist('jx-block-data'), path)[key.key] = value;
            }
         };
         var loc = block.location;
         set = jx.util.traverse(persist('jx-block-data'), path);
      }
      var entries = {};
      jx.ar(set).forEach(function (entry) {
         var decoded = decodeURIComponent((entry.value + '').slice(1, -1));
         if (entry.key.startsWith('jx:')) entries[entry.key.slice(3)] = decoded;
      });
      if (key) {
         if (value != null) {
            value = encodeURIComponent(value + '');
            container.set(new org.bukkit.NamespacedKey('jx', key), type, value);
            meta.update(true);
         } else {
            return entries[key];
         }
      } else {
         return entries;
      }
   };
   that.mod = function (options) {
      if (options.data) {
         Object.keys(options.data).forEach(function (key) {
            that.data(key, options.data[key]);
         });
      }
      return that;
   };
   return that;
};
