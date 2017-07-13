export const intro = {
    story: [
        "I almost tripped as I walked out of the plane, almost stumbling into the lady in front me. ",
        "Now wasn't the time to chastise myself. I was already late as it was. I didn't know how long they would wait for me."
    ],
    decisions: [
        "Take the Left",
        "Take the W Train"
    ],
    leftOutcome: {
        story: [
            "I was almost jogging at this point. My heavy carry-on bag wasn’t helping me keep the pace.",
            "I almost tripped again rushing down an incline. I cursed to myself, startling several children and their parents.",
            "I gave a quiet nod of apology, and hurried on.",
            "The baggage claim was close now. I ignored the bright lights of the gift shop. I ignored the divine smell of the bagel shop and all its equally decedent toppings. ",
            "Being late would mean travelling all the way across the world for nothing",
            "I couldn’t have travelled all the way across the world (and wasted all that money) just to turn back around again."
        ],
        leftOutcome: intro,
        rightOutcome: intro,
        decisions: [
            "Take the L Train",
            "Take the W Train"
        ],
        id: 13
    },
    rightOutcome: choice1_runtogetbags_post_choice2,
    id: 10
}


/*const choice1_runtogetbags = {
    story: [
        "I picked up the pace, hoping that I would be able to make it in time.", 
        "My flight had landed an hour late because of the snowy weather, and now I was paying the price.",
        "I walked fast enough to catch the glare of an airport security guard. "
    ],
    decisions: [
        "Take the Left",
        "Take the W Train"
    ],
    variable: true,
    id: 14
}

const choice1_runtogetbags_choice2_apologize = {
    story: [
        "'Sorry!' I yelled from across the walkway. All that got me was another glare. Guess I deserved that one."
    ],
    decisions: [
        "Take the Left",
        "Take the W Train"
    ],
    id: 11
}

const choice1_runtogetbags_choice2_dontapologize = {
    story: ["Right. I didn't have time for that."],
    decisions: [
        "Take the Left",
        "Take the W Train"
    ],
    id: 12
}*/

export const choice1_runtogetbags_post_choice2 = {
    story: [
        "I was almost jogging at this point. My heavy carry-on bag wasn’t helping me keep the pace.",
        "I almost tripped again rushing down an incline. I cursed to myself, startling several children and their parents.",
        "I gave a quiet nod of apology, and hurried on.",
        "The baggage claim was close now. I ignored the bright lights of the gift shop. I ignored the divine smell of the bagel shop and all its equally decedent toppings. ",
        "Being late would mean travelling all the way across the world for nothing",
        "I couldn’t have travelled all the way across the world (and wasted all that money) just to turn back around again."
    ],
    leftOutcome: intro,
    rightOutcome: intro,
    decisions: [
        "Take the L Train",
        "Take the W Train"
    ],
    id: 13
}