// intellisense
var jx = require('../modules/jx');

// script
setTimeout(function () {
   jx.event.player.command(function (player, command, instance, event) {
      var name = command.split(' ')[0];
      var args = command.split(' ').slice(1);
      var pass = true;
      switch (name) {
         case 'group':
            var groups = jx.data.server('group');
            switch (args[0]) {
               case 'create':
                  if (!args[1]) return player.text('&3/group create &6<group>');
                  if (groups[args[1]]) return player.text('&cThat &4group &calready exists!');
                  jx.group(args[1]);
                  player.text('&aGroup created.');
                  break;
               case 'delete':
                  if (!args[1]) return player.text('&3/group delete &6<group>');
                  if (!groups[args[1]]) return player.text('&cThat &4group &cdoes not exist!');
                  groups[args[1]] = void 0;
                  player.text('&aGroup deleted.');
                  break;
               case 'list':
                  var output = [];
                  Object.keys(groups).forEach(function (key) {
                     if (groups[key] !== void 0) output.push(key);
                  });
                  if (!output.length) return player.text('&cThere are no existing groups!');
                  player.text('&fGroups:\n');
                  player.text('&f&m                                                            ');
                  output.forEach(function (group) {
                     player.text(jx.color('&7-> &8') + group, null, false);
                  });
                  player.text('&f&m                                                            ');
                  break;
               case 'parent':
                  switch (args[1]) {
                     case 'add':
                        if (!args[3]) return player.text('&3/group parent add &6<group> <parent>');
                        if (!groups[args[2]]) return player.text('&cThat &4group &cdoes not exist!');
                        if (!groups[args[3]]) return player.text('&cThat &4parent &cdoes not exist!');
                        if (jx.group(args[2]).parent(args[3]).state() === true) {
                           return player.text('&cThat &4parent &chas already been added!');
                        }
                        jx.group(args[2]).parent(args[3]).add();
                        player.text('&aParent added.');
                        break;
                     case 'remove':
                        if (!args[3]) return player.text('&3/group parent remove &6<group> <parent>');
                        if (!groups[args[2]]) return player.text('&cThat &4group &cdoes not exist!');
                        if (!groups[args[3]]) return player.text('&cThat &4parent &cdoes not exist!');
                        if (jx.group(args[2]).parent(args[3]).state() === void 0) {
                           return player.text('&cThat &4parent &chas not been added!');
                        }
                        jx.group(args[2]).parent(args[3]).remove();
                        player.text('&aParent removed.');
                        break;
                     case 'list':
                        if (!args[2]) return player.text('&3/group parent list &6<group>');
                        if (!groups[args[2]]) return player.text('&cThat &4group &cdoes not exist!');
                        var parents = groups[args[2]].parents;
                        var output = [];
                        Object.keys(parents).forEach(function (key) {
                           if (parents[key] !== void 0) output.push(key);
                        });
                        if (!output.length) return player.text('&cThat &4group &chas no parents!');
                        player.text('&fParents:\n');
                        output.forEach(function (parent) {
                           player.text(jx.color('&7-> &8') + parent, null, false);
                        });
                        break;
                     default:
                        player.text('&fCommands:');
                        player.text('&f&m                                                            ');
                        player.text('&7-> &3/group parent add');
                        player.text('&7-> &3/group parent remove');
                        player.text('&7-> &3/group parent list');
                        player.text('&f&m                                                            ');
                  }
                  break;
               case 'permission':
                  switch (args[1]) {
                     case 'allow':
                        if (!args[3]) return player.text('&3/group permission allow &6<group> <permission>');
                        if (!groups[args[2]]) return player.text('&cThat &4group &cdoes not exist!');
                        if (jx.group(args[2]).permission(args[3]).state() === true) {
                           return player.text('&cThat &4permission &chas already been allowed!');
                        }
                        jx.group(args[2]).permission(args[3]).allow();
                        player.text('&aPermission allowed.');
                        break;
                     case 'deny':
                        if (!args[3]) return player.text('&3/group permission deny &6<group> <permission>');
                        if (!groups[args[2]]) return player.text('&cThat &4group &cdoes not exist!');
                        if (jx.group(args[2]).permission(args[3]).state() === false) {
                           return player.text('&cThat &4permission &chas already been denied!');
                        }
                        jx.group(args[2]).permission(args[3]).deny();
                        player.text('&aPermission denied.');
                        break;
                     case 'remove':
                        if (!args[3]) return player.text('&3/group permission remove &6<group> <permission>');
                        if (!groups[args[2]]) return player.text('&cThat &4group &cdoes not exist!');
                        if (jx.group(args[2]).permission(args[3]).state() === void 0) {
                           return player.text('&cThat &4permission &chas not been added!');
                        }
                        jx.group(args[2]).permission(args[3]).remove();
                        player.text('&aPermission removed.');
                        break;
                     case 'list':
                        if (!args[2]) return player.text('&3/group permission list &6<group>');
                        if (!groups[args[2]]) return player.text('&cThat &4group &cdoes not exist!');
                        var permissions = groups[args[2]].permissions;
                        var output = [];
                        Object.keys(permissions).forEach(function (key) {
                           if (permissions[key] !== void 0) output.push([ key, value ]);
                        });
                        if (!output.length) return player.text('&cThat &4group &chas no permissions!');
                        player.text('&fPermissions:\n');
                        player.text('&f&m                                                            ');
                        output.forEach(function (permission) {
                           player.text(jx.color('&8') + permission[0] + jx.color(': &7') + permission[1], null, false);
                        });
                        player.text('&f&m                                                            ');
                        break;
                     default:
                        player.text('&fCommands:');
                        player.text('&f&m                                                            ');
                        player.text('&7-> &3/group permission allow');
                        player.text('&7-> &3/group permission deny');
                        player.text('&7-> &3/group permission remove');
                        player.text('&7-> &3/group permission list');
                        player.text('&f&m                                                            ');
                  }
                  break;
               case 'player':
                  switch (args[1]) {
                     case 'attach':
                        if (!args[3]) return player.text('&3/group player add &6<group> <player>');
                        if (!groups[args[2]]) return player.text('&cThat &4group &cdoes not exist!');
                        if (jx.group(args[2]).player(args[3]).state() === true) {
                           return player.text('&cThat &4player &chas already been attached!');
                        }
                        jx.group(args[2]).player(args[3]).attach();
                        player.text('&aPlayer attached.');
                        break;
                     case 'detach':
                        if (!args[3]) return player.text('&3/group player add &6<group> <player>');
                        if (!groups[args[2]]) return player.text('&cThat &4group &cdoes not exist!');
                        if (jx.group(args[2]).player(args[3]).state() === void 0) {
                           return player.text('&cThat &4player &chas not been attached!');
                        }
                        jx.group(args[2]).player(args[3]).detach();
                        player.text('&aPlayer detached.');
                        break;
                     case 'list':
                        if (!args[2]) return player.text('&3/group player list &6<group>');
                        if (!groups[args[2]]) return player.text('&cThat &4group &cdoes not exist!');
                        var players = groups[args[2]].players;
                        var output = [];
                        Object.keys(players).forEach(function (key) {
                           if (players[key] !== void 0) output.push(key);
                        });
                        if (!output.length) return player.text('&cThat &4group &chas no players!');
                        player.text('&fPlayers:\n');
                        player.text('&f&m                                                            ');
                        output.forEach(function (uuid) {
                           player.text(jx.color('&7-> &8') + jx.player(uuid).name, null, false);
                        });
                        player.text('&f&m                                                            ');
                        break;
                     default:
                        player.text('&fCommands:');
                        player.text('&f&m                                                            ');
                        player.text('&7-> &3/group player attach');
                        player.text('&7-> &3/group player detach');
                        player.text('&7-> &3/group player list');
                        player.text('&f&m                                                            ');
                  }
                  break;
               case 'property':
                  switch (args[1]) {
                     case 'set':
                        if (!args[4]) return player.text('&3/group property set &6<group> <property> <value...>');
                        if (!groups[args[2]]) return player.text('&cThat &4group &cdoes not exist!');
                        if (jx.group(args[2]).property(args[3]).state() === args.slice(4)) {
                           return player.text('&cThat &4property &chas already been set to that &4value&c!');
                        }
                        jx.group(args[2]).property(args[3]).set(args.slice(4));
                        player.text('&aProperty set.');
                        break;
                     case 'unset':
                        if (!args[3]) return player.text('&3/group property unset &6<group> <property>');
                        if (!groups[args[2]]) return player.text('&cThat &4group &cdoes not exist!');
                        if (jx.group(args[2]).property(args[3]).state() === void 0) {
                           return player.text('&cThat &4property &chas not been set!');
                        }
                        jx.group(args[2]).property(args[3]).set(void 0);
                        player.text('&aProperty unset.');
                        break;
                     case 'list':
                        if (!args[2]) return player.text('&3/group property list &6<group>');
                        if (!groups[args[2]]) return player.text('&cThat &4group &cdoes not exist!');
                        var properties = groups[args[2]].properties;
                        var output = [];
                        Object.keys(properties).forEach(function (key) {
                           if (properties[key] !== void 0) output.push([ key, value ]);
                        });
                        if (!output.length) return player.text('&cThat &4group &chas no properties!');
                        player.text('&fProperties:\n');
                        player.text('&f&m                                                            ');
                        output.forEach(function (property) {
                           player.text(jx.color('&8') + property[0] + jx.color(': &7') + property[1], null, false);
                        });
                        player.text('&f&m                                                            ');
                        break;
                     default:
                        player.text('&fCommands:');
                        player.text('&f&m                                                            ');
                        player.text('&7-> &3/group property set');
                        player.text('&7-> &3/group property unset');
                        player.text('&7-> &3/group property list');
                        player.text('&f&m                                                            ');
                  }
                  break;
               default:
                  player.text('&fCommands:');
                  player.text('&f&m                                                            ');
                  player.text('&7-> &3/group create');
                  player.text('&7-> &3/group delete');
                  player.text('&7-> &3/group list');
                  player.text('&7-> &3/group parent');
                  player.text('&7-> &3/group permission');
                  player.text('&7-> &3/group player');
                  player.text('&7-> &3/group property');
                  player.text('&f&m                                                            ');
            }
            break;
         default:
            pass = false;
      }
      if (pass) event.cancelled = true;
   });
});
