### Pre-Requisites
1. Install the [ScriptCraft](https://github.com/walterhiggins/ScriptCraft) plugin on your server
2. Download the repository

### Installation
1. Copy the `scriptcraft` directory from the repository to your server's root directory
2. Execute `js refresh()` from your server's console

### Usage: Getting Started
Navigate to your server's root directory, then to `scriptcraft` and finally to `plugins`. Create a new JS file with the following template:
```javascript
setTimeout(function () {
   // code
});
```
*Note: The use of `setTimeout` will delay the code execution until after JX has initialized, as without it the code would not have access to JX.*

### Usage: Basic Example 1 (Spectral Creepers)
Yeah, these creepers should be avoided. Instant fuse, impossible to damage, and worst of all, a massive explosion. Damn!
```javascript
setTimeout(function () {

   // wait for entity spawns
   jx.event.entity.spawn(function (entity) {

      // ignore non-creeper spawns
      if (_(entity) !== 'creeper') return false;

      // 1 out of 7 creeper spawns will be spectral
      if (!jx.rand.chance(1 / 7)) return false;

      // multiply the creeper's explosion power by 4
      entity.explosionRadius *= 4;

      // reduce the creeper's fuse time to 0.5 seconds
      entity.maxFuseTicks = 10;

      // add a white outline to the creeper
      entity.glowing = true;

      // apply invisibility to the creeper
      $(entity).effect('invisibility', 1, -1);

      // make the creeper invulnerable
      entity.invulnerable = true;
   });
});
```

### Usage: Basic Example 2 (Event Sounds)
Joining, Leaving, and Chatting will all trigger sound effects for the whole server to hear!
```javascript
setTimeout(function () {
   
   // play a higher-pitch buzz when someone joins
   jx.event.player.join(function (joiner) {

      // for all online players
      jx.all(function (player) {

         // spawn the sound
         jx.spawn.sound(player, 'block.note.block.bit', {
            pitch: 0.75
         });
      })
   });

   // play a lower-pitch buzz when someone quits
   jx.event.player.quit(function (quitter) {

      // for all online players
      jx.all(function (player) {

         // spawn the sound
         jx.spawn.sound(player, 'block.note.block.bit', {
            pitch: 0.5
         });
      })
   });

   // play a pop sound when someone chats
   jx.event.player.chat(function (chatter, message) {

      // for all online players
      jx.all(function (player) {

         // spawn the sound
         jx.spawn.sound(player, 'entity.item.pickup');
      });
   });
});
```

### Usage: Basic Example 3 (Sky Chest)
Access your ender chest by looking directly upwards!
```javascript
setTimeout(function () {
   
   // check for player movement
   jx.event.player.move(function (player, x, instance, event) {

      // check if player is about to look upwards
      if (event.to.pitch === 90) {

         // open the ender chest
         instance.openInventory(instance.enderChest);

         // prevent players getting stuck in the ender chest
         event.cancelled = true;
      }
   });
});
```