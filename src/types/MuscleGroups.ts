export enum GeneralMuscleGroup {
	Abdominals = 'Abdominals',
	Abductors = 'Abductors',
	Adductors = 'Adductors',
	Biceps = 'Biceps',
	Brachialis = 'Brachialis',
	Calves = 'Calves',
	Chest = 'Chest',
	Forearms = 'Forearms',
	Glutes = 'Glutes',
	Hamstrings = 'Hamstrings',
	Lats = 'Lats',
	LowerBack = 'Lower Back',
	Neck = 'Neck',
	Quadriceps = 'Quadriceps',
	Shoulders = 'Shoulders',
	Traps = 'Traps',
	Triceps = 'Triceps',
	UpperBack = 'Upper Back'
}

export enum SpecificMuscleGroup {
	ShouldersFront = 'Shoulders (Front)',
	ShouldersSide = 'Shoulders (Side)',
	ShouldersRear = 'Shoulders (Rear)',
	TricepsLateralHead = 'Triceps (Lateral Head)',
	TricepsLongHead = 'Triceps (Long Head)',
	ChestUpper = 'Chest (Upper)',
	ChestMid = 'Chest (Mid)',
	ChestLower = 'Chest (Lower)'
}

export const SpecificToGeneralMuscleMap: Record<SpecificMuscleGroup, GeneralMuscleGroup> = {
	[SpecificMuscleGroup.ShouldersFront]: GeneralMuscleGroup.Shoulders,
	[SpecificMuscleGroup.ShouldersSide]: GeneralMuscleGroup.Shoulders,
	[SpecificMuscleGroup.ShouldersRear]: GeneralMuscleGroup.Shoulders,
	[SpecificMuscleGroup.TricepsLateralHead]: GeneralMuscleGroup.Triceps,
	[SpecificMuscleGroup.TricepsLongHead]: GeneralMuscleGroup.Triceps,
	[SpecificMuscleGroup.ChestUpper]: GeneralMuscleGroup.Chest,
	[SpecificMuscleGroup.ChestMid]: GeneralMuscleGroup.Chest,
	[SpecificMuscleGroup.ChestLower]: GeneralMuscleGroup.Chest
};

export type AllMuscleGroup = GeneralMuscleGroup | SpecificMuscleGroup;
