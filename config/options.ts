// decide on the best schema for creating this
// exercise notes and then specific notes?
const legs = {
    quads: {
        strengthening: [],
        stability: [],
        endurance: [],
        explosive: []
    },
    abductors: {
        strengthening: [],
        stability: [],
        endurance: [],
        explosive: []
    },
    adductors: {
        strengthening: [],
        stability: [],
        endurance: [],
        explosive: []
    },
    hamstrings: {
        strengthening: [],
        stability: [],
        endurance: [
            {
                name: 'weighted hamstring donkey kick',
                notes: [
                    "try to ensure the weight never touches the ground"
                ]
            }
        ],
        explosive: []
    },
    glutes: {
        strengthening: [
            {
                name: 'hip thrusts',
                notes: 'maintain neutral spine'
            }
        ],
        stability: [
                {
                name: 'hip airplanes',
                notes: [
                    'Let yourself rotate all the way into supporting leg on negative for full range of motion'
                ]
            }
        ],
        endurance: [],
        explosive: []
    },
    knees: {
        strengthening: [
                {
                name: "sissy squats",
                notes: []
            }
        ],
        stability: [],
        endurance: [],
        explosive: []
    },
    shins: {
        strengthening: [
            {
                name: 'tib raises',
                notes: []
            }
        ],
        stability: [],
        endurance: [],
        explosive: []
    },
    feet: {
        strengthening: [
            {
                name: "passé relevé",
                notes: [
                    "roll up through the foot rather than pop up"
                ]
            }
        ],
        stability: [],
        endurance: [
            {
                name: 'Balanchine toe push',
                notes: []
            }
        ],
        explosive: [
            {
                name: "no knee hops",
                notes: [
                    "Do not bend your knees"
                ]
            }
        ]
    }
}

const generalNotes = [
    "hold onto something for balance", 
    "control the negative for greater impact",
];

export default {
    legs,
    generalNotes
}