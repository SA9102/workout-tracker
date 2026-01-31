<script lang="ts">
	import type { Exercise } from '@/types/Exercise';
	import * as Item from '$lib/components/ui/item/index.js';
	import { Badge, badgeVariants } from '$lib/components/ui/badge/index.js';

	const mockExercises: Exercise[] = [
		{
			name: 'Dips',
			primaryMuscles: ['Chest', 'Triceps'],
			secondaryMuscles: ['Shoulders'],
			equipment: ['Rings'],
			includesBodyweight: true,
			trackingType: 'reps'
		},
		{
			name: 'Pull Ups',
			primaryMuscles: ['Lats'],
			secondaryMuscles: ['Forearms'],
			equipment: ['Straight Bar'],
			includesBodyweight: true,
			trackingType: 'reps'
		}
	];
</script>

<h1>Exercises</h1>

<div class="flex flex-col gap-3">
	{#each mockExercises as me}
		<Item.Root variant="muted">
			<Item.Content>
				<Item.Title>{me.name}</Item.Title>
				<Item.Description>
					<div class="flex flex-col gap-2">
						<div class="flex gap-1">
							{#each me.primaryMuscles as pm}
								<Badge>{pm}</Badge>
							{/each}
						</div>
						<div class="flex gap-1">
							{#each me.secondaryMuscles as sm}
								<Badge class={badgeVariants({ variant: 'secondary' })}>{sm}</Badge>
							{/each}
						</div>
					</div>
				</Item.Description>
			</Item.Content>
			<Item.Actions />
		</Item.Root>
	{/each}
</div>
