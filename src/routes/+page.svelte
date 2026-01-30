<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { SvelteSet } from 'svelte/reactivity';
	import { GeneralMuscleGroup } from '../types/MuscleGroups';
	import type { Exercise } from '../types/Exercise';
	import { Switch } from '$lib/components/ui/switch/index.js';
	import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';

	let primarySelectedMuscleGroups = new SvelteSet();
	let secondarySelectedMuscleGroups = new SvelteSet();

	let exercise: Exercise = $state({
		name: '',
		primaryMuscles: [],
		secondaryMuscles: [],
		equipment: [],
		includesBodyweight: false,
		trackingType: 'reps'
	});
	const generalMuscles = Object.values(GeneralMuscleGroup);
</script>

<h1>Create Exercise</h1>

<Label for="name">Name</Label>
<Input id="name" bind:value={exercise.name} />

<Label for="primary-muscles">Primary Muscles</Label>
{#each primarySelectedMuscleGroups as smg}
	<Badge>{smg}</Badge>
{/each}

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'default' })}
		>Select Primary Muscles</Dialog.Trigger
	>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Select Primary Muscles</Dialog.Title>
			<ScrollArea class="h-[300px] rounded-md">
				<div class="flex flex-col gap-2">
					{#each generalMuscles as gm}
						<Label
							class="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950"
							for={gm}
						>
							<Checkbox
								id={gm}
								class="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
								checked={exercise.primaryMuscles.includes(gm)}
								onCheckedChange={(checked) => {
									if (checked) {
										primarySelectedMuscleGroups.add(gm);
									} else {
										primarySelectedMuscleGroups.delete(gm);
									}
								}}
							/>
							<p>{gm}</p>
						</Label>
					{/each}
				</div>
			</ScrollArea>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>

<Label for="primary-muscles">Secondary Muscles</Label>
{#each secondarySelectedMuscleGroups as smg}
	<Badge>{smg}</Badge>
{/each}

<Label for="includes-bodyweight">Includes Bodyweight</Label>
<Switch
	id="includes-bodyweight"
	checked={exercise.includesBodyweight}
	onCheckedChange={(checked) => (exercise.includesBodyweight = checked)}
/>

<ToggleGroup.Root variant="outline" type="single">
	<ToggleGroup.Item value="bold" aria-label="Toggle bold">Reps</ToggleGroup.Item>
	<ToggleGroup.Item value="italic" aria-label="Toggle italic">Duration</ToggleGroup.Item>
</ToggleGroup.Root>
