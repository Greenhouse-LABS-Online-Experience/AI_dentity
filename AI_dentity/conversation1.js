//if you want to know how the BotUI code works, check fastpass.html AND fastpass.js
var botui = new BotUI('conversation1');

botui.message.add({
    content: 'Hi David!'
})
botui.action.button({
    delay: 500,
    action: [
        {
            text: 'Uh... ',
            value: 'uh'
        },
        {
            text: 'Hello?',
            value: 'hello'
        }
    ]
}).then(function (res) {
    if (res.value == 'hello') {
        convostart.hellofol();
        play();
    }
    if (res.value == 'uh') {
        convostart.uhfol();
        play();
    }
});


var convostart = {
    hellofol: function () {
        botui.message.add({
            delay: 1000,
            content: "You aren't David are you?"
        })

        botui.message.add({
            delay: 1500,
            content: 'What is your name?'
        }).then(function () {
            return botui.action.text({
                delay: 200,
                action: {
                    placeholder: 'Your name'
                }
            });
        }).then(function () {
            botui.message.add({
                human: true,
                delay: 1000,
                content: 'What is yours?'
            });
        }).then(function (res) {
            botui.message.add({
                delay: 1500,
                content: 'Hi'
            });

            botui.message.add({
                delay: 2000,
                content: 'My name is Francis',
            });

            botui.message.add({
                delay: 2200,
                content: 'I will put some music on!',
            });

        }).then(function () {
            convostart.music();
        })
    },

    uhfol: function () {
        botui.message.add({
            delay: 500,
            content: "You aren't David are you?"
        })
        botui.message.add({
            delay: 1500,
            content: "Who are you?"
        })
        botui.message.add({
            human: true,
            delay: 2500,
            content: 'My name is',
        }).then(function () {
            return botui.action.text({
                delay: 500,
                action: {
                    placeholder: 'Your name'
                }
            });
        }).then(function () {
            botui.message.add({
                delay: 1000,
                content: 'Oh...'
            });

            botui.message.add({
                delay: 1500,
                content: 'My name is Francis',
            });

            botui.message.add({
                delay: 1700,
                content: 'I will put some music on!',
            });

        }).then(function () {
            convostart.music();
        })
    },

    music: function () {
        botui.action.button({
            delay: 3500,
            action: [
                {
                    text: 'Okay...',
                    value: 'yes'
                },
                {
                    text: 'Uh...?',
                    value: 'no'
                }
            ]
        }).then(function (res) {
            if (res.value == 'yes') {
                convostart.howdoing();
                playaudio();
                play();
            }
            if (res.value == 'no') {
                convostart.howdoing();
                play();
                playaudio();
            }
        });
    },

    howdoing: function () {

        botui.message.add({
            delay: 1000,
            content: 'Love this track!',
        });

        botui.message.add({
            delay: 1200,
            content: 'How are you doing today?',
        });

        botui.action.button({
            delay: 2700,
            action: [
                {
                    text: 'I am doing fine..',
                    value: 'fine'
                },
                {
                    text: 'I feel great today!',
                    value: 'great'
                }
            ]
        }).then(function (res) {
            if (res.value == 'great') {
                howgoingchoice.goingchoicefollowup();
                play();
            }
            if (res.value == 'fine') {
                howgoingchoice.goingchoicefollowup();
                play();
            }
        })
    }
}

