module.exports = {
   /**
    * @callback jx_event_entity_damage
    * @param {'block_explosion'|'contact'|'cramming'|'custom'|'dragon_breath'|'drowning'|'dryout'|'entity_attack'|'entity_explosion'|'entity_sweep_attack'|'fall'|'falling_block'|'fire'|'fire_tick'|'fly_into_wall'|'hot_floor'|'lava'|'lightning'|'magic'|'melting'|'poison'|'projectile'|'starvation'|'suffocation'|'suicide'|'thorns'|'void'|'wither'} [cause] the damage cause
    * @param {*} [damagee] the damaged entity
    * @param {*} [damager] the damager entity, if applicable
    * @param {number} [damage] the damage taken by the damagee
    * @param {*} [event] the event data
    */
   /**
    * execute a script when an entity takes damage
    * @param {jx_event_entity_damage} listener the script to execute
    * @example
    * // send 'goodbye world' to console when an entity takes a potentially lethal hit
    * jx.event.entity.damage(function (cause, damagee, damager, damage, event) {
    *    if (damage > damagee.health) console.log('goodbye world');
    * });
    */
   damage: function (listener) {
      jx.event.on('entityDamage', function (event) {
         var cause = event.cause.toString().toLowerCase();
         listener(cause, event.entity, event.damager, event.finalDamage, event);
      });
   },
   /**
    * @callback jx_event_entity_heal
    * @param {*} [entity] the entity that healed
    * @param {number} [amount] the amount of health healed
    * @param {*} [event] the event data
    */
   /**
    * execute a script when an entity regains health
    * @param {jx_event_entity_heal} listener the script to execute
    * @example
    * // cap player healing to 10 health (5 hearts)
    * jx.event.entity.heal(function (entity, amount, event) {
    *    if (_(entity) === 'player' && entity.health + amount > 10) event.setCancelled(true);
    * });
    */
   heal: function (listener) {
      jx.event.on('entityRegainHealth', function (event) {
         listener(event.entity, Number(event.amount), event);
      });
   },
   /**
    * @callback jx_event_entity_spawn
    * @param {*} [entity] the entity that spawned
    * @param {*} [location] the location of the spawned entity
    * @param {*} [event] the event data
    */
   /**
    * execute a script when an entity spawns
    * @param {jx_event_entity_spawn} listener the script to execute
    * @example
    * // multiply default creeper explosion radius by 5
    * jx.event.entity.spawn(function (entity, location, event) {
    *    if (_(entity) === 'creeper') entity.setExplosionRadius(entity.explosionRadius * 5);
    * });
    */
   spawn: function (listener) {
      jx.event.on('entitySpawn', function (event) {
         listener(event.entity, event.location, event);
      });
   },
   /**
    * @callback jx_event_entity_target
    * @param {'closest_entity'|'closest_player'|'collision'|'custom'|'defend_village'|'follow_leader'|'forgot_target'|'owner_attacked_target'|'random_target'|'reinforcement_target'|'target_attacked_entity'|'target_attacked_nearby_entity'|'target_attacked_owner'|'target_died'|'tempt'|'unknown'} [reason] the target reason
    * @param {*} [entity] the targeting entity
    * @param {*} [target] the targeted entity
    * @param {*} [event] the event data
    */
   /**
    * execute a script when an entity targets another entity
    * @param {jx_event_entity_target} listener the script to execute
    * @example
    * // prevent monsters from attacking opped players in survival
    * jx.event.entity.target(function (reason, entity, target, event) {
    *    if (reason === 'closest_player' && _(target) === 'player' && target.op) {
    *       event.setCancelled(true);
    *    }
    * });
    */
   target: function (listener) {
      jx.event.on('entityTarget', function (event) {
         listener(event.reason.name().toLowerCase(), event.entity, event.target, event);
      });
   },
   /**
    * @callback jx_event_entity_transform
    * @param {'cured'|'drowned'|'infection'|'lightning'|'power'|'sheared'|'split'} [reason] the transform reason
    * @param {*} [entity] the entity to be transformed
    * @param {*[]} [transformees] the newly spawned entities if applicable
    * @param {*} [event] the event data
    */
   /**
    * execute a script when an entity transforms into another entity or entities
    * @param {jx_event_entity_transform} listener the script to execute
    * @example
    * // make zombie pigmen transformed from pigs invincible
    * jx.event.entity.transform(function (reason, entity, transformees, event) {
    *    if (reason === 'lightning' && _(entity) === 'pig') {
    *       transformees.forEach(function (transformee) { transformee.setInvulnerable(true); });
    *    }
    * });
    */
   transform: function (listener) {
      jx.event.on('creeperPower', function (event) {
         listener('lightning', event.entity, [ event.entity ], event);
      });
      jx.event.on('entityTransform', function (event) {
         var reason = event.transformReason.toString().toLowerCase();
         listener(reason, event.entity, jx.ar(event.transformedEntities), event);
      });
   }
};
