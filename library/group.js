module.exports = function (name) {
   var groups = jx.data.server('group');
   var group = jx.util.auto(groups, name, {
      parents: {},
      permissions: {},
      players: {},
      properties: {}
   });
   var update = function () {
      jx.all(function (player) {
         var instance = player.instance;
         instance.effectivePermissions.forEach(function (info) {
            try {
               instance.removeAttachment(info.attachment);
            } catch (error) {}
         });
         var groups = jx.data.server('group');
         Object.keys(groups).forEach(function (name) {
            var group = groups[name];
            if (group.players[player.uuid]) {
               var perms = [];
               Object.keys(group.parents).forEach(function (name) {
                  if (group.parents[name]) {
                     var parent = groups[name];
                     Object.keys(parent.permissions).forEach(function (node) {
                        if (parent.permissions[node] != null) {
                           perms.push([ node, parent.permissions[node] ]);
                        }
                     });
                  }
               });
               Object.keys(group.permissions).forEach(function (node) {
                  if (group.permissions[node] != null) {
                     perms.push([ node, group.permissions[node] ]);
                  }
               });
               perms.forEach(function (perm) {
                  jx.permission(instance, perm[0], perm[1]);
               });
            }
         });
         var perm = player.data('permission');
         Object.keys(perm).forEach(function (key) {
            jx.permission(instance, key, perm[key]);
         });
      });
   };
   return {
      parent: function (name) {
         return {
            add: function () {
               group.parents[name] = true;
               update();
            },
            remove: function () {
               group.parents[name] = void 0;
               update();
            },
            state: function () {
               return group.parents[name];
            }
         };
      },
      permission: function (node) {
         return {
            allow: function () {
               group.permissions[node] = true;
               update();
            },
            deny: function () {
               group.permissions[node];
               update();
            },
            remove: function () {
               group.permissions[node] = void 0;
               update();
            },
            state: function () {
               return group.permissions[node];
            }
         };
      },
      player: function (player) {
         var uuid = jx.player(player).uuid;
         return {
            attach: function () {
               group.players[uuid] = true;
               update();
            },
            detach: function () {
               group.players[uuid] = void 0;
               update();
            },
            state: function () {
               return group.players[uuid];
            }
         };
      },
      property: function (key) {
         return {
            set: function (value) {
               group.properties[key] = value;
               update();
            },
            remove: function () {
               group.properties[key] = void 0;
               update();
            },
            state: function () {
               return group.properties[key];
            }
         };
      }
   };
};