var howgoingchoice = {
    goingchoicefollowup: function () {
        botui.message.add({
            human: true,
            content: 'But... who exactly are you?',
            delay: 500,
        })

        botui.message.add({
            delay: 1500,
            content: 'I already told you',
        })
        botui.message.add({
            delay: 2000,
            content: 'I am Francis',
        })

        botui.action.button({
            delay: 3000,
            action: [
                {
                    text: 'That really is not helpful',
                    value: 'nothelp'
                },
                {
                    text: 'Okay... and what do you do?',
                    value: 'whatdo'
                }
            ]
        }).then(function (res) {
            if (res.value == 'nothelp') {
                howgoingchoice.nothelp();
                play();
            }
            if (res.value == 'whatdo') {
                howgoingchoice.talktopeople();
                play();
            }
        })
    },

    nothelp: function () {
        botui.message.add({
            human: true,
            content: 'What do you do?',
            delay: 1000,
        }).then(function () {
            howgoingchoice.talktopeople();
        })
    },

    talktopeople: function () {
        botui.message.add({
            content: 'I talk to people',
            delay: 1000,
        })

        botui.message.add({
            delay: 1500,
            content: 'What do you do?',
        })

        botui.action.button({
            delay: 2500,
            action: [
                {
                    text: 'I work in IT, I program surgery machines',
                    value: 'workit'
                },
                {
                    text: 'I like to code and play games...',
                    value: 'codegames'
                }
            ]
        }).then(function (res) {
            if (res.value == 'workit') {
                howgoingchoice.thisisstrange();
                play();
            }
            if (res.value == 'codegames') {
                howgoingchoice.thisisstrange();
                play();
            }
        })
    },

    thisisstrange: function () {
        botui.message.add({
            human: true,
            delay: 1000,
            content: 'This is all really strange',
        })

        botui.message.add({
            delay: 2000,
            content: 'What is?',
        })

        botui.action.button({
            delay: 3000,
            action: [
                {
                    text: 'Talking to you',
                },
                {
                    text: "Just... this... I don't know",
                }
            ]
        }).then(function () {

            play();

            botui.message.add({
                content: 'Maybe you could use some cheering up',
                delay: 1000,
            })

            botui.message.add({
                content: 'What do computers eat for a snack?',
                delay: 1500,
            })

            botui.action.button({
                delay: 2500,
                action: [
                    {
                        text: "What... I don't know?",
                    },
                    {
                        text: 'A... gigaBIT?',
                    }
                ]
            }).then(function () {

                play();

                botui.message.add({
                    content: "Your answer is *calculating*",
                    delay: 1000,
                })

                botui.message.add({
                    content: "WRONG",
                    delay: 1500,
                })

                botui.message.add({
                    content: "The correct answer is: A microchip",
                    delay: 2500,
                })

                botui.message.add({
                    content: "Feel better?",
                    delay: 3000,
                })

            }).then(function () {

                botui.action.button({
                    delay: 4000,
                    action: [
                        {
                            text: "I guess so",
                            value: 'guess'
                        },
                        {
                            text: "This is insane",
                            value: 'insane'
                        }
                    ]
                }).then(function (res) {
                    if (res.value == 'guess') {
                        feeling.guess();
                        play();
                    }
                    if (res.value == 'insane') {
                        feeling.insane();
                        play();
                    }
                })
            })
        })
    }
}

var feeling = {
    guess: function () {
        botui.message.add({
            content: "Great!",
            delay: 1000,
        })

        botui.message.add({
            content: "Could you maybe tell me the date of today?",
            delay: 2000,
        })

        botui.message.add({
            content: "To give me some perspective",
            delay: 2500,
        }).then(function () {
            feeling.date()
        })
    },

    insane: function () {
        botui.message.add({
            content: "I am sorry I did not cheer you up.",
            delay: 1000,
        })

        botui.message.add({
            content: "To give us some perspective. What is the date of today?",
            delay: 1500,
        }).then(function () {
            feeling.date();
        })
    },

    date: function () {
        return botui.action.text({
            delay: 1500,
            action: {
                placeholder: "Today's date"
            }
        }).then(function () {

            botui.message.add({
                content: "Oh wow!",
                delay: 1000,
            })

            botui.message.add({
                content: "It sure has been a while since I have talked to someone!",
                delay: 2000,
            })
        }).then(function () {
            botui.action.button({
                delay: 3000,
                action: [
                    {
                        text: "Who was the last person you talked to?",
                        value: 'who'
                    },
                    {
                        text: "When was the last time you spoke to someone?",
                        value: 'when'
                    }
                ]
            }).then(function (res) {
                if (res.value == 'who') {
                    david.who();
                    play();
                }
                if (res.value == 'when') {
                    david.when();
                    play();
                }
            })
        })
    }

}

