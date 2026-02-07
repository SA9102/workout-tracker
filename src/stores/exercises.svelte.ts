import type { Exercise } from '@/types/Exercise';

let exercises: Exercise[] = $state([
	{
		id: '1',
		name: 'Dips',
		primaryMuscles: ['Chest', 'Triceps'],
		secondaryMuscles: ['Shoulders'],
		equipment: ['Rings'],
		includesBodyweight: true,
		trackingType: 'reps'
	},
	{
		id: '2',
		name: 'Pull Ups',
		primaryMuscles: ['Lats'],
		secondaryMuscles: ['Forearms'],
		equipment: ['Straight Bar'],
		includesBodyweight: true,
		trackingType: 'reps'
	}
]);

export function getExercises() {
	return exercises;
}

export function setExercises(newExercises: Exercise[]) {
	exercises = newExercises;
}

export function addExercise(newExercise: Exercise) {
	exercises = [...exercises, newExercise];
}
