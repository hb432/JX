/**
 * functions for group-based permission management
 * @param {string} name the group to access
 * @returns {{
 *    parent: group$parent,
 *    permission: group$permission,
 *    player: group$player,
 *    property: group$property,
 * }}
 */
module.exports = function (name) {
   var groups = jx.data.server('group');
   var group = jx.util.auto(groups, name, {
      parents: {},
      permissions: {},
      players: {},
      properties: {}
   });
   return {
      /**
         * @callback group$parent$add
         * enable inheritance of permissions from the target group to this group
         */
      /**
         * @callback group$parent$remove
         * disable inheritance of permissions from the target group to this group
         */
      /**
         * @callback group$parent$state
         * return the inheritance state of the target group in relation to this group
         */
      /**
         * @callback group$parent
         * access the inheritance state of a target group in relation to this group
         * @param {string} name the target group
         * @returns {{
         *    add: group$parent$add,
         *    remove: group$parent$remove,
         *    state: group$parent$state
         * }}
         */
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
      /**
         * @callback group$permission$allow
         * grant the permission to members of this group
         */
      /**
         * @callback group$permission$deny
         * revoke the permission from members of this group
         */
      /**
         * @callback group$permission$remove
         * reset the permission in relation to members of this group
         */
      /**
         * @callback group$permission$state
         * return the state of the permission in relation to this group
         */
      /**
         * @callback group$permission
         * access the state of a permission for this group
         * @param {string} name the permission node
         * @returns {{
         *    allow: group$permission$allow,
         *    deny: group$permission$deny,
         *    remove: group$permission$remove,
         *    state: group$permission$state
         * }}
         */
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
      /**
         * @callback group$player$attach
         * attach the player to this group
         */
      /**
         * @callback group$player$detach
         * detach the player from this group
         */
      /**
         * @callback group$player$state
         * return the attachment state of the player in relation to this group
         */
      /**
         * @callback group$player
         * access the player's attachment state in relation to this group
         * @param {*} player the player
         * @returns {{
         *    attach: group$player$attach,
         *    detach: group$player$detach,
         *    state: group$player$state
         * }}
         */
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
      /**
         * @callback group$property$set
         * set the value of the property
         * @param {*} value the value to set
         */
      /**
         * @callback group$property$state
         * return the value of the property
         */
      /**
         * @callback group$property
         * access a property in relation to this group
         * @param {*} player the player
         * @returns {{
         *    set: group$property$set,
         *    state: group$property$state
         * }}
         */
      property: function (key) {
         return {
            set: function (value) {
               group.properties[key] = value;
            },
            state: function () {
               return group.properties[key];
            }
         };
      }
   };
};

var update = (module.exports.update = function () {
   jx.all(function (player) {
      var instance = player.instance;
      instance.effectivePermissions.forEach(function (info) {
         if (info.attachment) {
            instance.removeAttachment(info.attachment);
         }
      });
      var groups = jx.data.server('group');
      Object.keys(groups).forEach(function (name) {
         var group = groups[name];
         if (group.players[player.uuid]) {
            var perms = [];
            Object.keys(group.parents).forEach(function (name) {
               if (group.parents[name]) {
                  var parent = groups[name];
                  Object.keys(parent.permissions).sort().forEach(function (node) {
                     if (parent.permissions[node] != null) {
                        perms.push([ node, parent.permissions[node] ]);
                     }
                  });
               }
            });
            Object.keys(group.permissions).sort().forEach(function (node) {
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
});
