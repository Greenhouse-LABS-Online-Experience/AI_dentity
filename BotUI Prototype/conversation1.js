var botui = new BotUI('conversation1');

botui.message.add({
    content: 'Hi David!'
}).then(function () {
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