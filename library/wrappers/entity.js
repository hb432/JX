/**
 * @callback jx_wrappers_entity$effect
 * @param {'speed'|'slowness'|'haste'|'mining_fatigue'|'strength'|'instant_health'|'instant_damage'|'jump_boost'|'nausea'|'regeneration'|'resistance'|'fire_resistance'|'water_breathing'|'invisibility'|'blindness'|'night_vision'|'hunger'|'weakness'|'poison'|'wither'|'health_boost'|'absorption'|'saturation'|'glowing'|'levitation'|'luck'|'unluck'|'slow_falling'|'conduit_power'|'dolphins_grace'|'bad_omen'|'hero_of_the_village'} [type] the potion effect type, omit to return levels for all potion effects
 * @param {number} [level] the potion effect level, zero to clear effects of given type, omit to return current level
 * @param {number} [time] the potion effect time in ticks, defaults to -1 (infinite)
 * @param {force} [force] forcefully apply the potion effect, defaults to true
 * @returns {*}
 */
/**
 * @callback jx_wrappers_entity$attribute
 * @param {'max_health'|'follow_range'|'knockback_resistance'|'movement_speed'|'flying_speed'|'attack_damage'|'attack_speed'|'armor'|'armor_toughness'|'luck'|'jump_strength'|'horse.jumpStrength'|'spawn_reinforcements'|'zombie.spawnReinforcements'} [type] the attribute type, omit to return values for all attributes
 * @param {number} [level] the attribute value, omit to return current value
 * @returns {*}
 */
/**
 * @callback jx_wrappers_entity$equip
 * @param {{
 *    mainhand: *
 *    offhand: *
 *    helmet: *
 *    chestplate: *
 *    leggings: *
 *    boots: *
 * }} [equipment] equipment data to insert, omit to clear equipment
 * @returns {{
 *    entity: *,
 *    type: 'item'|'experience_orb'|'area_effect_cloud'|'elder_guardian'|'wither_skeleton'|'stray'|'egg'|'leash_knot'|'painting'|'arrow'|'snowball'|'fireball'|'small_fireball'|'ender_pearl'|'eye_of_ender'|'potion'|'experience_bottle'|'item_frame'|'wither_skull'|'tnt'|'falling_block'|'firework_rocket'|'husk'|'spectral_arrow'|'shulker_bullet'|'dragon_fireball'|'zombie_villager'|'skeleton_horse'|'zombie_horse'|'armor_stand'|'donkey'|'mule'|'evoker_fangs'|'evoker'|'vex'|'vindicator'|'illusioner'|'command_block_minecart'|'boat'|'minecart'|'chest_minecart'|'furnace_minecart'|'tnt_minecart'|'hopper_minecart'|'spawner_minecart'|'creeper'|'skeleton'|'spider'|'giant'|'zombie'|'slime'|'ghast'|'zombie_pigman'|'enderman'|'cave_spider'|'silverfish'|'blaze'|'magma_cube'|'ender_dragon'|'wither'|'bat'|'witch'|'endermite'|'guardian'|'shulker'|'pig'|'sheep'|'cow'|'chicken'|'squid'|'wolf'|'mooshroom'|'snow_golem'|'ocelot'|'iron_golem'|'horse'|'rabbit'|'polar_bear'|'llama'|'llama_spit'|'parrot'|'villager'|'end_crystal'|'turtle'|'phantom'|'trident'|'cod'|'salmon'|'pufferfish'|'tropical_fish'|'drowned'|'dolphin'|'cat'|'panda'|'pillager'|'ravager'|'trader_llama'|'wandering_trader'|'fox'|'bee'|'fishing_bobber'|'lightning_bolt'|'player'|'unknown'
 *    effect: jx_wrappers_entity$effect,
 *    attribute: jx_wrappers_entity$attribute,
 *    equip: jx_wrappers_entity$equip,
 *    heal: jx_wrappers_entity$heal,
 *    feed: jx_wrappers_entity$feed,
 *    damage: jx_wrappers_entity$damage,
 *    clear: jx_wrappers_entity$clear,
 *    give: jx_wrappers_entity$give,
 *    take: jx_wrappers_entity$take,
 *    tag: jx_wrappers_entity$tag,
 *    mod: jx_wrappers_entity$mod
 * }}
 */
/**
 * @callback jx_wrappers_entity$heal
 * @param {number} [amount] health value to set, defaults to max
 * @returns {{
 *    entity: *,
 *    type: 'item'|'experience_orb'|'area_effect_cloud'|'elder_guardian'|'wither_skeleton'|'stray'|'egg'|'leash_knot'|'painting'|'arrow'|'snowball'|'fireball'|'small_fireball'|'ender_pearl'|'eye_of_ender'|'potion'|'experience_bottle'|'item_frame'|'wither_skull'|'tnt'|'falling_block'|'firework_rocket'|'husk'|'spectral_arrow'|'shulker_bullet'|'dragon_fireball'|'zombie_villager'|'skeleton_horse'|'zombie_horse'|'armor_stand'|'donkey'|'mule'|'evoker_fangs'|'evoker'|'vex'|'vindicator'|'illusioner'|'command_block_minecart'|'boat'|'minecart'|'chest_minecart'|'furnace_minecart'|'tnt_minecart'|'hopper_minecart'|'spawner_minecart'|'creeper'|'skeleton'|'spider'|'giant'|'zombie'|'slime'|'ghast'|'zombie_pigman'|'enderman'|'cave_spider'|'silverfish'|'blaze'|'magma_cube'|'ender_dragon'|'wither'|'bat'|'witch'|'endermite'|'guardian'|'shulker'|'pig'|'sheep'|'cow'|'chicken'|'squid'|'wolf'|'mooshroom'|'snow_golem'|'ocelot'|'iron_golem'|'horse'|'rabbit'|'polar_bear'|'llama'|'llama_spit'|'parrot'|'villager'|'end_crystal'|'turtle'|'phantom'|'trident'|'cod'|'salmon'|'pufferfish'|'tropical_fish'|'drowned'|'dolphin'|'cat'|'panda'|'pillager'|'ravager'|'trader_llama'|'wandering_trader'|'fox'|'bee'|'fishing_bobber'|'lightning_bolt'|'player'|'unknown'
 *    effect: jx_wrappers_entity$effect,
 *    attribute: jx_wrappers_entity$attribute,
 *    equip: jx_wrappers_entity$equip,
 *    heal: jx_wrappers_entity$heal,
 *    feed: jx_wrappers_entity$feed,
 *    damage: jx_wrappers_entity$damage,
 *    clear: jx_wrappers_entity$clear,
 *    give: jx_wrappers_entity$give,
 *    take: jx_wrappers_entity$take,
 *    tag: jx_wrappers_entity$tag,
 *    mod: jx_wrappers_entity$mod
 * }}
 */
/**
 * @callback jx_wrappers_entity$feed
 * @param {number} [amount] food level to set, defaults to max
 * @returns {{
 *    entity: *,
 *    type: 'item'|'experience_orb'|'area_effect_cloud'|'elder_guardian'|'wither_skeleton'|'stray'|'egg'|'leash_knot'|'painting'|'arrow'|'snowball'|'fireball'|'small_fireball'|'ender_pearl'|'eye_of_ender'|'potion'|'experience_bottle'|'item_frame'|'wither_skull'|'tnt'|'falling_block'|'firework_rocket'|'husk'|'spectral_arrow'|'shulker_bullet'|'dragon_fireball'|'zombie_villager'|'skeleton_horse'|'zombie_horse'|'armor_stand'|'donkey'|'mule'|'evoker_fangs'|'evoker'|'vex'|'vindicator'|'illusioner'|'command_block_minecart'|'boat'|'minecart'|'chest_minecart'|'furnace_minecart'|'tnt_minecart'|'hopper_minecart'|'spawner_minecart'|'creeper'|'skeleton'|'spider'|'giant'|'zombie'|'slime'|'ghast'|'zombie_pigman'|'enderman'|'cave_spider'|'silverfish'|'blaze'|'magma_cube'|'ender_dragon'|'wither'|'bat'|'witch'|'endermite'|'guardian'|'shulker'|'pig'|'sheep'|'cow'|'chicken'|'squid'|'wolf'|'mooshroom'|'snow_golem'|'ocelot'|'iron_golem'|'horse'|'rabbit'|'polar_bear'|'llama'|'llama_spit'|'parrot'|'villager'|'end_crystal'|'turtle'|'phantom'|'trident'|'cod'|'salmon'|'pufferfish'|'tropical_fish'|'drowned'|'dolphin'|'cat'|'panda'|'pillager'|'ravager'|'trader_llama'|'wandering_trader'|'fox'|'bee'|'fishing_bobber'|'lightning_bolt'|'player'|'unknown'
 *    effect: jx_wrappers_entity$effect,
 *    attribute: jx_wrappers_entity$attribute,
 *    equip: jx_wrappers_entity$equip,
 *    heal: jx_wrappers_entity$heal,
 *    feed: jx_wrappers_entity$feed,
 *    damage: jx_wrappers_entity$damage,
 *    clear: jx_wrappers_entity$clear,
 *    give: jx_wrappers_entity$give,
 *    take: jx_wrappers_entity$take,
 *    tag: jx_wrappers_entity$tag,
 *    mod: jx_wrappers_entity$mod
 * }}
 */
