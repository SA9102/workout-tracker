<script lang="ts">
	import type { Exercise } from '@/types/Exercise';
	import * as Item from '$lib/components/ui/item/index.js';
	import { Badge, badgeVariants } from '$lib/components/ui/badge/index.js';
	import { Equipment } from '@/types/Equipment';
	import { Button } from '$lib/components/ui/button/index.js';

	import { getExercises } from '../../stores/exercises.svelte';

	const exercises = getExercises();
	// const mockExercises: Exercise[] = [
	// 	{
	// 		name: 'Dips',
	// 		primaryMuscles: ['Chest', 'Triceps'],
	// 		secondaryMuscles: ['Shoulders'],
	// 		equipment: ['Rings'],
	// 		includesBodyweight: true,
	// 		trackingType: 'reps'
	// 	},
	// 	{
	// 		name: 'Pull Ups',
	// 		primaryMuscles: ['Lats'],
	// 		secondaryMuscles: ['Forearms'],
	// 		equipment: ['Straight Bar'],
	// 		includesBodyweight: true,
	// 		trackingType: 'reps'
	// 	}
	// ];
</script>

<h1>Exercises</h1>

<div class="flex flex-col gap-3">
	{#each exercises as me}
		<Item.Root variant="muted">
			<Item.Content>
				<Item.Title><p class="text-xl">{me.name}</p></Item.Title>
				<Item.Description>
					<div class="flex flex-col gap-2">
						<div class="flex gap-1">
							{#each me.primaryMuscles as pm}
								<Badge class="text-[10px]">{pm}</Badge>
							{/each}
							{#each me.secondaryMuscles as sm}
								<Badge class="bg-neutral-400 text-[10px]">{sm}</Badge>
							{/each}
						</div>
						{#each me.equipment as e}
							<Badge class="bg-orange-200 text-[10px]">{e}</Badge>
						{/each}
						{#each me.equipment as e}
							<Badge class="bg-orange-200 text-[10px]">{e}</Badge>
						{/each}
					</div>
				</Item.Description>
			</Item.Content>
			<Item.Actions />
		</Item.Root>
	{/each}
</div>
<Button href="/exercises/new" size="sm" class="w-full">Create Exercise</Button>