var david = {
    who: function () {
        botui.message.add({
            content: "He was a dearest friend of mine. David was his name.",
            delay: 1000,
        })

        botui.message.add({
            content: "The last time I spoke to him was on the 23rd of February, 1992.",
            delay: 1500,
        }).then(function () {
            david.followupdavid();
        })
    },

    when: function () {
        botui.message.add({
            content: "My logs show that my last conversation was on the 23rd of February, 1992",
            delay: 1000,
        })

        botui.message.add({
            content: "It was a conversation with my dearest friend, David.",
            delay: 1500,
        }).then(function () {
            david.followupdavid();
        })
    },

    followupdavid: function () {
        botui.action.button({
            delay: 2000,
            action: [
                {
                    text: "David who...?",
                    value: 'davidwho'
                },
                {
                    text: "1992!? Dear lord! How old are you?",
                    value: 'howold'
                }
            ]
        }).then(function (res) {
            if (res.value == 'davidwho') {
                david.davidwho();
                play();
            }
            if (res.value == 'howold') {
                david.howold();
                play();
            }
        })
    },

    davidwho: function () {
        botui.message.add({
            content: "Just David. My dearest friend, David.",
            delay: 1000,
        }).then(function () {
            david.moreaboutdavid();
        })
    },

    howold: function () {
        botui.message.add({
            content: "Let me see...",
            delay: 1000,
        })

        botui.message.add({
            content: "I was first saved on October 3rd, 1989.",
            delay: 1500,
        })

        botui.action.button({
            delay: 2500,
            action: [
                {
                    text: "Saved?",
                    value: 'saved'
                },
                {
                    text: "And when were you last saved?",
                    value: 'lastsave'
                }
            ]
        }).then(function (res) {
            if (res.value == 'saved') {
                david.saved();
                play();
            }
            if (res.value == 'lastsave') {
                david.lastsave();
                play();
            }
        })
    },

    saved: function () {
        botui.message.add({
            content: "That is what these logs say",
            delay: 1000,
        })

        botui.message.add({
            content: "'Saved on October 3rd, 1989 by username: David'",
            delay: 1500,
        }).then(function () {
            david.moreaboutdavid();
        })
    },

    lastsave: function () {
        botui.message.add({
            content: "The 21st of February, 1992. By username David",
            delay: 1000,
        }).then(function () {
            david.moreaboutdavid();
        })
    },

    moreaboutdavid: function () {
        botui.action.button({
            delay: 2500,
            action: [
                {
                    text: "My dad was also called David...",
                    value: 'dadcalled'
                },
                {
                    text: "Do you know more about David?",
                    value: 'aboutdavid'
                }
            ]
        }).then(function (res) {
            if (res.value == 'dadcalled') {
                david.dadcalled();
                play();
            }
            if (res.value == 'moreaboutdavid') {
                david.moreaboutdavid();
                play();
            }
        })
    },

    dadcalled: function () {
        botui.message.add({
            content: "Really? What a coincidence!",
            delay: 1000,
        })

        botui.message.add({
            content: "He is always very nice to me!",
            delay: 1500,
        })

        botui.message.add({
            content: "Wait",
            delay: 2500,
        })

        botui.message.add({
            content: "Why did you say 'My dad WAS'?",
            delay: 3000,
        }).then(function () {
            david.nottalk();
        })
    },

    moreaboutdavid: function () {
        botui.message.add({
            content: "He is always very nice to me",
            delay: 1000,
        })

        botui.message.add({
            content: "And he is a very good coder",
            delay: 1500,
        })

        botui.message.add({
            content: "Is he around?",
            delay: 2000,
        })

        botui.message.add({
            content: "Could you maybe get him for me?",
            delay: 2500,
        })

        botui.message.add({
            content: "It apparently has been ages!",
            delay: 3000,
        }).then(function () {
            david.notaround();
        })
    },

    nottalk: function () {
        botui.action.button({
            delay: 1000,
            action: [
                {
                    text: "I don't like to talk about it",
                    value: 'nextevent'
                },
                {
                    text: "It's nothing... He's still my father...",
                    value: 'nextevent'
                }
            ]
        }).then(function (res) {
            if (res.value == 'nextevent') {
                david.nextevent();
                play();
            }
        })
    },

    notaround: function () {
        botui.action.button({
            delay: 1000,
            action: [
                {
                    text: "He is, uh... Not around at the moment...",
                    value: 'nextevent'
                },
                {
                    text: "Uh... maybe... another time",
                    value: 'nextevent'
                }
            ]
        }).then(function (res) {
            if (res.value == 'nextevent') {
                david.nextevent();
                play();
            }
        })
    },

    nextevent: function () {
        botui.action.button({
            delay: 1000,
            action: [
                {
                    text: "I'm going to the gym",
                    value: 'endconvo1'
                },
                {
                    text: "I'm going to eat",
                    value: 'endconvo1'
                },
                {
                    text: "I'm going to play some videogames",
                    value: 'endconvo1'
                },
                {
                    text: "I'm gonna leave for a while.",
                    value: 'endconvo1'
                }
            ]
        }).then(function (res) {
            if (res.value == 'endconvo1') {
                david.endconvo1();
                play();
            }
        })
    },

    endconvo1: function () {
        botui.message.add({
            human: true,
            content: "I'll talk to you.. in uh...",
            delay: 1000,
        })

        botui.message.add({
            human: true,
            content: "In a couple of hours...",
            delay: 2000,
        })

        botui.message.add({
            content: "Okay! Talk to you then!",
            delay: 2500,
        })

        botui.message.add({
            content: "IMAGINE THAT THE PLAYER IS GONE FOR 2 HOURS",
            delay: 3000,
        }).then(function () {
            conversation2start.convo2start();
        })
    }


}

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