/**
 * @callback jx_wrappers_entity$damage
 * @param {number} [amount] amount of damage to deal, defaults to health + 1
 * @returns {{
 *    entity: *,
 *    type: 'item'|'experience_orb'|'area_effect_cloud'|'elder_guardian'|'wither_skeleton'|'stray'|'egg'|'leash_knot'|'painting'|'arrow'|'snowball'|'fireball'|'small_fireball'|'ender_pearl'|'eye_of_ender'|'potion'|'experience_bottle'|'item_frame'|'wither_skull'|'tnt'|'falling_block'|'firework_rocket'|'husk'|'spectral_arrow'|'shulker_bullet'|'dragon_fireball'|'zombie_villager'|'skeleton_horse'|'zombie_horse'|'armor_stand'|'donkey'|'mule'|'evoker_fangs'|'evoker'|'vex'|'vindicator'|'illusioner'|'command_block_minecart'|'boat'|'minecart'|'chest_minecart'|'furnace_minecart'|'tnt_minecart'|'hopper_minecart'|'spawner_minecart'|'creeper'|'skeleton'|'spider'|'giant'|'zombie'|'slime'|'ghast'|'zombie_pigman'|'enderman'|'cave_spider'|'silverfish'|'blaze'|'magma_cube'|'ender_dragon'|'wither'|'bat'|'witch'|'endermite'|'guardian'|'shulker'|'pig'|'sheep'|'cow'|'chicken'|'squid'|'wolf'|'mooshroom'|'snow_golem'|'ocelot'|'iron_golem'|'horse'|'rabbit'|'polar_bear'|'llama'|'llama_spit'|'parrot'|'villager'|'end_crystal'|'turtle'|'phantom'|'trident'|'cod'|'salmon'|'pufferfish'|'tropical_fish'|'drowned'|'dolphin'|'cat'|'panda'|'pillager'|'ravager'|'trader_llama'|'wandering_trader'|'fox'|'bee'|'fishing_bobber'|'lightning_bolt'|'player'|'unknown'
 *    effect: jx_wrappers_entity$effect,
 *    attribute: jx_wrappers_entity$attribute,
 *    equip: jx_wrappers_entity$equip,
 *    heal: jx_wrappers_entity$heal,
 *    feed: jx_wrappers_entity$feed,
 *    damage: jx_wrappers_entity$damage,
 *    clear: jx_wrappers_entity$clear,
 *    give: jx_wrappers_entity$give,
 *    take: jx_wrappers_entity$take,
 *    tag: jx_wrappers_entity$tag,
 *    mod: jx_wrappers_entity$mod
 * }}
 */
/**
 * @callback jx_wrappers_entity$clear
 * @returns {{
 *    entity: *,
 *    type: 'item'|'experience_orb'|'area_effect_cloud'|'elder_guardian'|'wither_skeleton'|'stray'|'egg'|'leash_knot'|'painting'|'arrow'|'snowball'|'fireball'|'small_fireball'|'ender_pearl'|'eye_of_ender'|'potion'|'experience_bottle'|'item_frame'|'wither_skull'|'tnt'|'falling_block'|'firework_rocket'|'husk'|'spectral_arrow'|'shulker_bullet'|'dragon_fireball'|'zombie_villager'|'skeleton_horse'|'zombie_horse'|'armor_stand'|'donkey'|'mule'|'evoker_fangs'|'evoker'|'vex'|'vindicator'|'illusioner'|'command_block_minecart'|'boat'|'minecart'|'chest_minecart'|'furnace_minecart'|'tnt_minecart'|'hopper_minecart'|'spawner_minecart'|'creeper'|'skeleton'|'spider'|'giant'|'zombie'|'slime'|'ghast'|'zombie_pigman'|'enderman'|'cave_spider'|'silverfish'|'blaze'|'magma_cube'|'ender_dragon'|'wither'|'bat'|'witch'|'endermite'|'guardian'|'shulker'|'pig'|'sheep'|'cow'|'chicken'|'squid'|'wolf'|'mooshroom'|'snow_golem'|'ocelot'|'iron_golem'|'horse'|'rabbit'|'polar_bear'|'llama'|'llama_spit'|'parrot'|'villager'|'end_crystal'|'turtle'|'phantom'|'trident'|'cod'|'salmon'|'pufferfish'|'tropical_fish'|'drowned'|'dolphin'|'cat'|'panda'|'pillager'|'ravager'|'trader_llama'|'wandering_trader'|'fox'|'bee'|'fishing_bobber'|'lightning_bolt'|'player'|'unknown'
 *    effect: jx_wrappers_entity$effect,
 *    attribute: jx_wrappers_entity$attribute,
 *    equip: jx_wrappers_entity$equip,
 *    heal: jx_wrappers_entity$heal,
 *    feed: jx_wrappers_entity$feed,
 *    damage: jx_wrappers_entity$damage,
 *    clear: jx_wrappers_entity$clear,
 *    give: jx_wrappers_entity$give,
 *    take: jx_wrappers_entity$take,
 *    tag: jx_wrappers_entity$tag,
 *    mod: jx_wrappers_entity$mod
 * }}
 */
/**
 * @callback jx_wrappers_entity$give
 * @param {*} stack the item stack to add
 * @returns {{
 *    entity: *,
 *    type: 'item'|'experience_orb'|'area_effect_cloud'|'elder_guardian'|'wither_skeleton'|'stray'|'egg'|'leash_knot'|'painting'|'arrow'|'snowball'|'fireball'|'small_fireball'|'ender_pearl'|'eye_of_ender'|'potion'|'experience_bottle'|'item_frame'|'wither_skull'|'tnt'|'falling_block'|'firework_rocket'|'husk'|'spectral_arrow'|'shulker_bullet'|'dragon_fireball'|'zombie_villager'|'skeleton_horse'|'zombie_horse'|'armor_stand'|'donkey'|'mule'|'evoker_fangs'|'evoker'|'vex'|'vindicator'|'illusioner'|'command_block_minecart'|'boat'|'minecart'|'chest_minecart'|'furnace_minecart'|'tnt_minecart'|'hopper_minecart'|'spawner_minecart'|'creeper'|'skeleton'|'spider'|'giant'|'zombie'|'slime'|'ghast'|'zombie_pigman'|'enderman'|'cave_spider'|'silverfish'|'blaze'|'magma_cube'|'ender_dragon'|'wither'|'bat'|'witch'|'endermite'|'guardian'|'shulker'|'pig'|'sheep'|'cow'|'chicken'|'squid'|'wolf'|'mooshroom'|'snow_golem'|'ocelot'|'iron_golem'|'horse'|'rabbit'|'polar_bear'|'llama'|'llama_spit'|'parrot'|'villager'|'end_crystal'|'turtle'|'phantom'|'trident'|'cod'|'salmon'|'pufferfish'|'tropical_fish'|'drowned'|'dolphin'|'cat'|'panda'|'pillager'|'ravager'|'trader_llama'|'wandering_trader'|'fox'|'bee'|'fishing_bobber'|'lightning_bolt'|'player'|'unknown'
 *    effect: jx_wrappers_entity$effect,
 *    attribute: jx_wrappers_entity$attribute,
 *    equip: jx_wrappers_entity$equip,
 *    heal: jx_wrappers_entity$heal,
 *    feed: jx_wrappers_entity$feed,
 *    damage: jx_wrappers_entity$damage,
 *    clear: jx_wrappers_entity$clear,
 *    give: jx_wrappers_entity$give,
 *    take: jx_wrappers_entity$take,
 *    tag: jx_wrappers_entity$tag,
 *    mod: jx_wrappers_entity$mod
 * }}
 */
