import type { Equipment } from './Equipment';
import type { AllMuscleGroup } from './MuscleGroups';

export type Exercise = {
	name: string;
	primaryMuscles: AllMuscleGroup[];
	secondaryMuscles?: AllMuscleGroup[];
	equipment: Equipment[];
	includesBodyweight: boolean;
	trackingType: 'reps' | 'duration';
};
