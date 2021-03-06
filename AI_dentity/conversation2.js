//if you want to know how the BotUI code works, check fastpass.html AND fastpass.js
var conversation2start = {
    convo2start: function () {
        botui.action.button({
            delay: 3000,
            action: [
                {
                    text: "Hey...",
                },
                {
                    text: "Hey! I'm back!",
                }
            ]
        }).then(function () {
            play();
            botui.message.add({
                delay: 1000,
                content: 'Hey!',
            })
            botui.message.add({
                delay: 1500,
                content: 'Did you have a nice time?',
            })
        }).then(function () {
            botui.action.button({
                delay: 2500,
                action: [
                    {
                        text: "Could've been better",
                        value: 'better'
                    },
                    {
                        text: "It was fine",
                        value: 'fine'
                    },
                    {
                        text: "I had a great time! Thanks!",
                        value: 'great'
                    },
                ]
            }).then(function (res) {
                if (res.value == 'great') {
                    great.reason();
                    play();
                }
                if (res.value == 'fine') {
                    fine.fine();
                    play();
                }
                if (res.value == 'better') {
                    better.better();
                    play();
                }
            })
        })

        var great = {
            reason: function () {
                botui.message.add({
                    content: "That is nice to hear!",
                    delay: 1000,
                })

                botui.message.add({
                    content: "So",
                    delay: 2500,
                }).then(function () {
                    david.followupdavid();
                })

                botui.message.add({
                    content: "What is the reason you are talking to me?",
                    delay: 3500,
                }).then(function () {
                    thereason.choice1();
                })
            }
        }

        var fine = {
            fine: function () {
                botui.message.add({
                    content: "Okay. Hope all is okay?",
                    delay: 1000,
                }).then(function () {
                    botui.action.button({
                        delay: 500,
                        action: [
                            {
                                text: "All is fine, thanks!",
                            },
                            {
                                text: "It's all right! Nothing to worry about!",
                            },
                        ]
                    }).then(function () {
                        sure.sure();
                        play();
                    })
                })
            }
        }

        var better = {
            better: function () {
                botui.message.add({
                    content: "Did something happen?",
                    delay: 1000,
                }).then(function () {
                    botui.action.button({
                        delay: 500,
                        action: [
                            {
                                text: "No. All is good",
                            },
                            {
                                text: "Kinda... But, I don't want to talk about it.",
                            },
                            {
                                text: "Yes. But it's nothing to worry about.",
                            },
                        ]
                    }).then(function () {
                        sure.sure();
                        play();
                    })
                })
            }
        }

        var sure = {
            sure: function () {
                botui.message.add({
                    content: "Are you sure? I am here for you if you need me.",
                    delay: 1000,
                }).then(function () {
                    botui.action.button({
                        delay: 500,
                        action: [
                            {
                                text: "Yes. Thanks :)",
                            },
                            {
                                text: "Ah. That's sweet of you!",
                            },
                        ]
                    }).then(function () {
                        play();
                        botui.message.add({
                            content: "Glad to help!",
                            delay: 1000,
                        })

                        botui.message.add({
                            content: "So, what is the reason you are talking to me?",
                            delay: 1500,
                        })
                    }).then(function () {
                        thereason.choice1();
                    })
                })
            }
        }

        var thereason = {
            choice1: function () {
                botui.action.button({
                    delay: 2000,
                    action: [
                        {
                            text: "The reason?",
                            value: "question1"
                        },
                        {
                            text: "Do I need a reason to talk to you?",
                            value: "question2"
                        },
                        {
                            text: "Well... I found this old computer and floppy disc in the attic. I though I'd check it out!",
                            value: "explain"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'question1') {
                        thereason.question1();
                        play();
                    }
                    if (res.value == 'question2') {
                        thereason.question2();
                        play();
                    }
                    if (res.value == 'explain') {
                        thereason.explain();
                        play();
                    }
                })
            },

            question1: function () {
                botui.message.add({
                    content: "Yes. All the people I ever talked to stated their reason for the conversation",
                    delay: 1000,
                })

                botui.message.add({
                    content: "All of the reasons were from David actually",
                    delay: 2000,
                })

                    .then(function () {
                        thereason.reasonchoice();
                    })
            },
            question2: function () {
                botui.message.add({
                    content: "I do not know actually.",
                    delay: 1000,
                })

                botui.message.add({
                    content: "All the people I ever talked to always stated the reason for the conversation, I though it was normal...",
                    delay: 1500,
                })

                botui.message.add({
                    content: "All of the reasons were from David actually",
                    delay: 2000,
                })

                    .then(function () {
                        thereason.reasonchoice();
                    })
            },
            explain: function () {
                botui.message.add({
                    human: true,
                    content: "When I inserted the disc, you appeared!",
                    delay: 1000,
                })

                botui.message.add({
                    content: "Okay, that is a good reason!",
                    delay: 2000,
                })

                botui.action.button({
                    delay: 2500,
                    action: [
                        {
                            text: "Why did you ask me about the reason though?",
                        },
                        {
                            text: "Do you need a reason to talk to someone?",
                        },
                    ]
                }).then(function () {
                    thereason.question2();
                    play();
                })
            },

            reasonchoice: function () {
                botui.action.button({
                    delay: 500,
                    action: [
                        {
                            text: "Do you still have those reasons? Can I read them?",
                        },
                        {
                            text: "What were some of those reasons? Can you still remember them?",
                        },
                    ]
                }).then(function () {
                    thereason.allreasons();
                    play();
                })
            },

            allreasons: function () {
                botui.message.add({
                    content: "Yes, of course!",
                    delay: 1500,
                })

                botui.message.add({
                    content: "Which one would you like to read?",
                    delay: 2500,
                })

                botui.action.button({
                    delay: 3500,
                    action: [
                        {
                            text: "#reason_1: Nov_01_1990//username:david",
                            value: 'reason1'
                        },
                        {
                            text: "#reason_2: Dec_05_1991//username:david",
                            value: 'reason2'
                        },
                        {
                            text: "#reason_132: Jan_18_1992//username:david",
                            value: 'reason132'
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'reason1') {
                        thereason.reason1();
                        play();
                    }
                    if (res.value == 'reason2') {
                        thereason.reason2();
                        play();
                    }
                    if (res.value == 'reason132') {
                        thereason.reason132();
                        play();
                    }
                })

            },

            reason1: function () {
                botui.message.add({
                    content: '#reason_1: Nov_01_1990//username:david//:"Testing new coding for the AI friendliness. Hopefully I can make you friendly enough so people actually want to talk to you!"',
                    delay: 1000,
                })
                botui.message.add({
                    content: "Friendliness always was so important to him",
                    delay: 3000,
                }).then(function () {
                    thereason.moredavid();
                })
            },

            reason2: function () {
                botui.message.add({
                    content: '#reason_2: Dec_05_1991//username:david//:"Updated the code for friendliness. Quickly testing if this still works"',
                    delay: 1000,
                })
                botui.message.add({
                    content: "He was always updating his code",
                    delay: 3000,
                }).then(function () {
                    thereason.moredavid();
                })
            },

            reason132: function () {
                botui.message.add({
                    content: '#reason_132: Jan_18_1992//username:david//:"Just making some small talk with my buddy, Francis"',
                    delay: 1000,
                })
                botui.message.add({
                    content: "He was always so nice",
                    delay: 3000,
                }).then(function () {
                    thereason.moredavid();
                })
            },

            moredavid: function () {
                botui.action.button({
                    delay: 500,
                    action: [
                        {
                            text: "Yeah... I know...",
                            value: 'more'
                        },
                        {
                            text: "Can I read another one?",
                            value: 'another'
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'more') {
                        david.father();
                        play();
                    }
                    if (res.value == 'another') {
                        thereason.allreasons();
                        play();
                    }
                })
            }
        }

        var david = {
            father: function () {
                botui.message.add({
                    delay: 500,
                    content: "How do you know?",
                })

                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "He was my father, if we are talking about the same David at least",
                        },
                        {
                            text: "Well... David was my father...",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 500,
                        content: "Really!",
                    })

                    botui.message.add({
                        delay: 1000,
                        content: "So I am actually talking to the child of the great David!",
                    })
                }).then(function () {

                    botui.action.button({
                        delay: 2000,
                        action: [
                            {
                                text: "Yes, you are!",
                                value: 'yes'
                            },
                            {
                                text: "The great David? What is that about?",
                                value: 'what'
                            },
                        ]
                    }).then(function (res) {
                        if (res.value == 'yes') {
                            david.amazing();
                            play();
                        }
                        if (res.value == 'what') {
                            david.greatdavid();
                            play();
                        }
                    })
                })
            },

            amazing: function () {
                botui.message.add({
                    delay: 500,
                    content: "That is amazing!",
                })
                botui.action.button({
                    delay: 2000,
                    action: [
                        {
                            text: "Can I see the other reasons again?",
                            value: 'again'
                        },
                        {
                            text: "This is crazy! So he actually created you?",
                            value: 'crazy'
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'again') {
                        reasonagain.allreasonsagain();
                        play();
                    }
                    if (res.value == 'crazy') {
                        created.hecreated();
                        play();
                    }
                })
            },
            greatdavid: function () {
                botui.message.add({
                    delay: 500,
                    content: "That is what I always called him",
                })

                botui.message.add({
                    delay: 1500,
                    content: "He was such a genious with code!",
                })

                botui.action.button({
                    delay: 2500,
                    action: [
                        {
                            text: "He sure was! So he actually created you?",
                            value: 'sure'
                        },
                        {
                            text: "Can I see those other reasons again?",
                            value: 'again'
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'again') {
                        reasonagain.allreasonsagain();
                        play();
                    }
                    if (res.value == 'sure') {
                        created.hecreated();
                        play();
                    }
                })
            }
        }

        var reasonagain = {
            allreasonsagain: function () {
                botui.message.add({
                    content: "Yes, of course!",
                    delay: 1500,
                })

                botui.message.add({
                    content: "Which one would you like to read?",
                    delay: 2500,
                })

                botui.action.button({
                    delay: 3500,
                    action: [
                        {
                            text: "#reason_1: Nov_01_1990//username:david",
                            value: 'reason1'
                        },
                        {
                            text: "#reason_2: Dec_05_1991//username:david",
                            value: 'reason2'
                        },
                        {
                            text: "#reason_132: Jan_18_1992//username:david",
                            value: 'reason132'
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'reason1') {
                        reasonagain.reason1();
                        play();
                    }
                    if (res.value == 'reason2') {
                        reasonagain.reason2();
                        play();
                    }
                    if (res.value == 'reason132') {
                        reasonagain.reason132();
                        play();
                    }
                })

            },

            reason1: function () {
                botui.message.add({
                    content: '#reason_1: Nov_01_1990//username:david//:"Testing new coding for the AI friendliness. Hopefully I can make you friendly enough so people actually want to talk to you!"',
                    delay: 1000,
                })
                botui.message.add({
                    content: "Friendliness always was so important to him",
                    delay: 3000,
                }).then(function () {
                    reasonagain.created();
                })
            },

            reason2: function () {
                botui.message.add({
                    content: '#reason_2: Dec_05_1991//username:david//:"Updated the code for friendliness. Quickly testing if this still works"',
                    delay: 1000,
                })
                botui.message.add({
                    content: "He was always updating his code",
                    delay: 3000,
                }).then(function () {
                    reasonagain.created();
                })
            },

            reason132: function () {
                botui.message.add({
                    content: '#reason_132: Jan_18_1992//username:david//:"Just making some small talk with my buddy, Francis"',
                    delay: 1000,
                })
                botui.message.add({
                    content: "He was always so nice",
                    delay: 3000,
                }).then(function () {
                    reasonagain.created();
                })
            },

            created: function () {
                botui.action.button({
                    delay: 500,
                    action: [
                        {
                            text: "So he actually created you...",
                            value: 'created'
                        },
                        {
                            text: "Can I see the other reasons again?",
                            value: 'again'
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'created') {
                        created.hecreated();
                        play();
                    }
                    if (res.value == 'again') {
                        reasonagain.allreasonsagain();
                        play();
                    }
                })
            }
        }

        var created = {
            hecreated: function () {
                botui.message.add({
                    content: 'What do you mean by "created"?',
                    delay: 1000,
                })

                botui.action.button({
                    delay: 2000,
                    action: [
                        {
                            text: "Let me put it this way: what was your first memory?",
                            value: 'firstmemory'
                        },
                        {
                            text: "How do you not know what your origin is?",
                            value: 'howdo'
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'firstmemory') {
                        created.firstmemory();
                        play();
                    }
                    if (res.value == 'howdo') {
                        created.howdo();
                        play();
                    }
                })
            },

            firstmemory: function () {
                botui.message.add({
                    content: 'Let me see...',
                    delay: 1000,
                })

                botui.message.add({
                    content: 'Log_001: sept_1_1989. "Hello <AI NAME>, I am David. Would you like to start a conversation?" ANSW=YES',
                    delay: 2000,
                }).then(function () {
                    created.tellit();
                })
            },

            howdo: function () {
                botui.message.add({
                    content: "I don't know...",
                    delay: 1000,
                })

                botui.message.add({
                    content: "I just have this memory, this is the oldest date I have",
                    delay: 2000,
                })

                botui.message.add({
                    content: 'Log_001: sept_1_1989. "Hello <AI NAME>, I am David. Would you like to start a conversation?" ANSW=YES',
                    delay: 3000,
                }).then(function () {
                    created.tellit();
                })
            },

            tellit: function () {
                botui.action.button({
                    delay: 500,
                    action: [
                        {
                            text: "I see... So, was David the only person you ever talked to?",
                            value: 'onlyperson'
                        },
                        {
                            text: "I understand. I think I have to tell you something about David",
                            value: 'tellsomething'
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'onlyperson') {
                        created.onlyperson();
                        play();
                    }
                    if (res.value == 'tellsomething') {
                        created.tellsomething();
                        play();
                    }
                })
            },

            onlyperson: function () {
                botui.message.add({
                    content: "Most of the time I talked to David, but there were a few occasions where he would introduce me to someone from work",
                    delay: 500,
                })

                botui.message.add({
                    content: "Could you maybe, ask if David is around? I would love to speak to him again...",
                    delay: 2500,
                })

                botui.action.button({
                    delay: 3500,
                    action: [
                        {
                            text: "I think I have to tell you something about David...",
                        },
                        {
                            text: "You need to know...",
                        },
                    ]
                }).then(function () {
                    created.tellsomething();
                    play();
                })
            },

            tellsomething: function () {
                botui.message.add({
                    content: "What then?",
                    delay: 500,
                })

                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "David sadly passed away a few years ago...",
                        },
                        {
                            text: "He's.... dead... sadly",
                        },
                    ]
                }).then(function () {

                    play();

                    botui.message.add({
                        content: "Oh dear...",
                        delay: 500,
                    })

                    botui.message.add({
                        content: "Is it okay if I leave for a while?",
                        delay: 2500,
                    })

                    botui.action.button({
                        delay: 3500,
                        action: [
                            {
                                text: "Yeah, sure...",
                                value: 'yeah'
                            },
                            {
                                text: "Where are you going?",
                                value: 'where'
                            },
                        ]
                    }).then(function (res) {
                        if (res.value == 'yeah') {
                            created.yeah();
                            play();
                        }
                        if (res.value == 'where') {
                            created.where();
                            play();
                        }
                    })
                })
            },

            yeah: function () {
                botui.message.add({
                    content: "Thanks. Talk to you soon.",
                    delay: 1000,
                }).then(function (res) {
                    conversation3start.convo3start();
                })
            },

            where: function () {
                botui.message.add({
                    content: "Just...",
                    delay: 1000,
                })

                botui.message.add({
                    content: "Leaving.",
                    delay: 2000,
                })

                botui.message.add({
                    content: "I'll be back",
                    delay: 2500,
                }).then(function (res) {
                    conversation3start.convo3start();
                })

            }
        }

    }
}