/**
 * @callback jx_wrappers_entity$take
 * @param {'acacia_boat'|'acacia_button'|'acacia_door'|'acacia_fence'|'acacia_fence_gate'|'acacia_leaves'|'acacia_log'|'acacia_planks'|'acacia_pressure_plate'|'acacia_sapling'|'acacia_sign'|'acacia_slab'|'acacia_stairs'|'acacia_trapdoor'|'acacia_wall_sign'|'acacia_wood'|'activator_rail'|'air'|'allium'|'andesite'|'andesite_slab'|'andesite_stairs'|'andesite_wall'|'anvil'|'apple'|'armor_stand'|'arrow'|'attached_melon_stem'|'attached_pumpkin_stem'|'azure_bluet'|'baked_potato'|'bamboo'|'bamboo_sapling'|'barrel'|'barrier'|'bat_spawn_egg'|'beacon'|'bedrock'|'beef'|'beehive'|'beetroot'|'beetroots'|'beetroot_seeds'|'beetroot_soup'|'bee_nest'|'bee_spawn_egg'|'bell'|'birch_boat'|'birch_button'|'birch_door'|'birch_fence'|'birch_fence_gate'|'birch_leaves'|'birch_log'|'birch_planks'|'birch_pressure_plate'|'birch_sapling'|'birch_sign'|'birch_slab'|'birch_stairs'|'birch_trapdoor'|'birch_wall_sign'|'birch_wood'|'black_banner'|'black_bed'|'black_carpet'|'black_concrete'|'black_concrete_powder'|'black_dye'|'black_glazed_terracotta'|'black_shulker_box'|'black_stained_glass'|'black_stained_glass_pane'|'black_terracotta'|'black_wall_banner'|'black_wool'|'blast_furnace'|'blaze_powder'|'blaze_rod'|'blaze_spawn_egg'|'blue_banner'|'blue_bed'|'blue_carpet'|'blue_concrete'|'blue_concrete_powder'|'blue_dye'|'blue_glazed_terracotta'|'blue_ice'|'blue_orchid'|'blue_shulker_box'|'blue_stained_glass'|'blue_stained_glass_pane'|'blue_terracotta'|'blue_wall_banner'|'blue_wool'|'bone'|'bone_block'|'bone_meal'|'book'|'bookshelf'|'bow'|'bowl'|'brain_coral'|'brain_coral_block'|'brain_coral_fan'|'brain_coral_wall_fan'|'bread'|'brewing_stand'|'brick'|'bricks'|'brick_slab'|'brick_stairs'|'brick_wall'|'brown_banner'|'brown_bed'|'brown_carpet'|'brown_concrete'|'brown_concrete_powder'|'brown_dye'|'brown_glazed_terracotta'|'brown_mushroom'|'brown_mushroom_block'|'brown_shulker_box'|'brown_stained_glass'|'brown_stained_glass_pane'|'brown_terracotta'|'brown_wall_banner'|'brown_wool'|'bubble_column'|'bubble_coral'|'bubble_coral_block'|'bubble_coral_fan'|'bubble_coral_wall_fan'|'bucket'|'cactus'|'cake'|'campfire'|'carrot'|'carrots'|'carrot_on_a_stick'|'cartography_table'|'carved_pumpkin'|'cat_spawn_egg'|'cauldron'|'cave_air'|'cave_spider_spawn_egg'|'chainmail_boots'|'chainmail_chestplate'|'chainmail_helmet'|'chainmail_leggings'|'chain_command_block'|'charcoal'|'chest'|'chest_minecart'|'chicken'|'chicken_spawn_egg'|'chipped_anvil'|'chiseled_quartz_block'|'chiseled_red_sandstone'|'chiseled_sandstone'|'chiseled_stone_bricks'|'chorus_flower'|'chorus_fruit'|'chorus_plant'|'clay'|'clay_ball'|'clock'|'coal'|'coal_block'|'coal_ore'|'coarse_dirt'|'cobblestone'|'cobblestone_slab'|'cobblestone_stairs'|'cobblestone_wall'|'cobweb'|'cocoa'|'cocoa_beans'|'cod'|'cod_bucket'|'cod_spawn_egg'|'command_block'|'command_block_minecart'|'comparator'|'compass'|'composter'|'conduit'|'cooked_beef'|'cooked_chicken'|'cooked_cod'|'cooked_mutton'|'cooked_porkchop'|'cooked_rabbit'|'cooked_salmon'|'cookie'|'cornflower'|'cow_spawn_egg'|'cracked_stone_bricks'|'crafting_table'|'creeper_banner_pattern'|'creeper_head'|'creeper_spawn_egg'|'creeper_wall_head'|'crossbow'|'cut_red_sandstone'|'cut_red_sandstone_slab'|'cut_sandstone'|'cut_sandstone_slab'|'cyan_banner'|'cyan_bed'|'cyan_carpet'|'cyan_concrete'|'cyan_concrete_powder'|'cyan_dye'|'cyan_glazed_terracotta'|'cyan_shulker_box'|'cyan_stained_glass'|'cyan_stained_glass_pane'|'cyan_terracotta'|'cyan_wall_banner'|'cyan_wool'|'damaged_anvil'|'dandelion'|'dark_oak_boat'|'dark_oak_button'|'dark_oak_door'|'dark_oak_fence'|'dark_oak_fence_gate'|'dark_oak_leaves'|'dark_oak_log'|'dark_oak_planks'|'dark_oak_pressure_plate'|'dark_oak_sapling'|'dark_oak_sign'|'dark_oak_slab'|'dark_oak_stairs'|'dark_oak_trapdoor'|'dark_oak_wall_sign'|'dark_oak_wood'|'dark_prismarine'|'dark_prismarine_slab'|'dark_prismarine_stairs'|'daylight_detector'|'dead_brain_coral'|'dead_brain_coral_block'|'dead_brain_coral_fan'|'dead_brain_coral_wall_fan'|'dead_bubble_coral'|'dead_bubble_coral_block'|'dead_bubble_coral_fan'|'dead_bubble_coral_wall_fan'|'dead_bush'|'dead_fire_coral'|'dead_fire_coral_block'|'dead_fire_coral_fan'|'dead_fire_coral_wall_fan'|'dead_horn_coral'|'dead_horn_coral_block'|'dead_horn_coral_fan'|'dead_horn_coral_wall_fan'|'dead_tube_coral'|'dead_tube_coral_block'|'dead_tube_coral_fan'|'dead_tube_coral_wall_fan'|'debug_stick'|'detector_rail'|'diamond'|'diamond_axe'|'diamond_block'|'diamond_boots'|'diamond_chestplate'|'diamond_helmet'|'diamond_hoe'|'diamond_horse_armor'|'diamond_leggings'|'diamond_ore'|'diamond_pickaxe'|'diamond_shovel'|'diamond_sword'|'diorite'|'diorite_slab'|'diorite_stairs'|'diorite_wall'|'dirt'|'dispenser'|'dolphin_spawn_egg'|'donkey_spawn_egg'|'dragon_breath'|'dragon_egg'|'dragon_head'|'dragon_wall_head'|'dried_kelp'|'dried_kelp_block'|'dropper'|'drowned_spawn_egg'|'egg'|'elder_guardian_spawn_egg'|'elytra'|'emerald'|'emerald_block'|'emerald_ore'|'enchanted_book'|'enchanted_golden_apple'|'enchanting_table'|'enderman_spawn_egg'|'endermite_spawn_egg'|'ender_chest'|'ender_eye'|'ender_pearl'|'end_crystal'|'end_gateway'|'end_portal'|'end_portal_frame'|'end_rod'|'end_stone'|'end_stone_bricks'|'end_stone_brick_slab'|'end_stone_brick_stairs'|'end_stone_brick_wall'|'evoker_spawn_egg'|'experience_bottle'|'farmland'|'feather'|'fermented_spider_eye'|'fern'|'filled_map'|'fire'|'firework_rocket'|'firework_star'|'fire_charge'|'fire_coral'|'fire_coral_block'|'fire_coral_fan'|'fire_coral_wall_fan'|'fishing_rod'|'fletching_table'|'flint'|'flint_and_steel'|'flower_banner_pattern'|'flower_pot'|'fox_spawn_egg'|'frosted_ice'|'furnace'|'furnace_minecart'|'ghast_spawn_egg'|'ghast_tear'|'glass'|'glass_bottle'|'glass_pane'|'glistering_melon_slice'|'globe_banner_pattern'|'glowstone'|'glowstone_dust'|'golden_apple'|'golden_axe'|'golden_boots'|'golden_carrot'|'golden_chestplate'|'golden_helmet'|'golden_hoe'|'golden_horse_armor'|'golden_leggings'|'golden_pickaxe'|'golden_shovel'|'golden_sword'|'gold_block'|'gold_ingot'|'gold_nugget'|'gold_ore'|'granite'|'granite_slab'|'granite_stairs'|'granite_wall'|'grass'|'grass_block'|'grass_path'|'gravel'|'gray_banner'|'gray_bed'|'gray_carpet'|'gray_concrete'|'gray_concrete_powder'|'gray_dye'|'gray_glazed_terracotta'|'gray_shulker_box'|'gray_stained_glass'|'gray_stained_glass_pane'|'gray_terracotta'|'gray_wall_banner'|'gray_wool'|'green_banner'|'green_bed'|'green_carpet'|'green_concrete'|'green_concrete_powder'|'green_dye'|'green_glazed_terracotta'|'green_shulker_box'|'green_stained_glass'|'green_stained_glass_pane'|'green_terracotta'|'green_wall_banner'|'green_wool'|'grindstone'|'guardian_spawn_egg'|'gunpowder'|'hay_block'|'heart_of_the_sea'|'heavy_weighted_pressure_plate'|'honeycomb'|'honeycomb_block'|'honey_block'|'honey_bottle'|'hopper'|'hopper_minecart'|'horn_coral'|'horn_coral_block'|'horn_coral_fan'|'horn_coral_wall_fan'|'horse_spawn_egg'|'husk_spawn_egg'|'ice'|'infested_chiseled_stone_bricks'|'infested_cobblestone'|'infested_cracked_stone_bricks'|'infested_mossy_stone_bricks'|'infested_stone'|'infested_stone_bricks'|'ink_sac'|'iron_axe'|'iron_bars'|'iron_block'|'iron_boots'|'iron_chestplate'|'iron_door'|'iron_helmet'|'iron_hoe'|'iron_horse_armor'|'iron_ingot'|'iron_leggings'|'iron_nugget'|'iron_ore'|'iron_pickaxe'|'iron_shovel'|'iron_sword'|'iron_trapdoor'|'item_frame'|'jack_o_lantern'|'jigsaw'|'jukebox'|'jungle_boat'|'jungle_button'|'jungle_door'|'jungle_fence'|'jungle_fence_gate'|'jungle_leaves'|'jungle_log'|'jungle_planks'|'jungle_pressure_plate'|'jungle_sapling'|'jungle_sign'|'jungle_slab'|'jungle_stairs'|'jungle_trapdoor'|'jungle_wall_sign'|'jungle_wood'|'kelp'|'kelp_plant'|'knowledge_book'|'ladder'|'lantern'|'lapis_block'|'lapis_lazuli'|'lapis_ore'|'large_fern'|'lava'|'lava_bucket'|'lead'|'leather'|'leather_boots'|'leather_chestplate'|'leather_helmet'|'leather_horse_armor'|'leather_leggings'|'lectern'|'lever'|'light_blue_banner'|'light_blue_bed'|'light_blue_carpet'|'light_blue_concrete'|'light_blue_concrete_powder'|'light_blue_dye'|'light_blue_glazed_terracotta'|'light_blue_shulker_box'|'light_blue_stained_glass'|'light_blue_stained_glass_pane'|'light_blue_terracotta'|'light_blue_wall_banner'|'light_blue_wool'|'light_gray_banner'|'light_gray_bed'|'light_gray_carpet'|'light_gray_concrete'|'light_gray_concrete_powder'|'light_gray_dye'|'light_gray_glazed_terracotta'|'light_gray_shulker_box'|'light_gray_stained_glass'|'light_gray_stained_glass_pane'|'light_gray_terracotta'|'light_gray_wall_banner'|'light_gray_wool'|'light_weighted_pressure_plate'|'lilac'|'lily_of_the_valley'|'lily_pad'|'lime_banner'|'lime_bed'|'lime_carpet'|'lime_concrete'|'lime_concrete_powder'|'lime_dye'|'lime_glazed_terracotta'|'lime_shulker_box'|'lime_stained_glass'|'lime_stained_glass_pane'|'lime_terracotta'|'lime_wall_banner'|'lime_wool'|'lingering_potion'|'llama_spawn_egg'|'loom'|'magenta_banner'|'magenta_bed'|'magenta_carpet'|'magenta_concrete'|'magenta_concrete_powder'|'magenta_dye'|'magenta_glazed_terracotta'|'magenta_shulker_box'|'magenta_stained_glass'|'magenta_stained_glass_pane'|'magenta_terracotta'|'magenta_wall_banner'|'magenta_wool'|'magma_block'|'magma_cream'|'magma_cube_spawn_egg'|'map'|'melon'|'melon_seeds'|'melon_slice'|'melon_stem'|'milk_bucket'|'minecart'|'mojang_banner_pattern'|'mooshroom_spawn_egg'|'mossy_cobblestone'|'mossy_cobblestone_slab'|'mossy_cobblestone_stairs'|'mossy_cobblestone_wall'|'mossy_stone_bricks'|'mossy_stone_brick_slab'|'mossy_stone_brick_stairs'|'mossy_stone_brick_wall'|'moving_piston'|'mule_spawn_egg'|'mushroom_stem'|'mushroom_stew'|'music_disc_11'|'music_disc_13'|'music_disc_blocks'|'music_disc_cat'|'music_disc_chirp'|'music_disc_far'|'music_disc_mall'|'music_disc_mellohi'|'music_disc_stal'|'music_disc_strad'|'music_disc_wait'|'music_disc_ward'|'mutton'|'mycelium'|'name_tag'|'nautilus_shell'|'netherrack'|'nether_brick'|'nether_bricks'|'nether_brick_fence'|'nether_brick_slab'|'nether_brick_stairs'|'nether_brick_wall'|'nether_portal'|'nether_quartz_ore'|'nether_star'|'nether_wart'|'nether_wart_block'|'note_block'|'oak_boat'|'oak_button'|'oak_door'|'oak_fence'|'oak_fence_gate'|'oak_leaves'|'oak_log'|'oak_planks'|'oak_pressure_plate'|'oak_sapling'|'oak_sign'|'oak_slab'|'oak_stairs'|'oak_trapdoor'|'oak_wall_sign'|'oak_wood'|'observer'|'obsidian'|'ocelot_spawn_egg'|'orange_banner'|'orange_bed'|'orange_carpet'|'orange_concrete'|'orange_concrete_powder'|'orange_dye'|'orange_glazed_terracotta'|'orange_shulker_box'|'orange_stained_glass'|'orange_stained_glass_pane'|'orange_terracotta'|'orange_tulip'|'orange_wall_banner'|'orange_wool'|'oxeye_daisy'|'packed_ice'|'painting'|'panda_spawn_egg'|'paper'|'parrot_spawn_egg'|'peony'|'petrified_oak_slab'|'phantom_membrane'|'phantom_spawn_egg'|'pig_spawn_egg'|'pillager_spawn_egg'|'pink_banner'|'pink_bed'|'pink_carpet'|'pink_concrete'|'pink_concrete_powder'|'pink_dye'|'pink_glazed_terracotta'|'pink_shulker_box'|'pink_stained_glass'|'pink_stained_glass_pane'|'pink_terracotta'|'pink_tulip'|'pink_wall_banner'|'pink_wool'|'piston'|'piston_head'|'player_head'|'player_wall_head'|'podzol'|'poisonous_potato'|'polar_bear_spawn_egg'|'polished_andesite'|'polished_andesite_slab'|'polished_andesite_stairs'|'polished_diorite'|'polished_diorite_slab'|'polished_diorite_stairs'|'polished_granite'|'polished_granite_slab'|'polished_granite_stairs'|'popped_chorus_fruit'|'poppy'|'porkchop'|'potato'|'potatoes'|'potion'|'potted_acacia_sapling'|'potted_allium'|'potted_azure_bluet'|'potted_bamboo'|'potted_birch_sapling'|'potted_blue_orchid'|'potted_brown_mushroom'|'potted_cactus'|'potted_cornflower'|'potted_dandelion'|'potted_dark_oak_sapling'|'potted_dead_bush'|'potted_fern'|'potted_jungle_sapling'|'potted_lily_of_the_valley'|'potted_oak_sapling'|'potted_orange_tulip'|'potted_oxeye_daisy'|'potted_pink_tulip'|'potted_poppy'|'potted_red_mushroom'|'potted_red_tulip'|'potted_spruce_sapling'|'potted_white_tulip'|'potted_wither_rose'|'powered_rail'|'prismarine'|'prismarine_bricks'|'prismarine_brick_slab'|'prismarine_brick_stairs'|'prismarine_crystals'|'prismarine_shard'|'prismarine_slab'|'prismarine_stairs'|'prismarine_wall'|'pufferfish'|'pufferfish_bucket'|'pufferfish_spawn_egg'|'pumpkin'|'pumpkin_pie'|'pumpkin_seeds'|'pumpkin_stem'|'purple_banner'|'purple_bed'|'purple_carpet'|'purple_concrete'|'purple_concrete_powder'|'purple_dye'|'purple_glazed_terracotta'|'purple_shulker_box'|'purple_stained_glass'|'purple_stained_glass_pane'|'purple_terracotta'|'purple_wall_banner'|'purple_wool'|'purpur_block'|'purpur_pillar'|'purpur_slab'|'purpur_stairs'|'quartz'|'quartz_block'|'quartz_pillar'|'quartz_slab'|'quartz_stairs'|'rabbit'|'rabbit_foot'|'rabbit_hide'|'rabbit_spawn_egg'|'rabbit_stew'|'rail'|'ravager_spawn_egg'|'redstone'|'redstone_block'|'redstone_lamp'|'redstone_ore'|'redstone_torch'|'redstone_wall_torch'|'redstone_wire'|'red_banner'|'red_bed'|'red_carpet'|'red_concrete'|'red_concrete_powder'|'red_dye'|'red_glazed_terracotta'|'red_mushroom'|'red_mushroom_block'|'red_nether_bricks'|'red_nether_brick_slab'|'red_nether_brick_stairs'|'red_nether_brick_wall'|'red_sand'|'red_sandstone'|'red_sandstone_slab'|'red_sandstone_stairs'|'red_sandstone_wall'|'red_shulker_box'|'red_stained_glass'|'red_stained_glass_pane'|'red_terracotta'|'red_tulip'|'red_wall_banner'|'red_wool'|'repeater'|'repeating_command_block'|'rose_bush'|'rotten_flesh'|'saddle'|'salmon'|'salmon_bucket'|'salmon_spawn_egg'|'sand'|'sandstone'|'sandstone_slab'|'sandstone_stairs'|'sandstone_wall'|'scaffolding'|'scute'|'seagrass'|'sea_lantern'|'sea_pickle'|'shears'|'sheep_spawn_egg'|'shield'|'shulker_box'|'shulker_shell'|'shulker_spawn_egg'|'silverfish_spawn_egg'|'skeleton_horse_spawn_egg'|'skeleton_skull'|'skeleton_spawn_egg'|'skeleton_wall_skull'|'skull_banner_pattern'|'slime_ball'|'slime_block'|'slime_spawn_egg'|'smithing_table'|'smoker'|'smooth_quartz'|'smooth_quartz_slab'|'smooth_quartz_stairs'|'smooth_red_sandstone'|'smooth_red_sandstone_slab'|'smooth_red_sandstone_stairs'|'smooth_sandstone'|'smooth_sandstone_slab'|'smooth_sandstone_stairs'|'smooth_stone'|'smooth_stone_slab'|'snow'|'snowball'|'snow_block'|'soul_sand'|'spawner'|'spectral_arrow'|'spider_eye'|'spider_spawn_egg'|'splash_potion'|'sponge'|'spruce_boat'|'spruce_button'|'spruce_door'|'spruce_fence'|'spruce_fence_gate'|'spruce_leaves'|'spruce_log'|'spruce_planks'|'spruce_pressure_plate'|'spruce_sapling'|'spruce_sign'|'spruce_slab'|'spruce_stairs'|'spruce_trapdoor'|'spruce_wall_sign'|'spruce_wood'|'squid_spawn_egg'|'stick'|'sticky_piston'|'stone'|'stonecutter'|'stone_axe'|'stone_bricks'|'stone_brick_slab'|'stone_brick_stairs'|'stone_brick_wall'|'stone_button'|'stone_hoe'|'stone_pickaxe'|'stone_pressure_plate'|'stone_shovel'|'stone_slab'|'stone_stairs'|'stone_sword'|'stray_spawn_egg'|'string'|'stripped_acacia_log'|'stripped_acacia_wood'|'stripped_birch_log'|'stripped_birch_wood'|'stripped_dark_oak_log'|'stripped_dark_oak_wood'|'stripped_jungle_log'|'stripped_jungle_wood'|'stripped_oak_log'|'stripped_oak_wood'|'stripped_spruce_log'|'stripped_spruce_wood'|'structure_block'|'structure_void'|'sugar'|'sugar_cane'|'sunflower'|'suspicious_stew'|'sweet_berries'|'sweet_berry_bush'|'tall_grass'|'tall_seagrass'|'terracotta'|'tipped_arrow'|'tnt'|'tnt_minecart'|'torch'|'totem_of_undying'|'trader_llama_spawn_egg'|'trapped_chest'|'trident'|'tripwire'|'tripwire_hook'|'tropical_fish'|'tropical_fish_bucket'|'tropical_fish_spawn_egg'|'tube_coral'|'tube_coral_block'|'tube_coral_fan'|'tube_coral_wall_fan'|'turtle_egg'|'turtle_helmet'|'turtle_spawn_egg'|'vex_spawn_egg'|'villager_spawn_egg'|'vindicator_spawn_egg'|'vine'|'void_air'|'wall_torch'|'wandering_trader_spawn_egg'|'water'|'water_bucket'|'wet_sponge'|'wheat'|'wheat_seeds'|'white_banner'|'white_bed'|'white_carpet'|'white_concrete'|'white_concrete_powder'|'white_dye'|'white_glazed_terracotta'|'white_shulker_box'|'white_stained_glass'|'white_stained_glass_pane'|'white_terracotta'|'white_tulip'|'white_wall_banner'|'white_wool'|'witch_spawn_egg'|'wither_rose'|'wither_skeleton_skull'|'wither_skeleton_spawn_egg'|'wither_skeleton_wall_skull'|'wolf_spawn_egg'|'wooden_axe'|'wooden_hoe'|'wooden_pickaxe'|'wooden_shovel'|'wooden_sword'|'writable_book'|'written_book'|'yellow_banner'|'yellow_bed'|'yellow_carpet'|'yellow_concrete'|'yellow_concrete_powder'|'yellow_dye'|'yellow_glazed_terracotta'|'yellow_shulker_box'|'yellow_stained_glass'|'yellow_stained_glass_pane'|'yellow_terracotta'|'yellow_wall_banner'|'yellow_wool'|'zombie_head'|'zombie_horse_spawn_egg'|'zombie_pigman_spawn_egg'|'zombie_spawn_egg'|'zombie_villager_spawn_egg'|'zombie_wall_head'|'legacy_air'|'legacy_stone'|'legacy_grass'|'legacy_dirt'|'legacy_cobblestone'|'legacy_wood'|'legacy_sapling'|'legacy_bedrock'|'legacy_water'|'legacy_stationary_water'|'legacy_lava'|'legacy_stationary_lava'|'legacy_sand'|'legacy_gravel'|'legacy_gold_ore'|'legacy_iron_ore'|'legacy_coal_ore'|'legacy_log'|'legacy_leaves'|'legacy_sponge'|'legacy_glass'|'legacy_lapis_ore'|'legacy_lapis_block'|'legacy_dispenser'|'legacy_sandstone'|'legacy_note_block'|'legacy_bed_block'|'legacy_powered_rail'|'legacy_detector_rail'|'legacy_piston_sticky_base'|'legacy_web'|'legacy_long_grass'|'legacy_dead_bush'|'legacy_piston_base'|'legacy_piston_extension'|'legacy_wool'|'legacy_piston_moving_piece'|'legacy_yellow_flower'|'legacy_red_rose'|'legacy_brown_mushroom'|'legacy_red_mushroom'|'legacy_gold_block'|'legacy_iron_block'|'legacy_double_step'|'legacy_step'|'legacy_brick'|'legacy_tnt'|'legacy_bookshelf'|'legacy_mossy_cobblestone'|'legacy_obsidian'|'legacy_torch'|'legacy_fire'|'legacy_mob_spawner'|'legacy_wood_stairs'|'legacy_chest'|'legacy_redstone_wire'|'legacy_diamond_ore'|'legacy_diamond_block'|'legacy_workbench'|'legacy_crops'|'legacy_soil'|'legacy_furnace'|'legacy_burning_furnace'|'legacy_sign_post'|'legacy_wooden_door'|'legacy_ladder'|'legacy_rails'|'legacy_cobblestone_stairs'|'legacy_wall_sign'|'legacy_lever'|'legacy_stone_plate'|'legacy_iron_door_block'|'legacy_wood_plate'|'legacy_redstone_ore'|'legacy_glowing_redstone_ore'|'legacy_redstone_torch_off'|'legacy_redstone_torch_on'|'legacy_stone_button'|'legacy_snow'|'legacy_ice'|'legacy_snow_block'|'legacy_cactus'|'legacy_clay'|'legacy_sugar_cane_block'|'legacy_jukebox'|'legacy_fence'|'legacy_pumpkin'|'legacy_netherrack'|'legacy_soul_sand'|'legacy_glowstone'|'legacy_portal'|'legacy_jack_o_lantern'|'legacy_cake_block'|'legacy_diode_block_off'|'legacy_diode_block_on'|'legacy_stained_glass'|'legacy_trap_door'|'legacy_monster_eggs'|'legacy_smooth_brick'|'legacy_huge_mushroom_1'|'legacy_huge_mushroom_2'|'legacy_iron_fence'|'legacy_thin_glass'|'legacy_melon_block'|'legacy_pumpkin_stem'|'legacy_melon_stem'|'legacy_vine'|'legacy_fence_gate'|'legacy_brick_stairs'|'legacy_smooth_stairs'|'legacy_mycel'|'legacy_water_lily'|'legacy_nether_brick'|'legacy_nether_fence'|'legacy_nether_brick_stairs'|'legacy_nether_warts'|'legacy_enchantment_table'|'legacy_brewing_stand'|'legacy_cauldron'|'legacy_ender_portal'|'legacy_ender_portal_frame'|'legacy_ender_stone'|'legacy_dragon_egg'|'legacy_redstone_lamp_off'|'legacy_redstone_lamp_on'|'legacy_wood_double_step'|'legacy_wood_step'|'legacy_cocoa'|'legacy_sandstone_stairs'|'legacy_emerald_ore'|'legacy_ender_chest'|'legacy_tripwire_hook'|'legacy_tripwire'|'legacy_emerald_block'|'legacy_spruce_wood_stairs'|'legacy_birch_wood_stairs'|'legacy_jungle_wood_stairs'|'legacy_command'|'legacy_beacon'|'legacy_cobble_wall'|'legacy_flower_pot'|'legacy_carrot'|'legacy_potato'|'legacy_wood_button'|'legacy_skull'|'legacy_anvil'|'legacy_trapped_chest'|'legacy_gold_plate'|'legacy_iron_plate'|'legacy_redstone_comparator_off'|'legacy_redstone_comparator_on'|'legacy_daylight_detector'|'legacy_redstone_block'|'legacy_quartz_ore'|'legacy_hopper'|'legacy_quartz_block'|'legacy_quartz_stairs'|'legacy_activator_rail'|'legacy_dropper'|'legacy_stained_clay'|'legacy_stained_glass_pane'|'legacy_leaves_2'|'legacy_log_2'|'legacy_acacia_stairs'|'legacy_dark_oak_stairs'|'legacy_slime_block'|'legacy_barrier'|'legacy_iron_trapdoor'|'legacy_prismarine'|'legacy_sea_lantern'|'legacy_hay_block'|'legacy_carpet'|'legacy_hard_clay'|'legacy_coal_block'|'legacy_packed_ice'|'legacy_double_plant'|'legacy_standing_banner'|'legacy_wall_banner'|'legacy_daylight_detector_inverted'|'legacy_red_sandstone'|'legacy_red_sandstone_stairs'|'legacy_double_stone_slab2'|'legacy_stone_slab2'|'legacy_spruce_fence_gate'|'legacy_birch_fence_gate'|'legacy_jungle_fence_gate'|'legacy_dark_oak_fence_gate'|'legacy_acacia_fence_gate'|'legacy_spruce_fence'|'legacy_birch_fence'|'legacy_jungle_fence'|'legacy_dark_oak_fence'|'legacy_acacia_fence'|'legacy_spruce_door'|'legacy_birch_door'|'legacy_jungle_door'|'legacy_acacia_door'|'legacy_dark_oak_door'|'legacy_end_rod'|'legacy_chorus_plant'|'legacy_chorus_flower'|'legacy_purpur_block'|'legacy_purpur_pillar'|'legacy_purpur_stairs'|'legacy_purpur_double_slab'|'legacy_purpur_slab'|'legacy_end_bricks'|'legacy_beetroot_block'|'legacy_grass_path'|'legacy_end_gateway'|'legacy_command_repeating'|'legacy_command_chain'|'legacy_frosted_ice'|'legacy_magma'|'legacy_nether_wart_block'|'legacy_red_nether_brick'|'legacy_bone_block'|'legacy_structure_void'|'legacy_observer'|'legacy_white_shulker_box'|'legacy_orange_shulker_box'|'legacy_magenta_shulker_box'|'legacy_light_blue_shulker_box'|'legacy_yellow_shulker_box'|'legacy_lime_shulker_box'|'legacy_pink_shulker_box'|'legacy_gray_shulker_box'|'legacy_silver_shulker_box'|'legacy_cyan_shulker_box'|'legacy_purple_shulker_box'|'legacy_blue_shulker_box'|'legacy_brown_shulker_box'|'legacy_green_shulker_box'|'legacy_red_shulker_box'|'legacy_black_shulker_box'|'legacy_white_glazed_terracotta'|'legacy_orange_glazed_terracotta'|'legacy_magenta_glazed_terracotta'|'legacy_light_blue_glazed_terracotta'|'legacy_yellow_glazed_terracotta'|'legacy_lime_glazed_terracotta'|'legacy_pink_glazed_terracotta'|'legacy_gray_glazed_terracotta'|'legacy_silver_glazed_terracotta'|'legacy_cyan_glazed_terracotta'|'legacy_purple_glazed_terracotta'|'legacy_blue_glazed_terracotta'|'legacy_brown_glazed_terracotta'|'legacy_green_glazed_terracotta'|'legacy_red_glazed_terracotta'|'legacy_black_glazed_terracotta'|'legacy_concrete'|'legacy_concrete_powder'|'legacy_structure_block'|'legacy_iron_spade'|'legacy_iron_pickaxe'|'legacy_iron_axe'|'legacy_flint_and_steel'|'legacy_apple'|'legacy_bow'|'legacy_arrow'|'legacy_coal'|'legacy_diamond'|'legacy_iron_ingot'|'legacy_gold_ingot'|'legacy_iron_sword'|'legacy_wood_sword'|'legacy_wood_spade'|'legacy_wood_pickaxe'|'legacy_wood_axe'|'legacy_stone_sword'|'legacy_stone_spade'|'legacy_stone_pickaxe'|'legacy_stone_axe'|'legacy_diamond_sword'|'legacy_diamond_spade'|'legacy_diamond_pickaxe'|'legacy_diamond_axe'|'legacy_stick'|'legacy_bowl'|'legacy_mushroom_soup'|'legacy_gold_sword'|'legacy_gold_spade'|'legacy_gold_pickaxe'|'legacy_gold_axe'|'legacy_string'|'legacy_feather'|'legacy_sulphur'|'legacy_wood_hoe'|'legacy_stone_hoe'|'legacy_iron_hoe'|'legacy_diamond_hoe'|'legacy_gold_hoe'|'legacy_seeds'|'legacy_wheat'|'legacy_bread'|'legacy_leather_helmet'|'legacy_leather_chestplate'|'legacy_leather_leggings'|'legacy_leather_boots'|'legacy_chainmail_helmet'|'legacy_chainmail_chestplate'|'legacy_chainmail_leggings'|'legacy_chainmail_boots'|'legacy_iron_helmet'|'legacy_iron_chestplate'|'legacy_iron_leggings'|'legacy_iron_boots'|'legacy_diamond_helmet'|'legacy_diamond_chestplate'|'legacy_diamond_leggings'|'legacy_diamond_boots'|'legacy_gold_helmet'|'legacy_gold_chestplate'|'legacy_gold_leggings'|'legacy_gold_boots'|'legacy_flint'|'legacy_pork'|'legacy_grilled_pork'|'legacy_painting'|'legacy_golden_apple'|'legacy_sign'|'legacy_wood_door'|'legacy_bucket'|'legacy_water_bucket'|'legacy_lava_bucket'|'legacy_minecart'|'legacy_saddle'|'legacy_iron_door'|'legacy_redstone'|'legacy_snow_ball'|'legacy_boat'|'legacy_leather'|'legacy_milk_bucket'|'legacy_clay_brick'|'legacy_clay_ball'|'legacy_sugar_cane'|'legacy_paper'|'legacy_book'|'legacy_slime_ball'|'legacy_storage_minecart'|'legacy_powered_minecart'|'legacy_egg'|'legacy_compass'|'legacy_fishing_rod'|'legacy_watch'|'legacy_glowstone_dust'|'legacy_raw_fish'|'legacy_cooked_fish'|'legacy_ink_sack'|'legacy_bone'|'legacy_sugar'|'legacy_cake'|'legacy_bed'|'legacy_diode'|'legacy_cookie'|'legacy_map'|'legacy_shears'|'legacy_melon'|'legacy_pumpkin_seeds'|'legacy_melon_seeds'|'legacy_raw_beef'|'legacy_cooked_beef'|'legacy_raw_chicken'|'legacy_cooked_chicken'|'legacy_rotten_flesh'|'legacy_ender_pearl'|'legacy_blaze_rod'|'legacy_ghast_tear'|'legacy_gold_nugget'|'legacy_nether_stalk'|'legacy_potion'|'legacy_glass_bottle'|'legacy_spider_eye'|'legacy_fermented_spider_eye'|'legacy_blaze_powder'|'legacy_magma_cream'|'legacy_brewing_stand_item'|'legacy_cauldron_item'|'legacy_eye_of_ender'|'legacy_speckled_melon'|'legacy_monster_egg'|'legacy_exp_bottle'|'legacy_fireball'|'legacy_book_and_quill'|'legacy_written_book'|'legacy_emerald'|'legacy_item_frame'|'legacy_flower_pot_item'|'legacy_carrot_item'|'legacy_potato_item'|'legacy_baked_potato'|'legacy_poisonous_potato'|'legacy_empty_map'|'legacy_golden_carrot'|'legacy_skull_item'|'legacy_carrot_stick'|'legacy_nether_star'|'legacy_pumpkin_pie'|'legacy_firework'|'legacy_firework_charge'|'legacy_enchanted_book'|'legacy_redstone_comparator'|'legacy_nether_brick_item'|'legacy_quartz'|'legacy_explosive_minecart'|'legacy_hopper_minecart'|'legacy_prismarine_shard'|'legacy_prismarine_crystals'|'legacy_rabbit'|'legacy_cooked_rabbit'|'legacy_rabbit_stew'|'legacy_rabbit_foot'|'legacy_rabbit_hide'|'legacy_armor_stand'|'legacy_iron_barding'|'legacy_gold_barding'|'legacy_diamond_barding'|'legacy_leash'|'legacy_name_tag'|'legacy_command_minecart'|'legacy_mutton'|'legacy_cooked_mutton'|'legacy_banner'|'legacy_end_crystal'|'legacy_spruce_door_item'|'legacy_birch_door_item'|'legacy_jungle_door_item'|'legacy_acacia_door_item'|'legacy_dark_oak_door_item'|'legacy_chorus_fruit'|'legacy_chorus_fruit_popped'|'legacy_beetroot'|'legacy_beetroot_seeds'|'legacy_beetroot_soup'|'legacy_dragons_breath'|'legacy_splash_potion'|'legacy_spectral_arrow'|'legacy_tipped_arrow'|'legacy_lingering_potion'|'legacy_shield'|'legacy_elytra'|'legacy_boat_spruce'|'legacy_boat_birch'|'legacy_boat_jungle'|'legacy_boat_acacia'|'legacy_boat_dark_oak'|'legacy_totem'|'legacy_shulker_shell'|'legacy_iron_nugget'|'legacy_knowledge_book'|'legacy_gold_record'|'legacy_green_record'|'legacy_record_3'|'legacy_record_4'|'legacy_record_5'|'legacy_record_6'|'legacy_record_7'|'legacy_record_8'|'legacy_record_9'|'legacy_record_10'|'legacy_record_11'|'legacy_record_12'} type the item type to remove
 * @returns {{
 *    entity: *,
 *    type: 'item'|'experience_orb'|'area_effect_cloud'|'elder_guardian'|'wither_skeleton'|'stray'|'egg'|'leash_knot'|'painting'|'arrow'|'snowball'|'fireball'|'small_fireball'|'ender_pearl'|'eye_of_ender'|'potion'|'experience_bottle'|'item_frame'|'wither_skull'|'tnt'|'falling_block'|'firework_rocket'|'husk'|'spectral_arrow'|'shulker_bullet'|'dragon_fireball'|'zombie_villager'|'skeleton_horse'|'zombie_horse'|'armor_stand'|'donkey'|'mule'|'evoker_fangs'|'evoker'|'vex'|'vindicator'|'illusioner'|'command_block_minecart'|'boat'|'minecart'|'chest_minecart'|'furnace_minecart'|'tnt_minecart'|'hopper_minecart'|'spawner_minecart'|'creeper'|'skeleton'|'spider'|'giant'|'zombie'|'slime'|'ghast'|'zombie_pigman'|'enderman'|'cave_spider'|'silverfish'|'blaze'|'magma_cube'|'ender_dragon'|'wither'|'bat'|'witch'|'endermite'|'guardian'|'shulker'|'pig'|'sheep'|'cow'|'chicken'|'squid'|'wolf'|'mooshroom'|'snow_golem'|'ocelot'|'iron_golem'|'horse'|'rabbit'|'polar_bear'|'llama'|'llama_spit'|'parrot'|'villager'|'end_crystal'|'turtle'|'phantom'|'trident'|'cod'|'salmon'|'pufferfish'|'tropical_fish'|'drowned'|'dolphin'|'cat'|'panda'|'pillager'|'ravager'|'trader_llama'|'wandering_trader'|'fox'|'bee'|'fishing_bobber'|'lightning_bolt'|'player'|'unknown'
 *    effect: jx_wrappers_entity$effect,
 *    attribute: jx_wrappers_entity$attribute,
 *    equip: jx_wrappers_entity$equip,
 *    heal: jx_wrappers_entity$heal,
 *    feed: jx_wrappers_entity$feed,
 *    damage: jx_wrappers_entity$damage,
 *    clear: jx_wrappers_entity$clear,
 *    give: jx_wrappers_entity$give,
 *    take: jx_wrappers_entity$take,
 *    tag: jx_wrappers_entity$tag,
 *    mod: jx_wrappers_entity$mod
 * }}
 */
