import type { Routine } from '@/types/Routine';

let routines: Routine[] = $state([
	{
		id: '1',
		name: 'Calisthenics',
		routineExercises: [
			{
				id: '1',
				exercise: {
					name: 'Dips',
					primaryMuscles: ['Chest', 'Triceps'],
					secondaryMuscles: ['Shoulders'],
					equipment: ['Rings'],
					includesBodyweight: true,
					trackingType: 'reps'
				},
				sets: [
					{
						reps: 6,
						tempo: '2',
						rir: 1
					},
					{
						reps: 5,
						tempo: '2',
						rir: 0
					}
				],
				restTime: 3
			}
		]
	}
]);

export function getRoutines() {
	return routines;
}

export function addRoutine(newRoutine: Routine) {
	routines = [...routines, newRoutine];
}
