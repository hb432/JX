module.exports = {
   damage: function (listener) {
      jx.event.on('entityDamage', function (event) {
         listener(event.cause.toString().toLowerCase(), event.entity, event.damager, event.finalDamage, event);
      });
   },
   heal: function (listener) {
      jx.event.on('entityRegainHealth', function (event) {
         listener(event.entity, Number(event.amount), event);
      });
   },
   spawn: function (listener) {
      jx.event.on('entitySpawn', function (event) {
         listener(event.entity, event.location, event);
      });
   },
   target: function (listener) {
      jx.event.on('entityTarget', function (event) {
         listener(event.reason.name().toLowerCase(), event.entity, event.target, event);
      });
   },
   transform: function (listener) {
      jx.event.on('creeperPower', function (event) {
         listener('creeper', event.entity);
      });
      jx.event.on('pigZap', function (event) {
         listener('pig', event.entity);
      });
   }
};
