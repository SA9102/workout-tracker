import type { Exercise } from './Exercise';
import type { Set } from './Set';

export type RoutineExercise = {
	id: string;
	exercise: Exercise;
	sets: Set[];
	restTime: number;
};