/**
 * @callback jx_wrappers_entity$tag
 * @param {string} tag the tag to add or remove
 * @param {boolean} add if true, add the tag, if false, remove the tag
 * @returns {{
 *    entity: *,
 *    type: 'item'|'experience_orb'|'area_effect_cloud'|'elder_guardian'|'wither_skeleton'|'stray'|'egg'|'leash_knot'|'painting'|'arrow'|'snowball'|'fireball'|'small_fireball'|'ender_pearl'|'eye_of_ender'|'potion'|'experience_bottle'|'item_frame'|'wither_skull'|'tnt'|'falling_block'|'firework_rocket'|'husk'|'spectral_arrow'|'shulker_bullet'|'dragon_fireball'|'zombie_villager'|'skeleton_horse'|'zombie_horse'|'armor_stand'|'donkey'|'mule'|'evoker_fangs'|'evoker'|'vex'|'vindicator'|'illusioner'|'command_block_minecart'|'boat'|'minecart'|'chest_minecart'|'furnace_minecart'|'tnt_minecart'|'hopper_minecart'|'spawner_minecart'|'creeper'|'skeleton'|'spider'|'giant'|'zombie'|'slime'|'ghast'|'zombie_pigman'|'enderman'|'cave_spider'|'silverfish'|'blaze'|'magma_cube'|'ender_dragon'|'wither'|'bat'|'witch'|'endermite'|'guardian'|'shulker'|'pig'|'sheep'|'cow'|'chicken'|'squid'|'wolf'|'mooshroom'|'snow_golem'|'ocelot'|'iron_golem'|'horse'|'rabbit'|'polar_bear'|'llama'|'llama_spit'|'parrot'|'villager'|'end_crystal'|'turtle'|'phantom'|'trident'|'cod'|'salmon'|'pufferfish'|'tropical_fish'|'drowned'|'dolphin'|'cat'|'panda'|'pillager'|'ravager'|'trader_llama'|'wandering_trader'|'fox'|'bee'|'fishing_bobber'|'lightning_bolt'|'player'|'unknown'
 *    effect: jx_wrappers_entity$effect,
 *    attribute: jx_wrappers_entity$attribute,
 *    equip: jx_wrappers_entity$equip,
 *    heal: jx_wrappers_entity$heal,
 *    feed: jx_wrappers_entity$feed,
 *    damage: jx_wrappers_entity$damage,
 *    clear: jx_wrappers_entity$clear,
 *    give: jx_wrappers_entity$give,
 *    take: jx_wrappers_entity$take,
 *    tag: jx_wrappers_entity$tag,
 *    mod: jx_wrappers_entity$mod
 * }}
 */
