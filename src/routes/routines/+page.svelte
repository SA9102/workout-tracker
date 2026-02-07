<script lang="ts">
	import type { Exercise } from '$lib/types/Exercise';
	import * as Item from '$lib/components/ui/item/index.js';
	import { Badge, badgeVariants } from '$lib/components/ui/badge/index.js';
	import { type Equipment } from '$lib/types/Equipment';
	import { Button } from '$lib/components/ui/button/index.js';

	import { getRoutines } from '../../stores/routines.svelte';

	const routines = getRoutines();
</script>

<h1>Routines</h1>

<div class="flex flex-col gap-3">
	{#each routines as r}
		<Item.Root variant="muted">
			{#snippet child({ props })}
				<a href="/routines/{r.id}" {...props}>
					<Item.Content>
						<Item.Title><p class="mb-3 text-xl font-bold">{r.name}</p></Item.Title>
						<Item.Description>
							<!-- <div class="flex flex-col gap-2">
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
								</div> -->
							<Button size="sm" variant="secondary">Start</Button>
						</Item.Description>
					</Item.Content>
					<Item.Actions />
				</a>
			{/snippet}
		</Item.Root>
	{/each}
</div>
<Button href="/routines/new" size="sm" class="w-full">New Routine</Button>
