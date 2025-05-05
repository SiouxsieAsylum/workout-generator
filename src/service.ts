import * as options from '../config/options'
import { LegDay, Exercise } from '../config/models'

const generateWorkout = (target: string, type?: string) => {
    if (!target) return false;
    let workout = Array<LegDay>;

    for(const [muscle, exerciseType] of Object.entries(options.default[target])) {
        const specificType = type || exerciseType;

        // TO-DO-DRE: enforce typing and indexing to prevent "unknown" at travel time
        let chosen;
        if (muscle[specificType].length) {
            chosen = Math.floor(Math.random() * muscle[specificType].length)
        }

        const exercise: Exercise = {
            name: chosen.name,
            sets: Math.floor(Math.random() * 3),
            reps: Math.floor(Math.random() * 12),
            type: specificType,
            notes: chosen.notes
        }

        workout[muscle] = exercise;

    }
    
    return workout;
}

export {
    generateWorkout
} 