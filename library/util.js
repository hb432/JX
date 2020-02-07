module.exports = {
   /**
    * checks if an object has a specific entry, if not, sets it to a default value, then returns the entry
    * 
    * alternatively, key arg can be an object with keys and placeholder values
    * @param {*} object the object to check
    * @param {*} key the key to set and/or return
    * @param {*} placeholder the value to set if the existing value is undefined
    * @returns if key arg is string, return value of setted property, else return context object
    */
   auto: function (object, key, placeholder) {
      if (jx.ty(key) === 'string') {
         return object[key] !== void 0 ? object[key] : (object[key] = placeholder);
      } else {
         Object.keys(key).forEach(function (entry) {
            jx.util.auto(object, entry, key[entry]);
         });
         return object;
      }
   },
   /**
    * converts a space-seperated string to camel case
    * @param {string} text the string to convert
    * @returns {string} the converted text
    */
   camel: function (text) {
      var pascal = jx.util.pascal(text);
      return pascal[0].toLowerCase() + pascal.slice(1);
   },
   /**
    * this is better explained by looking at the source code...
    * 
    * checks each superclass of the input class for a matching string
    * @param {*} subject the class to check
    * @param {string} filter the filter string
    * @returns {boolean} true if match was found, false if no match was found
    */
   class: function (subject, filter) {
      if (!subject.interfaces) {
         return false;
      }
      var match = false;
      while (subject.interfaces.length && match === false) {
         if (subject.name.contains(filter)) {
            var match = true;
         } else {
            subject = subject.interfaces[0];
         }
      }
      return match;
   },
   /**
    * return the closest non-player entity to a command sender (player, command block, console)
    * @param {*} sender the command sender
    * @returns {*} the non-player entity if one was found
    */
   close: function (sender) {
      return jx.query('@e[sort=nearest,type=!player]', sender)[0];
   },
   /**
    * return the distance between 2 locations, ignoring the Y axis
    * 
    * @param {*} loc1 the first location
    * @param {*} loc2 the second location
    * @returns {number} the calculated distance (infinity if locations are in seperate dimensions)
    */
   dist2: function (loc1, loc2) {
      loc1.y = 0;
      loc2.y = 0;
      return jx.util.dist3(loc1, loc2);
   },
   /**
    * return the distance between 2 locations
    * 
    * @param {*} loc1 the first location
    * @param {*} loc2 the second location
    * @returns {number} the calculated distance (infinity if locations are in seperate dimensions)
    */
   dist3: function (loc1, loc2) {
      loc1 = jx.util.loc(loc1);
      loc2 = jx.util.loc(loc2);
      if (loc1.world.name !== loc2.world.name) {
         return Infinity;
      }
      var deltaX = loc1.x - loc2.x;
      var deltaY = loc1.y - loc2.y;
      var deltaZ = loc1.z - loc2.z;
      return Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
   },
   /**
    * returns the integer for roman numerals I-X
    * @param {string} roman the roman numeral to convert
    * @returns {number} the corresponging integer
    */
   integer: function (roman) {
      roman = roman.toString().toLowerCase();
      var options = {
         i: 1,
         ii: 2,
         iii: 3,
         iv: 4,
         v: 5,
         vi: 6,
         vii: 7,
         viii: 8,
         ix: 9,
         x: 10
      };
      return options[roman] || null;
   },
   /**
    * converts a server location into an object
    * 
    * if input is not a server location, return input as-is
    * @param {*} loc the server location to convert
    * @returns {*} the object
    */
   json: function (loc) {
      loc = loc || (self && self.location) || server.worlds.get(0).spawnLocation;
      if (!loc.world.name) {
         return loc;
      }
      return {
         world: loc.world.name,
         x: loc.x,
         y: loc.y,
         z: loc.z,
         yaw: loc.yaw,
         pitch: loc.pitch
      };
   },
   /**
    * converts an object into a server location
    * 
    * if input is a server location, return input as-is
    * @param {*} json the object to convert
    * @returns {*} the server location
    */
   loc: function (json) {
      json = json || (self && self.location) || server.worlds.get(0).spawnLocation;
      if (json.world.name) {
         return json;
      }
      var world = server.getWorld(json.world || 'world');
      return new org.bukkit.Location(world, json.x, json.y, json.z, json.yaw || 0, json.pitch || 0);
   },
   /**
    * generates formatted lore from text
    * @param {string[]} text the raw text data
    * @param {*} [prefix] optional prefix for each line
    * @param {*} [newline] prefix for input text array elements
    * @returns {string[]} the generated lore
    */
   lore: function (text, prefix, newline) {
      var segments = text.join(' \n').split(' ');
      var lore = [ jx.color((newline || '') + segments[0]) ];
      segments = segments.slice(1);
      var index = 0;
      segments.forEach(function (substr) {
         var colors = jx.color(substr).split(jx.color('&')).length - 1;
         if (substr.startsWith('\n') || lore[index].length + substr.length - colors * 2 > 32) {
            lore[++index] = jx.color(substr.replace('\n', newline || ''));
         } else {
            lore[index] = lore[index] + ' ' + substr;
         }
      });
      return prefix
         ? lore.map(function (text) {
              return jx.color(prefix + text);
           })
         : lore;
   },
   /**
    * converts a space-seperated string to pascal case
    * @param {string} text the string to convert
    * @returns {string} the converted text
    */
   pascal: function (text) {
      var array = text.toString().split(' ').map(function (chunk) {
         return chunk[0].toUpperCase() + chunk.slice(1);
      });
      return array.join('');
   },
   /**
    * returns the roman numeral for integers 1-10
    * @param {number} integer the number to convert
    * @returns {string} the corresponging roman numeral
    */
   roman: function (integer) {
      integer = Number(integer);
      if (integer > 10 || integer < 0) {
         return null;
      } else {
         return [ null, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X' ][integer];
      }
   },
   /**
    * this is better explained by looking at the source code...
    * 
    * for each node provided, auto-fill undefined contexts along the data path
    * @param {*} context the inital context
    * @param {*} nodes the nodes to auto-fill
    * @returns {*} the final context
    */
   traverse: function (context, nodes) {
      jx.ar(nodes).forEach(function (node) {
         context = jx.util.auto(context, node, {});
      });
      return context;
   }
};
