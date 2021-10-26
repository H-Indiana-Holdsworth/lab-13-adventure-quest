const pirates = {
    id: 'pirates',
    title: 'A band of Pirates',
    map: {
        top: '70%',
        left: '30%'
    },
    image: 'pirates.jpeg',
    description: `
    A band of space pirates boards your ship and demands 10,000 monies, and they mean business. What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
        You've been in this situation before, you know that all you have to do is offer them one of your crew mates and they'll let you go free. You give over your janitor, he really made more of a mess than he cleanded anyways, but they don't know that. You lose honor and gain no money, but you get away with your life
        `,
        honor: -30,
        monies: 0
    }, {
        id: 'fight',
        description: 'Show them who\'s ship this is, FIGHT!',
        result: `
        You and your crew are experienced fighters so you take out your blaster and shoot the leader's ear off, the rest of your crew does likewise and the pirates scurry back to their ship. They left in such a hurry that one of the pirates forgets his loot bag, you find 5,000 monies in it!
        `,
        honor: +50,
        monies: 5.000
    }, {
        id: 'surrender',
        description: 'Surrender yourself and your crew',
        result: `
        You acquiesce their request and surrender yourself and your crew over to the pirates without a word. They are angered by your spinelessness and execute your whole crew and throw you out into space. You lose your honor.
        `, 
        honor: -100,
        monies: -1.000
    }]
};

const bar = {
    id: 'bar',
    title: 'The bar',
    map: {
        top: '30%',
        left: '70%'
    },
    image: 'bar.jpeg',
    description: `
    A weird guy at a bar asks you if you wanna buy some death stix, what do you do?
    `,
    choices: [{
        id: 'accept',
        description: 'Graciously accept his offer',
        result: `
        You accept the death stix and buy some. You try them, and die. Why do you think they're called death stix?
        `,
        honor: 0,
        monies: -1.000,
    }, {
        id: 'decline',
        description: 'Decline the offer',
        result: `
        You politely decline the offer and tell him to go home and rethink his life, there's a reason they're called death stix. You buy some blue llama milk cuz you know a guy named Mark who's jacked and he drinks it. You also save monies, those things are 1,000 monies a pop
        `,
        honor: +50,
        monies: 0
    }, {
        id: 'shoot',
        description: 'Shoot him',
        result: `
        You shoot the weirdo, the last guy that offered you death stix almost got you killed because those things can kill you! You also do the town a favor by stopping drug trafficking and the authorities give you 1,000 monies!
        `,
        honor: +50,
        monies: +1000
    }]
};

const jabba = {
    id: 'Jabba',
    title: 'Jabba the hut',
    map: {
        bottom: '20%',
        right: '80%'
    },
    image: 'jabba.jpeg',
    description: `
    You are kidnapped and taken to Jabba's palace, you owe him a big debt, what do you do?
    `,
    choices: [{
        id: 'shootout',
        description: `Shoot the fat slug`,
        result: `
        You brandish your blaster and shoot his eye out, you're crew didn't leave you behind and the come out from nowhere and shoot up Jabba's guards, you steal his money and get outta dodge. Jabba's a rich criminal so you get +50 honor, and +10,000 monies!
        `,
        honor: +50,
        monies: +10.000,
    }, {
        id: 'pay',
        description: `Pay your debt`,
        result: `
        You're an honorable guy so you decide it's finally time to pay up on this debt, you take a loan out from Jabba to pay it off. Wait...
        `,
        honor: +10,
        monies: -10.000
    }, {
        id: 'slave',
        description: `Offer yourself as payment`,
        result: `
        You don't have the money to pay so you offer yourself. You know Jabba used to keep Leia around in a weird costume and it hurts your pride, and you're a dude, but you say you'll wear the costume if he'll let you live. Jabba thinks that's super wierd and drops you into the big monster trap and you get eaten.
        `,
        honor: -100,
        monies: 0,
    }]
};

const quests = [
    pirates,
    bar,
    jabba,
];

export default quests;