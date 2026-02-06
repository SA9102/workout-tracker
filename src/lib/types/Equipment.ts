export const EQUIPMENT = [
	'Barbell',
	'Dumbbells',
	'Rings',
	'Straight Bar',
	'Parallel Bars',
	'Converging V-Bars',
	'Diverging V-Bars',
	'Resistance Bands',
	'Flat Bench',
	'Incline Bench',
	'Decline Bench'
] as const;

export type Equipment = (typeof EQUIPMENT)[number];
