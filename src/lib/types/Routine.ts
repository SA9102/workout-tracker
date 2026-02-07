import type { RoutineExercise } from './RoutineExercise';

export type Routine = {
	id: string;
	name: string;
	routineExercises: RoutineExercise[];
};
