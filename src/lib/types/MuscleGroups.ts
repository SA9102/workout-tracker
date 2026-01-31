export const GENERAL_MUSCLE_GROUPS = [
	'Abdominals',
	'Abductors',
	'Adductors',
	'Biceps',
	'Brachialis',
	'Calves',
	'Chest',
	'Forearms',
	'Glutes',
	'Hamstrings',
	'Lats',
	'Lower Back',
	'Neck',
	'Quadriceps',
	'Shoulders',
	'Traps',
	'Triceps',
	'Upper Back'
] as const;

export type GeneralMuscleGroup = (typeof GENERAL_MUSCLE_GROUPS)[number];

export const SPECIFIC_MUSCLE_GROUPS = [
	'Shoulders (Front)',
	'Shoulders (Side)',
	'Shoulders (Rear)',
	'Triceps (Lateral Head)',
	'Triceps (Long Head)',
	'Chest (Upper)',
	'Chest (Mid)',
	'Chest (Lower)'
] as const;

export type SpecificMuscleGroup = (typeof SPECIFIC_MUSCLE_GROUPS)[number];

export const SPECIFIC_TO_GENERAL_MUSCLE_MAP: Record<SpecificMuscleGroup, GeneralMuscleGroup> = {
	'Shoulders (Front)': 'Shoulders',
	'Shoulders (Side)': 'Shoulders',
	'Shoulders (Rear)': 'Shoulders',
	'Triceps (Lateral Head)': 'Triceps',
	'Triceps (Long Head)': 'Triceps',
	'Chest (Upper)': 'Chest',
	'Chest (Mid)': 'Chest',
	'Chest (Lower)': 'Chest'
};

export type AllMuscleGroup = GeneralMuscleGroup | SpecificMuscleGroup;
