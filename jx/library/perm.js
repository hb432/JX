/**
 * grant, revoke, or remove permission nodes to and from the player
 * 
 * these permission nodes will persist across restarts, reloads, etc.
 * @param {} player the target player
 * @param {string} permission the permission to modify
 * @param {boolean|null} value the permission value
 * @returns {undefined}
 * @example
 * // grant access to jx.command.sudo
 * jx.perm(player, 'jx.command.sudo', true)
 * 
 * // deny access to worldedit.*
 * jx.perm(player, 'worldedit.*', false)
 * 
 * // use server/plugin default for essentials.tpa
 * jx.perm(player, 'essentials.tpa', null)
 */
module.exports = function (target, permission, value) {
   var player = jx.player(target).instance;
   switch (value) {
      case null:
         player.effectivePermissions.forEach(function (info) {
            if (info.permission === permission) {
               player.removeAttachment(info.attachment);
            }
         });
         break;
      case true:
      case false:
         var plugin = server.pluginManager.getPlugin('scriptcraft');
         player.addAttachment(plugin, permission, value);
         break;
   }
   jx.data.player(player, 'perm')[permission] = value;
};

global.___init___.push(function (jx) {
   jx.event.player.join(function (player, instance) {
      var perm = player.data('perm');
      Object.keys(perm).forEach(function (key) {
         jx.perm(instance, key, perm[key]);
      });
   });
});