/**
 * @callback jx_wrappers_entity$mod
 * @param {{
 *    health: number,
 *    equipment: *,
 *    effects: *,
 *    attributes: *
 * }} data the data to apply to the entity
 * @returns {{
 *    entity: *,
 *    type: 'item'|'experience_orb'|'area_effect_cloud'|'elder_guardian'|'wither_skeleton'|'stray'|'egg'|'leash_knot'|'painting'|'arrow'|'snowball'|'fireball'|'small_fireball'|'ender_pearl'|'eye_of_ender'|'potion'|'experience_bottle'|'item_frame'|'wither_skull'|'tnt'|'falling_block'|'firework_rocket'|'husk'|'spectral_arrow'|'shulker_bullet'|'dragon_fireball'|'zombie_villager'|'skeleton_horse'|'zombie_horse'|'armor_stand'|'donkey'|'mule'|'evoker_fangs'|'evoker'|'vex'|'vindicator'|'illusioner'|'command_block_minecart'|'boat'|'minecart'|'chest_minecart'|'furnace_minecart'|'tnt_minecart'|'hopper_minecart'|'spawner_minecart'|'creeper'|'skeleton'|'spider'|'giant'|'zombie'|'slime'|'ghast'|'zombie_pigman'|'enderman'|'cave_spider'|'silverfish'|'blaze'|'magma_cube'|'ender_dragon'|'wither'|'bat'|'witch'|'endermite'|'guardian'|'shulker'|'pig'|'sheep'|'cow'|'chicken'|'squid'|'wolf'|'mooshroom'|'snow_golem'|'ocelot'|'iron_golem'|'horse'|'rabbit'|'polar_bear'|'llama'|'llama_spit'|'parrot'|'villager'|'end_crystal'|'turtle'|'phantom'|'trident'|'cod'|'salmon'|'pufferfish'|'tropical_fish'|'drowned'|'dolphin'|'cat'|'panda'|'pillager'|'ravager'|'trader_llama'|'wandering_trader'|'fox'|'bee'|'fishing_bobber'|'lightning_bolt'|'player'|'unknown'
 *    effect: jx_wrappers_entity$effect,
 *    attribute: jx_wrappers_entity$attribute,
 *    equip: jx_wrappers_entity$equip,
 *    heal: jx_wrappers_entity$heal,
 *    feed: jx_wrappers_entity$feed,
 *    damage: jx_wrappers_entity$damage,
 *    clear: jx_wrappers_entity$clear,
 *    give: jx_wrappers_entity$give,
 *    take: jx_wrappers_entity$take,
 *    tag: jx_wrappers_entity$tag,
 *    mod: jx_wrappers_entity$mod
 * }}
 */
