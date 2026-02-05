<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import type { Exercise } from '$lib/types/Exercise';
	import { Switch } from '$lib/components/ui/switch/index.js';
	import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { addExercise } from '../../../stores/exercises.svelte';

	import SelectMusclesDialog from '$lib/components/custom/SelectMusclesDialog.svelte';

	let exercise: Exercise = $state({
		name: '',
		primaryMuscles: [],
		secondaryMuscles: [],
		equipment: [],
		includesBodyweight: false,
		trackingType: 'reps'
	});

	let lastTrackingType = 'reps';

	//$inspect(exercise);
</script>

<h2>Create Exercise</h2>

<div class="flex flex-col gap-2">
	<Label for="name">Name</Label>
	<Input id="name" bind:value={exercise.name} />
</div>
<Separator />

<div class="flex flex-col gap-2">
	<Label for="primary-muscles">Primary Muscles</Label>
	{#if exercise.primaryMuscles}
		<div class="flex gap-2">
			{#each exercise.primaryMuscles as pm}
				<Badge class="text-[10px]">{pm}</Badge>
			{/each}
		</div>
	{:else}
		<p class="text-xs text-neutral-500">No primary muscles selected.</p>
	{/if}
</div>

<SelectMusclesDialog bind:muscles={exercise.primaryMuscles} />

<Separator />

<div class="flex flex-col gap-2">
	<Label for="secondary-muscles">Primary Muscles</Label>
	{#if exercise.secondaryMuscles}
		<div class="flex gap-2">
			{#each exercise.secondaryMuscles as pm}
				<Badge class="text-[10px]">{pm}</Badge>
			{/each}
		</div>
	{:else}
		<p class="text-xs text-neutral-500">No primary muscles selected.</p>
	{/if}
</div>

<SelectMusclesDialog bind:muscles={exercise.secondaryMuscles} isPrimary={false} />

<Separator />

<div class="flex gap-3">
	<Label for="includes-bodyweight">Includes Bodyweight?</Label>
	<Switch
		id="includes-bodyweight"
		checked={exercise.includesBodyweight}
		onCheckedChange={(checked) => (exercise.includesBodyweight = checked)}
	/>
</div>
<Separator />

<Label>Tracking Method</Label>
<ToggleGroup.Root
	type="single"
	bind:value={exercise.trackingType}
	variant="outline"
	onValueChange={(v) => {
		if (v === '') {
			exercise.trackingType = lastTrackingType;
		} else {
			lastTrackingType = v;
			exercise.trackingType = v;
		}
	}}
>
	<ToggleGroup.Item value="reps" aria-label="Toggle bold">Reps</ToggleGroup.Item>
	<ToggleGroup.Item value="duration" aria-label="Toggle italic">Duration</ToggleGroup.Item>
</ToggleGroup.Root>
<Button
	onclick={() => {
		addExercise(exercise);
		console.log('Added');
	}}>Save</Button
>
