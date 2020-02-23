module.exports = function (subject) {
   var block = subject;
   var that = {
      get block () {
         return block;
      }
   };
   that.data = function (key, value) {
      var loc = block.location;
      var entries = jx.data.server('blocks', [ loc.world.name, loc.x, loc.y, loc.z ].join(':'));
      if (key) {
         if (value != null) {
            entries[key] = value;
            return that;
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
