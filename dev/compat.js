module.exports = {
   /**
    * compat for essentials (ess3)
    * 
    * @param {*} player the player data to modify
    */
   ess3: function (player) {
      var plug = server.pluginManager.getPlugin('Essentials');
      if (plug === null) {
         throw "You don't have essentials installed, so why the FUCK are you calling this method!?";
      }
      var user = plug.userMap.getUser(player);
      return {
         get payable () {
            return user.acceptingPay;
         },
         set payable (v) {
            return (user.acceptingPay = Boolean(v));
         },
         get nick () {
            return user.nickname;
         },
         set nick (v) {
            return (user.nickname = v ? String(v) : null);
         },
         get homes () {
            var output = {};
            jx.ar(user.homes).forEach(function (home) {
               Object.defineProperty(output, 'home', {
                  get () {
                     return user.getHome(home);
                  },
                  set (v) {
                     return v ? user.setHome(home, jx.util.loc(v)) : user.delHome(home);
                  }
               });
            });
            return output;
         },
         set homes (v) {
            jx.ar(user.homes).forEach(function (home) {
               user.delHome();
            });
         }
      };
   }
};
