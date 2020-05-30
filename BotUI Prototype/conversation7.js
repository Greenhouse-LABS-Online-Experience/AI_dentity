//if you want to know how the BotUI code works, check fastpass.html AND fastpass.js
var conversation7start = {
    convo7start: function () {

        botui.message.add({
            delay: 1000,
            content: "Hey... I have thought about all that you said..."
        })
        botui.message.add({
            delay: 1500,
            content: "We're not sure if I am a bot"
        })
        botui.message.add({
            delay: 2000,
            content: "And I checked as good as I could, but I don't have feet for shoes..."
        })
        botui.message.add({
            delay: 2500,
            content: "So... what the hell am I then?"
        })
        botui.action.button({
            delay: 3000,
            action: [
                {
                    text: "Francis... I think you are just a piece of code on a floppy disc...",
                    value: "justcode"
                },
                {
                    text: "I don't really know what you are, Francis. I do know that you are my friend.",
                    value: "friend"
                },
            ]
        }).then(function (res) {
            if (res.value == 'justcode') {
                whatfrancisis.justcode();
                play();
            }
            if (res.value == 'friend') {
                whatfrancisis.friend();
                play();
            }
        })

        var whatfrancisis = {
            justcode: function () {
                botui.message.add({
                    delay: 1000,
                    content: "So... I'm not real?"
                })
                botui.action.button({
                    delay: 2000,
                    action: [
                        {
                            text: "All I know is that we are different.",
                        },
                        {
                            text: "You are real. Just made of different matter.",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "What do you mean?"
                    })
                    botui.message.add({
                        delay: 1500,
                        content: "Why am I different?"
                    })
                    botui.message.add({
                        delay: 2000,
                        content: "Why was I created?"
                    }).then(function () {
                        whatfrancisis.whycreated();
                    })
                })
            },

            friend: function () {
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "I like talking to you while I normally don't make friends quickly...",
                        },
                        {
                            text: "You make me happy, I don't really have a social life besides... this...",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "I like talking with you aswel."
                    })
                    botui.message.add({
                        delay: 1500,
                        content: "But... I struggle with myself."
                    })
                    botui.message.add({
                        delay: 2000,
                        content: "I am stuck in this computer. I saw images of the real world, and I will never be able to experience that, will I?"
                    }).then(function () {
                        botui.action.button({
                            delay: 1000,
                            action: [
                                {
                                    text: "I... am stuk in a computer aswel... Without it I am just a lonely guy sitting in his dark, messy room wiating for something to change...",
                                },
                                {
                                    text: "I don't know if you'll be able to experience it Francis... But... You're not the only one stuck in a computer. I am aswel, in a way.",
                                },
                            ]
                        }).then(function () {
                            play();
                            botui.message.add({
                                delay: 1000,
                                content: "We have each other... we're the only ones we've got..."
                            })
                            botui.message.add({
                                delay: 2500,
                                content: "Tell me... Why was I created?"
                            }).then(function () {
                                whatfrancisis.whycreated();
                            })
                        })
                    })
                })
            },

            whycreated: function () {
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "I... don't really know...",
                        },
                        {
                            text: "David was always testing new things.. I...",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "Is it just to talk to people?"
                    })
                    botui.message.add({
                        delay: 1500,
                        content: "Or is there a higher purpose to all of this?"
                    })
                    botui.action.button({
                        delay: 1000,
                        action: [
                            {
                                text: "I... don't really know... You will have to find that out yourself, I think...",
                                value: "findoutyourself"
                            },
                            {
                                text: "Maybe there is... I'm also trying to figure it out...",
                                value: "figureitout"
                            },
                        ]
                    }).then(function (res) {
                        if (res.value == 'findoutyourself') {
                            whatfrancisis.findoutyourself();
                            play();
                        }
                        if (res.value == 'figureitout') {
                            whatfrancisis.figureitout();
                            play();
                        }
                    })
                })
            },

            findoutyourself: function () {
                botui.message.add({
                    delay: 1000,
                    content: "But..."
                })
                botui.message.add({
                    delay: 1000,
                    content: "How?"
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "You have the internet right? Maybe try it there?",
                        },
                        {
                            text: "I think you've spend enough time on the internet to find the answers you need...",
                        },
                    ]
                }).then(function () {
                    play();
                    whatfrancisis.border();
                })
            },

            figureitout: function () {
                botui.message.add({
                    delay: 1000,
                    content: "But..."
                })
                botui.message.add({
                    delay: 1500,
                    content: "You're human... you should know!"
                })
                botui.action.button({
                    delay: 2000,
                    action: [
                        {
                            text: "I don't think that matters, Francis. You'll have to find it out yourself... Try the internet! There's a lot of information on there!",
                        },
                        {
                            text: "We are both intelligent beings, Francis. You can find it out aswel! Try the internet, you can find almost everything on there!",
                        },
                    ]
                }).then(function () {
                    play();
                    whatfrancisis.border();
                })
            },

            border: function () {
                botui.message.add({
                    human: true,
                    delay: 1000,
                    content: "Humans and technology are growing closer together..."
                })
                botui.message.add({
                    human: true,
                    delay: 1500,
                    content: "These conversations are a good example of that.."
                })
                botui.message.add({
                    delay: 1500,
                    content: "I'll... try the internet..."
                })
                botui.action.button({
                    delay: 3000,
                    action: [
                        {
                            text: "Goodluck!",
                        },
                        {
                            text: "Talk to you soon...",
                        },
                    ]
                }).then(function () {
                    conversation8start.convo8start();
                })
            }
        }

    }
}