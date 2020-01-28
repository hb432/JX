module.exports = {
   auto: function (object, key, placeholder) {
      return object[key] || (object[key] = placeholder);
   },
   camel: function (text) {
      var pascal = jx.util.pascal(text);
      return pascal[0].toLowerCase() + pascal.slice(1);
   },
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
   close: function (player) {
      return jx.query('@e[sort=nearest,limit=2]', player)[1];
   },
   dist2: function (loc1, loc2) {
      loc1.y = 0;
      loc2.y = 0;
      return jx.util.dist3(loc1, loc2);
   },
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
   json: function (loc) {
      if (!loc.world.name) {
         return loc;
      }
      return { world: loc.world.name, x: loc.x, y: loc.y, z: loc.z, yaw: loc.yaw, pitch: loc.pitch };
   },
   loc: function (json) {
      if (json.world.name) {
         return json;
      }
      var world = server.getWorld(json.world || 'world');
      return new org.bukkit.Location(world, json.x, json.y, json.z, json.yaw || 0, json.pitch || 0);
   },
   merge: function (base) {
      jx.ar(arguments).forEach(function (object) {
         Object.keys(object).forEach(function (key) {
            base[key] = object[key];
         });
      });
   },
   multi: function (script, calls) {
      Object.keys(calls).forEach(function (key) {
         setTimeout(function () {
            script.apply(null, calls[key]);
         }, key);
      });
   },
   pascal: function (text) {
      var array = text.toString().split(' ').map(function (chunk) {
         return chunk[0].toUpperCase() + chunk.slice(1);
      });
      return array.join('');
   },
   roman: function (integer) {
      integer = Number(integer);
      if (integer > 10 || integer < 0) {
         return null;
      } else {
         return [ null, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X' ][integer];
      }
   },
   traverse: function (context, nodes) {
      jx.ar(nodes).forEach(function (node) {
         context = jx.util.auto(context, node, {});
      });
      return context;
   }
};