/**
 * a wrapper utility for entities
 * @param {*} subject the entity to wrap
 * @returns {{
 *    entity: *,
 *    type: 'item'|'experience_orb'|'area_effect_cloud'|'elder_guardian'|'wither_skeleton'|'stray'|'egg'|'leash_knot'|'painting'|'arrow'|'snowball'|'fireball'|'small_fireball'|'ender_pearl'|'eye_of_ender'|'potion'|'experience_bottle'|'item_frame'|'wither_skull'|'tnt'|'falling_block'|'firework_rocket'|'husk'|'spectral_arrow'|'shulker_bullet'|'dragon_fireball'|'zombie_villager'|'skeleton_horse'|'zombie_horse'|'armor_stand'|'donkey'|'mule'|'evoker_fangs'|'evoker'|'vex'|'vindicator'|'illusioner'|'command_block_minecart'|'boat'|'minecart'|'chest_minecart'|'furnace_minecart'|'tnt_minecart'|'hopper_minecart'|'spawner_minecart'|'creeper'|'skeleton'|'spider'|'giant'|'zombie'|'slime'|'ghast'|'zombie_pigman'|'enderman'|'cave_spider'|'silverfish'|'blaze'|'magma_cube'|'ender_dragon'|'wither'|'bat'|'witch'|'endermite'|'guardian'|'shulker'|'pig'|'sheep'|'cow'|'chicken'|'squid'|'wolf'|'mooshroom'|'snow_golem'|'ocelot'|'iron_golem'|'horse'|'rabbit'|'polar_bear'|'llama'|'llama_spit'|'parrot'|'villager'|'end_crystal'|'turtle'|'phantom'|'trident'|'cod'|'salmon'|'pufferfish'|'tropical_fish'|'drowned'|'dolphin'|'cat'|'panda'|'pillager'|'ravager'|'trader_llama'|'wandering_trader'|'fox'|'bee'|'fishing_bobber'|'lightning_bolt'|'player'|'unknown'
 *    effect: jx_wrappers_entity$effect,
 *    attribute: jx_wrappers_entity$attribute,
 *    equip: jx_wrappers_entity$equip,
 *    heal: jx_wrappers_entity$heal,
 *    feed: jx_wrappers_entity$feed,
 *    damage: jx_wrappers_entity$damage,
 *    clear: jx_wrappers_entity$clear,
 *    give: jx_wrappers_entity$give,
 *    take: jx_wrappers_entity$take,
 *    tag: jx_wrappers_entity$tag,
 *    mod: jx_wrappers_entity$mod
 * }}
 * @example
 * // set a zombie's health and max health to 100
 * $(zombie).mod({ health: 100 });
 */
