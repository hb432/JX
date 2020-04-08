/**
 * actions
 * @typedef {'left_click_air'|'left_click_block'|'physical'|'right_click_air'|'right_click_block'} mc$action
 * 
 * bar styles
 * @typedef {'one'|'six'|'ten'|'twelve'|'twenty'} mc$barStyle
 * 
 * operations
 * @typedef {'add_number'|'add_scalar'|'multiply_scalar_1'} mc$operation
 * 
 * equipment slots
 * @typedef {'hand'|'off_hand'|'feet'|'legs'|'chest'|'head'} mc$equipmentSlot
 * 
 * bar colors
 * @typedef {'blue'|'green'|'pink'|'purple'|'red'|'white'|'yellow'} mc$barColor
 * 
 * item flags
 * @typedef {'enchants'|'attributes'|'unbreakable'|'destroys'|'placed_on'|'potion_effects'} mc$itemFlag
 * 
 * sound categories
 * @typedef {'master'|'music'|'records'|'weather'|'blocks'|'hostile'|'neutral'|'players'|'ambient'|'voice'} mc$soundCategory
 * 
 * attributes
 * @typedef {'max_health'|'follow_range'|'knockback_resistance'|'movement_speed'|'flying_speed'|'attack_damage'|'attack_speed'|'armor'|'armor_toughness'|'luck'|'jump_strength'|'horse.jumpStrength'|'spawn_reinforcements'} mc$attribute
 * 
 * potion effect types
 * @typedef {'speed'|'slowness'|'haste'|'mining_fatigue'|'strength'|'instant_health'|'instant_damage'|'jump_boost'|'nausea'|'regeneration'|'resistance'|'fire_resistance'|'water_breathing'|'invisibility'|'blindness'|'night_vision'|'hunger'|'weakness'|'poison'|'wither'|'health_boost'|'absorption'|'saturation'|'glowing'|'levitation'|'luck'|'unluck'|'slow_falling'|'conduit_power'|'dolphins_grace'|'bad_omen'|'hero_of_the_village'} mc$potionEffectType
 * 
 * enchantments
 * @typedef {'fire_protection'|'sharpness'|'flame'|'aqua_affinity'|'punch'|'loyalty'|'depth_strider'|'vanishing_curse'|'unbreaking'|'knockback'|'luck_of_the_sea'|'binding_curse'|'fortune'|'protection'|'efficiency'|'mending'|'frost_walker'|'lure'|'looting'|'piercing'|'blast_protection'|'smite'|'multishot'|'fire_aspect'|'channeling'|'sweeping'|'thorns'|'bane_of_arthropods'|'respiration'|'riptide'|'silk_touch'|'quick_charge'|'projectile_protection'|'impaling'|'feather_falling'|'power'|'infinity'} mc$enchantment
 * 
 * entity types
 * @typedef {'item'|'experience_orb'|'area_effect_cloud'|'elder_guardian'|'wither_skeleton'|'stray'|'egg'|'leash_knot'|'painting'|'arrow'|'snowball'|'fireball'|'small_fireball'|'ender_pearl'|'eye_of_ender'|'potion'|'experience_bottle'|'item_frame'|'wither_skull'|'tnt'|'falling_block'|'firework_rocket'|'husk'|'spectral_arrow'|'shulker_bullet'|'dragon_fireball'|'zombie_villager'|'skeleton_horse'|'zombie_horse'|'armor_stand'|'donkey'|'mule'|'evoker_fangs'|'evoker'|'vex'|'vindicator'|'illusioner'|'command_block_minecart'|'boat'|'minecart'|'chest_minecart'|'furnace_minecart'|'tnt_minecart'|'hopper_minecart'|'spawner_minecart'|'creeper'|'skeleton'|'spider'|'giant'|'zombie'|'slime'|'ghast'|'zombie_pigman'|'enderman'|'cave_spider'|'silverfish'|'blaze'|'magma_cube'|'ender_dragon'|'wither'|'bat'|'witch'|'endermite'|'guardian'|'shulker'|'pig'|'sheep'|'cow'|'chicken'|'squid'|'wolf'|'mooshroom'|'snow_golem'|'ocelot'|'iron_golem'|'horse'|'rabbit'|'polar_bear'|'llama'|'llama_spit'|'parrot'|'villager'|'end_crystal'|'turtle'|'phantom'|'trident'|'cod'|'salmon'|'pufferfish'|'tropical_fish'|'drowned'|'dolphin'|'cat'|'panda'|'pillager'|'ravager'|'trader_llama'|'wandering_trader'|'fox'|'bee'|'fishing_bobber'|'lightning_bolt'|'player'|'unknown'} mc$entityType
 * 
 * sounds
 * @typedef {'ambient.cave'|'ambient.underwater.enter'|'ambient.underwater.exit'|'ambient.underwater.loop'|'ambient.underwater.loop.additions'|'ambient.underwater.loop.additions.rare'|'ambient.underwater.loop.additions.ultra.rare'|'block.anvil.break'|'block.anvil.destroy'|'block.anvil.fall'|'block.anvil.hit'|'block.anvil.land'|'block.anvil.place'|'block.anvil.step'|'block.anvil.use'|'block.bamboo.break'|'block.bamboo.fall'|'block.bamboo.hit'|'block.bamboo.place'|'block.bamboo.sapling.break'|'block.bamboo.sapling.hit'|'block.bamboo.sapling.place'|'block.bamboo.step'|'block.barrel.close'|'block.barrel.open'|'block.beacon.activate'|'block.beacon.ambient'|'block.beacon.deactivate'|'block.beacon.power.select'|'block.beehive.drip'|'block.beehive.enter'|'block.beehive.exit'|'block.beehive.shear'|'block.beehive.work'|'block.bell.resonate'|'block.bell.use'|'block.blastfurnace.fire.crackle'|'block.brewing.stand.brew'|'block.bubble.column.bubble.pop'|'block.bubble.column.upwards.ambient'|'block.bubble.column.upwards.inside'|'block.bubble.column.whirlpool.ambient'|'block.bubble.column.whirlpool.inside'|'block.campfire.crackle'|'block.chest.close'|'block.chest.locked'|'block.chest.open'|'block.chorus.flower.death'|'block.chorus.flower.grow'|'block.comparator.click'|'block.composter.empty'|'block.composter.fill'|'block.composter.fill.success'|'block.composter.ready'|'block.conduit.activate'|'block.conduit.ambient'|'block.conduit.ambient.short'|'block.conduit.attack.target'|'block.conduit.deactivate'|'block.coral.block.break'|'block.coral.block.fall'|'block.coral.block.hit'|'block.coral.block.place'|'block.coral.block.step'|'block.crop.break'|'block.dispenser.dispense'|'block.dispenser.fail'|'block.dispenser.launch'|'block.enchantment.table.use'|'block.ender.chest.close'|'block.ender.chest.open'|'block.end.gateway.spawn'|'block.end.portal.frame.fill'|'block.end.portal.spawn'|'block.fence.gate.close'|'block.fence.gate.open'|'block.fire.ambient'|'block.fire.extinguish'|'block.furnace.fire.crackle'|'block.glass.break'|'block.glass.fall'|'block.glass.hit'|'block.glass.place'|'block.glass.step'|'block.grass.break'|'block.grass.fall'|'block.grass.hit'|'block.grass.place'|'block.grass.step'|'block.gravel.break'|'block.gravel.fall'|'block.gravel.hit'|'block.gravel.place'|'block.gravel.step'|'block.grindstone.use'|'block.honey.block.break'|'block.honey.block.fall'|'block.honey.block.hit'|'block.honey.block.place'|'block.honey.block.slide'|'block.honey.block.step'|'block.iron.door.close'|'block.iron.door.open'|'block.iron.trapdoor.close'|'block.iron.trapdoor.open'|'block.ladder.break'|'block.ladder.fall'|'block.ladder.hit'|'block.ladder.place'|'block.ladder.step'|'block.lantern.break'|'block.lantern.fall'|'block.lantern.hit'|'block.lantern.place'|'block.lantern.step'|'block.lava.ambient'|'block.lava.extinguish'|'block.lava.pop'|'block.lever.click'|'block.lily.pad.place'|'block.metal.break'|'block.metal.fall'|'block.metal.hit'|'block.metal.place'|'block.metal.pressure.plate.click.off'|'block.metal.pressure.plate.click.on'|'block.metal.step'|'block.nether.wart.break'|'block.note.block.banjo'|'block.note.block.basedrum'|'block.note.block.bass'|'block.note.block.bell'|'block.note.block.bit'|'block.note.block.chime'|'block.note.block.cow.bell'|'block.note.block.didgeridoo'|'block.note.block.flute'|'block.note.block.guitar'|'block.note.block.harp'|'block.note.block.hat'|'block.note.block.iron.xylophone'|'block.note.block.pling'|'block.note.block.snare'|'block.note.block.xylophone'|'block.piston.contract'|'block.piston.extend'|'block.portal.ambient'|'block.portal.travel'|'block.portal.trigger'|'block.pumpkin.carve'|'block.redstone.torch.burnout'|'block.sand.break'|'block.sand.fall'|'block.sand.hit'|'block.sand.place'|'block.sand.step'|'block.scaffolding.break'|'block.scaffolding.fall'|'block.scaffolding.hit'|'block.scaffolding.place'|'block.scaffolding.step'|'block.shulker.box.close'|'block.shulker.box.open'|'block.slime.block.break'|'block.slime.block.fall'|'block.slime.block.hit'|'block.slime.block.place'|'block.slime.block.step'|'block.smoker.smoke'|'block.snow.break'|'block.snow.fall'|'block.snow.hit'|'block.snow.place'|'block.snow.step'|'block.stone.break'|'block.stone.button.click.off'|'block.stone.button.click.on'|'block.stone.fall'|'block.stone.hit'|'block.stone.place'|'block.stone.pressure.plate.click.off'|'block.stone.pressure.plate.click.on'|'block.stone.step'|'block.sweet.berry.bush.break'|'block.sweet.berry.bush.place'|'block.tripwire.attach'|'block.tripwire.click.off'|'block.tripwire.click.on'|'block.tripwire.detach'|'block.water.ambient'|'block.wet.grass.break'|'block.wet.grass.fall'|'block.wet.grass.hit'|'block.wet.grass.place'|'block.wet.grass.step'|'block.wooden.button.click.off'|'block.wooden.button.click.on'|'block.wooden.door.close'|'block.wooden.door.open'|'block.wooden.pressure.plate.click.off'|'block.wooden.pressure.plate.click.on'|'block.wooden.trapdoor.close'|'block.wooden.trapdoor.open'|'block.wood.break'|'block.wood.fall'|'block.wood.hit'|'block.wood.place'|'block.wood.step'|'block.wool.break'|'block.wool.fall'|'block.wool.hit'|'block.wool.place'|'block.wool.step'|'enchant.thorns.hit'|'entity.armor.stand.break'|'entity.armor.stand.fall'|'entity.armor.stand.hit'|'entity.armor.stand.place'|'entity.arrow.hit'|'entity.arrow.hit.player'|'entity.arrow.shoot'|'entity.bat.ambient'|'entity.bat.death'|'entity.bat.hurt'|'entity.bat.loop'|'entity.bat.takeoff'|'entity.bee.death'|'entity.bee.hurt'|'entity.bee.loop'|'entity.bee.loop.aggressive'|'entity.bee.pollinate'|'entity.bee.sting'|'entity.blaze.ambient'|'entity.blaze.burn'|'entity.blaze.death'|'entity.blaze.hurt'|'entity.blaze.shoot'|'entity.boat.paddle.land'|'entity.boat.paddle.water'|'entity.cat.ambient'|'entity.cat.beg.for.food'|'entity.cat.death'|'entity.cat.eat'|'entity.cat.hiss'|'entity.cat.hurt'|'entity.cat.purr'|'entity.cat.purreow'|'entity.cat.stray.ambient'|'entity.chicken.ambient'|'entity.chicken.death'|'entity.chicken.egg'|'entity.chicken.hurt'|'entity.chicken.step'|'entity.cod.ambient'|'entity.cod.death'|'entity.cod.flop'|'entity.cod.hurt'|'entity.cow.ambient'|'entity.cow.death'|'entity.cow.hurt'|'entity.cow.milk'|'entity.cow.step'|'entity.creeper.death'|'entity.creeper.hurt'|'entity.creeper.primed'|'entity.dolphin.ambient'|'entity.dolphin.ambient.water'|'entity.dolphin.attack'|'entity.dolphin.death'|'entity.dolphin.eat'|'entity.dolphin.hurt'|'entity.dolphin.jump'|'entity.dolphin.play'|'entity.dolphin.splash'|'entity.dolphin.swim'|'entity.donkey.ambient'|'entity.donkey.angry'|'entity.donkey.chest'|'entity.donkey.death'|'entity.donkey.hurt'|'entity.dragon.fireball.explode'|'entity.drowned.ambient'|'entity.drowned.ambient.water'|'entity.drowned.death'|'entity.drowned.death.water'|'entity.drowned.hurt'|'entity.drowned.hurt.water'|'entity.drowned.shoot'|'entity.drowned.step'|'entity.drowned.swim'|'entity.egg.throw'|'entity.elder.guardian.ambient'|'entity.elder.guardian.ambient.land'|'entity.elder.guardian.curse'|'entity.elder.guardian.death'|'entity.elder.guardian.death.land'|'entity.elder.guardian.flop'|'entity.elder.guardian.hurt'|'entity.elder.guardian.hurt.land'|'entity.enderman.ambient'|'entity.enderman.death'|'entity.enderman.hurt'|'entity.enderman.scream'|'entity.enderman.stare'|'entity.enderman.teleport'|'entity.endermite.ambient'|'entity.endermite.death'|'entity.endermite.hurt'|'entity.endermite.step'|'entity.ender.dragon.ambient'|'entity.ender.dragon.death'|'entity.ender.dragon.flap'|'entity.ender.dragon.growl'|'entity.ender.dragon.hurt'|'entity.ender.dragon.shoot'|'entity.ender.eye.death'|'entity.ender.eye.launch'|'entity.ender.pearl.throw'|'entity.evoker.ambient'|'entity.evoker.cast.spell'|'entity.evoker.celebrate'|'entity.evoker.death'|'entity.evoker.fangs.attack'|'entity.evoker.hurt'|'entity.evoker.prepare.attack'|'entity.evoker.prepare.summon'|'entity.evoker.prepare.wololo'|'entity.experience.bottle.throw'|'entity.experience.orb.pickup'|'entity.firework.rocket.blast'|'entity.firework.rocket.blast.far'|'entity.firework.rocket.large.blast'|'entity.firework.rocket.large.blast.far'|'entity.firework.rocket.launch'|'entity.firework.rocket.shoot'|'entity.firework.rocket.twinkle'|'entity.firework.rocket.twinkle.far'|'entity.fishing.bobber.retrieve'|'entity.fishing.bobber.splash'|'entity.fishing.bobber.throw'|'entity.fish.swim'|'entity.fox.aggro'|'entity.fox.ambient'|'entity.fox.bite'|'entity.fox.death'|'entity.fox.eat'|'entity.fox.hurt'|'entity.fox.screech'|'entity.fox.sleep'|'entity.fox.sniff'|'entity.fox.spit'|'entity.generic.big.fall'|'entity.generic.burn'|'entity.generic.death'|'entity.generic.drink'|'entity.generic.eat'|'entity.generic.explode'|'entity.generic.extinguish.fire'|'entity.generic.hurt'|'entity.generic.small.fall'|'entity.generic.splash'|'entity.generic.swim'|'entity.ghast.ambient'|'entity.ghast.death'|'entity.ghast.hurt'|'entity.ghast.scream'|'entity.ghast.shoot'|'entity.ghast.warn'|'entity.guardian.ambient'|'entity.guardian.ambient.land'|'entity.guardian.attack'|'entity.guardian.death'|'entity.guardian.death.land'|'entity.guardian.flop'|'entity.guardian.hurt'|'entity.guardian.hurt.land'|'entity.horse.ambient'|'entity.horse.angry'|'entity.horse.armor'|'entity.horse.breathe'|'entity.horse.death'|'entity.horse.eat'|'entity.horse.gallop'|'entity.horse.hurt'|'entity.horse.jump'|'entity.horse.land'|'entity.horse.saddle'|'entity.horse.step'|'entity.horse.step.wood'|'entity.hostile.big.fall'|'entity.hostile.death'|'entity.hostile.hurt'|'entity.hostile.small.fall'|'entity.hostile.splash'|'entity.hostile.swim'|'entity.husk.ambient'|'entity.husk.converted.to.zombie'|'entity.husk.death'|'entity.husk.hurt'|'entity.husk.step'|'entity.illusioner.ambient'|'entity.illusioner.cast.spell'|'entity.illusioner.death'|'entity.illusioner.hurt'|'entity.illusioner.mirror.move'|'entity.illusioner.prepare.blindness'|'entity.illusioner.prepare.mirror'|'entity.iron.golem.attack'|'entity.iron.golem.damage'|'entity.iron.golem.death'|'entity.iron.golem.hurt'|'entity.iron.golem.repair'|'entity.iron.golem.step'|'entity.item.break'|'entity.item.frame.add.item'|'entity.item.frame.break'|'entity.item.frame.place'|'entity.item.frame.remove.item'|'entity.item.frame.rotate.item'|'entity.item.pickup'|'entity.leash.knot.break'|'entity.leash.knot.place'|'entity.lightning.bolt.impact'|'entity.lightning.bolt.thunder'|'entity.lingering.potion.throw'|'entity.llama.ambient'|'entity.llama.angry'|'entity.llama.chest'|'entity.llama.death'|'entity.llama.eat'|'entity.llama.hurt'|'entity.llama.spit'|'entity.llama.step'|'entity.llama.swag'|'entity.magma.cube.death'|'entity.magma.cube.death.small'|'entity.magma.cube.hurt'|'entity.magma.cube.hurt.small'|'entity.magma.cube.jump'|'entity.magma.cube.squish'|'entity.magma.cube.squish.small'|'entity.minecart.inside'|'entity.minecart.riding'|'entity.mooshroom.convert'|'entity.mooshroom.eat'|'entity.mooshroom.milk'|'entity.mooshroom.shear'|'entity.mooshroom.suspicious.milk'|'entity.mule.ambient'|'entity.mule.chest'|'entity.mule.death'|'entity.mule.hurt'|'entity.ocelot.ambient'|'entity.ocelot.death'|'entity.ocelot.hurt'|'entity.painting.break'|'entity.painting.place'|'entity.panda.aggressive.ambient'|'entity.panda.ambient'|'entity.panda.bite'|'entity.panda.cant.breed'|'entity.panda.death'|'entity.panda.eat'|'entity.panda.hurt'|'entity.panda.pre.sneeze'|'entity.panda.sneeze'|'entity.panda.step'|'entity.panda.worried.ambient'|'entity.parrot.ambient'|'entity.parrot.death'|'entity.parrot.eat'|'entity.parrot.fly'|'entity.parrot.hurt'|'entity.parrot.imitate.blaze'|'entity.parrot.imitate.creeper'|'entity.parrot.imitate.drowned'|'entity.parrot.imitate.elder.guardian'|'entity.parrot.imitate.endermite'|'entity.parrot.imitate.ender.dragon'|'entity.parrot.imitate.evoker'|'entity.parrot.imitate.ghast'|'entity.parrot.imitate.guardian'|'entity.parrot.imitate.husk'|'entity.parrot.imitate.illusioner'|'entity.parrot.imitate.magma.cube'|'entity.parrot.imitate.phantom'|'entity.parrot.imitate.pillager'|'entity.parrot.imitate.ravager'|'entity.parrot.imitate.shulker'|'entity.parrot.imitate.silverfish'|'entity.parrot.imitate.skeleton'|'entity.parrot.imitate.slime'|'entity.parrot.imitate.spider'|'entity.parrot.imitate.stray'|'entity.parrot.imitate.vex'|'entity.parrot.imitate.vindicator'|'entity.parrot.imitate.witch'|'entity.parrot.imitate.wither'|'entity.parrot.imitate.wither.skeleton'|'entity.parrot.imitate.zombie'|'entity.parrot.imitate.zombie.villager'|'entity.parrot.step'|'entity.phantom.ambient'|'entity.phantom.bite'|'entity.phantom.death'|'entity.phantom.flap'|'entity.phantom.hurt'|'entity.phantom.swoop'|'entity.pig.ambient'|'entity.pig.death'|'entity.pig.hurt'|'entity.pig.saddle'|'entity.pig.step'|'entity.pillager.ambient'|'entity.pillager.celebrate'|'entity.pillager.death'|'entity.pillager.hurt'|'entity.player.attack.crit'|'entity.player.attack.knockback'|'entity.player.attack.nodamage'|'entity.player.attack.strong'|'entity.player.attack.sweep'|'entity.player.attack.weak'|'entity.player.big.fall'|'entity.player.breath'|'entity.player.burp'|'entity.player.death'|'entity.player.hurt'|'entity.player.hurt.drown'|'entity.player.hurt.on.fire'|'entity.player.hurt.sweet.berry.bush'|'entity.player.levelup'|'entity.player.small.fall'|'entity.player.splash'|'entity.player.splash.high.speed'|'entity.player.swim'|'entity.polar.bear.ambient'|'entity.polar.bear.ambient.baby'|'entity.polar.bear.death'|'entity.polar.bear.hurt'|'entity.polar.bear.step'|'entity.polar.bear.warning'|'entity.puffer.fish.ambient'|'entity.puffer.fish.blow.out'|'entity.puffer.fish.blow.up'|'entity.puffer.fish.death'|'entity.puffer.fish.flop'|'entity.puffer.fish.hurt'|'entity.puffer.fish.sting'|'entity.rabbit.ambient'|'entity.rabbit.attack'|'entity.rabbit.death'|'entity.rabbit.hurt'|'entity.rabbit.jump'|'entity.ravager.ambient'|'entity.ravager.attack'|'entity.ravager.celebrate'|'entity.ravager.death'|'entity.ravager.hurt'|'entity.ravager.roar'|'entity.ravager.step'|'entity.ravager.stunned'|'entity.salmon.ambient'|'entity.salmon.death'|'entity.salmon.flop'|'entity.salmon.hurt'|'entity.sheep.ambient'|'entity.sheep.death'|'entity.sheep.hurt'|'entity.sheep.shear'|'entity.sheep.step'|'entity.shulker.ambient'|'entity.shulker.bullet.hit'|'entity.shulker.bullet.hurt'|'entity.shulker.close'|'entity.shulker.death'|'entity.shulker.hurt'|'entity.shulker.hurt.closed'|'entity.shulker.open'|'entity.shulker.shoot'|'entity.shulker.teleport'|'entity.silverfish.ambient'|'entity.silverfish.death'|'entity.silverfish.hurt'|'entity.silverfish.step'|'entity.skeleton.ambient'|'entity.skeleton.death'|'entity.skeleton.horse.ambient'|'entity.skeleton.horse.ambient.water'|'entity.skeleton.horse.death'|'entity.skeleton.horse.gallop.water'|'entity.skeleton.horse.hurt'|'entity.skeleton.horse.jump.water'|'entity.skeleton.horse.step.water'|'entity.skeleton.horse.swim'|'entity.skeleton.hurt'|'entity.skeleton.shoot'|'entity.skeleton.step'|'entity.slime.attack'|'entity.slime.death'|'entity.slime.death.small'|'entity.slime.hurt'|'entity.slime.hurt.small'|'entity.slime.jump'|'entity.slime.jump.small'|'entity.slime.squish'|'entity.slime.squish.small'|'entity.snowball.throw'|'entity.snow.golem.ambient'|'entity.snow.golem.death'|'entity.snow.golem.hurt'|'entity.snow.golem.shoot'|'entity.spider.ambient'|'entity.spider.death'|'entity.spider.hurt'|'entity.spider.step'|'entity.splash.potion.break'|'entity.splash.potion.throw'|'entity.squid.ambient'|'entity.squid.death'|'entity.squid.hurt'|'entity.squid.squirt'|'entity.stray.ambient'|'entity.stray.death'|'entity.stray.hurt'|'entity.stray.step'|'entity.tnt.primed'|'entity.tropical.fish.ambient'|'entity.tropical.fish.death'|'entity.tropical.fish.flop'|'entity.tropical.fish.hurt'|'entity.turtle.ambient.land'|'entity.turtle.death'|'entity.turtle.death.baby'|'entity.turtle.egg.break'|'entity.turtle.egg.crack'|'entity.turtle.egg.hatch'|'entity.turtle.hurt'|'entity.turtle.hurt.baby'|'entity.turtle.lay.egg'|'entity.turtle.shamble'|'entity.turtle.shamble.baby'|'entity.turtle.swim'|'entity.vex.ambient'|'entity.vex.charge'|'entity.vex.death'|'entity.vex.hurt'|'entity.villager.ambient'|'entity.villager.celebrate'|'entity.villager.death'|'entity.villager.hurt'|'entity.villager.no'|'entity.villager.trade'|'entity.villager.work.armorer'|'entity.villager.work.butcher'|'entity.villager.work.cartographer'|'entity.villager.work.cleric'|'entity.villager.work.farmer'|'entity.villager.work.fisherman'|'entity.villager.work.fletcher'|'entity.villager.work.leatherworker'|'entity.villager.work.librarian'|'entity.villager.work.mason'|'entity.villager.work.shepherd'|'entity.villager.work.toolsmith'|'entity.villager.work.weaponsmith'|'entity.villager.yes'|'entity.vindicator.ambient'|'entity.vindicator.celebrate'|'entity.vindicator.death'|'entity.vindicator.hurt'|'entity.wandering.trader.ambient'|'entity.wandering.trader.death'|'entity.wandering.trader.disappeared'|'entity.wandering.trader.drink.milk'|'entity.wandering.trader.drink.potion'|'entity.wandering.trader.hurt'|'entity.wandering.trader.no'|'entity.wandering.trader.reappeared'|'entity.wandering.trader.trade'|'entity.wandering.trader.yes'|'entity.witch.ambient'|'entity.witch.celebrate'|'entity.witch.death'|'entity.witch.drink'|'entity.witch.hurt'|'entity.witch.throw'|'entity.wither.ambient'|'entity.wither.break.block'|'entity.wither.death'|'entity.wither.hurt'|'entity.wither.shoot'|'entity.wither.skeleton.ambient'|'entity.wither.skeleton.death'|'entity.wither.skeleton.hurt'|'entity.wither.skeleton.step'|'entity.wither.spawn'|'entity.wolf.ambient'|'entity.wolf.death'|'entity.wolf.growl'|'entity.wolf.howl'|'entity.wolf.hurt'|'entity.wolf.pant'|'entity.wolf.shake'|'entity.wolf.step'|'entity.wolf.whine'|'entity.zombie.ambient'|'entity.zombie.attack.iron.door'|'entity.zombie.attack.wooden.door'|'entity.zombie.break.wooden.door'|'entity.zombie.converted.to.drowned'|'entity.zombie.death'|'entity.zombie.destroy.egg'|'entity.zombie.horse.ambient'|'entity.zombie.horse.death'|'entity.zombie.horse.hurt'|'entity.zombie.hurt'|'entity.zombie.infect'|'entity.zombie.pigman.ambient'|'entity.zombie.pigman.angry'|'entity.zombie.pigman.death'|'entity.zombie.pigman.hurt'|'entity.zombie.step'|'entity.zombie.villager.ambient'|'entity.zombie.villager.converted'|'entity.zombie.villager.cure'|'entity.zombie.villager.death'|'entity.zombie.villager.hurt'|'entity.zombie.villager.step'|'event.raid.horn'|'item.armor.equip.chain'|'item.armor.equip.diamond'|'item.armor.equip.elytra'|'item.armor.equip.generic'|'item.armor.equip.gold'|'item.armor.equip.iron'|'item.armor.equip.leather'|'item.armor.equip.turtle'|'item.axe.strip'|'item.book.page.turn'|'item.book.put'|'item.bottle.empty'|'item.bottle.fill'|'item.bottle.fill.dragonbreath'|'item.bucket.empty'|'item.bucket.empty.fish'|'item.bucket.empty.lava'|'item.bucket.fill'|'item.bucket.fill.fish'|'item.bucket.fill.lava'|'item.chorus.fruit.teleport'|'item.crop.plant'|'item.crossbow.hit'|'item.crossbow.loading.end'|'item.crossbow.loading.middle'|'item.crossbow.loading.start'|'item.crossbow.quick.charge.1'|'item.crossbow.quick.charge.2'|'item.crossbow.quick.charge.3'|'item.crossbow.shoot'|'item.elytra.flying'|'item.firecharge.use'|'item.flintandsteel.use'|'item.hoe.till'|'item.honey.bottle.drink'|'item.nether.wart.plant'|'item.shield.block'|'item.shield.break'|'item.shovel.flatten'|'item.sweet.berries.pick.from.bush'|'item.totem.use'|'item.trident.hit'|'item.trident.hit.ground'|'item.trident.return'|'item.trident.riptide.1'|'item.trident.riptide.2'|'item.trident.riptide.3'|'item.trident.throw'|'item.trident.thunder'|'music.creative'|'music.credits'|'music.disc.11'|'music.disc.13'|'music.disc.blocks'|'music.disc.cat'|'music.disc.chirp'|'music.disc.far'|'music.disc.mall'|'music.disc.mellohi'|'music.disc.stal'|'music.disc.strad'|'music.disc.wait'|'music.disc.ward'|'music.dragon'|'music.end'|'music.game'|'music.menu'|'music.nether'|'music.under.water'|'ui.button.click'|'ui.cartography.table.take.result'|'ui.loom.select.pattern'|'ui.loom.take.result'|'ui.stonecutter.select.recipe'|'ui.stonecutter.take.result'|'ui.toast.challenge.complete'|'ui.toast.in'|'ui.toast.out'|'weather.rain'|'weather.rain.above'} mc$sound
 * 
 * materials
 * @typedef {'acacia_boat'|'acacia_button'|'acacia_door'|'acacia_fence'|'acacia_fence_gate'|'acacia_leaves'|'acacia_log'|'acacia_planks'|'acacia_pressure_plate'|'acacia_sapling'|'acacia_sign'|'acacia_slab'|'acacia_stairs'|'acacia_trapdoor'|'acacia_wall_sign'|'acacia_wood'|'activator_rail'|'air'|'allium'|'andesite'|'andesite_slab'|'andesite_stairs'|'andesite_wall'|'anvil'|'apple'|'armor_stand'|'arrow'|'attached_melon_stem'|'attached_pumpkin_stem'|'azure_bluet'|'baked_potato'|'bamboo'|'bamboo_sapling'|'barrel'|'barrier'|'bat_spawn_egg'|'beacon'|'bedrock'|'beef'|'beehive'|'beetroot'|'beetroots'|'beetroot_seeds'|'beetroot_soup'|'bee_nest'|'bee_spawn_egg'|'bell'|'birch_boat'|'birch_button'|'birch_door'|'birch_fence'|'birch_fence_gate'|'birch_leaves'|'birch_log'|'birch_planks'|'birch_pressure_plate'|'birch_sapling'|'birch_sign'|'birch_slab'|'birch_stairs'|'birch_trapdoor'|'birch_wall_sign'|'birch_wood'|'black_banner'|'black_bed'|'black_carpet'|'black_concrete'|'black_concrete_powder'|'black_dye'|'black_glazed_terracotta'|'black_shulker_box'|'black_stained_glass'|'black_stained_glass_pane'|'black_terracotta'|'black_wall_banner'|'black_wool'|'blast_furnace'|'blaze_powder'|'blaze_rod'|'blaze_spawn_egg'|'blue_banner'|'blue_bed'|'blue_carpet'|'blue_concrete'|'blue_concrete_powder'|'blue_dye'|'blue_glazed_terracotta'|'blue_ice'|'blue_orchid'|'blue_shulker_box'|'blue_stained_glass'|'blue_stained_glass_pane'|'blue_terracotta'|'blue_wall_banner'|'blue_wool'|'bone'|'bone_block'|'bone_meal'|'book'|'bookshelf'|'bow'|'bowl'|'brain_coral'|'brain_coral_block'|'brain_coral_fan'|'brain_coral_wall_fan'|'bread'|'brewing_stand'|'brick'|'bricks'|'brick_slab'|'brick_stairs'|'brick_wall'|'brown_banner'|'brown_bed'|'brown_carpet'|'brown_concrete'|'brown_concrete_powder'|'brown_dye'|'brown_glazed_terracotta'|'brown_mushroom'|'brown_mushroom_block'|'brown_shulker_box'|'brown_stained_glass'|'brown_stained_glass_pane'|'brown_terracotta'|'brown_wall_banner'|'brown_wool'|'bubble_column'|'bubble_coral'|'bubble_coral_block'|'bubble_coral_fan'|'bubble_coral_wall_fan'|'bucket'|'cactus'|'cake'|'campfire'|'carrot'|'carrots'|'carrot_on_a_stick'|'cartography_table'|'carved_pumpkin'|'cat_spawn_egg'|'cauldron'|'cave_air'|'cave_spider_spawn_egg'|'chainmail_boots'|'chainmail_chestplate'|'chainmail_helmet'|'chainmail_leggings'|'chain_command_block'|'charcoal'|'chest'|'chest_minecart'|'chicken'|'chicken_spawn_egg'|'chipped_anvil'|'chiseled_quartz_block'|'chiseled_red_sandstone'|'chiseled_sandstone'|'chiseled_stone_bricks'|'chorus_flower'|'chorus_fruit'|'chorus_plant'|'clay'|'clay_ball'|'clock'|'coal'|'coal_block'|'coal_ore'|'coarse_dirt'|'cobblestone'|'cobblestone_slab'|'cobblestone_stairs'|'cobblestone_wall'|'cobweb'|'cocoa'|'cocoa_beans'|'cod'|'cod_bucket'|'cod_spawn_egg'|'command_block'|'command_block_minecart'|'comparator'|'compass'|'composter'|'conduit'|'cooked_beef'|'cooked_chicken'|'cooked_cod'|'cooked_mutton'|'cooked_porkchop'|'cooked_rabbit'|'cooked_salmon'|'cookie'|'cornflower'|'cow_spawn_egg'|'cracked_stone_bricks'|'crafting_table'|'creeper_banner_pattern'|'creeper_head'|'creeper_spawn_egg'|'creeper_wall_head'|'crossbow'|'cut_red_sandstone'|'cut_red_sandstone_slab'|'cut_sandstone'|'cut_sandstone_slab'|'cyan_banner'|'cyan_bed'|'cyan_carpet'|'cyan_concrete'|'cyan_concrete_powder'|'cyan_dye'|'cyan_glazed_terracotta'|'cyan_shulker_box'|'cyan_stained_glass'|'cyan_stained_glass_pane'|'cyan_terracotta'|'cyan_wall_banner'|'cyan_wool'|'damaged_anvil'|'dandelion'|'dark_oak_boat'|'dark_oak_button'|'dark_oak_door'|'dark_oak_fence'|'dark_oak_fence_gate'|'dark_oak_leaves'|'dark_oak_log'|'dark_oak_planks'|'dark_oak_pressure_plate'|'dark_oak_sapling'|'dark_oak_sign'|'dark_oak_slab'|'dark_oak_stairs'|'dark_oak_trapdoor'|'dark_oak_wall_sign'|'dark_oak_wood'|'dark_prismarine'|'dark_prismarine_slab'|'dark_prismarine_stairs'|'daylight_detector'|'dead_brain_coral'|'dead_brain_coral_block'|'dead_brain_coral_fan'|'dead_brain_coral_wall_fan'|'dead_bubble_coral'|'dead_bubble_coral_block'|'dead_bubble_coral_fan'|'dead_bubble_coral_wall_fan'|'dead_bush'|'dead_fire_coral'|'dead_fire_coral_block'|'dead_fire_coral_fan'|'dead_fire_coral_wall_fan'|'dead_horn_coral'|'dead_horn_coral_block'|'dead_horn_coral_fan'|'dead_horn_coral_wall_fan'|'dead_tube_coral'|'dead_tube_coral_block'|'dead_tube_coral_fan'|'dead_tube_coral_wall_fan'|'debug_stick'|'detector_rail'|'diamond'|'diamond_axe'|'diamond_block'|'diamond_boots'|'diamond_chestplate'|'diamond_helmet'|'diamond_hoe'|'diamond_horse_armor'|'diamond_leggings'|'diamond_ore'|'diamond_pickaxe'|'diamond_shovel'|'diamond_sword'|'diorite'|'diorite_slab'|'diorite_stairs'|'diorite_wall'|'dirt'|'dispenser'|'dolphin_spawn_egg'|'donkey_spawn_egg'|'dragon_breath'|'dragon_egg'|'dragon_head'|'dragon_wall_head'|'dried_kelp'|'dried_kelp_block'|'dropper'|'drowned_spawn_egg'|'egg'|'elder_guardian_spawn_egg'|'elytra'|'emerald'|'emerald_block'|'emerald_ore'|'enchanted_book'|'enchanted_golden_apple'|'enchanting_table'|'enderman_spawn_egg'|'endermite_spawn_egg'|'ender_chest'|'ender_eye'|'ender_pearl'|'end_crystal'|'end_gateway'|'end_portal'|'end_portal_frame'|'end_rod'|'end_stone'|'end_stone_bricks'|'end_stone_brick_slab'|'end_stone_brick_stairs'|'end_stone_brick_wall'|'evoker_spawn_egg'|'experience_bottle'|'farmland'|'feather'|'fermented_spider_eye'|'fern'|'filled_map'|'fire'|'firework_rocket'|'firework_star'|'fire_charge'|'fire_coral'|'fire_coral_block'|'fire_coral_fan'|'fire_coral_wall_fan'|'fishing_rod'|'fletching_table'|'flint'|'flint_and_steel'|'flower_banner_pattern'|'flower_pot'|'fox_spawn_egg'|'frosted_ice'|'furnace'|'furnace_minecart'|'ghast_spawn_egg'|'ghast_tear'|'glass'|'glass_bottle'|'glass_pane'|'glistering_melon_slice'|'globe_banner_pattern'|'glowstone'|'glowstone_dust'|'golden_apple'|'golden_axe'|'golden_boots'|'golden_carrot'|'golden_chestplate'|'golden_helmet'|'golden_hoe'|'golden_horse_armor'|'golden_leggings'|'golden_pickaxe'|'golden_shovel'|'golden_sword'|'gold_block'|'gold_ingot'|'gold_nugget'|'gold_ore'|'granite'|'granite_slab'|'granite_stairs'|'granite_wall'|'grass'|'grass_block'|'grass_path'|'gravel'|'gray_banner'|'gray_bed'|'gray_carpet'|'gray_concrete'|'gray_concrete_powder'|'gray_dye'|'gray_glazed_terracotta'|'gray_shulker_box'|'gray_stained_glass'|'gray_stained_glass_pane'|'gray_terracotta'|'gray_wall_banner'|'gray_wool'|'green_banner'|'green_bed'|'green_carpet'|'green_concrete'|'green_concrete_powder'|'green_dye'|'green_glazed_terracotta'|'green_shulker_box'|'green_stained_glass'|'green_stained_glass_pane'|'green_terracotta'|'green_wall_banner'|'green_wool'|'grindstone'|'guardian_spawn_egg'|'gunpowder'|'hay_block'|'heart_of_the_sea'|'heavy_weighted_pressure_plate'|'honeycomb'|'honeycomb_block'|'honey_block'|'honey_bottle'|'hopper'|'hopper_minecart'|'horn_coral'|'horn_coral_block'|'horn_coral_fan'|'horn_coral_wall_fan'|'horse_spawn_egg'|'husk_spawn_egg'|'ice'|'infested_chiseled_stone_bricks'|'infested_cobblestone'|'infested_cracked_stone_bricks'|'infested_mossy_stone_bricks'|'infested_stone'|'infested_stone_bricks'|'ink_sac'|'iron_axe'|'iron_bars'|'iron_block'|'iron_boots'|'iron_chestplate'|'iron_door'|'iron_helmet'|'iron_hoe'|'iron_horse_armor'|'iron_ingot'|'iron_leggings'|'iron_nugget'|'iron_ore'|'iron_pickaxe'|'iron_shovel'|'iron_sword'|'iron_trapdoor'|'item_frame'|'jack_o_lantern'|'jigsaw'|'jukebox'|'jungle_boat'|'jungle_button'|'jungle_door'|'jungle_fence'|'jungle_fence_gate'|'jungle_leaves'|'jungle_log'|'jungle_planks'|'jungle_pressure_plate'|'jungle_sapling'|'jungle_sign'|'jungle_slab'|'jungle_stairs'|'jungle_trapdoor'|'jungle_wall_sign'|'jungle_wood'|'kelp'|'kelp_plant'|'knowledge_book'|'ladder'|'lantern'|'lapis_block'|'lapis_lazuli'|'lapis_ore'|'large_fern'|'lava'|'lava_bucket'|'lead'|'leather'|'leather_boots'|'leather_chestplate'|'leather_helmet'|'leather_horse_armor'|'leather_leggings'|'lectern'|'lever'|'light_blue_banner'|'light_blue_bed'|'light_blue_carpet'|'light_blue_concrete'|'light_blue_concrete_powder'|'light_blue_dye'|'light_blue_glazed_terracotta'|'light_blue_shulker_box'|'light_blue_stained_glass'|'light_blue_stained_glass_pane'|'light_blue_terracotta'|'light_blue_wall_banner'|'light_blue_wool'|'light_gray_banner'|'light_gray_bed'|'light_gray_carpet'|'light_gray_concrete'|'light_gray_concrete_powder'|'light_gray_dye'|'light_gray_glazed_terracotta'|'light_gray_shulker_box'|'light_gray_stained_glass'|'light_gray_stained_glass_pane'|'light_gray_terracotta'|'light_gray_wall_banner'|'light_gray_wool'|'light_weighted_pressure_plate'|'lilac'|'lily_of_the_valley'|'lily_pad'|'lime_banner'|'lime_bed'|'lime_carpet'|'lime_concrete'|'lime_concrete_powder'|'lime_dye'|'lime_glazed_terracotta'|'lime_shulker_box'|'lime_stained_glass'|'lime_stained_glass_pane'|'lime_terracotta'|'lime_wall_banner'|'lime_wool'|'lingering_potion'|'llama_spawn_egg'|'loom'|'magenta_banner'|'magenta_bed'|'magenta_carpet'|'magenta_concrete'|'magenta_concrete_powder'|'magenta_dye'|'magenta_glazed_terracotta'|'magenta_shulker_box'|'magenta_stained_glass'|'magenta_stained_glass_pane'|'magenta_terracotta'|'magenta_wall_banner'|'magenta_wool'|'magma_block'|'magma_cream'|'magma_cube_spawn_egg'|'map'|'melon'|'melon_seeds'|'melon_slice'|'melon_stem'|'milk_bucket'|'minecart'|'mojang_banner_pattern'|'mooshroom_spawn_egg'|'mossy_cobblestone'|'mossy_cobblestone_slab'|'mossy_cobblestone_stairs'|'mossy_cobblestone_wall'|'mossy_stone_bricks'|'mossy_stone_brick_slab'|'mossy_stone_brick_stairs'|'mossy_stone_brick_wall'|'moving_piston'|'mule_spawn_egg'|'mushroom_stem'|'mushroom_stew'|'music_disc_11'|'music_disc_13'|'music_disc_blocks'|'music_disc_cat'|'music_disc_chirp'|'music_disc_far'|'music_disc_mall'|'music_disc_mellohi'|'music_disc_stal'|'music_disc_strad'|'music_disc_wait'|'music_disc_ward'|'mutton'|'mycelium'|'name_tag'|'nautilus_shell'|'netherrack'|'nether_brick'|'nether_bricks'|'nether_brick_fence'|'nether_brick_slab'|'nether_brick_stairs'|'nether_brick_wall'|'nether_portal'|'nether_quartz_ore'|'nether_star'|'nether_wart'|'nether_wart_block'|'note_block'|'oak_boat'|'oak_button'|'oak_door'|'oak_fence'|'oak_fence_gate'|'oak_leaves'|'oak_log'|'oak_planks'|'oak_pressure_plate'|'oak_sapling'|'oak_sign'|'oak_slab'|'oak_stairs'|'oak_trapdoor'|'oak_wall_sign'|'oak_wood'|'observer'|'obsidian'|'ocelot_spawn_egg'|'orange_banner'|'orange_bed'|'orange_carpet'|'orange_concrete'|'orange_concrete_powder'|'orange_dye'|'orange_glazed_terracotta'|'orange_shulker_box'|'orange_stained_glass'|'orange_stained_glass_pane'|'orange_terracotta'|'orange_tulip'|'orange_wall_banner'|'orange_wool'|'oxeye_daisy'|'packed_ice'|'painting'|'panda_spawn_egg'|'paper'|'parrot_spawn_egg'|'peony'|'petrified_oak_slab'|'phantom_membrane'|'phantom_spawn_egg'|'pig_spawn_egg'|'pillager_spawn_egg'|'pink_banner'|'pink_bed'|'pink_carpet'|'pink_concrete'|'pink_concrete_powder'|'pink_dye'|'pink_glazed_terracotta'|'pink_shulker_box'|'pink_stained_glass'|'pink_stained_glass_pane'|'pink_terracotta'|'pink_tulip'|'pink_wall_banner'|'pink_wool'|'piston'|'piston_head'|'player_head'|'player_wall_head'|'podzol'|'poisonous_potato'|'polar_bear_spawn_egg'|'polished_andesite'|'polished_andesite_slab'|'polished_andesite_stairs'|'polished_diorite'|'polished_diorite_slab'|'polished_diorite_stairs'|'polished_granite'|'polished_granite_slab'|'polished_granite_stairs'|'popped_chorus_fruit'|'poppy'|'porkchop'|'potato'|'potatoes'|'potion'|'potted_acacia_sapling'|'potted_allium'|'potted_azure_bluet'|'potted_bamboo'|'potted_birch_sapling'|'potted_blue_orchid'|'potted_brown_mushroom'|'potted_cactus'|'potted_cornflower'|'potted_dandelion'|'potted_dark_oak_sapling'|'potted_dead_bush'|'potted_fern'|'potted_jungle_sapling'|'potted_lily_of_the_valley'|'potted_oak_sapling'|'potted_orange_tulip'|'potted_oxeye_daisy'|'potted_pink_tulip'|'potted_poppy'|'potted_red_mushroom'|'potted_red_tulip'|'potted_spruce_sapling'|'potted_white_tulip'|'potted_wither_rose'|'powered_rail'|'prismarine'|'prismarine_bricks'|'prismarine_brick_slab'|'prismarine_brick_stairs'|'prismarine_crystals'|'prismarine_shard'|'prismarine_slab'|'prismarine_stairs'|'prismarine_wall'|'pufferfish'|'pufferfish_bucket'|'pufferfish_spawn_egg'|'pumpkin'|'pumpkin_pie'|'pumpkin_seeds'|'pumpkin_stem'|'purple_banner'|'purple_bed'|'purple_carpet'|'purple_concrete'|'purple_concrete_powder'|'purple_dye'|'purple_glazed_terracotta'|'purple_shulker_box'|'purple_stained_glass'|'purple_stained_glass_pane'|'purple_terracotta'|'purple_wall_banner'|'purple_wool'|'purpur_block'|'purpur_pillar'|'purpur_slab'|'purpur_stairs'|'quartz'|'quartz_block'|'quartz_pillar'|'quartz_slab'|'quartz_stairs'|'rabbit'|'rabbit_foot'|'rabbit_hide'|'rabbit_spawn_egg'|'rabbit_stew'|'rail'|'ravager_spawn_egg'|'redstone'|'redstone_block'|'redstone_lamp'|'redstone_ore'|'redstone_torch'|'redstone_wall_torch'|'redstone_wire'|'red_banner'|'red_bed'|'red_carpet'|'red_concrete'|'red_concrete_powder'|'red_dye'|'red_glazed_terracotta'|'red_mushroom'|'red_mushroom_block'|'red_nether_bricks'|'red_nether_brick_slab'|'red_nether_brick_stairs'|'red_nether_brick_wall'|'red_sand'|'red_sandstone'|'red_sandstone_slab'|'red_sandstone_stairs'|'red_sandstone_wall'|'red_shulker_box'|'red_stained_glass'|'red_stained_glass_pane'|'red_terracotta'|'red_tulip'|'red_wall_banner'|'red_wool'|'repeater'|'repeating_command_block'|'rose_bush'|'rotten_flesh'|'saddle'|'salmon'|'salmon_bucket'|'salmon_spawn_egg'|'sand'|'sandstone'|'sandstone_slab'|'sandstone_stairs'|'sandstone_wall'|'scaffolding'|'scute'|'seagrass'|'sea_lantern'|'sea_pickle'|'shears'|'sheep_spawn_egg'|'shield'|'shulker_box'|'shulker_shell'|'shulker_spawn_egg'|'silverfish_spawn_egg'|'skeleton_horse_spawn_egg'|'skeleton_skull'|'skeleton_spawn_egg'|'skeleton_wall_skull'|'skull_banner_pattern'|'slime_ball'|'slime_block'|'slime_spawn_egg'|'smithing_table'|'smoker'|'smooth_quartz'|'smooth_quartz_slab'|'smooth_quartz_stairs'|'smooth_red_sandstone'|'smooth_red_sandstone_slab'|'smooth_red_sandstone_stairs'|'smooth_sandstone'|'smooth_sandstone_slab'|'smooth_sandstone_stairs'|'smooth_stone'|'smooth_stone_slab'|'snow'|'snowball'|'snow_block'|'soul_sand'|'spawner'|'spectral_arrow'|'spider_eye'|'spider_spawn_egg'|'splash_potion'|'sponge'|'spruce_boat'|'spruce_button'|'spruce_door'|'spruce_fence'|'spruce_fence_gate'|'spruce_leaves'|'spruce_log'|'spruce_planks'|'spruce_pressure_plate'|'spruce_sapling'|'spruce_sign'|'spruce_slab'|'spruce_stairs'|'spruce_trapdoor'|'spruce_wall_sign'|'spruce_wood'|'squid_spawn_egg'|'stick'|'sticky_piston'|'stone'|'stonecutter'|'stone_axe'|'stone_bricks'|'stone_brick_slab'|'stone_brick_stairs'|'stone_brick_wall'|'stone_button'|'stone_hoe'|'stone_pickaxe'|'stone_pressure_plate'|'stone_shovel'|'stone_slab'|'stone_stairs'|'stone_sword'|'stray_spawn_egg'|'string'|'stripped_acacia_log'|'stripped_acacia_wood'|'stripped_birch_log'|'stripped_birch_wood'|'stripped_dark_oak_log'|'stripped_dark_oak_wood'|'stripped_jungle_log'|'stripped_jungle_wood'|'stripped_oak_log'|'stripped_oak_wood'|'stripped_spruce_log'|'stripped_spruce_wood'|'structure_block'|'structure_void'|'sugar'|'sugar_cane'|'sunflower'|'suspicious_stew'|'sweet_berries'|'sweet_berry_bush'|'tall_grass'|'tall_seagrass'|'terracotta'|'tipped_arrow'|'tnt'|'tnt_minecart'|'torch'|'totem_of_undying'|'trader_llama_spawn_egg'|'trapped_chest'|'trident'|'tripwire'|'tripwire_hook'|'tropical_fish'|'tropical_fish_bucket'|'tropical_fish_spawn_egg'|'tube_coral'|'tube_coral_block'|'tube_coral_fan'|'tube_coral_wall_fan'|'turtle_egg'|'turtle_helmet'|'turtle_spawn_egg'|'vex_spawn_egg'|'villager_spawn_egg'|'vindicator_spawn_egg'|'vine'|'void_air'|'wall_torch'|'wandering_trader_spawn_egg'|'water'|'water_bucket'|'wet_sponge'|'wheat'|'wheat_seeds'|'white_banner'|'white_bed'|'white_carpet'|'white_concrete'|'white_concrete_powder'|'white_dye'|'white_glazed_terracotta'|'white_shulker_box'|'white_stained_glass'|'white_stained_glass_pane'|'white_terracotta'|'white_tulip'|'white_wall_banner'|'white_wool'|'witch_spawn_egg'|'wither_rose'|'wither_skeleton_skull'|'wither_skeleton_spawn_egg'|'wither_skeleton_wall_skull'|'wolf_spawn_egg'|'wooden_axe'|'wooden_hoe'|'wooden_pickaxe'|'wooden_shovel'|'wooden_sword'|'writable_book'|'written_book'|'yellow_banner'|'yellow_bed'|'yellow_carpet'|'yellow_concrete'|'yellow_concrete_powder'|'yellow_dye'|'yellow_glazed_terracotta'|'yellow_shulker_box'|'yellow_stained_glass'|'yellow_stained_glass_pane'|'yellow_terracotta'|'yellow_wall_banner'|'yellow_wool'|'zombie_head'|'zombie_horse_spawn_egg'|'zombie_pigman_spawn_egg'|'zombie_spawn_egg'|'zombie_villager_spawn_egg'|'zombie_wall_head'|'legacy_air'|'legacy_stone'|'legacy_grass'|'legacy_dirt'|'legacy_cobblestone'|'legacy_wood'|'legacy_sapling'|'legacy_bedrock'|'legacy_water'|'legacy_stationary_water'|'legacy_lava'|'legacy_stationary_lava'|'legacy_sand'|'legacy_gravel'|'legacy_gold_ore'|'legacy_iron_ore'|'legacy_coal_ore'|'legacy_log'|'legacy_leaves'|'legacy_sponge'|'legacy_glass'|'legacy_lapis_ore'|'legacy_lapis_block'|'legacy_dispenser'|'legacy_sandstone'|'legacy_note_block'|'legacy_bed_block'|'legacy_powered_rail'|'legacy_detector_rail'|'legacy_piston_sticky_base'|'legacy_web'|'legacy_long_grass'|'legacy_dead_bush'|'legacy_piston_base'|'legacy_piston_extension'|'legacy_wool'|'legacy_piston_moving_piece'|'legacy_yellow_flower'|'legacy_red_rose'|'legacy_brown_mushroom'|'legacy_red_mushroom'|'legacy_gold_block'|'legacy_iron_block'|'legacy_double_step'|'legacy_step'|'legacy_brick'|'legacy_tnt'|'legacy_bookshelf'|'legacy_mossy_cobblestone'|'legacy_obsidian'|'legacy_torch'|'legacy_fire'|'legacy_mob_spawner'|'legacy_wood_stairs'|'legacy_chest'|'legacy_redstone_wire'|'legacy_diamond_ore'|'legacy_diamond_block'|'legacy_workbench'|'legacy_crops'|'legacy_soil'|'legacy_furnace'|'legacy_burning_furnace'|'legacy_sign_post'|'legacy_wooden_door'|'legacy_ladder'|'legacy_rails'|'legacy_cobblestone_stairs'|'legacy_wall_sign'|'legacy_lever'|'legacy_stone_plate'|'legacy_iron_door_block'|'legacy_wood_plate'|'legacy_redstone_ore'|'legacy_glowing_redstone_ore'|'legacy_redstone_torch_off'|'legacy_redstone_torch_on'|'legacy_stone_button'|'legacy_snow'|'legacy_ice'|'legacy_snow_block'|'legacy_cactus'|'legacy_clay'|'legacy_sugar_cane_block'|'legacy_jukebox'|'legacy_fence'|'legacy_pumpkin'|'legacy_netherrack'|'legacy_soul_sand'|'legacy_glowstone'|'legacy_portal'|'legacy_jack_o_lantern'|'legacy_cake_block'|'legacy_diode_block_off'|'legacy_diode_block_on'|'legacy_stained_glass'|'legacy_trap_door'|'legacy_monster_eggs'|'legacy_smooth_brick'|'legacy_huge_mushroom_1'|'legacy_huge_mushroom_2'|'legacy_iron_fence'|'legacy_thin_glass'|'legacy_melon_block'|'legacy_pumpkin_stem'|'legacy_melon_stem'|'legacy_vine'|'legacy_fence_gate'|'legacy_brick_stairs'|'legacy_smooth_stairs'|'legacy_mycel'|'legacy_water_lily'|'legacy_nether_brick'|'legacy_nether_fence'|'legacy_nether_brick_stairs'|'legacy_nether_warts'|'legacy_enchantment_table'|'legacy_brewing_stand'|'legacy_cauldron'|'legacy_ender_portal'|'legacy_ender_portal_frame'|'legacy_ender_stone'|'legacy_dragon_egg'|'legacy_redstone_lamp_off'|'legacy_redstone_lamp_on'|'legacy_wood_double_step'|'legacy_wood_step'|'legacy_cocoa'|'legacy_sandstone_stairs'|'legacy_emerald_ore'|'legacy_ender_chest'|'legacy_tripwire_hook'|'legacy_tripwire'|'legacy_emerald_block'|'legacy_spruce_wood_stairs'|'legacy_birch_wood_stairs'|'legacy_jungle_wood_stairs'|'legacy_command'|'legacy_beacon'|'legacy_cobble_wall'|'legacy_flower_pot'|'legacy_carrot'|'legacy_potato'|'legacy_wood_button'|'legacy_skull'|'legacy_anvil'|'legacy_trapped_chest'|'legacy_gold_plate'|'legacy_iron_plate'|'legacy_redstone_comparator_off'|'legacy_redstone_comparator_on'|'legacy_daylight_detector'|'legacy_redstone_block'|'legacy_quartz_ore'|'legacy_hopper'|'legacy_quartz_block'|'legacy_quartz_stairs'|'legacy_activator_rail'|'legacy_dropper'|'legacy_stained_clay'|'legacy_stained_glass_pane'|'legacy_leaves_2'|'legacy_log_2'|'legacy_acacia_stairs'|'legacy_dark_oak_stairs'|'legacy_slime_block'|'legacy_barrier'|'legacy_iron_trapdoor'|'legacy_prismarine'|'legacy_sea_lantern'|'legacy_hay_block'|'legacy_carpet'|'legacy_hard_clay'|'legacy_coal_block'|'legacy_packed_ice'|'legacy_double_plant'|'legacy_standing_banner'|'legacy_wall_banner'|'legacy_daylight_detector_inverted'|'legacy_red_sandstone'|'legacy_red_sandstone_stairs'|'legacy_double_stone_slab2'|'legacy_stone_slab2'|'legacy_spruce_fence_gate'|'legacy_birch_fence_gate'|'legacy_jungle_fence_gate'|'legacy_dark_oak_fence_gate'|'legacy_acacia_fence_gate'|'legacy_spruce_fence'|'legacy_birch_fence'|'legacy_jungle_fence'|'legacy_dark_oak_fence'|'legacy_acacia_fence'|'legacy_spruce_door'|'legacy_birch_door'|'legacy_jungle_door'|'legacy_acacia_door'|'legacy_dark_oak_door'|'legacy_end_rod'|'legacy_chorus_plant'|'legacy_chorus_flower'|'legacy_purpur_block'|'legacy_purpur_pillar'|'legacy_purpur_stairs'|'legacy_purpur_double_slab'|'legacy_purpur_slab'|'legacy_end_bricks'|'legacy_beetroot_block'|'legacy_grass_path'|'legacy_end_gateway'|'legacy_command_repeating'|'legacy_command_chain'|'legacy_frosted_ice'|'legacy_magma'|'legacy_nether_wart_block'|'legacy_red_nether_brick'|'legacy_bone_block'|'legacy_structure_void'|'legacy_observer'|'legacy_white_shulker_box'|'legacy_orange_shulker_box'|'legacy_magenta_shulker_box'|'legacy_light_blue_shulker_box'|'legacy_yellow_shulker_box'|'legacy_lime_shulker_box'|'legacy_pink_shulker_box'|'legacy_gray_shulker_box'|'legacy_silver_shulker_box'|'legacy_cyan_shulker_box'|'legacy_purple_shulker_box'|'legacy_blue_shulker_box'|'legacy_brown_shulker_box'|'legacy_green_shulker_box'|'legacy_red_shulker_box'|'legacy_black_shulker_box'|'legacy_white_glazed_terracotta'|'legacy_orange_glazed_terracotta'|'legacy_magenta_glazed_terracotta'|'legacy_light_blue_glazed_terracotta'|'legacy_yellow_glazed_terracotta'|'legacy_lime_glazed_terracotta'|'legacy_pink_glazed_terracotta'|'legacy_gray_glazed_terracotta'|'legacy_silver_glazed_terracotta'|'legacy_cyan_glazed_terracotta'|'legacy_purple_glazed_terracotta'|'legacy_blue_glazed_terracotta'|'legacy_brown_glazed_terracotta'|'legacy_green_glazed_terracotta'|'legacy_red_glazed_terracotta'|'legacy_black_glazed_terracotta'|'legacy_concrete'|'legacy_concrete_powder'|'legacy_structure_block'|'legacy_iron_spade'|'legacy_iron_pickaxe'|'legacy_iron_axe'|'legacy_flint_and_steel'|'legacy_apple'|'legacy_bow'|'legacy_arrow'|'legacy_coal'|'legacy_diamond'|'legacy_iron_ingot'|'legacy_gold_ingot'|'legacy_iron_sword'|'legacy_wood_sword'|'legacy_wood_spade'|'legacy_wood_pickaxe'|'legacy_wood_axe'|'legacy_stone_sword'|'legacy_stone_spade'|'legacy_stone_pickaxe'|'legacy_stone_axe'|'legacy_diamond_sword'|'legacy_diamond_spade'|'legacy_diamond_pickaxe'|'legacy_diamond_axe'|'legacy_stick'|'legacy_bowl'|'legacy_mushroom_soup'|'legacy_gold_sword'|'legacy_gold_spade'|'legacy_gold_pickaxe'|'legacy_gold_axe'|'legacy_string'|'legacy_feather'|'legacy_sulphur'|'legacy_wood_hoe'|'legacy_stone_hoe'|'legacy_iron_hoe'|'legacy_diamond_hoe'|'legacy_gold_hoe'|'legacy_seeds'|'legacy_wheat'|'legacy_bread'|'legacy_leather_helmet'|'legacy_leather_chestplate'|'legacy_leather_leggings'|'legacy_leather_boots'|'legacy_chainmail_helmet'|'legacy_chainmail_chestplate'|'legacy_chainmail_leggings'|'legacy_chainmail_boots'|'legacy_iron_helmet'|'legacy_iron_chestplate'|'legacy_iron_leggings'|'legacy_iron_boots'|'legacy_diamond_helmet'|'legacy_diamond_chestplate'|'legacy_diamond_leggings'|'legacy_diamond_boots'|'legacy_gold_helmet'|'legacy_gold_chestplate'|'legacy_gold_leggings'|'legacy_gold_boots'|'legacy_flint'|'legacy_pork'|'legacy_grilled_pork'|'legacy_painting'|'legacy_golden_apple'|'legacy_sign'|'legacy_wood_door'|'legacy_bucket'|'legacy_water_bucket'|'legacy_lava_bucket'|'legacy_minecart'|'legacy_saddle'|'legacy_iron_door'|'legacy_redstone'|'legacy_snow_ball'|'legacy_boat'|'legacy_leather'|'legacy_milk_bucket'|'legacy_clay_brick'|'legacy_clay_ball'|'legacy_sugar_cane'|'legacy_paper'|'legacy_book'|'legacy_slime_ball'|'legacy_storage_minecart'|'legacy_powered_minecart'|'legacy_egg'|'legacy_compass'|'legacy_fishing_rod'|'legacy_watch'|'legacy_glowstone_dust'|'legacy_raw_fish'|'legacy_cooked_fish'|'legacy_ink_sack'|'legacy_bone'|'legacy_sugar'|'legacy_cake'|'legacy_bed'|'legacy_diode'|'legacy_cookie'|'legacy_map'|'legacy_shears'|'legacy_melon'|'legacy_pumpkin_seeds'|'legacy_melon_seeds'|'legacy_raw_beef'|'legacy_cooked_beef'|'legacy_raw_chicken'|'legacy_cooked_chicken'|'legacy_rotten_flesh'|'legacy_ender_pearl'|'legacy_blaze_rod'|'legacy_ghast_tear'|'legacy_gold_nugget'|'legacy_nether_stalk'|'legacy_potion'|'legacy_glass_bottle'|'legacy_spider_eye'|'legacy_fermented_spider_eye'|'legacy_blaze_powder'|'legacy_magma_cream'|'legacy_brewing_stand_item'|'legacy_cauldron_item'|'legacy_eye_of_ender'|'legacy_speckled_melon'|'legacy_monster_egg'|'legacy_exp_bottle'|'legacy_fireball'|'legacy_book_and_quill'|'legacy_written_book'|'legacy_emerald'|'legacy_item_frame'|'legacy_flower_pot_item'|'legacy_carrot_item'|'legacy_potato_item'|'legacy_baked_potato'|'legacy_poisonous_potato'|'legacy_empty_map'|'legacy_golden_carrot'|'legacy_skull_item'|'legacy_carrot_stick'|'legacy_nether_star'|'legacy_pumpkin_pie'|'legacy_firework'|'legacy_firework_charge'|'legacy_enchanted_book'|'legacy_redstone_comparator'|'legacy_nether_brick_item'|'legacy_quartz'|'legacy_explosive_minecart'|'legacy_hopper_minecart'|'legacy_prismarine_shard'|'legacy_prismarine_crystals'|'legacy_rabbit'|'legacy_cooked_rabbit'|'legacy_rabbit_stew'|'legacy_rabbit_foot'|'legacy_rabbit_hide'|'legacy_armor_stand'|'legacy_iron_barding'|'legacy_gold_barding'|'legacy_diamond_barding'|'legacy_leash'|'legacy_name_tag'|'legacy_command_minecart'|'legacy_mutton'|'legacy_cooked_mutton'|'legacy_banner'|'legacy_end_crystal'|'legacy_spruce_door_item'|'legacy_birch_door_item'|'legacy_jungle_door_item'|'legacy_acacia_door_item'|'legacy_dark_oak_door_item'|'legacy_chorus_fruit'|'legacy_chorus_fruit_popped'|'legacy_beetroot'|'legacy_beetroot_seeds'|'legacy_beetroot_soup'|'legacy_dragons_breath'|'legacy_splash_potion'|'legacy_spectral_arrow'|'legacy_tipped_arrow'|'legacy_lingering_potion'|'legacy_shield'|'legacy_elytra'|'legacy_boat_spruce'|'legacy_boat_birch'|'legacy_boat_jungle'|'legacy_boat_acacia'|'legacy_boat_dark_oak'|'legacy_totem'|'legacy_shulker_shell'|'legacy_iron_nugget'|'legacy_knowledge_book'|'legacy_gold_record'|'legacy_green_record'|'legacy_record_3'|'legacy_record_4'|'legacy_record_5'|'legacy_record_6'|'legacy_record_7'|'legacy_record_8'|'legacy_record_9'|'legacy_record_10'|'legacy_record_11'|'legacy_record_12'} mc$material
 */

