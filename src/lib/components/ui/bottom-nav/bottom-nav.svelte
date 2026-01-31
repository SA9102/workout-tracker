<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let { class: className, children }: { class?: string; children: Snippet } = $props();
</script>

<nav
	class={cn(
		'flex h-13 w-full items-center justify-around border-t bg-background px-2 shadow-[0_-1px_2px_rgba(0,0,0,0.03)]',
		className
	)}
>
	{@render children()}
</nav>
