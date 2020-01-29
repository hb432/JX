// import module
var jx = require('./../index');

// get claim key of chunk
var key = function (query) {
   if (query.instance) query = query.instance;
   if (query.location) query = query.location;
   var location = jx.util.loc(query);
   return location.world.name + ':' + location.chunk.x + ':' + location.chunk.z;
};

// get claim state of chunk
var state = function (location) {
   return jx.data.server('territory', 'claims')[key(location)];
};

// export
/**
 * functions for claiming chunks and trusting players
 * @param {} player the target player
 * @returns {{
 *    claim: function,
 *    unclaim: function,
 *    claims: function,
 *    claimed: function,
 *    trust: function,
 *    untrust: function,
 *    trusts: function,
 *    trusted: function
 * }}
 */
module.exports = function (player) {
   player = jx.player(player);
   return {
      /**
       * claims chunk at provided location with player
       * @param {} [location] location to claim - defaults to player location
       * @returns {true}
       */
      claim: function (location) {
         location = location || player;
         jx.data.server('territory', 'claims')[key(location)] = player.uuid;
         player.data('territory', 'claims')[key(location)] = true;
         return true;
      },
      /**
       * unclaims chunk at provided location
       * @param {} [location] location to unclaim - defaults to player location
       * @returns {true}
       */
      unclaim: function (location) {
         location = location || player;
         var data = jx.data.server('territory', 'claims');
         var claimant = data[key(location)];
         if (claimant !== void 0) {
            jx.player(claimant).data('territory', 'claims')[key(location)] = void 0;
            data[key(location)] = void 0;
         }
         return true;
      },
      /**
       * fetches all claimed chunks of player
       * @returns {string[]}
       */
      claims: function () {
         var claims = player.data('territory', 'claims');
         var output = [];
         Object.keys(claims).forEach(function (chunk) {
            if (claims[chunk] === true) {
               location = chunk.split(':');
               output.push(server.getWorld(location[0]).getChunkAt(Number(location[1]), Number(location[2])));
            }
         });
         return output;
      },
      /**
       * fetches claim state of provided location in relation to player
       * @param {} [location] location to check - defaults to player location
       * @returns {'claimed-by-self'|'unclaimed'|'claimed-by-other'}
       */
      claimed: function (location) {
         location = location || player;
         var response = null;
         switch (state(location)) {
            case player.uuid:
               response = 'claimed-by-self';
            case void 0:
               response = 'unclaimed';
            default:
               response = 'claimed-by-other';
         }
         return response;
      },
      /**
       * adds a trustee to trust list of player
       * @param {} trustee player to trust
       * @returns {true}
       */
      trust: function (trustee) {
         trustee = jx.player(trustee);
         player.data('territory', 'trusts')[trustee.uuid] = true;
         return true;
      },
      /**
       * removes a trustee from trust list of player
       * @param {} trustee player to untrust
       * @returns {true}
       */
      untrust: function (trustee) {
         trustee = jx.player(trustee);
         player.data('territory', 'trusts')[trustee.uuid] = void 0;
         return true;
      },
      /**
       * fetches all members of trust list of player
       * @returns {string[]}
       */
      trusts: function () {
         var trusts = player.data('territory', 'trusts');
         var output = [];
         Object.keys(trusts).forEach(function (trustee) {
            if (trusts[trustee] === true) output.push(jx.player(trustee));
         });
         return output;
      },
      /**
       * fetches trust state of trustee in relation to player
       * @param {} trustee player to check
       * @returns {boolean} true if trusted, false if untrusted
       */
      trusted: function (trustee) {
         trustee = jx.player(trustee);
         return player.data('territory', 'trusts')[trustee.uuid] === true;
      }
   };
};