// library
var jx = {
   /**
    * 
    * @param {function} script 
    * @param {*} [exception] 
    * @returns {*}
    */
   all: function (script, exception) {
      return jx.ar(server.onlinePlayers).map(function (player) {
         if (exception && jx.player(exception).uuid === jx.player(player).uuid) return null;
         return script(jx.player(player));
      });
   },
   /**
    * 
    * @param {*} object 
    * @param {string} key 
    * @param {*} placeholder 
    * @returns {*}
    */
   auto: function (object, key, placeholder) {
      if (jx.ty(key) === 'string') {
         return object[key] !== void 0 ? object[key] : (object[key] = placeholder);
      } else {
         jx.ks(key).forEach(function (entry) {
            jx.auto(object, entry, key[entry]);
         });
         return object;
      }
   },
   api: {
      action: org.bukkit.event.block.Action,
      attribute: org.bukkit.attribute.Attribute,
      barColor: org.bukkit.boss.BarColor,
      barStyle: org.bukkit.boss.BarStyle,
      blockFace: org.bukkit.block.BlockFace,
      enchantment: org.bukkit.enchantments.Enchantment,
      entityType: org.bukkit.entity.EntityType,
      equipmentSlot: org.bukkit.inventory.EquipmentSlot,
      gameRule: org.bukkit.GameRule,
      itemFlag: org.bukkit.inventory.ItemFlag,
      lootTables: org.bukkit.loot.LootTables,
      material: org.bukkit.Material,
      operation: org.bukkit.attribute.AttributeModifier.Operation,
      potionEffectType: org.bukkit.potion.PotionEffectType,
      sound: org.bukkit.Sound,
      soundCategory: org.bukkit.SoundCategory
   },
   /**
    * 
    * @param {*} input 
    * @returns {array}
    */
   ar: function (input) {
      if (input.forEachRemaining) {
         var array = [];
         input.forEachRemaining(function (value) {
            array.push(value);
         });
         return array;
      } else if (input.forEach) {
         var array = [];
         input.forEach(function (value) {
            array.push(value);
         });
         return array;
      } else {
         return [].slice.call(input);
      }
   },
   /**
    * 
    * @param {*} player 
    * @param {string} [title] 
    * @param {number} [progress] 
    * @param {{
    *    color: mc$barColor,
    *    segments: mc$barStyle
    * }} [options]
    * @returns {*}
    */
   bar: function (player, title, progress, options) {
      player = jx.player(player);
      key = player.uuid;
      if (options.key) key += '.' + options.key;
      key = new org.bukkit.NamespacedKey('jx', key);
      options = options || {};
      color = jx.api.barColor[options.color || 'white'];
      style = jx.api.barStyle[options.segments || 'one'];
      var bar = server.getBossBar(key) || server.createBossBar(key, title || '', color, style, []);
      if (title !== void 0) bar.title = title;
      if (progress !== void 0) bar.progress = progress;
      if (options.color !== void 0) bar.color = color;
      if (options.segments !== void 0) bar.style = style;
      bar.addPlayer(player.instance);
      return player;
   },
   /**
    * @callback block$data
    * @param {string} [property] 
    * @param {*} [value] 
    * @returns {*}
    */
   /**
    * @callback block$glow
    * @param {boolean} [value]
    * @returns {*}
    */
   /**
    * @callback block$mod
    * @param {{
    *    data: {}
    * }} data 
    * @returns {item$return}
    */
   /**
    * @typedef {{
    *    instance: *,
    *    data: block$data,
    *    glow: block$glow,
    *    mod: block$mod
    * }} block$return
    */
   /**
    * 
    * @param {*} block 
    * @returns {block$return}
    */
   block: function (block) {
      var that = {
         get instance () {
            return block;
         }
      };
      that.glow = function (value) {
         var glow = false;
         $('@e[type=shulker,tag=jx.block.glow]').forEach(function (shulker) {
            if (!glow && jx.dist(shulker.location, block.location) < 1) glow = shulker;
         });
         if (value === true) {
            var shulker = $('??shulker', block.location);
            shulker.setAI(false);
            shulker.silent = true;
            shulker.glowing = true;
            shulker.invulnerable = true;
            $(shulker).tag('jx.block.glow', true);
            $(shulker).effect('invisibility', 1, -1);
            return that;
         } else if (value === false) {
            glow.remove();
            return that;
         } else {
            return glow;
         }
      };
      that.data = function (key, value) {
         var meta = block.state;
         var type = org.bukkit.persistence.PersistentDataType.STRING;
         var container = meta.persistentDataContainer;
         var set = null;
         if (container) {
            set = container.raw.entrySet();
         } else {
            // note: need better data storage method
            var loc = block.location;
            var node = [ loc.x, loc.y, loc.z ].join(':');
            set = jx.data.server('pdc', loc.world.name, node);
            container = {
               set: function (key, x, value) {
                  jx.data.server('pdc', loc.world.name, node)[key.key] = value;
               },
               remove: function (key) {
                  jx.data.server('pdc', loc.world.name, node)[key.key] = void 0;
               }
            };
         }
         var entries = {};
         jx.ar(set).forEach(function (entry) {
            var decoded = decodeURIComponent(entry.value.toString().slice(1, -1));
            if (entry.key.startsWith('jx:')) entries[entry.key.slice(3)] = decoded;
         });
         if (key) {
            if (value !== void 0) {
               var key = new org.bukkit.NamespacedKey('jx', key);
               if (value === null) container.remove(key);
               else container.set(key, type, encodeURIComponent(value.toString()));
               meta.update(true);
            } else {
               return entries[key];
            }
         } else {
            return entries;
         }
      };
      that.mod = function (options) {
         if (options.data) {
            jx.ks(options.data).forEach(function (key) {
               that.data(key, options.data[key]);
            });
         }
         return that;
      };
      return that;
   },
   /**
    * 
    * @param {string} text 
    * @param {string} [delimiter] 
    * @returns {string}
    */
   camel: function (text, delimiter) {
      var pascal = jx.pascal(text, delimiter);
      return jx.lc(pascal[0]) + pascal.slice(1);
   },
   /**
    * 
    * @param {*} subject 
    * @param {string} filter 
    * @returns {boolean}
    */
   class: function (subject, filter) {
      if (!subject.interfaces) return null;
      var match = false;
      while (subject.interfaces.length && match === false) {
         if (subject.name.contains(filter)) var match = true;
         else subject = subject.interfaces[0];
      }
      return match;
   },
   /**
    * 
    * @param {string} text 
    * @returns {string}
    */
   color: function (text) {
      return text.toString().split('&').join('\xA7').split('\xA7\xA7').join('&');
   },
   /**
    * 
    * @param {string} command 
    * @returns {*}
    */
   console: function (command) {
      return server.dispatchCommand(server.consoleSender, command.toString());
   },
   data: {
      store: { server: {}, player: {} },
      /**
       * 
       * @param {string} topic 
       * @returns {*}
       */
      server: function (topic) {
         var store = jx.data.store.server;
         if (!store[topic]) store[topic] = persist('jx-server.' + topic);
         return jx.traverse(store[topic], jx.ar(arguments).slice(1));
      },
      /**
       * 
       * @param {*} player 
       * @returns {*}
       */
      player: function (player, topic) {
         player = jx.player(player);
         var store = jx.auto(jx.data.store.player, player.uuid, {});
         if (!store[topic]) store[topic] = persist('jx-player.' + player.uuid + '.' + topic);
         return jx.traverse(store[topic], jx.ar(arguments).slice(2));
      }
   },
   /**
    * 
    * @param {*} loc1 
    * @param {*} loc2 
    * @returns {number}
    */
   dist: function (loc1, loc2) {
      if (loc1.world !== loc2.world) return Infinity;
      var deltaX = loc1.x - loc2.x;
      var deltaY = loc1.y - loc2.y;
      var deltaZ = loc1.z - loc2.z;
      return Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
   },
   /**
    * @callback entity$effect
    * @param {mc$potionEffectType} [type] 
    * @param {number} [level] 
    * @param {number} [time] 
    * @param {force} [force] 
    * @returns {*}
    */
   /**
    * @callback entity$attribute
    * @param {mc$attribute} [type] 
    * @param {number} [level] 
    * @returns {*}
    */
   /**
    * @callback entity$equip
    * @param {{
    *    mainhand: *
    *    offhand: *
    *    helmet: *
    *    chestplate: *
    *    leggings: *
    *    boots: *
    * }} [equipment] equipment data to insert, omit to clear equipment
    * @returns {entity$return}
    */
   /**
    * @callback entity$heal
    * @param {number} [amount] 
    * @returns {entity$return}
    */
   /**
    * @callback entity$feed
    * @param {number} [amount] 
    * @returns {entity$return}
    */
   /**
    * @callback entity$damage
    * @param {number} [amount] 
    * @returns {entity$return}
    */
   /**
    * @callback entity$kill
    * @returns {entity$return}
    */
   /**
    * @callback entity$clear
    * @returns {entity$return}
    */
   /**
    * @callback entity$give
    * @param {*} stack 
    * @returns {entity$return}
    */
   /**
    * @callback entity$take
    * @param {mc$item} type 
    * @returns {entity$return}
    */
   /**
    * @callback entity$tag
    * @param {string} tag 
    * @param {boolean} add 
    * @returns {entity$return}
    */
   /**
    * @callback entity$milk
    * @returns {entity$return}
    */
   /**
    * @callback entity$velo
    * @param {string} direction 
    * @param {number} amount 
    * @returns {entity$return}
    */
   /**
    * @callback entity$mod
    * @param {{
    *    health: number,
    *    equipment: *,
    *    effects: *,
    *    attributes: *
    * }} data the data to apply to the entity
    * @returns {entity$return}
    */
   /**
    * @typedef {{
    *    instance: *,
    *    type: mc$entityType,
    *    effect: entity$effect,
    *    attribute: entity$attribute,
    *    equip: entity$equip,
    *    heal: entity$heal,
    *    feed: entity$feed,
    *    damage: entity$damage,
    *    clear: entity$clear,
    *    give: entity$give,
    *    take: entity$take,
    *    tag: entity$tag,
    *    milk: entity$milk,
    *    velo: entity$velo,
    *    mod: entity$mod
    * }} entity$return
    */
   /**
    * 
    * @param {mc$entityType} type 
    * @param {*} location 
    * @returns {entity$return}
    */
   entity: function (entity, location) {
      if (jx.ty(entity) === 'string') {
         return location.world.spawnEntity(location, jx.api.entityType[entity.toString()]);
      }
      var that = {
         get instance () {
            return entity;
         }
      };
      that.type = jx.id(entity);
      that.effect = function (type, level, time, force) {
         if (type) {
            type = jx.api.potionEffectType[type.toString()];
            if (level) {
               time = Number(time || -1);
               var ticks = time === -1 ? 2147483647 : time * 20;
               var effect = type.createEffect(ticks, Number(level == null ? 1 : level) - 1);
               entity.addPotionEffect(effect, force || true);
               return that;
            } else if (Number(level) === 0) {
               entity.removePotionEffect(type);
               return that;
            } else {
               return entity.getPotionEffect(type);
            }
         } else {
            var output = {};
            jx.ar(org.bukkit.potion.PotionEffectType.values()).forEach(function (entry) {
               var effect = entity.getPotionEffect(entry);
               if (effect) {
                  output[jx.api.potionEffectType[effect.type.name.toString()]] = {
                     time: Number(effect.duration / 20),
                     level: Number(effect.amplifier)
                  };
               }
            });
            return output;
         }
      };
      that.attribute = function (type, value) {
         if (type) {
            type = type.toString();
            if (value != null) {
               entity.getAttribute(jx.api.attribute[type]).baseValue = Number(value);
               return that;
            } else {
               return Number(entity.getAttribute(jx.api.attribute[type]).baseValue);
            }
         } else {
            return jx.ar(org.bukkit.attribute.Attribute.values()).map(function (entry) {
               return Number(entity.getAttribute(entry).baseValue);
            });
         }
      };
      that.equip = function (equipment) {
         equipment = equipment || {};
         entity.equipment.itemInMainHand = equipment.mainhand || null;
         entity.equipment.itemInOffHand = equipment.offhand || null;
         entity.equipment.helmet = equipment.helmet || null;
         entity.equipment.chestplate = equipment.chestplate || null;
         entity.equipment.leggings = equipment.leggings || null;
         entity.equipment.boots = equipment.boots || null;
         return that;
      };
      that.heal = function (amount) {
         amount = Number(amount || entity.maxHealth);
         amount = entity.health + amount > entity.maxHealth ? entity.maxHealth : entity.health + amount;
         entity.health = amount < 0 ? 0 : amount;
         return that;
      };
      that.feed = function (amount) {
         amount = Number(amount || 20);
         amount = entity.foodLevel + amount > 20 ? 20 : entity.foodLevel + amount;
         entity.foodLevel = amount < 0 ? 0 : amount;
         return that;
      };
      that.damage = function (amount) {
         entity.damage(Number(amount));
         return that;
      };
      that.kill = function () {
         entity.damage(2147483647);
         return that;
      };
      that.clear = function () {
         entity.inventory.clear();
         return that;
      };
      that.give = function (stack) {
         entity.inventory.addItem(stack);
         return that;
      };
      that.take = function (type) {
         entity.inventory.remove(jx.api.material[type.toString()]);
         return that;
      };
      that.tag = function (tag, value) {
         if (value === void 0) return jx.ar(entity.scoreboardTags).indexOf(tag) !== -1;
         if (value === true) entity.addScoreboardTag(tag.toString());
         else entity.removeScoreboardTag(tag.toString());
         return that;
      };
      that.milk = function () {
         jx.ar(org.bukkit.potion.PotionEffectType.values()).forEach(function (entry) {
            if (entity.getPotionEffect(entry)) entity.removePotionEffect(entry);
         });
      };
      that.velo = function (direction, value) {
         var velocity = entity.velocity;
         if (direction !== void 0) {
            if (value !== void 0) {
               velocity[direction] += value;
               entity.velocity = velocity;
               return that;
            } else {
               return velocity[direction];
            }
         } else {
            return {
               x: velocity.x,
               y: velocity.y,
               z: velocity.z
            };
         }
      };
      that.mod = function (options) {
         if (options.health) {
            options.health = Number(options.health);
            entity.maxHealth = options.health;
            entity.health = options.health;
         }
         if (options.equipment) that.equip(options.equipment);
         if (options.effects) {
            jx.ks(options.effects).forEach(function (effect) {
               var value = options.effects[effect];
               that.effect(effect, Number(value.level || 1), Number(value.time || -1), true);
            });
         }
         if (options.attributes) {
            jx.ks(options.attributes).forEach(function (attribute) {
               that.attribute(attribute, Number(options.attributes[attribute]));
            });
         }
         return that;
      };
      return that;
   },
   event: {
      store: [],
      /**
       * 
       * @param {string} event 
       * @param {function} listener 
       * @returns {number}
       */
      on: function (event, listener) {
         var listeners = jx.auto(jx.event.store, event, []);
         listeners.push(listener);
         if (listeners.length === 1) {
            server.pluginManager.registerEvent(
               eval(event).class,
               new (Java.extend(org.bukkit.event.Listener, {}))(),
               org.bukkit.event.EventPriority.HIGHEST,
               function (x, data) {
                  try {
                     jx.event.fire(event, data);
                  } catch (error) {
                     var message = [
                        '',
                        jx.color('&f----------------------------------------------------------------&c'),
                        event.split('.').slice(-1)[0] + ':' + error.toString().split(':').slice(1).join(':') + '!'
                     ];
                     if (error.stack) {
                        var trace = error.stack.split('\n\tat').slice(1).map(function (segment) {
                           var sections = segment.split(':');
                           var line = Number(sections.slice(-1)[0].slice(0, -1)) - 1;
                           return sections.slice(0, -1).join(':') + ':' + line + ')';
                        });
                        message.push(jx.pf(trace, jx.color('&c-->')).join('\n'));
                     }
                     message.push(jx.color('&f----------------------------------------------------------------'));
                     console.log(message.join('\n'));
                  }
               },
               server.pluginManager.getPlugin('scriptcraft')
            );
         }
      },
      /**
       * 
       * @param {string} event 
       * @param {*} [data] 
       * @returns {array}
       */
      fire: function (event, data) {
         var listeners = jx.auto(jx.event.store, event, []);
         return listeners.map(function (listener) {
            return listener(data);
         });
      }
   },
   /**
    * 
    * @param {string} [name] 
    * @returns {{
    *    parent: group$parent,
    *    permission: group$permission,
    *    player: group$player,
    *    property: group$property,
    * }}
    */
   group: function (name) {
      if (!name) {
         return jx.all(function (player) {
            var instance = player.instance;
            jx.ar(instance.effectivePermissions).forEach(function (info) {
               try {
                  // note: avoid error instead of using try/catch if possible
                  if (info.attachment) instance.removeAttachment(info.attachment);
               } catch (err) {}
            });
            var groups = jx.data.server('group');
            var perms = [];
            jx.vs(groups).forEach(function (group) {
               if (!group.players[player.uuid]) return null;
               jx.ks(group.parents).forEach(function (name) {
                  if (!group.parents[name]) return null;
                  var parent = groups[name];
                  jx.ks(parent.permissions).sort().forEach(function (node) {
                     if (parent.permissions[node] != null) perms.push([ node, parent.permissions[node] ]);
                  });
               });
               jx.ks(group.permissions).sort().forEach(function (node) {
                  if (group.permissions[node] != null) perms.push([ node, group.permissions[node] ]);
               });
            });
            jx.ks(player.data('perms')).forEach(function (node) {
               perms.push([ node, player.data('perms')[node] ]);
            });
            perms.forEach(function (perm) {
               instance.addAttachment(server.pluginManager.getPlugin('scriptcraft'), perm[0], perm[1]);
            });
         });
      }
      var groups = jx.data.server('group');
      var group = jx.auto(groups, name, {
         parents: {},
         permissions: {},
         players: {},
         properties: {}
      });
      return {
         /**
           * @callback group$parent$add
           */
         /**
           * @callback group$parent$remove
           */
         /**
           * @callback group$parent$state
           */
         /**
           * @callback group$parent
           * @param {string} name 
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
                  jx.group();
               },
               remove: function () {
                  group.parents[name] = void 0;
                  jx.group();
               },
               state: function () {
                  return group.parents[name];
               }
            };
         },
         /**
           * @callback group$permission$allow
           */
         /**
           * @callback group$permission$deny
           */
         /**
           * @callback group$permission$remove
           */
         /**
           * @callback group$permission$state
           */
         /**
           * @callback group$permission
           * @param {string} name 
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
                  jx.group();
               },
               deny: function () {
                  group.permissions[node] = false;
                  jx.group();
               },
               remove: function () {
                  group.permissions[node] = void 0;
                  jx.group();
               },
               state: function () {
                  return group.permissions[node];
               }
            };
         },
         /**
           * @callback group$player$attach
           */
         /**
           * @callback group$player$detach
           */
         /**
           * @callback group$player$state
           */
         /**
           * @callback group$player
           * @param {*} player 
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
                  jx.group();
               },
               detach: function () {
                  group.players[uuid] = void 0;
                  jx.group();
               },
               state: function () {
                  return group.players[uuid];
               }
            };
         },
         /**
           * @callback group$property$set
           * @param {*} value 
           */
         /**
           * @callback group$property$state
           */
         /**
           * @callback group$property
           * @param {*} player 
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
   },

   /**
    * 
    * @param {*} object 
    * @returns {string}
    */
   id: function (object) {
      var type = jx.ty(object);
      if (type.contains('.entity.')) {
         return jx.api.entityType[object.type];
      } else if (type.contains('.block.') || type.contains('ItemStack')) {
         return jx.api.material[object.type];
      }
   },
   /**
    * @callback item$enchantment
    * @param {} [type] 
    * @param {number} [level] 
    * @returns {*}
    */
   /**
    * @callback item$attribute
    * @param {mc$enchantment} [type] 
    * @param {number} [value] 
    * @param {mc$operation} [operation] 
    * @param {mc$equipmentSlot} [slot] 
    * @returns {*}
    */
   /**
    * @callback item$meta
    * @param {string} property 
    * @param {*} [value] 
    * @returns {*}
    */
   /**
    * @callback item$amount
    * @param {number} [amount] 
    * @returns {*}
    */
   /**
    * @callback item$flag
    * @param {mc$itemFlag} flag 
    * @returns {*}
    */
   /**
    * @callback item$data
    * @param {string} [property] 
    * @param {*} [value] 
    * @returns {*}
    */
   /**
    * @callback item$mod
    * @param {{
    *    amount: number,
    *    meta: {},
    *    flags: [],
    *    enchantments: *,
    *    attributes: {
    *       name: mc$attribute,
    *       value: number,
    *       operation: mc$operation,
    *       slot: mc$equipmentSlot
    *    }[],
    *    data: {}
    * }} data
    * @returns {item$return}
    */
   /**
    * @typedef {{
    *    instance: *,
    *    type: mc$item,
    *    enchantment: item$enchantment,
    *    attribute: item$attribute,
    *    meta: item$meta,
    *    amount: item$amount,
    *    flag: item$flag,
    *    data: item$data,
    *    mod: item$mod
    * }} item$return
    */
   /**
    * 
    * @param {string} type 
    * @param {number} [amount] 
    * @returns {item$return}
    */
   item: function (item, amount) {
      if (jx.ty(item) === 'string') {
         return new org.bukkit.inventory.ItemStack(jx.api.material[item.toString()], Number(amount) || 1);
      }
      var that = {
         get instance () {
            return item;
         }
      };
      that.type = jx.id(item);
      that.enchantment = function (type, level) {
         var enchantments = {};
         item.enchantments.entrySet().forEach(function (entry) {
            var name = jx.api.enchantment[entry.key.name];
            enchantments[name] = Number(entry.value);
         });
         if (type) {
            type = type.toString();
            if (level != null) {
               item.addUnsafeEnchantment(jx.api.enchantment[type], Number(level));
               return that;
            } else {
               return enchantments[type];
            }
         } else {
            return enchantments;
         }
      };
      that.attribute = function (type, value, operation, slot) {
         var meta = item.itemMeta;
         if (type) {
            type = type.toString();
            if (value != null) {
               var uuid = java.util.UUID.randomUUID();
               var op = jx.api.operation[(operation || 'add_number').toString()];
               var slot = slot ? jx.api.equipmentSlot[slot.toString()] : null;
               var modifier = new org.bukkit.attribute.AttributeModifier(uuid, type, value, op, slot);
               meta.addAttributeModifier(jx.api.attribute[type], modifier);
               item.itemMeta = meta;
               return that;
            } else {
               meta.getAttributeModifiers(jx.api.attribute[type]);
            }
         } else {
            if (meta.attributeModifiers) {
               return jx.ar(meta.attributeModifiers.values()).map(function (modifier) {
                  return {
                     name: modifier.name,
                     amount: modifier.amount,
                     operation: jx.api.operation[modifier.operation],
                     slot: jx.api.equipmentSlot[modifier.slot || ''] || null
                  };
               });
            } else {
               return [];
            }
         }
      };
      that.meta = function (property, value) {
         var meta = item.itemMeta;
         if (property) {
            var name = jx.pascal(property.toString());
            if (value != null) {
               meta['set' + name](value);
               item.itemMeta = meta;
               return that;
            } else {
               return meta[property];
            }
         } else {
            return meta;
         }
      };
      that.amount = function (amount) {
         if (amount != null) {
            item.amount = Number(amount);
            return that;
         } else {
            return Number(item.amount);
         }
      };
      that.flag = function (type) {
         var meta = item.itemMeta;
         if (type) {
            meta.addItemFlags([ jx.api.itemFlag['hide_' + type] ]);
            item.itemMeta = meta;
            return that;
         } else {
            return jx.ar(meta.itemFlags).map(function (flag) {
               return jx.api.itemFlag[flag.toString()].split('hide_')[1];
            });
         }
      };
      that.data = function (key, value) {
         var meta = item.itemMeta;
         var type = org.bukkit.persistence.PersistentDataType.STRING;
         var container = meta.persistentDataContainer;
         var entries = {};
         jx.ar(container.raw.entrySet()).forEach(function (entry) {
            var decoded = decodeURIComponent(entry.value.toString().slice(1, -1));
            if (entry.key.startsWith('jx:')) entries[entry.key.slice(3)] = decoded;
         });
         if (key) {
            if (value !== void 0) {
               var key = new org.bukkit.NamespacedKey('jx', key);
               if (value === null) container.remove(key);
               else container.set(key, type, encodeURIComponent(value.toString()));
               item.itemMeta = meta;
               return that;
            } else {
               return entries[key];
            }
         } else {
            return entries;
         }
      };
      that.mod = function (options) {
         if (options.amount) {
            that.amount = options.amount;
         }
         if (options.flags) {
            options.flags.forEach(function (flag) {
               that.flag(flag);
            });
         }
         if (options.meta) {
            jx.ks(options.meta).forEach(function (property) {
               that.meta(property, options.meta[property]);
            });
         }
         if (options.enchantments) {
            jx.ks(options.enchantments).forEach(function (enchantment) {
               that.enchantment(enchantment, Number(options.enchantments[enchantment]));
            });
         }
         if (options.attributes) {
            options.attributes.forEach(function (attribute) {
               that.attribute(attribute.name, attribute.value, attribute.operation, attribute.slot);
            });
         }
         if (options.data) {
            jx.ks(options.data).forEach(function (key) {
               that.data(key, options.data[key]);
            });
         }
         return that;
      };
      return that;
   },
   json: {
      /**
       * @typedef {{
       *    format: 'component',
       *    bold: boolean,
       *    click: {
       *       action: 'open_url' | 'open_file' | 'run_command' | 'suggest_command' | 'change_page' | 'copy_to_clipboard',
       *       value: string
       *    },
       *    extra: textComponentJSON[],
       *    hover: {
       *       action: 'show_text' | 'show_achievement' | 'show_item' | 'show_entity',
       *       value: textComponentJSON[]
       *    },
       *    italic: boolean,
       *    obfuscated: boolean,
       *    strikethrough: boolean,
       *    text: string,
       *    underline: boolean
       * }} json$component
       */
      component: {
         /**
          * 
          * @param {*} component 
          * @returns {json$component}
          */
         save: function (component) {
            var output = {
               format: 'component',
               bold: component.bold,
               italic: component.italic,
               obfuscated: component.obfuscated,
               strikethrough: component.strikethrough,
               text: component.text,
               underline: component.underline
            };
            if (component.clickEvent) {
               output.click = {
                  action: jx.lc(component.clickEvent.action),
                  value: component.clickEvent.value
               };
            }
            if (component.hoverEvent) {
               output.hover = {
                  action: jx.lc(component.hoverEvent.action),
                  value: jx.ar(component.hoverEvent.value).map(jx.json.component.save)
               };
            }
            if (component.colorRaw) output.color = component.colorRaw.name();
            if (component.extra) output.extra = jx.ar(component.extra).map(jx.json.component.save);
            return output;
         },
         /**
          * 
          * @param {json$component} json 
          * @returns {*}
          */
         load: function (json) {
            var color = Java.type('net.md_5.bungee.api.ChatColor');
            var click = Java.type('net.md_5.bungee.api.chat.ClickEvent');
            var hover = Java.type('net.md_5.bungee.api.chat.HoverEvent');
            var component = Java.type('net.md_5.bungee.api.chat.TextComponent');
            var clickAction = Java.type('net.md_5.bungee.api.chat.ClickEvent$Action');
            var hoverAction = Java.type('net.md_5.bungee.api.chat.HoverEvent$Action');
            var output = new component(json.text);
            output.bold = json.bold;
            output.italic = json.italic;
            output.obfuscated = json.obfuscated;
            output.strikethrough = json.strikethrough;
            output.underline = json.underline;
            if (json.click) {
               var value = json.click.value;
               output.clickEvent = new click(clickAction[jx.uc(json.click.action)], value);
            }
            if (json.hover) {
               var value = json.hover.value.map(jx.json.component.load);
               output.hoverEvent = new hover(hoverAction[jx.uc(json.hover.action)], value);
            }
            if (json.color) output.color = color[json.color];
            if (json.extra) output.extra = json.extra.map(jx.json.component.load);
            return output;
         }
      },
      /**
       * @typedef {{
       *    format: 'inventory',
       *    data: json$item[]
       * }} json$inventory
       */
      inventory: {
         /**
          * 
          * @param {*} inventory 
          * @returns {json$inventory}
          */
         save: function (inventory) {
            var output = { format: 'inventory', items: [] };
            jx.ar(inventory).forEach(function (item, slot) {
               if (item != null) output.items[slot] = $([ item ]);
            });
            return output;
         },
         /**
          * 
          * @param {*} inventory 
          * @param {json$inventory} data 
          * @returns {*}
          */
         load: function (data, inventory) {
            inventory.clear();
            /* compat */ if (!data.items) data.items = jx.vs(data);
            data.items.forEach(function (item, index) {
               if (item != null) inventory.setItem(index, jx.json.item.load(item));
            });
            return inventory;
         }
      },
      /**
       * @typedef {{
       *    format: 'item',
       *    type: mc$material,
       *    amount: number,
       *    name: string,
       *    ench: *,
       *    attr: *,
       *    flag: mc$itemFlag[],
       *    data: *,
       *    ubab: boolean,
       *    damage: number,
       *    cost: number,
       *    unique: *,
       *    inventory: json$inventory
       * }} json$item
       */
      item: {
         /**
          * 
          * @param {*} stack 
          * @returns {json$item}
          */
         save: function (stack) {
            var data = { format: 'item' };
            var meta = stack.itemMeta;
            data.type = jx.id(stack) || 'air';
            data.amount = stack.amount;
            data.name = meta.displayName || void 0;
            data.ench = $(stack).enchantment();
            data.attr = $(stack).attribute();
            data.flag = $(stack).flag();
            data.data = $(stack).data();
            if (data.amount === 1) data.amount = void 0;
            if (!jx.ks(data.ench).length) data.ench = void 0;
            if (!data.attr.length) data.attr = void 0;
            if (!data.flag.length) data.flag = void 0;
            if (meta.unbreakable) data.ubab = true;
            if (meta.lore) data.lore = jx.ar(meta.lore);
            if (!jx.ks(data.data).length) data.data = void 0;
            if (meta.damage) data.damage = meta.damage;
            if (meta.repairCost) data.cost = meta.repairCost;
            switch (jx.id(stack)) {
               case 'enchanted_book':
                  data.unique = {};
                  jx.ar(meta.storedEnchants.entrySet()).map(function (key) {
                     data.unique[key.key.key.key] = key.value;
                  });
                  break;
               case 'potion':
               case 'tipped_arrow':
                  var pot = meta.basePotionData;
                  data.unique = { type: pot.type, extended: pot.extended, upgraded: pot.upgraded };
                  break;
               case 'writable_book':
               case 'written_book':
                  data.unique = {
                     pages: jx.ar(meta.spigot().pages).map(function (page) {
                        return jx.ar(page).map(jx.json.component.save);
                     }),
                     title: meta.title,
                     author: meta.author,
                     generation: meta.generation
                  };
                  break;
               case 'filled_map':
                  data.unique = meta.mapId;
                  break;
               case 'firework_star':
                  if (meta.effect) {
                     data.unique = {
                        type: jx.lc(meta.effect.type),
                        colors: jx.ar(meta.effect.colors).map(function (color) {
                           return { red: color.red, green: color.green, blue: color.blue };
                        }),
                        fades: jx.ar(meta.effect.fadeColors).map(function (color) {
                           return { red: color.red, green: color.green, blue: color.blue };
                        }),
                        flicker: meta.effect.hasFlicker(),
                        trail: meta.effect.hasTrail()
                     };
                  }
                  break;
               case 'spawner':
                  // note: add support for spawnData
                  var state = meta.blockState;
                  data.unique = {
                     type: jx.lc(state.spawnedType.name()),
                     first: state.delay,
                     nearby: state.maxNearbyEntities,
                     max_next: state.maxSpawnDelay,
                     min_next: state.minSpawnDelay,
                     active_dist: state.requiredPlayerRange,
                     count: state.spawnCount,
                     range: state.spawnRange
                  };
                  break;
               case 'firework_rocket':
                  data.unique = {
                     power: meta.power,
                     effects: jx.ar(meta.effects).map(function (effect) {
                        return {
                           type: jx.lc(effect.type),
                           colors: jx.ar(effect.colors).map(function (color) {
                              return { red: color.red, green: color.green, blue: color.blue };
                           }),
                           fades: jx.ar(effect.fadeColors).map(function (color) {
                              return { red: color.red, green: color.green, blue: color.blue };
                           }),
                           flicker: effect.hasFlicker(),
                           trail: effect.hasTrail()
                        };
                     })
                  };
                  break;
               case 'player_head':
                  data.unique = { textures: [] };
                  if (meta.owningPlayer) data.unique.uuid = meta.owningPlayer.uniqueId.toString();
                  if (meta.playerProfile) {
                     data.unique.name = meta.playerProfile.name;
                     jx.ar(meta.playerProfile.properties).forEach(function (entry) {
                        if (entry.name === 'textures') data.unique.textures.push(entry.value);
                     });
                  }
                  break;
            }
            if (jx.id(stack).endsWith('banner')) {
               data.unique = {};
               jx.ar(meta.patterns).forEach(function (pattern, key) {
                  data.unique[key] = { color: pattern.color.name(), shape: pattern.pattern.name() };
               });
            }
            if (meta.blockState && meta.blockState.inventory) {
               data.inventory = $([ meta.blockState.inventory ]);
            }
            return data;
         },
         /**
          * 
          * @param {json$item} data 
          * @returns {*}
          */
         load: function (data) {
            var stack = jx.item(data.type, data.amount || 1);
            if (data.name) $(stack).meta('displayName', data.name);
            jx.ks(data.ench || {}).forEach(function (name) {
               $(stack).enchantment(name, data.ench[name]);
            });
            jx.ks(data.data || {}).forEach(function (key) {
               $(stack).data(key, data.data[key]);
            });
            (data.attr || []).forEach(function (modifier) {
               $(stack).attribute(modifier.name, modifier.amount, modifier.operation, modifier.slot);
            });
            (data.flag || []).forEach(function (flag) {
               $(stack).flag(flag);
            });
            var meta = stack.itemMeta;
            if (data.ubab) meta.unbreakable = true;
            if (data.lore) meta.lore = data.lore;
            if (data.damage) meta.damage = data.damage;
            if (data.cost) meta.repairCost = data.cost;
            if (data.unique) {
               var un = data.unique;
               switch (data.type) {
                  case 'enchanted_book':
                     jx.ks(un).forEach(function (key) {
                        meta.addStoredEnchant(jx.api.enchantment[key], un[key], true);
                     });
                     break;
                  case 'potion':
                  case 'tipped_arrow':
                     var pot = un;
                     var potionData = org.bukkit.potion.PotionData;
                     meta.basePotionData = new potionData(pot.type, pot.extended, pot.upgraded);
                     break;
                  case 'writable_book':
                  case 'written_book':
                     if (un.pages.length) {
                        meta.pages = (new Array(un.pages.length).join('x.') + 'x').split('.');
                        un.pages.forEach(function (page, index) {
                           var internal = meta.spigot().pages[index];
                           internal[0] = $([ { format: 'component', text: '', extra: page } ]);
                           meta.spigot().setPage(index + 1, internal);
                        });
                     }
                     if (un.title != null) meta.title = un.title;
                     if (un.author != null) meta.author = un.author;
                     if (un.generation != null) {
                        meta.generation = org.bukkit.inventory.meta.BookMeta.Generation[un.generation];
                     }
                     break;
                  case 'filled_map':
                     meta.mapId = data.unique;
                     break;
                  case 'spawner':
                     // todo: add support for spawnData
                     var state = meta.blockState;
                     state.spawnedType = jx.api.entityType[data.unique.type];
                     state.delay = data.unique.first;
                     state.maxNearbyEntities = data.unique.nearby;
                     state.maxSpawnDelay = data.unique.max_next;
                     state.minSpawnDelay = data.unique.min_next;
                     state.requiredPlayerRange = data.unique.active_dist;
                     state.spawnCount = data.unique.count;
                     state.spawnRange = data.unique.range;
                     meta.blockState = state;
                     break;
                  case 'firework_rocket':
                     meta.power = data.unique.power;
                     data.unique.effects.forEach(function (fx) {
                        var effect = org.bukkit.FireworkEffect.builder();
                        effect.with(org.bukkit.FireworkEffect.Type[jx.uc(fx.type)]);
                        fx.colors.forEach(function (color) {
                           var color = org.bukkit.Color;
                           effect.withColor(color.fromRGB(color.red, color.green, color.blue));
                        });
                        fx.fades.forEach(function (color) {
                           effect.withFade(org.bukkit.Color.fromRGB(color.red, color.green, color.blue));
                        });
                        if (fx.flicker) effect.flicker();
                        if (fx.trail) effect.trail();
                        meta.addEffect(effect.build());
                     });
                     break;
                  case 'firework_star':
                     var effect = org.bukkit.FireworkEffect.builder();
                     effect.with(org.bukkit.FireworkEffect.Type[jx.uc(data.unique.type)]);
                     data.unique.colors.forEach(function (color) {
                        effect.withColor(org.bukkit.Color.fromRGB(color.red, color.green, color.blue));
                     });
                     data.unique.fades.forEach(function (color) {
                        effect.withFade(org.bukkit.Color.fromRGB(color.red, color.green, color.blue));
                     });
                     if (data.unique.flicker) effect.flicker();
                     if (data.unique.trail) effect.trail();
                     meta.effect = effect.build();
                     break;
                  case 'player_head':
                     meta.owningPlayer = server.getOfflinePlayer(java.util.UUID.fromString(data.unique.uuid));
                     var profile = meta.playerProfile;
                     if (data.unique.name) profile.name = data.unique.name;
                     var prop = Java.type('com.destroystokyo.paper.profile.ProfileProperty');
                     data.unique.textures.forEach(function (texture) {
                        profile.setProperty(new prop('textures', texture));
                     });
                     meta.playerProfile = profile;
                     break;
               }
               if (data.type.endsWith('banner')) {
                  jx.ks(data.unique).forEach(function (key) {
                     var value = data.unique[key];
                     var shape = value.shape ? org.bukkit.block.banner.PatternType[value.shape] : void 0;
                     var pattern = org.bukkit.block.banner.Pattern;
                     meta.addPattern(new pattern(org.bukkit.DyeColor[value.color], shape));
                  });
               }
            }
            if (data.inventory) {
               var state = meta.blockState;
               jx.json.inventory.load(data.inventory, state.inventory);
               meta.blockState = state;
            }
            stack.itemMeta = meta;
            return stack;
         }
      },
      /**
       * @typedef {{
       *    format: 'location',
       *    world: string,
       *    x: number,
       *    y: number,
       *    z: number,
       *    yaw: number,
       *    pitch: number
       * }} json$location
       */
      location: {
         /**
          * 
          * @param {*} loc 
          * @return {json$location}
          */
         save: function (loc) {
            return {
               format: 'location',
               world: loc.world.name,
               x: loc.x,
               y: loc.y,
               z: loc.z,
               yaw: loc.yaw,
               pitch: loc.pitch
            };
         },
         /**
          * 
          * @param {*} json 
          * @return {json$location}
          */
         load: function (json) {
            return new org.bukkit.Location($('&' + json.world), json.x, json.y, json.z, json.yaw || 0, json.pitch || 0);
         }
      },
      /**
       * @typedef {{
       *    format: 'vector',
       *    x: number,
       *    y: number,
       *    z: number
       * }} json$vector
       */
      vector: {
         /**
          * 
          * @param {*} vec 
          * @return {json$vector}
          */
         save: function (vec) {
            return {
               format: 'vector',
               x: vec.x,
               y: vec.y,
               z: vec.z
            };
         },
         /**
          * 
          * @param {json$vector} json 
          * @return {*}
          */
         load: function (json) {
            return new org.bukkit.util.Vector(json.x, json.y, json.z);
         }
      }
   },
   /**
    * 
    * @param {*} object 
    * @param {string} delimiter 
    * @return {string}
    */
   key: function (object, delimiter) {
      var output = [];
      jx.ar(arguments).slice(2).forEach(function (property) {
         var context = object;
         property.split('.').forEach(function (segment) {
            context = context[segment];
         });
         output.push(context.toString());
      });
      return output.join(delimiter);
   },
   /**
    * 
    * @param {*} object 
    * @returns {string[]}
    */
   ks: function (object) {
      var output = [];
      Object.keys(object).forEach(function (key) {
         if (object[key] !== void 0) output.push(key);
      });
      return output;
   },
   /**
    * 
    * @param {string} text 
    * @returns {string}
    */
   lc: function (text) {
      return text.toString().toLowerCase();
   },
   /**
    * 
    * @param {string[]} text 
    * @param {string} prefix 
    * @param {number} limit 
    * @returns {string[]}
    */
   lore: function (text, prefix, limit) {
      var segments = text.join(' \n').split(' ');
      var lore = [ jx.color((prefix || '') + segments[0]) ];
      var index = 0;
      segments.slice(1).forEach(function (segment) {
         var colors = jx.color(segment).split(jx.color('&')).length - 1;
         if (segment.startsWith('\n') || lore[index].length + segment.length - colors * 2 > (limit || 40)) {
            lore[++index] = jx.color((prefix || '') + segment.replace('\n', ''));
         } else {
            lore[index] = lore[index] + ' ' + segment;
         }
      });
      return lore.map(jx.color);
   },
   /**
    * 
    * @param {*} object 
    * @param {*} [filter] 
    * @returns {boolean}
    */
   match: function (object, filter) {
      var same = true;
      switch (jx.ty(filter)) {
         case 'undefined':
            break;
         case 'Array':
            var check = filter.map(function (item) {
               return jx.match(object, item);
            });
            if (check.indexOf(true) === -1) same = false;
            break;
         case 'Object':
            jx.ks(filter).forEach(function (key) {
               if (!jx.match(object[key], filter[key])) same = false;
            });
            break;
         default:
            if (object !== filter) same = false;
      }
      return same;
   },
   /**
    * 
    * @returns {*}
    */
   mx: function () {
      var output = {};
      jx.ar(arguments).forEach(function (input) {
         jx.ks(input).forEach(function (key) {
            output[key] = input[key];
         });
      });
      return output;
   },
   /**
    * 
    * @param {string} text 
    * @param {string} [delimiter] 
    * @returns {string}
    */
   pascal: function (text, delimiter) {
      var array = text.toString().split(delimiter || '_').map(function (chunk) {
         return jx.uc(chunk[0]) + chunk.slice(1);
      });
      return array.join('');
   },
   /**
    * 
    * @param {*} player 
    * @param {string} node 
    * @param {boolean} value 
    * @returns {*}
    */
   perm: function (player, node, value) {
      if (value === void 0) return jx.data.player(player, 'perms')[node];
      jx.data.player(player, 'perms')[node] = value;
      jx.group();
      return player;
   },
   /**
    * 
    * @param {string[]} text 
    * @param {string} prefix 
    * @returns {string[]}
    */
   pf: function (text, prefix) {
      return text.map(function (segment) {
         return prefix + segment;
      });
   },
   /**
    * 
    * @param {*} query 
    * @returns {{
    *    uuid: string,
    *    instance: *,
    *    online: boolean,
    *    name: string,
    *    offline: *,
    *    data: player$data,
    *    text: player$text
    * }}
    */
   player: function (query) {
      if (query.uuid) return query;
      var output = {};
      var players = jx.data.server('players');
      var player = query.uniqueId ? query : server.getOfflinePlayer(players[query] || query);
      output.uuid = player.uniqueId.toString();
      output.instance = server.getPlayer(player.uniqueId);
      output.online = !!output.instance;
      output.name = players[output.uuid];
      output.offline = server.getOfflinePlayer(output.name);
      /**
       * 
       * @callback player$data
       * @returns {*}
       */
      output.data = function () {
         return jx.traverse(jx.data.player(output, arguments[0]), jx.ar(arguments).slice(1));
      };
      /**
       * 
       * @callback player$text
       * @param {string} message 
       * @param {'chat'|'action'|'title'} [mode] 
       * @param {boolean} [color] 
       * @returns {*}
       */
      output.text = function (message, type, color) {
         return jx.text(player, message, type, color);
      };
      /**
       * 
       * @param {mc$sound} type
       * @param {{
       *    pitch: number,
       *    volume: number,
       *    location: *,
       *    category: mc$soundCategory
       * }} options
       */
      output.sound = function (type, options) {
         return jx.sound(player, type, options);
      };
      /**
       * 
       * @param {string} [title]
       * @param {number} [progress]
       * @param {{
       *    color: mc$barColor,
       *    segments: mc$barStyle
       * }} [options]
       */
      output.bar = function (title, progress, options) {
         return jx.bar(player, title, progress, options);
      };
      output.perm = function (node, value) {
         return jx.perm(player, node, value);
      };
      return output;
   },
   /**
    * 
    * @param {*} player 
    * @returns {{
    *    save: profile$save,
    *    load: profile$load,
    *    reset: profile$reset
    * }}
    */
   profile: function (player) {
      player = jx.player(player);
      var instance = player.instance;
      return {
         /**
          * 
          * @callback profile$save
          * @returns {profile$data}
          */
         save: function () {
            return {
               exp: instance.exp,
               level: instance.level,
               health: instance.health,
               foodLevel: instance.foodLevel,
               effects: $(instance).effect(),
               velocity: $([ instance.velocity ]),
               location: $([ instance.location ]),
               inventory: $([ instance.inventory ]),
               enderChest: $([ instance.enderChest ]),
               bedSpawnLocation: instance.bedSpawnLocation ? $([ instance.bedSpawnLocation ]) : null
            };
         },
         /**
          * 
          * @callback profile$load
          * @param {profile$data} profile 
          * @param {boolean} physics 
          * @returns {*}
          */
         load: function (profile, physics) {
            instance.bedSpawnLocation = profile.bedSpawnLocation
               ? jx.json.location.load(profile.bedSpawnLocation)
               : null;
            jx.json.inventory.load(profile.enderChest, instance.enderChest);
            jx.json.inventory.load(profile.inventory, instance.inventory);
            if (physics) {
               instance.teleport(jx.json.location.load(profile.location));
               instance.velocity = jx.json.vector.load(profile.velocity || { x: 0, y: 0, z: 0 });
            }
            $(instance).milk();
            $(instance).mod({ effects: profile.effects });
            $(instance).feed(profile.foodLevel);
            $(instance).heal(profile.health);
            instance.level = profile.level;
            instance.exp = profile.exp;
            return instance;
         },
         /**
          * 
          * @callback profile$reset
          * @param {boolean} physics 
          * @returns {*}
          */
         reset: function (physics) {
            instance.bedSpawnLocation = null;
            instance.enderChest.clear();
            instance.inventory.clear();
            if (physics) {
               instance.teleport(
                  $([ { format: 'location', world: server.worlds.get(0).name, x: 0, y: 128, z: 0, yaw: 0, pitch: 0 } ])
               );
               instance.velocity = $([ { format: 'vector', x: 0, y: 0, z: 0 } ]);
            }
            $(instance).milk();
            instance.foodLevel = 20;
            instance.health = 20;
            instance.level = 0;
            instance.exp = 0;
            return instance;
         }
      };
   },
   rand: {
      /**
       * 
       * @param {number} limit 
       * @returns {number}
       */
      int: function (limit) {
         return Math.floor(Math.random() * Math.abs(limit + 1));
      },
      /**
       * 
       * @param {number} min 
       * @param {number} max 
       * @returns {number}
       */
      range: function (min, max) {
         return jx.rand.int(max - min) + min;
      },
      /**
       * 
       * @param {number} chance 
       * @returns {boolean}
       */
      chance: function (chance) {
         return Math.random() < chance;
      }
   },
   /**
    * 
    * @param {string[]} text 
    * @param {string} suffix 
    * @returns {string[]}
    */
   sf: function (text, suffix) {
      return text.map(function (segment) {
         return segment + suffix;
      });
   },
   /**
    * 
    * @param {*} player
    * @param {mc$sound} type
    * @param {{
    *    pitch: number,
    *    volume: number,
    *    location: *,
    *    category: mc$soundCategory
    * }} options
    */
   sound: function (player, type, options) {
      options = options || {};
      player = jx.player(player).instance;
      var category = jx.api.soundCategory[(options.category || 'master').toString()];
      var loc = options.location || player.location;
      return player.playSound(loc, jx.api.sound[type.toString()], category, options.volume || 1, options.pitch || 1);
   },
   /**
    * 
    * @param {*} player 
    * @param {string} message 
    * @param {string} [mode] 
    * @param {boolean} [color] 
    * @returns {*}
    */
   text: function (player, message, mode, color) {
      player = jx.player(player).instance;
      if (color !== false) message = jx.color(message);
      switch (mode || 'chat') {
         case 'chat':
            return player.sendMessage(message);
            break;
         case 'action':
            return player.sendActionBar(message);
            break;
         case 'title':
            var halves = message.split('\n');
            return player.sendTitle(halves[0] || '', halves[1] || '');
            break;
      }
      return player;
   },
   /**
    * 
    * @param {*} context 
    * @param {string[]} nodes 
    * @returns {*}
    */
   traverse: function (context, nodes) {
      jx.ar(nodes).forEach(function (node) {
         context = jx.auto(context, node, {});
      });
      return context;
   },
   /**
    * 
    * @param {*} object 
    * @returns {string}
    */
   ty: function (object) {
      if (object === null || object === void 0) {
         return object + '';
      } else if (typeof object === 'object') {
         var name = (object.constructor || {}).name || 'Object';
         return name === 'Object' ? toString.call(object).slice(8, -1) : name;
      } else {
         return typeof object;
      }
   },
   /**
    * 
    * @param {string} text 
    * @returns {string}
    */
   uc: function (text) {
      return text.toString().toUpperCase();
   },
   /**
    * 
    * @param {*} source 
    * @param {string[]} nodes 
    * @param {string} key 
    * @param {*} value 
    * @return {*}
    */
   vl: function (source, nodes, key, value) {
      if (jx.ty(nodes) === 'string') nodes = nodes.split('.');
      var context = source;
      var chain = [];
      nodes.forEach(function (node) {
         chain.push({ parent: context, child: node });
         context = context[node];
      });
      context[key] = value;
      chain.reverse().forEach(function (layer) {
         layer.parent[layer.child] = context;
         context = layer.parent;
      });
      return context;
   },
   /**
    * 
    * @param {*} object 
    * @returns {array}
    */
   vs: function (object) {
      var output = [];
      jx.ks(object).forEach(function (key) {
         output.push(object[key]);
      });
      return output;
   }
};

// api
jx.ks(jx.api).forEach(function (key) {
   var enumeration = jx.api[key];
   jx.api[key] = {};
   jx.ar(enumeration.values()).forEach(function (value) {
      var vanilla = null;
      switch (key) {
         case 'attribute':
            vanilla = jx.lc(value.name()).split('_').slice(1).join('_');
            break;
         case 'entityType':
            vanilla = value.name() === 'UNKNOWN' ? 'unknown' : value.key.key;
            break;
         case 'barStyle':
            var map = {
               SOLID: 'one',
               SEGMENTED_6: 'six',
               SEGMENTED_10: 'ten',
               SEGMENTED_12: 'twelve',
               SEGMENTED_20: 'twenty'
            };
            vanilla = map[value.name()];
            break;
         case 'action':
         case 'barColor':
         case 'blockFace':
         case 'equipmentSlot':
         case 'itemFlag':
         case 'operation':
         case 'soundCategory':
            vanilla = jx.lc(value.name());
            break;
         case 'gameRule':
            vanilla = value.name;
            break;
         case 'material':
            vanilla = value.name().startsWith('LEGACY') ? false : value.key.key;
            break;
         case 'potionEffectType':
            vanilla = value.handle.c().split('.')[2];
            break;
         case 'sound':
            vanilla = jx.lc(value.name()).split('_').join('.');
            break;
         default:
            vanilla = value.key.key;
            break;
      }
      if (vanilla !== false) {
         var item = null;
         switch (key) {
            case 'lootTables':
               item = value.lootTable;
               break;
            default:
               item = value;
               break;
         }
         jx.api[key][vanilla] = item;
         var bukkit = null;
         switch (key) {
            case 'gameRule':
               bukkit = false;
               break;
            case 'material':
               bukkit = value.name().startsWith('LEGACY') ? false : value.name();
               break;
            case 'enchantment':
            case 'potionEffectType':
               bukkit = value.name;
               break;
            default:
               bukkit = value.name();
               break;
         }
         if (bukkit !== false) jx.api[key][bukkit] = vanilla;
         switch (key) {
            case 'attribute':
               var vanilla2 = jx.lc(value.name()).split('_');
               jx.api[key][vanilla2[0] + '.' + jx.camel(vanilla2.slice(1).join('_'))] = value;
               break;
         }
      }
   });
});

// query
var $ = function () {
   var args = jx.ar(arguments);
   var query = args[0];
   var type = jx.ty(query);
   if (type.contains('.entity.')) {
      return jx.entity(query);
   } else if (type.contains('.block.')) {
      return jx.block(query);
   } else if (type.contains('ItemStack')) {
      return jx.item(query);
   } else if (type === 'Array') {
      var input = jx.ty(query[0]);
      if (input === 'Object') return jx.json[query[0].format].load.apply(0, query);
      if (input === 'net.md_5.bungee.api.chat.TextComponent') return jx.json.component.save(query[0]);
      if (input.contains('Inventory')) return jx.json.inventory.save(query[0]);
      if (input.contains('ItemStack')) return jx.json.item.save(query[0]);
      if (input === 'org.bukkit.Location') return jx.json.location.save(query[0]);
      if (input === 'org.bukkit.util.Vector') return jx.json.vector.save(query[0]);
   } else if (type === 'Object') {
      switch (query.on) {
         case 'activate':
            jx.event.on('org.bukkit.event.player.PlayerInteractEvent', function (event) {
               if (event.cancelled) return null;
               if (event.action !== jx.api.action.right_click_block) return null;
               var player = jx.player(event.player);
               if (query.block !== void 0 && !jx.match(jx.id(event.clickedBlock), query.block)) return null;
               args[1](player, event, event.clickedBlock);
            });
            break;
         case 'anvil':
            jx.event.on('org.bukkit.event.inventory.PrepareAnvilEvent', function (event) {
               args[1](event.inventory, event);
            });
            break;
         case 'attack':
            jx.event.on('org.bukkit.event.entity.EntityDamageByEntityEvent', function (event) {
               if (event.cancelled) return null;
               if (query.cause !== void 0 && !jx.match(jx.lc(event.cause), query.cause)) return null;
               if (query.target !== void 0 && !jx.match(jx.id(event.entity), query.target)) return null;
               if (query.entity !== void 0 && !jx.match(jx.id(event.damager), query.entity)) return null;
               args[1](event.damager, event, event.entity);
            });
            break;
         case 'break':
            jx.event.on('org.bukkit.event.block.BlockBreakEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               if (query.block !== void 0 && !jx.match(jx.id(event.block), query.block)) return null;
               args[1](player, event, event.block, event.player.equipment.itemInMainHand);
            });
            break;
         case 'chat':
            jx.event.on('org.bukkit.event.player.AsyncPlayerChatEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               args[1](player, event, event.message);
            });
            break;
         case 'click':
            jx.event.on('org.bukkit.event.inventory.InventoryClickEvent', function (event) {
               if (event.cancelled) return null;
               if (!event.inventory || !event.inventory.hashCode) return null;
               var player = jx.player(event.whoClicked);
               var inventory = event.clickedInventory || event.inventory;
               var holder = inventory.holder;
               if (query.type !== void 0 && !jx.match(jx.lc(event.click), query.type)) return null;
               if (query.inventory !== void 0 && !jx.match(jx.lc(inventory.type), query.inventory)) return null;
               if (query.holder !== void 0 && holder !== null && !jx.match(jx.id(holder), query.holder)) return null;
               if (query.item !== void 0 && !jx.match(jx.id(event.currentItem), query.item)) return null;
               if (query.cursor !== void 0 && !jx.match(jx.id(event.cursor), query.cursor)) return null;
               args[1](player, event, inventory, {
                  slot: event.slot,
                  type: event.click,
                  item: event.currentItem,
                  holder: holder,
                  cursor: event.cursor
               });
            });
            break;
         case 'close':
            jx.event.on('org.bukkit.event.inventory.InventoryCloseEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               if (query.type !== void 0 && !jx.match(jx.lc(event.inventory.type), query.type)) return null;
               var holder = event.inventory.holder;
               if (query.holder !== void 0 && holder !== null && !jx.match(jx.id(holder), query.type)) return null;
               args[1](player, event, event.inventory);
            });
            break;
         case 'craft':
            jx.event.on('org.bukkit.event.inventory.PrepareItemCraftEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.view.player);
               var recipe = event.recipe ? (event.recipe.key ? event.recipe.key.toString() : null) : null;
               if (query.recipe !== void 0 && !jx.match(recipe, query.recipe)) return null;
               args[1](player, event, recipe, event.inventory);
            });
            break;
         case 'command':
            jx.event.on('org.bukkit.event.player.PlayerCommandPreprocessEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               var command = event.message.slice(1).split(' ');
               if (query.command !== void 0 && !jx.match(command[0], query.command)) return null;
               args[1](player, event, command.slice(1), command[0]);
            });
            break;
         case 'damage':
            jx.event.on('org.bukkit.event.entity.EntityDamageEvent', function (event) {
               if (event.cancelled) return null;
               if (query.cause !== void 0 && !jx.match(jx.lc(event.cause), query.cause)) return null;
               if (query.entity !== void 0 && !jx.match(jx.id(event.entity), query.entity)) return null;
               args[1](event.entity, event);
            });
            break;
         case 'death':
            jx.event.on('org.bukkit.event.entity.EntityDeathEvent', function (event) {
               if (event.cancelled) return null;
               if (query.entity !== void 0 && !jx.match(jx.id(event.entity), query.entity)) return null;
               if (query.killer !== void 0 && !jx.match(jx.id(event.entity.killer), query.killer)) return null;
               args[1](event.entity, event, event.entity.killer);
            });
            break;
         case 'dismount':
            jx.event.on('org.bukkit.event.vehicle.VehicleExitEvent', function (event) {
               if (event.cancelled) return null;
               if (query.entity !== void 0 && !jx.match(jx.id(event.exited), query.entity)) return null;
               args[1](event.exited, event, event.vehicle);
            });
            break;
         case 'dispense':
            jx.event.on('org.bukkit.event.block.BlockDispenseEvent', function (event) {
               if (event.cancelled) return null;
               args[1](event.block, event, event.item);
            });
            break;
         case 'feed':
            jx.event.on('org.bukkit.event.entity.FoodLevelChangeEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               args[1](player, event, event.level);
            });
            break;
         case 'heal':
            jx.event.on('org.bukkit.event.entity.EntityRegainHealthEvent', function (event) {
               if (event.cancelled) return null;
               if (query.entity !== void 0 && !jx.match(jx.id(event.entity), query.entity)) return null;
               args[1](event.entity, event, event.amount);
            });
            break;
         case 'interact':
            jx.event.on('org.bukkit.event.player.PlayerInteractEntityEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               if (query.entity !== void 0 && !jx.match(jx.id(event.rightClicked), query.entity)) return null;
               args[1](player, event, event.rightClicked);
            });
            break;
         case 'join':
            jx.event.on('org.bukkit.event.player.PlayerJoinEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               args[1](player, event);
            });
            break;
         case 'mode':
            jx.event.on('org.bukkit.event.player.PlayerGameModeChangeEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               args[1](player, event, jx.lc(event.player.gameMode), jx.lc(event.newGameMode));
            });
            break;
         case 'mount':
            jx.event.on('org.bukkit.event.vehicle.VehicleEnterEvent', function (event) {
               if (event.cancelled) return null;
               if (query.entity !== void 0 && !jx.match(jx.id(event.entered), query.entity)) return null;
               args[1](event.entered, event, event.vehicle);
            });
            break;
         case 'move':
            jx.event.on('org.bukkit.event.player.PlayerMoveEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               args[1](player, event, event.from, event.to);
            });
            break;
         case 'open':
            jx.event.on('org.bukkit.event.inventory.InventoryOpenEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               if (query.type !== void 0 && !jx.match(jx.lc(event.inventory.type), query.type)) return null;
               var holder = event.inventory.holder;
               if (query.holder !== void 0 && holder !== null && !jx.match(jx.lc(holder.type), query.type)) return null;
               args[1](player, event, event.inventory);
            });
            break;
         case 'ping':
            jx.event.on('com.destroystokyo.paper.event.server.PaperServerListPingEvent', function (event) {
               if (event.cancelled) return null;
               args[1](jx.player(event.address.hostName), event);
            });
            break;
         case 'place':
            jx.event.on('org.bukkit.event.block.BlockPlaceEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               if (query.block !== void 0 && !jx.match(jx.id(event.itemInHand), query.block)) return null;
               args[1](player, event, event.block, event.itemInHand);
            });
            break;
         case 'portal':
            jx.event.on('org.bukkit.event.entity.EntityPortalEnterEvent', function (event) {
               if (event.cancelled) return null;
               if (query.entity !== void 0 && !jx.match(jx.id(event.entity), query.entity)) return null;
               if (query.type !== void 0 && !jx.match(jx.id(event.location.block), query.type)) return null;
               args[1](event.entity, event, event.location);
            });
            break;
         case 'quit':
            jx.event.on('org.bukkit.event.player.PlayerQuitEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               args[1](player, event);
            });
            break;
         case 'respawn':
            jx.event.on('org.bukkit.event.player.PlayerRespawnEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               args[1](player, event);
            });
            break;
         case 'spawn':
            jx.event.on('org.bukkit.event.entity.CreatureSpawnEvent', function (event) {
               if (event.cancelled) return null;
               if (query.entity !== void 0 && !jx.match(jx.id(event.entity), query.entity)) return null;
               if (query.reason !== void 0 && !jx.match(jx.lc(event.spawnReason || 'NONE'), query.reason)) return null;
               args[1](event.entity, event, event.entity.location);
            });
            break;
         case 'send':
            jx.event.on('org.bukkit.event.player.PlayerCommandSendEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               args[1](player, event, event.commands);
            });
            break;
         case 'sleep':
            jx.event.on('org.bukkit.event.player.PlayerBedEnterEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               args[1](player, event, event.bed);
            });
            break;
         case 'strike':
            jx.event.on('org.bukkit.event.weather.LightningStrikeEvent', function (event) {
               if (event.cancelled) return null;
               if (query.cause !== void 0 && !jx.match(jx.lc(event.cause), query.cause)) return null;
               args[1](event.lightning, event, event.cause);
            });
            break;
         case 'tab':
            jx.event.on('com.destroystokyo.paper.event.server.AsyncTabCompleteEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               args[1](player, event);
            });
            break;
         case 'target':
            jx.event.on('org.bukkit.event.entity.EntityTargetEvent', function (event) {
               if (event.cancelled) return null;
               if (query.target !== void 0 && !jx.match(jx.id(event.target), query.target)) return null;
               if (query.entity !== void 0 && !jx.match(jx.id(event.entity), query.entity)) return null;
               if (query.reason !== void 0 && !jx.match(jx.lc(event.reason.name()), query.reason)) return null;
               args[1](event.entity, event, event.target);
            });
            break;
         case 'teleport':
            jx.event.on('org.bukkit.event.player.PlayerTeleportEvent', function (event) {
               if (event.cancelled) return null;
               if (query.cause !== void 0 && !jx.match(jx.lc(event.cause), query.cause)) return null;
               if (query.entity !== void 0 && query.entity !== 'player') return null;
               args[1](event.player, event, event.cause, event.from, event.to);
            });
            jx.event.on('org.bukkit.event.entity.EntityTeleportEvent', function (event) {
               if (event.cancelled) return null;
               if (query.cause !== void 0 && !jx.match(jx.lc(event.cause), query.cause)) return null;
               if (query.entity !== void 0 && !jx.match(jx.id(event.entity), query.entity)) return null;
               args[1](event.entity, event, event.cause, event.from, event.to);
            });
            break;
         case 'use':
            jx.event.on('org.bukkit.event.player.PlayerInteractEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               var item = player.instance.equipment.itemInMainHand;
               if (query.item !== void 0 && !jx.match(jx.id(item), query.item)) return null;
               if (query.action !== void 0 && !jx.match(jx.lc(event.action), query.action)) return null;
               args[1](player, event, item);
            });
            break;
         case 'wake':
            jx.event.on('org.bukkit.event.player.PlayerBedLeaveEvent', function (event) {
               if (event.cancelled) return null;
               var player = jx.player(event.player);
               args[1](player, event, event.bed);
            });
            break;
      }
   } else if (type === 'string') {
      switch (query[0]) {
         case '!':
            if (query.startsWith('!!!')) return $($(query.slice(1), args[1]));
            if (query.startsWith('!!')) return jx.item($(query.slice(1)), args[1]);
            var type = null;
            var selector = jx.lc(query.slice(1)).split(' ').join('_');
            if (jx.api.material[selector]) return selector;
            jx.ks(jx.api.material).sort().forEach(function (key) {
               if (type === null && key.contains(selector)) type = key;
            });
            return type;
            break;
         case '@':
            var context = args[1];
            return jx.ar(server.selectEntities(context || server.consoleSender, query));
            break;
         case '#':
            break;
         case '$':
            query = jx.lc(query.slice(1));
            var players = [];
            jx.all(function (player) {
               players.push(player.name);
            });
            if (jx.match(query, players)) return jx.player(query);
            else if (args[1] === 4) return null;
            var match = null;
            players.forEach(function (name) {
               if (args[1] !== 3 && !match && jx.lc(name).startsWith(query)) match = name;
            });
            if (match) return jx.player(match);
            else if (args[1] === 2) return null;
            players = jx.vs(jx.data.server('players'));
            if (jx.match(query, players)) return jx.player(query);
            players.forEach(function (name) {
               if (args[1] !== 3 && !match && jx.lc(name).startsWith(query)) match = name;
            });
            if (match) return jx.player(match);
            else if (args[1] === 1 || args[1] === 3) return null;
            return jx.player(query);
            break;
         case '%':
            var filter = jx.uc(query.slice(1));
            var match = null;
            var values = jx.ar(org.bukkit.GameMode.values());
            if (!isNaN(Number(filter))) return values[filter === '0' ? '1' : filter === '1' ? '0' : filter];
            values.forEach(function (mode) {
               if (!match && mode.name() === filter) match = mode;
            });
            if (match) return match;
            values.forEach(function (mode) {
               if (!match && mode.name().contains(filter)) match = mode;
            });
            return match;
            break;
         case '^':
            if (query.startsWith('^^^')) {
               return jx.all(function (player) {
                  $(query.slice(1), args[1], player);
               }, args[2]);
            }
            if (query.startsWith('^^')) return jx.sound(args[2], $(query.slice(1)), args[1]);
            var type = null;
            var selector = jx.lc(query.slice(1)).split(' ').join('.');
            if (jx.api.sound[selector]) return selector;
            jx.ks(jx.api.sound).sort().forEach(function (key) {
               if (type === null && key.contains(selector)) type = key;
            });
            return type;
            break;
         case '&':
            var filter = jx.lc(query.slice(1));
            var match = null;
            if (!isNaN(Number(filter))) return server.worlds.get(filter);
            server.worlds.forEach(function (world) {
               if (!match && jx.lc(world.name) === filter) match = world;
            });
            if (match) return match;
            server.worlds.forEach(function (world) {
               if (!match && jx.lc(world.name).contains(filter)) match = world;
            });
            if (match) return match;
            server.worlds.forEach(function (world) {
               if (!match && jx.lc(world.environment).contains(filter)) match = world;
            });
            if (match) return match;
            server.worlds.forEach(function (world) {
               if (!match && world.environment.toString() === 'NORMAL' && 'overworld'.contains(filter)) match = world;
            });
            return match;
            break;
         case '?':
            if (query.startsWith('???')) return $($(query.slice(1), args[1]));
            if (query.startsWith('??')) return jx.entity($(query.slice(1)), args[1]);
            var type = null;
            var selector = jx.lc(query.slice(1)).split(' ').join('_');
            if (jx.api.entityType[selector]) return selector;
            jx.ks(jx.api.entityType).sort().forEach(function (key) {
               if (type === null && key.contains(selector)) type = key;
            });
            return type;
            break;
         default:
            return $('$' + query, args[1]);
            break;
      }
   } else if (type === 'undefined') {
   }
};

global.z = {
   get refresh () {
      refresh();
   }
};

// player name
$({ on: 'join' }, function (player) {
   jx.data.server('players')[player.uuid] = player.instance.name;
   jx.data.server('players')[player.instance.address.hostName] = player.instance.name;
   jx.group();
});

// air interact fix
jx.event.on('org.bukkit.event.player.PlayerInteractEvent', function (event) {
   event.cancelled = false;
});

module.exports = { jx: jx, $: $ };
