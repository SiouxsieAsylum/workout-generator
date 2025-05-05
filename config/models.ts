// ========== Exports ===========
export type PORT = 2000 | 5000 | 10000;

// TO-DO-DRE: create a WholeBody interface
export interface LegDay {
    quads?: Exercise | PassiveStretch | ActiveStretch,
    abductors?: Exercise | PassiveStretch | ActiveStretch,
    adductors?: Exercise | PassiveStretch | ActiveStretch,    
    hamstrings: Exercise | PassiveStretch | ActiveStretch,
    glutes: Exercise | PassiveStretch | ActiveStretch,
    knees: Exercise | PassiveStretch | ActiveStretch,
    shins: Exercise | PassiveStretch | ActiveStretch,
    feet: Exercise | PassiveStretch | ActiveStretch
}

export interface BackDay {
    upperTraps: Exercise | PassiveStretch | ActiveStretch,
    midTraps: Exercise | PassiveStretch | ActiveStretch,
    lowerTraps: Exercise | PassiveStretch | ActiveStretch,
    lats: Exercise | PassiveStretch | ActiveStretch,
    midback: Exercise | PassiveStretch | ActiveStretch,
    lowerback: Exercise | PassiveStretch | ActiveStretch
}

export interface CoreDay {
    upperabs: Exercise | PassiveStretch | ActiveStretch,
    lowerabs: Exercise | PassiveStretch | ActiveStretch,
    obliques: Exercise | PassiveStretch | ActiveStretch,
}

export interface ArmDay {
    quads: Exercise | PassiveStretch | ActiveStretch,
    hamstrings: Exercise | PassiveStretch | ActiveStretch,
    glutes: Exercise | PassiveStretch | ActiveStretch,
    knees: Exercise | PassiveStretch | ActiveStretch,
    shins: Exercise | PassiveStretch | ActiveStretch,
    feet: Exercise | PassiveStretch | ActiveStretch
}

export interface Exercise {
    name: string,
    type: 'strengthening' | 'stability' | 'endurance' | 'explosive'
    sets: number,
    reps: number,
    notes: Array<string>,
    superSet?: Exercise
}

export interface PassiveStretch {
    name: string,
    hold: number,
    notes: Array<string>,
}

export interface ActiveStretch {
    name: string,
    hold: number,
    cycleDesc: string;
    notes: Array<string>,
}