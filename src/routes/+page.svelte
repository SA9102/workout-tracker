<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { SvelteSet } from 'svelte/reactivity';

	let selectedMuscleGroups = new SvelteSet();

	const muscleGroups = [
		'Abdominals',
		'Abductors',
		'Adductors',
		'Biceps',
		'Brachialis',
		'Calves',
		'Chest',
		'Forearms',
		'Glutes',
		'Hamstrings',
		'Lats',
		'Lower Back',
		'Neck',
		'Shoulders (Front)',
		'Shoulders (Rear)',
		'Shoulders (Side)',
		'Traps',
		'Triceps (Lateral Head)',
		'Triceps (Long Head)',
		'Upper Back'
	];

	console.log(selectedMuscleGroups);
</script>

<h1>Create Exercise</h1>

<Label for="name">Name</Label>
<Input id="name" />

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'default' })}
		>Select Primary Muscles</Dialog.Trigger
	>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Select Primary Muscles</Dialog.Title>
			<ScrollArea class="h-[300px] rounded-md">
				<div class="flex flex-col gap-2">
					{#each muscleGroups as mg}
						<Label
							class="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950"
							for={mg}
						>
							<Checkbox
								id={mg}
								class="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
								checked={selectedMuscleGroups.has(mg)}
								onCheckedChange={(checked) => {
									if (checked) {
										selectedMuscleGroups.add(mg);
									} else {
										selectedMuscleGroups.delete(mg);
									}
								}}
							/>
							<p>{mg}</p>
						</Label>
					{/each}
				</div>
			</ScrollArea>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