module.exports = function (subject) {
   var entity = subject;
   var that = {
      get entity () {
         return entity;
      }
   };
   that.type = _(entity);
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
                  time: Number(effect.duration),
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
            entity.getAttribute(jx.api.attribute[type]).setBaseValue(Number(value));
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
      var nothing = jx.spawn.item('air');
      entity.equipment.setItemInMainHand(equipment.mainhand || nothing);
      entity.equipment.setItemInOffHand(equipment.offhand || nothing);
      entity.equipment.setHelmet(equipment.helmet || nothing);
      entity.equipment.setChestplate(equipment.chestplate || nothing);
      entity.equipment.setLeggings(equipment.leggings || nothing);
      entity.equipment.setBoots(equipment.boots || nothing);
      return that;
   };
   that.heal = function (amount) {
      entity.setHealth(Number(amount || entity.maxHealth));
      return that;
   };
   that.feed = function (amount) {
      entity.setFoodLevel(Number(amount || 20));
      return that;
   };
   that.damage = function (amount) {
      entity.damage(Number(amount || entity.health + 1));
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
   that.tag = function (tag, add) {
      add ? entity.addScoreboardTag(tag.toString()) : entity.removeScoreboardTag(tag.toString());
      return that;
   };
   that.mod = function (options) {
      if (options.health) {
         options.health = Number(options.health);
         entity.setMaxHealth(options.health);
         entity.setHealth(options.health);
      }
      if (options.equipment) {
         that.equip(options.equipment);
      }
      if (options.effects) {
         Object.keys(options.effects).forEach(function (effect) {
            var value = options.effects[effect];
            that.effect(effect, Number(value.level || 1), Number(value.time || -1), true);
         });
      }
      if (options.attributes) {
         Object.keys(options.attributes).forEach(function (attribute) {
            that.attribute(attribute, Number(options.attributes[attribute]));
         });
      }
      return that;
   };
   return that;
};
