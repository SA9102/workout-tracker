<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import * as BottomNav from '$lib/components/ui/bottom-nav';
	import House from '@lucide/svelte/icons/house';
	import Flame from '@lucide/svelte/icons/flame';
	import Dumbbell from '@lucide/svelte/icons/dumbbell';
	import TrendingUp from '@lucide/svelte/icons/trending-up';
	let { children } = $props();

	const iconClass = 'h-4 w-4';
</script>

<svelte:head
	><link rel="icon" href={favicon} /><link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
		rel="stylesheet"
	/></svelte:head
>

<ModeWatcher />
<div class="flex flex-col gap-5 px-3">
	{@render children()}
</div>

<div class="fixed bottom-0 w-full">
	<BottomNav.Root>
		<BottomNav.Item href="/home">
			<House class={iconClass} />
			<span>Home</span>
		</BottomNav.Item>
		<BottomNav.Item href="/routines">
			<Flame class={iconClass} />
			<span>Routines</span>
		</BottomNav.Item>
		<BottomNav.Item href="/exercises">
			<Dumbbell class={iconClass} />
			<span>Exercises</span>
		</BottomNav.Item>
		<BottomNav.Item href="/stats">
			<TrendingUp class={iconClass} />
			<span>Stats</span>
		</BottomNav.Item>
	</BottomNav.Root>
</div>
