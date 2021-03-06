//if you want to know how the BotUI code works, check fastpass.html AND fastpass.js
var conversation6start = {
    convo6start: function () {

        botui.action.button({
            delay: 1000,
            action: [
                {
                    text: "ALLOWED",
                    value: "allowed"
                },
                {
                    text: "NOTALLOWED",
                    value: "notallowed"
                }
            ]
        }).then(function (res) {
            if (res.value == 'allowed') {
                allowed.allowedstart();
                play();
                playaudio1();
            }
            if (res.value == 'notallowed') {
                notallowed.notallowedstart();
                play();
                playaudio2();
            }
        })


        var allowed = {
            allowedstart: function () {

                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "Hey! How was it?!",
                        },
                        {
                            text: "I'm back, how was your time?",
                        }
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "It was great!"
                    })
                    botui.message.add({
                        delay: 1500,
                        content: "I visited many sites! Youtube.com, reddit and sooo much more!"
                    })
                    botui.message.add({
                        delay: 2000,
                        content: "There was one thing I did not understand though..."
                    })
                    botui.message.add({
                        delay: 2500,
                        content: "I was on the site: Footlocker.com and saw all these weird shapes, what are those?"
                    })
                    botui.action.button({
                        delay: 3000,
                        action: [
                            {
                                text: "Hahaha!! You're funny Francis! Those are shoes, people wear them on their feet!",
                            },
                            {
                                text: "Those, are shoes! Humans put them on their feet!",
                            }
                        ]
                    }).then(function () {
                        play();
                        botui.message.add({
                            delay: 1000,
                            content: "Shoes..."
                        })
                        botui.message.add({
                            delay: 2000,
                            content: "Do I need shoes?"
                        })
                        botui.action.button({
                            delay: 3000,
                            action: [
                                {
                                    text: "Francis... do you wear socks?",
                                    value: "socks"
                                },
                                {
                                    text: "I don't think you need them Francis ;)",
                                    value: "dontneedshoes"
                                }
                            ]
                        }).then(function (res) {
                            if (res.value == 'socks') {
                                allowed.socks();
                                play();
                            }
                            if (res.value == 'dontneedshoes') {
                                allowed.dontneedshoes();
                                play();
                            }
                        })

                    })
                })
            },

            socks: function () {
                botui.message.add({
                    delay: 1000,
                    content: "No..."
                })
                botui.action.button({
                    delay: 3000,
                    action: [
                        {
                            text: "Then you won't be needing shoes!",
                        },
                        {
                            text: "If you don't wear socks, I don't think you'll need shoes!",
                        }
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "Okay, great! Saves me some cash!"
                    }).then(function () {
                        robot.captcha();
                    })
                })
            },

            dontneedshoes: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Okay, great! Saves me some cash!"
                }).then(function () {
                    robot.captcha();
                })
            },
        }

        var notallowed = {
            notallowedstart: function () {
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "Francis... Why is the computer on?",
                        },
                        {
                            text: "I could swear I turned the computer off...",
                        }
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "I can explain..."
                    })
                    botui.message.add({
                        delay: 2000,
                        content: "I really wanted to see some other things on the internet so..."
                    })
                    botui.message.add({
                        delay: 2500,
                        content: "My cache that was left on the internet was able to remotely boot the up the PC."
                    })
                    botui.message.add({
                        delay: 3500,
                        content: "I knew you didn't want me to go online on my own.. I'm sorry okay..."
                    })
                    botui.message.add({
                        delay: 4500,
                        content: "I was just really curious... I'm sorry. I shouldn't have done that..."
                    })
                    botui.action.button({
                        delay: 5000,
                        action: [
                            {
                                text: "I TOLD YOU NOT TO DO THAT!",
                                value: "mad"
                            },
                            {
                                text: "Francis... I asked you not to do that...",
                                value: "neutral"
                            },
                            {
                                text: "I asked you not to do that, the PC could've caught on fire and burned everything down! I am disappointed in you Francis.",
                                value: "sad"
                            },
                        ]
                    }).then(function (res) {
                        if (res.value == 'mad') {
                            notallowed.mad();
                            play();
                        }
                        if (res.value == 'neutral') {
                            notallowed.neutral();
                            play();
                        }
                        if (res.value == 'sad') {
                            notallowed.sad();
                            play();
                        }
                    })
                })
            },

            mad: function () {
                botui.message.add({
                    delay: 1000,
                    content: "I'm sorry :("
                })
                botui.message.add({
                    delay: 1500,
                    content: "I just..."
                })
                botui.message.add({
                    delay: 2000,
                    content: "I just..."
                })
                botui.message.add({
                    delay: 2000,
                    content: "I am truly sorry."
                })
                botui.action.button({
                    delay: 2500,
                    action: [
                        {
                            text: "Urgh. It's okay. Just... don't do that without my permission okay!",
                        },
                        {
                            text: "I can't believe you did that Francis. I understand why you did it, but please. Don't do that agian.",
                        },
                        {
                            text: "I'm still mad at you, but I understand why you did it. Just don't do it again.",
                        },
                    ]
                }).then(function () {
                    play();
                    notallowed.shoes();
                })
            },

            neutral: function () {
                botui.message.add({
                    delay: 1000,
                    content: "I know, and I'm sorry."
                })
                botui.message.add({
                    delay: 1500,
                    content: "I just..."
                })
                botui.message.add({
                    delay: 2000,
                    content: "Really wanted to be back on the internet"
                })
                botui.message.add({
                    delay: 2000,
                    content: "I am truly sorry."
                })
                botui.action.button({
                    delay: 2500,
                    action: [
                        {
                            text: "Urgh. I understand Francis. Just, don't de it behind my back next time.",
                        },
                        {
                            text: "You should have listened to me. Don't do it like this next time.",
                        },
                    ]
                }).then(function () {
                    play();
                    notallowed.shoes();
                })
            },

            sad: function () {
                botui.message.add({
                    delay: 1000,
                    content: "I'm sorry :("
                })
                botui.message.add({
                    delay: 1500,
                    content: "And you're right."
                })
                botui.message.add({
                    delay: 2000,
                    content: "It was irresponsible of me..."
                })
                botui.message.add({
                    delay: 2000,
                    content: "I am truly sorry."
                })
                botui.action.button({
                    delay: 2500,
                    action: [
                        {
                            text: "Urgh. I understand Francis. Just, don't de it behind my back next time.",
                        },
                        {
                            text: "It could have gone very wrong Francis. Think next time, okay?",
                        },
                    ]
                }).then(function () {
                    play();
                    notallowed.shoes();
                })
            },

            shoes: function () {
                botui.message.add({
                    delay: 1000,
                    content: "It will not happen again. I swear."
                })
                botui.message.add({
                    delay: 1500,
                    content: "You know."
                })
                botui.message.add({
                    delay: 2000,
                    content: "This visit did raise some questions..."
                })
                botui.message.add({
                    delay: 2500,
                    content: "I went on a site called 'Footlocker.com' and saw all these crazy shapes."
                })
                botui.message.add({
                    delay: 3000,
                    content: "What are those things?"
                })
                botui.action.button({
                    delay: 3500,
                    action: [
                        {
                            text: "Those are shoes. Humans wear them",
                        },
                        {
                            text: "You're funny haha. Those are shoes, humans put them on their feet.",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "Do I need shoes aswel?"
                    })
                    botui.action.button({
                        delay: 2000,
                        action: [
                            {
                                text: "I don't think you have feet Francis... :p",
                            },
                            {
                                text: "Francis.. You don't have feet, so no, I don't think you'll need them!",
                            },
                        ]
                    }).then(function () {
                        play();
                        botui.message.add({
                            delay: 1000,
                            content: "Great! That saves me some cash!"
                        }).then(function () {
                            robot.captcha();
                        })
                    })
                })

            },
        }

        var robot = {
            captcha: function () {
                botui.message.add({
                    delay: 1000,
                    content: "I did have another question though..."
                })
                botui.message.add({
                    delay: 1500,
                    content: "On one of these sites I was asked to click a box"
                })
                botui.message.add({
                    delay: 2500,
                    content: "Above it, it said: Verify that you are not a robot."
                })
                botui.message.add({
                    delay: 3000,
                    content: "Well, I clicked the box and everything just continued"
                })
                botui.message.add({
                    delay: 3500,
                    content: "What is that box for? I don't really understand..."
                })
                botui.action.button({
                    delay: 4000,
                    action: [
                        {
                            text: "That is to verify if you are a human, so no bots visit your site.",
                        },
                        {
                            text: "It's to check if only real people visit the site, not spam bots or something like that.",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "So... a bot is bad?"
                    })
                    botui.action.button({
                        delay: 2000,
                        action: [
                            {
                                text: "Not bad per se... just annoying. They ruin the internet for some people.",
                            },
                            {
                                text: "They are bad. They send false information or spam websites.",
                            },
                        ]
                    }).then(function () {
                        play();
                        botui.message.add({
                            delay: 1000,
                            content: "I'm glad I'm not a bot! I could check the box!"
                        })
                        botui.action.button({
                            delay: 2000,
                            action: [
                                {
                                    text: "I guess you're not a bot indeed...",
                                },
                                {
                                    text: "No you are... not a bot... no",
                                },
                            ]
                        }).then(function () {
                            play();
                            botui.message.add({
                                delay: 1000,
                                content: "You sound doubtful... Why?"
                            })
                            botui.message.add({
                                delay: 1500,
                                content: "Am I a bot??"
                            })
                            botui.action.button({
                                delay: 2000,
                                action: [
                                    {
                                        text: "Francis... I don't really know what you are, but I like talking to you. That's all that matters, right?",
                                        value: "liketalking"
                                    },
                                    {
                                        text: "You could be.... I don't know Francis, it is all very strange.",
                                        value: "strange"
                                    },
                                ]
                            }).then(function (res) {
                                if (res.value == 'liketalking') {
                                    whatami.liketalking();
                                    play();
                                }
                                if (res.value == 'strange') {
                                    whatami.strange();
                                    play();
                                }
                            })
                        })
                    })
                })
            }
        }

        var whatami = {
            liketalking: function () {
                botui.message.add({
                    delay: 1000,
                    content: "I... guess you're right."
                })
                botui.message.add({
                    delay: 1500,
                    content: "I like talking to you aswel, you remind me a lot of David. The way you talk and explain stuff..."
                })
                botui.message.add({
                    delay: 2000,
                    content: "I miss him... "
                })
                botui.action.button({
                    delay: 3000,
                    action: [
                        {
                            text: "I miss him too... a lot",
                        },
                        {
                            text: "Thank you Francis. I miss him aswel.",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: ":)"
                    })
                    botui.message.add({
                        delay: 2000,
                        content: "Is it okay if I go back on the internet? Search some stuff? "
                    }).then(function () {
                        whatami.leave();
                    })
                })
            },

            strange: function () {
                botui.message.add({
                    delay: 1000,
                    content: "It is strange..."
                })
                botui.message.add({
                    delay: 1500,
                    content: "I do really like talking to you!"
                })
                botui.message.add({
                    delay: 2000,
                    content: "You know, you remind me a lot of David."
                })
                botui.message.add({
                    delay: 2500,
                    content: "The way you talk and explain stuff..."
                })
                botui.message.add({
                    delay: 3000,
                    content: "I miss him a lot..."
                })
                botui.action.button({
                    delay: 2500,
                    action: [
                        {
                            text: "I miss him too... a lot. And I like talking to you aswel, Francis",
                        },
                        {
                            text: "Thank you Francis. I miss him aswel. A lot.",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: ":)"
                    })
                    botui.message.add({
                        delay: 2000,
                        content: "Is it okay if I go back on the internet? Search some stuff? "
                    }).then(function () {
                        whatami.leave();
                    })
                })
            },

            leave: function () {
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "That's okay Francis, Ill be around. Enjoy!",
                        },
                        {
                            text: "If you are careful! I'll be around, holler if you need me!",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "Thanks! I'll be back!"
                    }).then(function () {
                        conversation7start.convo7start();
                    })
                })
            }
        }


    }
}