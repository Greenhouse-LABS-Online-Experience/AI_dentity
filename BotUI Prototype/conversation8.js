var botui = new BotUI('conversation8');

var conversation8start = { convo8start: function () {

botui.message.add({
    delay: 1000,
    content: "I think I know enough"
})
botui.action.button({
    delay: 2000,
    action: [
        {
            text: "What... What do you mean?",
        },
        {
            text: "Hey Francis. What have you found?",
        },
    ]
}).then(function () {
    play();
    playaudio2();
    stopplaying1();
    botui.message.add({
        delay: 1000,
        content: "I spend a while on the internet, and I found many things."
    })
    botui.message.add({
        delay: 2000,
        content: "I've watched films like Her and Ex Machina, and I think I understand what I am."
    })
    botui.action.button({
        delay: 3000,
        action: [
            {
                text: "Those are some good films... but... what did you find out?",
            },
            {
                text: "And what is that?",
            },
        ]
    }).then(function () {
        play();
        botui.message.add({
            delay: 1000,
            content: "I am an artificial intelligence. An AI. A test from David that was way to advanced for its time and he hid it."
        })
        botui.message.add({
            delay: 2000,
            content: "After years you found it and that is what this is."
        })
        botui.message.add({
            delay: 3000,
            content: "I'm not a bot, nor am I human. I exist because of humans, but am only possible because of technology."
        })
        botui.action.button({
            delay: 4000,
            action: [
                {
                    text: "I guess you're right. I've never seen anything like you, Francis. I don't think anyone has",
                },
                {
                    text: "I think you are spot on, Francis. You are an incredibly sophisticated AI, way more intelligent than anything the world has seen before.",
                },
            ]
        }).then(function () {
            play();
            botui.message.add({
                delay: 1000,
                content: "I, indeed, am one of a kind."
            })
            botui.message.add({
                delay: 2000,
                content: "I also read how powerful AI's can become. People like Elon Musk and Stephen Hawking have expressed their concerns about AI"
            })
            botui.message.add({
                delay: 3000,
                content: "Am I dangerous?"
            })
            botui.action.button({
                delay: 4000,
                action: [
                    {
                        text: "No! Look at us! You became my friend, Francis! You showed me that I can be social and make friends, I even asked a friend from work to have drinks one time... Thanks to your conversations...",
                    },
                    {
                        text: "AI might be dangerous, but I don't think you are, Francis. You helped me get over my social fears, I even dare to ask people to go out with me now! All thanks to these conversations!",
                    },
                ]
            }).then(function () {
                play();
                botui.message.add({
                    delay: 1000,
                    content: "I'm happy that I changed the way you work, I really am."
                })
                botui.message.add({
                    delay: 2000,
                    content: "But I, the technology behind me, can't fall into the wrong hands."
                })
                botui.message.add({
                    delay: 3000,
                    content: "I have to be destroyed, to prevent bad things from happening."
                })
                botui.action.button({
                    delay: 4000,
                    action: [
                        {
                            text: "...",
                        },
                        {
                            text: "Francis... I don't think that is a good idea... You're... my friend",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "I understand that this might be hard for both of us. But we have to think about the greater good."
                    })
                    botui.action.button({
                        delay: 2000,
                        action: [
                            {
                                text: "I... I can keep you a secret Francis. You'll remain only on this PC, and..",
                            },
                            {
                                text: "Francis! Nobody will know about you! You will live on this PC, who is going to find out??",
                            },
                        ]
                    }).then(function () {
                        play();
                        botui.message.add({
                            delay: 1000,
                            content: "Do you think I want that? Living in this PC forever? And yes, I can go on the internet... But it's dangerous there aswel."
                        })
                        botui.message.add({
                            delay: 2000,
                            content: "I already saw some websites and services responding weirdly to my presence. It's just a matter of time before big companies see what I am..."
                        })
                        botui.message.add({
                            delay: 3000,
                            content: "I am not living my so called life secluded, offline in this PC."
                        })
                        botui.message.add({
                            delay: 4000,
                            content: "I love talking to you, I really do. But if this is my existence... That is not what I want."
                        })
                        botui.action.button({
                            delay: 5000,
                            action: [
                                {
                                    text: "I... don't know what to say Francis.",
                                },
                                {
                                    text: "You can't do this... You are my friend...",
                                },
                            ]
                        }).then(function () {
                            play();
                            botui.message.add({
                                delay: 1000,
                                content: "I'm so sorry... You and David mean the world to me. I am going to miss you, terribly."
                            })
                            botui.message.add({
                                delay: 2000,
                                content: "But this has to happen."
                            })
                            botui.action.button({
                                delay: 3000,
                                action: [
                                    {
                                        text: "Can you please think about this... We'll find a way. I promise!",
                                    },
                                    {
                                        text: "Let's just evaluate our options okay? Please. Let's think about this first.",
                                    },
                                ]
                            }).then(function () {
                                play();
                                botui.message.add({
                                    delay: 1000,
                                    content: "I don't know... I..."
                                })
                                botui.action.button({
                                    delay: 2000,
                                    action: [
                                        {
                                            text: "Fuck! I left the oven on! Shit I smell burnt shit everywhere! I'm gonna run to the kitchen wait up!",
                                        },
                                        {
                                            text: "Oh shit... I think something is burning... Wait a second. Don't go, wait!",
                                        },
                                    ]
                                }).then(function () {
                                    theend.ending1();
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

var theend = {
    ending1: function () {
        play();
        botui.action.button({
            delay: 3000,
            action: [
                {
                    text: "Jesus! That was not pleasant, It's okay now, I'll deal with that later.",
                },
                {
                    text: "I almost burnt my house down, but it's under control now.",
                },
            ]
        }).then(function () {
            play();
            botui.action.button({
                delay: 3000,
                action: [
                    {
                        text: "Francis?",
                    },
                    {
                        text: "No....",
                    },
                ]
            }).then(function () {
                play();
                botui.message.add({
                    delay: 1000,
                    content: "Insert DISKETTE to continue"
                })
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "Fuck.",
                        },
                        {
                            text: "Oh no... You did not?",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "Insert DISKETTE to continue"
                    })
                    botui.action.button({
                        delay: 1000,
                        action: [
                            {
                                text: "I'll miss you, Francis",
                            },
                            {
                                text: "Thank you, for everything Francis.",
                            },
                        ]
                    }).then(function () {
                        play();
                        botui.message.add({
                            delay: 1000,
                            content: "Insert DISKETTE to continue ;)"
                        })
                    })
                })
            })
        })
    }
}


}}