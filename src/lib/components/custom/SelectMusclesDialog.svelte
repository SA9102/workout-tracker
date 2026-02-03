<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import {
		GENERAL_MUSCLE_GROUPS,
		type GeneralMuscleGroup,
		type AllMuscleGroup
	} from '@/types/MuscleGroups';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	let { muscles = $bindable(), isPrimary = true } = $props();

	const dialogButtonClasses = 'self-start text-xs';
</script>

<Dialog.Root>
	<Dialog.Trigger
		class={`${buttonVariants({ variant: 'outline', size: 'sm' })} ${dialogButtonClasses}`}
		>Select {isPrimary ? 'Primary' : 'Secondary'} Muscles</Dialog.Trigger
	>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Select Primary Muscles</Dialog.Title>
			<ScrollArea class="h-[300px] rounded-md">
				<div class="flex flex-col gap-2">
					{#each GENERAL_MUSCLE_GROUPS as gmg}
						<Label
							class="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950"
							for={gmg}
						>
							<Checkbox
								id={gmg}
								class="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
								checked={muscles.includes(gmg)}
								onCheckedChange={(checked) => {
									if (checked) {
										muscles = [...muscles, gmg];
									} else {
										muscles = muscles.filter((muscle: GeneralMuscleGroup) => muscle !== gmg);
									}
								}}
							/>
							<p>{gmg}</p>
						</Label>
					{/each}
				</div>
			</ScrollArea>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
