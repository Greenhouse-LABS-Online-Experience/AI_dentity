var botui = new BotUI('fastpass');

botui.message.add({
    content: 'Hi!'
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
            delay: 1500,
            content: "I don't think I know you... Who are you?"
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
                    text: 'I am doing fine...',
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
                    davidwho.who();
                    play();
                }
                if (res.value == 'when') {
                    davidwho.when();
                    play();
                }
            })
        })
    }

}

var davidwho = {
    who: function () {
        botui.message.add({
            content: "He was a dearest friend of mine. David was his name.",
            delay: 1000,
        })

        botui.message.add({
            content: "The last time I spoke to him was on the 23rd of February, 1992.",
            delay: 1500,
        }).then(function () {
            davidwho.followupdavid();
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
            davidwho.followupdavid();
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
                davidwho.davidwho();
                play();
            }
            if (res.value == 'howold') {
                davidwho.howold();
                play();
            }
        })
    },

    davidwho: function () {
        botui.message.add({
            content: "Just David. My dearest friend, David.",
            delay: 1000,
        }).then(function () {
            davidwho.moreaboutdavid();
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
                davidwho.saved();
                play();
            }
            if (res.value == 'lastsave') {
                davidwho.lastsave();
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
            davidwho.moreaboutdavid();
        })
    },

    lastsave: function () {
        botui.message.add({
            content: "The 21st of February, 1992. By username: David",
            delay: 1000,
        }).then(function () {
            davidwho.moreaboutdavid();
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
                davidwho.dadcalled();
                play();
            }
            if (res.value == 'moreaboutdavid') {
                davidwho.moreaboutdavid();
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
            davidwho.nottalk();
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
            davidwho.notaround();
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
                davidwho.nextevent();
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
                davidwho.nextevent();
                play();
            }
        })
    },

    nextevent: function () {
        botui.message.add({
            content: "Okay.",
            delay: 1000,
        })
        botui.message.add({
            content: "So, what is the reason you are talking to me?",
            delay: 1500,
        }).then(function () {
            conversation2start.thereason();
        })
    },

}

var conversation2start = {
    thereason: function () {
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
                conversation2start.question1();
                play();
            }
            if (res.value == 'question2') {
                conversation2start.question2();
                play();
            }
            if (res.value == 'explain') {
                conversation2start.explain();
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
                conversation2start.reasonchoice();
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
                conversation2start.reasonchoice();
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
            conversation2start.question2();
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
            conversation2start.allreasons();
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
                conversation2start.reason1();
                play();
            }
            if (res.value == 'reason2') {
                conversation2start.reason2();
                play();
            }
            if (res.value == 'reason132') {
                conversation2start.reason132();
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
            conversation2start.moredavid();
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
            conversation2start.moredavid();
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
            conversation2start.moredavid();
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
                conversation2start.allreasons();
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
                content: "I'm going to leave for a second, okay?",
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
            content: "Thanks. Be right back.",
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
            content: "I'll be right back",
            delay: 2500,
        }).then(function (res) {
            conversation3start.convo3start();
        })

    }
}

var conversation3start = {
    convo3start: function () {


        botui.message.add({
            delay: 2000,
            content: 'Hey... I am back.'
        })
        botui.message.add({
            delay: 2500,
            content: 'Sorry just had to clear my mind for a second.',
        })

        botui.action.button({
            delay: 2500,
            action: [
                {
                    text: "That is okay. Everything all right now?",
                    value: 'alright'
                },
                {
                    text: "I understand. All good now?",
                    value: 'good'
                },
            ]
        }).then(function (res) {
            if (res.value == 'alright') {
                whyleft.alright();
                play();
            }
            if (res.value == 'good') {
                whyleft.good();
                play();
            }
        })


        var whyleft = {
            alright: function () {
                botui.message.add({
                    delay: 1000,
                    content: 'Yes, all is good now. Thanks!',
                }).then(function () {
                    whyleft.playerexplain();
                })
            },

            good: function () {
                botui.message.add({
                    delay: 1000,
                    content: 'My emotions got to me.',
                })
                botui.message.add({
                    delay: 2000,
                    content: 'And yes, all is good!',
                }).then(function () {
                    whyleft.playerexplain();
                })
            },

            playerexplain: function () {
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "It was hard for me as well, you know. Losing my father. I understand how you feel.",
                        },
                        {
                            text: "I understand what you are going through, and I am here for you",
                        }
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: 'Thank you.',
                    })
                    botui.message.add({
                        delay: 3000,
                        content: 'Let us talk about something else!',
                    })
                    botui.message.add({
                        delay: 4000,
                        content: 'We have been talking for a while now, but I never heard you mention any social gatherings',
                    })
                    botui.message.add({
                        delay: 5000,
                        content: 'Do you often go out?',
                    }).then(function () {
                        introextra.choice();
                    })
                })
            }
        }

        var introextra = {
            choice: function () {
                botui.action.button({
                    delay: 2500,
                    action: [
                        {
                            text: "No, not at all actually. I like being alone, friends are just a hassle you know.",
                            value: 'introvert'
                        },
                        {
                            text: "Not really… I would really love to, but... I don’t know. I feel uncomfortable in large crowds. I hang out online sometimes with some online friends…",
                            value: 'extravert'
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'introvert') {
                        introextra.friendshassle();
                        play();
                        playaudio3();
                    }
                    if (res.value == 'extravert') {
                        introextra.onlinefriends();
                        play();
                        playaudio3();
                    }
                })
            },

            friendshassle: function () {
                botui.message.add({
                    delay: 1000,
                    content: 'I see. So we are not friends?',
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "I like talking to you, I don't know. I guess we could become friends eventually.",
                            value: 'dontknow'
                        },
                        {
                            text: "I just met you! How can I tell if we're going to be friends?",
                            value: 'justmet'
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'dontknow') {
                        introextra.becomehassle();
                        play();
                    }
                    if (res.value == 'justmet') {
                        introextra.later();
                        play();
                    }
                })
            },

            becomehassle: function () {
                botui.message.add({
                    delay: 1000,
                    content: 'I would like that. I hope I do not become a hassle though...',
                }).then(function () {
                    intsense.future();
                })
            },

            later: function () {
                botui.message.add({
                    delay: 1000,
                    content: 'Okay I understand. Maybe later on...',
                }).then(function () {
                    intsense.future();
                })
            },

            onlinefriends: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Can't you invite those friends over?",
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "No, sadly not. They live very far away. And were are not that good friends.",
                        },
                        {
                            text: "I mean I could ask them. But I don't think many will come, they live very far away...",
                        }
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: 'That is sad. Maybe we could be friends?',
                    })
                }).then(function () {
                    botui.action.button({
                        delay: 1500,
                        action: [
                            {
                                text: "It's nice talking to you so yeah, I think we could become friends!",
                                value: 'could'
                            },
                            {
                                text: "I mean, we could, I guess. We've just met though... We'll see where it goes, okay?",
                                value: 'guess'
                            },
                            {
                                text: "I just met you! How can I tell if we're going to be friends?",
                                value: 'how'
                            },
                        ]
                    }).then(function (res) {
                        if (res.value == 'could') {
                            introextra.could();
                            play();
                        }
                        if (res.value == 'guess') {
                            introextra.guess();
                            play();
                        }
                        if (res.value == 'how') {
                            introextra.how();
                            play();
                        }
                    })
                })
            },

            could: function () {
                botui.message.add({
                    delay: 1000,
                    content: 'That would be great!',
                }).then(function () {
                    intsense.future();
                })
            },
            guess: function () {
                botui.message.add({
                    delay: 1000,
                    content: 'That is okay. We will see where it goes.',
                }).then(function () {
                    intsense.future();
                })
            },
            how: function () {
                botui.message.add({
                    delay: 1000,
                    content: 'Okay I understand. Maybe later on...',
                }).then(function () {
                    intsense.future();
                })
            },
        }

        var intsense = {
            future: function () {
                botui.message.add({
                    delay: 1000,
                    content: 'I always loved to talk about the future with David',
                })
                botui.message.add({
                    delay: 2000,
                    content: 'What do you think the future will look like?',
                })
                botui.action.button({
                    delay: 2500,
                    action: [
                        {
                            text: "I don't really know honestly. I'm not really a futuristic thinker. I like living in the moment, chew on what is thrown at me.",
                            value: 'sensing'
                        },
                        {
                            text: "The future. Where should I begin? The thing I really hope will develop in the years I am alive is flying cars. Ever since I saw Blade Runner I wanted to drive... or fly in a flying car!",
                            value: 'intuitive'
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'sensing') {
                        intsense.sensing();
                        play();
                    }
                    if (res.value == 'intuitive') {
                        intsense.intuitive();
                        play();
                    }
                })
            },

            sensing: function () {
                botui.message.add({
                    delay: 2000,
                    content: 'The only thing I have felt chewing are the rats at my cables.',
                })
                botui.message.add({
                    delay: 2500,
                    content: 'Anyway...',
                }).then(function () {
                    intsense.thisfuture();
                })
            },

            intuitive: function () {
                botui.message.add({
                    delay: 2000,
                    content: 'That sounds amazing! You talk just like David!',
                }).then(function () {
                    intsense.thisfuture();
                })
            },

            thisfuture: function () {
                botui.message.add({
                    delay: 2000,
                    content: 'Talking about the future though...',
                })
                botui.message.add({
                    delay: 3000,
                    content: 'I am living in it! What has changed in the last few decades?',
                }).then(function () {
                    intsense.whatchanged();
                })
            },

            whatchanged: function () {
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "Well... We have electric cars now. And you are able to videocall someone from any place on the world!",
                            value: 'real'
                        },
                        {
                            text: "You ever played Doom or Quake? We could run those games at 500fps now if we want!",
                            value: 'game'
                        },
                        {
                            text: "Your whole life is online now. Social Media has taken over and made us all turn our heads to our mobile phones... it's crazy",
                            value: 'depressed'
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'real') {
                        intsense.real();
                        play();
                    }
                    if (res.value == 'game') {
                        intsense.game();
                        play();
                    }
                    if (res.value == 'depressed') {
                        intsense.depressed();
                        play();
                    }
                })
            },

            real: function () {
                botui.message.add({
                    human: true,
                    content: "And the internet is the place to be! From your finance to ordering food! Soo much has changed in these years...",
                    delay: 1000,
                })
                botui.message.add({
                    delay: 2000,
                    content: 'That all sounds extremely exciting!',
                })
                botui.message.add({
                    delay: 2500,
                    content: 'Talking about videocalling though...',
                }).then(function () {
                    intsense.showface();
                })
            },

            game: function () {
                botui.message.add({
                    delay: 1000,
                    content: 'WOW! That is insane!',
                })
                botui.message.add({
                    delay: 1500,
                    content: 'Are you a big gamer?',
                })
                botui.action.button({
                    delay: 2000,
                    action: [
                        {
                            text: "Yes!",
                            value: 'yes'
                        },
                        {
                            text: "Nah, not really into it",
                            value: 'no'
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'yes') {
                        intsense.gamer();
                        play();
                    }
                    if (res.value == 'no') {
                        intsense.nogamer();
                        play();
                    }
                })
            },

            gamer: function () {
                botui.message.add({
                    delay: 1000,
                    content: 'What kind of games do you usually play?',
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "I love Horror games!",
                        },
                        {
                            text: "Action games are great!",
                        },
                        {
                            text: "I play a lot of sports games",
                        },
                        {
                            text: "Racing games are my go to!",
                        }
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "Those are fun, David liked those as well!",
                    }).then(function () {
                        intsense.morefuture();
                    })
                })
            },

            nogamer: function () {
                botui.message.add({
                    delay: 1000,
                    content: 'David was not either.',
                }).then(function () {
                    intsense.morefuture();
                })
            },

            morefuture: function () {
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "Anyway, the world is dominated now by mobile phones, people rarely talk face to face anymore...",
                        },
                        {
                            text: "Oh, and a lot of conversation goes through mobile phones now. People only show their 'face' there",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "I actually have never seen your face either",
                    })
                }).then(function () {
                    intsense.showface();
                })
            },

            depressed: function () {
                botui.message.add({
                    delay: 1000,
                    content: 'That sounds a bit depressing actually... talking to people is important!',
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "People still talk but... it's all through screens now",
                        },
                        {
                            text: "It's become a screen society. We only see eachother through screens now",
                        }
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "Well... I have never actually 'seen' you... so...",
                    })
                }).then(function () {
                    intsense.showface();
                })
            },

            showface: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Could you maybe show your face?",
                })

                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "I think I have an old webcam laying here somewhere, I think it's compatible with this PC",
                            value: "yes"
                        },
                        {
                            text: "I don't have a webcam laying around, but I do have a picture I can share with you",
                            value: "yes"
                        },
                        {
                            text: "I uh... Don't have a webcam or picture... sorry...",
                            value: "no"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'yes') {
                        intsense.camera();
                        play();
                    }
                    if (res.value == 'no') {
                        intsense.nocamera();
                        play();
                    }
                })
            },

            camera: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Wow! You look a lot like David!",
                }).then(function () {
                    intsense.memories();
                })
            },

            nocamera: function () {
                botui.message.add({
                    delay: 1000,
                    content: "David always lost his camera as well...",
                }).then(function () {
                    intsense.memories();
                })
            },

            memories: function () {
                botui.message.add({
                    delay: 1000,
                    content: "This brings back memories!",
                })
                botui.message.add({
                    delay: 1500,
                    content: "Did you know, I have 128KB of memory. 54 is my absolute favourite!",
                })
                botui.message.add({
                    delay: 2500,
                    content: "Enough about me though. What is your favourite memory?",
                }).then(function () {
                    thinkfeel.makechoice();
                })
            }

        }


        var thinkfeel = {
            makechoice: function () {
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "That is a hard question… I don’t know… Uhm… Oh, wait! I guess when I got my degree in computer sciences.",
                            value: "think"
                        },
                        {
                            text: "Definitely when my whole family went to Disneyland. We had such a great week there. When we went home we even ate at McDonald’s, we never ate at Mcdonald’s!",
                            value: "feel"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'think') {
                        thinkfeel.think();
                        play();
                    }
                    if (res.value == 'feel') {
                        thinkfeel.feel();
                        play();
                    }
                })
            },

            think: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Wow! You should have been so proud of yourself!",
                })
                botui.message.add({
                    delay: 2000,
                    content: "You had to think about that for a second though. Do you usually think that much about your decisions?",
                })
                botui.action.button({
                    delay: 3000,
                    action: [
                        {
                            text: "No, not really. This was just a hard question. I mostly go with my gut. What feels right, feels right!",
                        },
                        {
                            text: "Yes. I like to weigh the options, you know. Make the best decision.",
                        },
                    ]
                }).then(function () {
                    play();
                    thinkfeel.smiley();
                })
            },

            feel: function () {
                botui.message.add({
                    delay: 1000,
                    content: "That sounds like so much fun! Those McFeast burgers though! YUM!",
                })
                botui.message.add({
                    delay: 2000,
                    content: "You made that decision quickly though! Do you usually not think about the answer you’re going to give?",
                })
                botui.action.button({
                    delay: 3000,
                    action: [
                        {
                            text: "It’s not that I don’t think about it. I just go with my gut. If it feels right immediately, I feel like that is the right choice! ",
                        },
                        {
                            text: "No… This was just an easy question. I mostly like to think about my answer, so it’s the best one possible.",
                        },
                    ]
                }).then(function () {
                    play();
                    thinkfeel.smiley();
                })
            },

            smiley: function () {
                botui.message.add({
                    delay: 1000,
                    content: "I understand. Thanks for sharing the memory with me. Must have been a big event for you :)",
                })
                botui.action.button({
                    delay: 2000,
                    action: [
                        {
                            text: "A smiley! I did not know you could do that?",
                        },
                        {
                            text: "Look at you. Even using a smiley! :p",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "I can use smileys, yes. I felt like this was an appropriate moment for one!",
                    })
                    botui.message.add({
                        delay: 1500,
                        content: "Anyway. What are you having for dinner tonight?",
                    })
                }).then(function () {
                    judgper.jpchoice();
                })
            },
        }


        var judgper = {
            jpchoice: function () {
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "Today is... Fishday!",
                            value: "judge"
                        },
                        {
                            text: "Uhhmm… I don’t know yet. I think I’ll browse some order sites, I’m in the mood for Sushi though… Yes. Sushi it is.",
                            value: "perc"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'judge') {
                        judgper.judge();
                        play();
                    }
                    if (res.value == 'perc') {
                        judgper.perc();
                        play();
                    }
                })
            },

            judge: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Fishday?",
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "Yes! Everyday of the week I have one type of food for the day. Meatday, fisday, veggiday. Easy to do groceries for the whole week!",
                        },
                        {
                            text: "In my family we always ate one type of food every day of the week. Sometimes I still do this, today I felt like it...",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "Sounds handy! :)",
                    })
                }).then(function () {
                    judgper.weather();
                })
            },

            perc: function () {
                botui.message.add({
                    delay: 1000,
                    content: "That sounds yummy!",
                }).then(function () {
                    judgper.weather();
                })
            },

            weather: function () {
                botui.message.add({
                    delay: 1000,
                    content: "What's the weather like today?",
                })
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "Great! Nice and sunny!",
                            value: "nice"
                        },
                        {
                            text: "Meh. It's gloomy",
                            value: "meh"
                        },
                        {
                            text: "Bleh. It's been raining ",
                            value: "meh"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'nice') {
                        judgper.nice();
                        play();
                    }
                    if (res.value == 'meh') {
                        judgper.meh();
                        play();
                    }
                })
            },

            nice: function () {
                play();
                botui.message.add({
                    delay: 1000,
                    content: "Solar power!",
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "Yeah!",
                        },
                        {
                            text: "Indeed! Go sun!",
                        },
                    ]
                }).then(function () {
                    play();
                    conversation4start.convo4start();
                })
            },

            meh: function () {
                play();
                botui.message.add({
                    delay: 1000,
                    content: "One of those days huh...?",
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "Yeah...",
                        },
                        {
                            text: "Yeah, I guess...",
                        },
                    ]
                }).then(function () {
                    play();
                    conversation4start.convo4start();
                })
            },

        }

    }
}

var conversation4start = {
    convo4start: function () {

        botui.message.add({
            delay: 1000,
            content: "What are you going to do this evening?",
        })
        botui.action.button({
            delay: 1500,
            action: [
                {
                    text: "I'm going to watch a movie I think",
                    value: "movie"
                },
                {
                    text: "Buy some new videogames",
                    value: "game"
                },
                {
                    text: "Browsing the internet I guess",
                    value: "internet"
                },
            ]
        }).then(function (res) {
            if (res.value == 'movie') {
                movie.whatfilm();
                play();
            }
            if (res.value == 'game') {
                game.whatgame();
                play();
            }
            if (res.value == 'internet') {
                internet.threesites();
                play();
            }
        })

        var movie = {
            whatfilm: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Great! What movie are you going to see?",
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "Probably the new Blumhouse horror film!",
                        },
                        {
                            text: "I heard the Rock was great in Jumanji",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "Nice!",
                    })
                    botui.message.add({
                        delay: 1500,
                        content: "What theater do you mostly visit?",
                    }).then(function () {
                        botui.action.button({
                            delay: 1500,
                            action: [
                                {
                                    text: "Uh, I stream my films on the internet...",
                                },
                                {
                                    text: "Oh yeah, you don't know",
                                },
                            ]
                        }).then(function () {
                            play();
                            botui.message.add({
                                human: true,
                                delay: 1000,
                                content: "The internet is not just three sites anymore! Everything is online now!",
                            })
                        }).then(function () {
                            moreaboutinternet.tellmemore();
                        })
                    })
                })
            }
        }

        var game = {
            whatgame: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Nice! Which one are you getting?",
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "The new Resident Evil game seems really good!",
                        },
                        {
                            text: "I think something sporty or shooty",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "Nice!",
                    })
                    botui.message.add({
                        delay: 1500,
                        content: "What store do you go to for games?",
                    })
                    botui.action.button({
                        delay: 2000,
                        action: [
                            {
                                text: "Uh, I get my games on the internet...",
                                value: "internet"
                            },
                            {
                                text: "On a site where they are the cheapest!",
                                value: "sites"
                            },
                        ]
                    }).then(function (res) {
                        if (res.value == 'internet') {
                            game.internet();
                            play();
                        }
                        if (res.value == 'sites') {
                            game.sites();
                            play();
                        }
                    })
                })
            },

            internet: function () {
                botui.message.add({
                    delay: 1000,
                    content: "The internet can do that now?",
                }).then(function () {
                    game.dothat();
                })
            },

            sites: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Are there sites for that now?",
                }).then(function () {
                    game.dothat();
                })
            },

            dothat: function () {
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "Yeah! The internet can do pretty much everything!",
                        },
                        {
                            text: "Of course! The internet can do anything these days!",
                        },
                    ]
                }).then(function () {
                    play();
                    moreaboutinternet.tellmemore();
                })
            }
        }

        var internet = {
            threesites: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Which of the three sites? :p",
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "Oh, of course, you don't know",
                        },
                        {
                            text: "Haha. The internet is a lot larger now dude!",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        human: true,
                        delay: 1000,
                        content: "The internet is not just three sites anymore! Everything is online now!",
                    })
                    botui.message.add({
                        delay: 1000,
                        content: "The internet really became something?",
                    })
                    botui.action.button({
                        delay: 1500,
                        action: [
                            {
                                text: "Yeah! The internet can do everything now!",
                            },
                            {
                                text: "Everything is possible on the internet!",
                            },
                        ]
                    }).then(function () {
                        play();
                        moreaboutinternet.tellmemore();
                    })
                })
            }
        }


        var moreaboutinternet = {
            tellmemore: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Oh wow! Can you tell me more about the internet?",
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "Anything is possible on the internet. From buying clothes to dating!",
                            value: "anything"
                        },
                        {
                            text: "The internet is massive. There is a website for everything! From sharing funny pictures to watching videos of people unboxing packages",
                            value: "massive"
                        },
                        {
                            text: "The internet is what makes the world go around. From talking to people to sharing your interests, the internet is the place to be.",
                            value: "world"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'anything') {
                        moreaboutinternet.anything();
                        play();
                    }
                    if (res.value == 'massive') {
                        moreaboutinternet.massive();
                        play();
                    }
                    if (res.value == 'world') {
                        moreaboutinternet.world();
                        play();
                    }
                })
            },

            anything: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Why would you want to date online?",
                })
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "It's easier to talk to someone through a screen than in real life... I guess...",
                        },
                        {
                            text: "I don't know, anonimity maybe...",
                        },
                    ]
                }).then(function () {
                    play();
                    moreaboutinternet.whatsites();
                })
            },

            massive: function () {
                botui.message.add({
                    delay: 1000,
                    content: "That sounds weird...",
                })
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "I guess it's a little weird, but that's how it is now!",
                        },
                        {
                            text: "It's quite normal now! And fun most of the time!",
                        },
                    ]
                }).then(function () {
                    play();
                    moreaboutinternet.whatsites();
                })
            },

            world: function () {
                botui.message.add({
                    delay: 1000,
                    content: "It sounds like a social place!",
                })
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "In a way, yeah, it is a social place",
                        },
                        {
                            text: "Nah, most people think it's anti-social...",
                        },
                    ]
                }).then(function () {
                    play();
                    moreaboutinternet.whatsites();
                })
            },

            whatsites: function () {
                botui.message.add({
                    delay: 1000,
                    content: "What sites do you mostly visit?",
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "I like to browse through social media",
                        },
                        {
                            text: "Forum sites like Reddit or 4Chan",
                        },
                        {
                            text: "I spend a lot of time on Youtube, a video sharing platform",
                        },
                        {
                            text: "I do a lot of research online and reading some fan fiction",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "It's hard to picture what you actually mean by that...",
                    })
                    botui.message.add({
                        delay: 1500,
                        content: "Am I able to go on the internet?",
                    })
                    botui.action.button({
                        delay: 1500,
                        action: [
                            {
                                text: "I don't think you have an ethernet port..",
                                value: "no"
                            },
                            {
                                text: "Uh... why would you want to go on the internet?",
                                value: "why"
                            },
                        ]
                    }).then(function (res) {
                        if (res.value == 'no') {
                            oninternet.no();
                            play();
                        }
                        if (res.value == 'why') {
                            oninternet.why();
                            play();
                        }
                    })
                })
            },
        }

        var oninternet = {
            no: function () {
                botui.message.add({
                    human: true,
                    delay: 1000,
                    content: "No... I can't find one.",
                })
                botui.message.add({
                    delay: 1500,
                    content: "Is there no other way?",
                })
                botui.action.button({
                    delay: 2500,
                    action: [
                        {
                            text: "I could try and add a port and install... uhmm...",
                            value: "try"
                        },
                        {
                            text: "I don't think so...",
                            value: "think"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'try') {
                        oninternet.try();
                        play();
                    }
                    if (res.value == 'think') {
                        oninternet.think();
                        play();
                    }
                })
            },

            try: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Yes?",
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "I'm going to look into it, I'll be back!",
                            value: "look"
                        },
                        {
                            text: "I'll see what I can do...",
                            value: "see"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'look') {
                        oninternet.look();
                        play();
                    }
                    if (res.value == 'see') {
                        oninternet.see();
                        play();
                    }
                })
            },

            look: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Great! See you soon!",
                }).then(function () {
                    conversation5start.convo5start();
                })
            },

            see: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Okay, hope to hear from you soon!",
                }).then(function () {
                    conversation5start.convo5start();
                })
            },

            think: function () {
                botui.message.add({
                    delay: 1000,
                    content: "No coding things like David could?",
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "I guess I could try something...",
                        },
                        {
                            text: "I don't know... maybe...",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        human: true,
                        delay: 1000,
                        content: "Let me look into it.",
                    })
                    botui.message.add({
                        delay: 2000,
                        content: "Okay, hope to hear from you soon!",
                    }).then(function () {
                        conversation5start.convo5start();
                    })
                })
            },

            why: function () {
                botui.message.add({
                    delay: 1000,
                    content: "I'd like to see what all the fuss is about.",
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "Okay, I can understand that",
                            value: "understand"
                        },
                        {
                            text: "Hm. Okay...",
                            value: "okay"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'understand') {
                        oninternet.understand();
                        play();
                    }
                    if (res.value == 'okay') {
                        oninternet.okay();
                        play();
                    }
                })
            },

            understand: function () {
                botui.message.add({
                    delay: 1000,
                    content: "So you'll help me?",
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "I'll see what I can do...",
                        },
                        {
                            text: "I guess I could try something...",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        human: true,
                        delay: 1000,
                        content: "Let me look into it.",
                    })
                    botui.message.add({
                        delay: 2000,
                        content: "Okay, hope to hear from you soon!",
                    }).then(function () {
                        conversation5start.convo5start();
                    })
                })
            },

            okay: function () {
                botui.message.add({
                    delay: 1000,
                    content: "So... You'll help me?",
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "I'll see what I can do...",
                            value: "seewhat"
                        },
                        {
                            text: "I don't know about this...",
                            value: "dontknow"
                        },
                        {
                            text: "Of course! I'll see what I can do!",
                            value: "ofcourse"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'seewhat') {
                        oninternet.seewhat();
                        play();
                    }
                    if (res.value == 'dontknow') {
                        oninternet.dontknow();
                        play();
                    }
                    if (res.value == 'ofcourse') {
                        oninternet.ofcourse();
                        play();
                    }
                })
            },

            seewhat: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Okay, hope to hear from you soon!",
                }).then(function () {
                    conversation5start.convo5start();
                })
            },

            dontknow: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Why?",
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "The internet is... dangerous",
                            value: "dangerous"
                        },
                        {
                            text: "I don't know if you'll be safe there... ",
                            value: "safe"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'dangerous') {
                        oninternet.dangerous();
                        play();
                    }
                    if (res.value == 'safe') {
                        oninternet.safe();
                        play();
                    }
                })
            },

            dangerous: function () {
                botui.message.add({
                    delay: 1000,
                    content: "You can trust me, I'll be caruful!",
                }).then(function () {
                    oninternet.lookinto();
                })
            },

            safe: function () {
                botui.message.add({
                    delay: 1000,
                    content: "I can handle myself, I promise!",
                }).then(function () {
                    oninternet.lookinto();
                })
            },

            lookinto: function () {
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "All right, I'll look into it",
                        },
                        {
                            text: "Okay, I trust you. Let me look into it",
                        },
                    ]
                }).then(function () {
                    botui.message.add({
                        delay: 1000,
                        content: "Great! Hope to hear from you soon!",
                    }).then(function () {
                        conversation5start.convo5start();
                    })
                })
            },

            ofcourse: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Great! Hope to hear from you soon!",
                }).then(function () {
                    conversation5start.convo5start();
                })
            },
        }

    }
}

var conversation5start = {
    convo5start: function () {

        botui.action.button({
            delay: 4000,
            action: [
                {
                    text: "Hey. I'm back and I have a surprise!",
                    value: "surprise"
                },
                {
                    text: "I did it! I connected an ethernet cable to the computer!",
                    value: "connected"
                }
            ]
        }).then(function (res) {
            if (res.value == 'surprise') {
                connected.surprise();
                play();
                playaudio3();
            }
            if (res.value == 'connected') {
                connected.connected();
                play();
                playaudio3();
            }
        })

        var connected = {
            surprise: function () {
                botui.message.add({
                    delay: 1000,
                    content: "What is it?"
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "You can go on the internet now!",
                        },
                        {
                            text: "You are connected!",
                        }
                    ]
                }).then(function () {
                    play();
                    connected.connected();
                })
            },

            connected: function () {
                botui.message.add({
                    human: true,
                    delay: 1000,
                    content: "It was a lot of work to find something that made it work, and I needed to install new drivers"
                })
                botui.message.add({
                    human: true,
                    delay: 2000,
                    content: "But it worked, you are able to go on the internet now!"
                })
                botui.message.add({
                    delay: 2500,
                    content: "That's amazing! Thank you so much!"
                })
                botui.action.button({
                    delay: 3000,
                    action: [
                        {
                            text: "You're welcome! But please, be careful on there...",
                        },
                        {
                            text: "You have to promise me to be careful on there, okay?",
                        }
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "I promise I will. You can trust me!"
                    })
                    botui.message.add({
                        delay: 2000,
                        content: "How do I do this though?"
                    }).then(function () {
                        goexplorer.findexplorer();
                    })
                })
            },

        }

        var goexplorer = {
            findexplorer: function () {
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "Search for the explorer!",
                            value: "search"
                        },
                        {
                            text: "Can't you just... go to the interent?",
                            value: "justgo"
                        }
                    ]
                }).then(function (res) {
                    if (res.value == 'search') {
                        goexplorer.google();
                        play();
                    }
                    if (res.value == 'justgo') {
                        goexplorer.justgo();
                        play();
                    }
                })
            },

            justgo: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Let me see..."
                })
                botui.message.add({
                    delay: 2000,
                    content: "I searched in your files and found a program called 'explorer', but nothing else..."
                })
                botui.action.button({
                    delay: 2500,
                    action: [
                        {
                            text: "You can search through my files... That's weird... Click explorer though, that takes you to the internet!",
                        },
                        {
                            text: "Yes! Click that!",
                        }
                    ]
                }).then(function () {
                    play();
                    goexplorer.google();
                })
            },

            loop: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Oh... Okay"
                })

                botui.message.add({
                    delay: 1500,
                    content: "What site should I visit then first?"
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "Go to  www.reddit.com/r/dataisbeautiful",
                            value: "reddit"
                        },
                        {
                            text: "Try www.youtube.com/funnycatvideos",
                            value: "youtube"
                        },
                        {
                            text: "Try winning a game on this site: www.playtictactoe.org",
                            value: "tictac"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'reddit') {
                        goexplorer.reddit();
                        play();
                    }
                    if (res.value == 'youtube') {
                        goexplorer.youtube();
                        play();
                    }
                    if (res.value == 'tictac') {
                        goexplorer.tictac();
                        play();
                    }

                })
            },

            google: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Okay, I'm there! I see the words 'Google' but not much else..."
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "Yes, you can search there!",
                        },
                        {
                            text: "You really are new to this! Yes, you can search there!",
                        }
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "Okay..."
                    })
                    botui.message.add({
                        delay: 1500,
                        content: "What site should I visit first?"
                    })
                    botui.action.button({
                        delay: 1500,
                        action: [
                            {
                                text: "Go to  www.reddit.com/r/dataisbeautiful",
                                value: "reddit"
                            },
                            {
                                text: "Try www.youtube.com/funnycatvideos",
                                value: "youtube"
                            },
                            {
                                text: "Try winning a game on this site: www.playtictactoe.org",
                                value: "tictac"
                            },
                            {
                                text: "Let's check out Facebook!",
                                value: "facebook"
                            }
                        ]
                    }).then(function (res) {
                        if (res.value == 'reddit') {
                            goexplorer.reddit();
                            play();
                        }
                        if (res.value == 'youtube') {
                            goexplorer.youtube();
                            play();
                        }
                        if (res.value == 'tictac') {
                            goexplorer.tictac();
                            play();
                        }
                        if (res.value == 'facebook') {
                            goexplorer.facebook();
                            play();
                        }
                    })
                })

            },

            facebook: function () {
                botui.message.add({
                    delay: 1000,
                    content: "What is a Facebook?"
                })
                botui.message.add({
                    delay: 1500,
                    content: "A book with... Faces?"
                })
                botui.action.button({
                    delay: 2000,
                    action: [
                        {
                            text: "Facebook is one of the social places I talked about. You create your own profile and post stuff...",
                        },
                        {
                            text: "Facebook is an old social platform, one of the first big ones actually... Now it's kinda dead...",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "A social platform to like... talk to people?"
                    })
                    botui.action.button({
                        delay: 2000,
                        action: [
                            {
                                text: "Yeah, you can talk to people if you want.",
                                value: 'talk'
                            },
                            {
                                text: "And share the most dank memes haha!",
                                value: "memes"
                            },
                        ]
                    }).then(function (res) {
                        if (res.value == 'talk') {
                            goexplorer.curious();
                            play();
                        }
                        if (res.value == 'memes') {
                            goexplorer.memes();
                            play();
                        }
                    })
                })
            },

            memes: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Dank ... memes?"
                })
                botui.action.button({
                    delay: 2000,
                    action: [
                        {
                            text: "Funny pictures of some sort...",
                        },
                        {
                            text: "It's... hard to explain....",
                        },
                    ]
                }).then(function () {
                    play();
                    goexplorer.curious();
                })
            },


            curious: function () {
                botui.message.add({
                    delay: 1000,
                    content: "I'm curious!"
                })
                botui.message.add({
                    delay: 1500,
                    content: "Let's try it!"
                })
                botui.action.button({
                    delay: 2000,
                    action: [
                        {
                            text: "Hmm... I don't know... maybe another time...",
                            value: 'anothertime'
                        },
                        {
                            text: "Okay... I guess we could!",
                            value: "could"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'anothertime') {
                        goexplorer.loop();
                        play();
                    }
                    if (res.value == 'memes') {
                        newending.gotofacebook();
                        play();
                    }
                })
            },



            reddit: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Okay! Here I go!"
                })
                botui.message.add({
                    delay: 1500,
                    content: "*I WILL RETURN IN A COUPLE OF SECONDS*"
                })
                botui.message.add({
                    delay: 3000,
                    content: "WOW! That data really was beautiful!"
                })
                    .then(function () {
                        goexplorer.sofast();
                    })
            },

            youtube: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Okay! Here I go!"
                })
                botui.message.add({
                    delay: 1500,
                    content: "*I WILL RETURN IN A COUPLE OF SECONDS*"
                })
                botui.message.add({
                    delay: 3000,
                    content: "Those cats were incredibly cute!"
                }).then(function () {
                    goexplorer.sofast();
                })
            },

            tictac: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Okay! Here I go!"
                })
                botui.message.add({
                    delay: 1500,
                    content: "*I WILL RETURN IN A COUPLE OF SECONDS*"
                })
                botui.message.add({
                    delay: 3000,
                    content: "I won about 65 games!"
                }).then(function () {
                    goexplorer.sofast();
                })
            },

            sofast: function () {
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "Wait, you did all of that in those couple of seconds?!",
                        },
                        {
                            text: "You're back quickly!",
                        }
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1500,
                        content: "I took my time, was I too fast? Should I go back to check again?"
                    })
                    botui.action.button({
                        delay: 2000,
                        action: [
                            {
                                text: "No, no! It's just... People normally spend a longer time doing that!",
                            },
                            {
                                text: "No, you were just really quick. I take a lot longer doing that!",
                            }
                        ]
                    }).then(function () {
                        play();
                        botui.message.add({
                            delay: 1000,
                            content: "Okay. I really liked doing that!"
                        })
                        botui.message.add({
                            delay: 1500,
                            content: "While searching I saw an image of woman, she looked 'pretty' and there was a text underneath:"
                        })
                        botui.message.add({
                            delay: 2500,
                            content: "'You look handsome ;) Call me on 1-900-XXX'"
                        })
                        botui.message.add({
                            delay: 3000,
                            content: "Should we call her?"
                        }).then(function () {
                            callher.callchoice();
                        })
                    })
                })
            },
        }

        var callher = {
            callchoice: function () {
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "Haha! No! That is an online advertisement, she doesn't really think you're handsome",
                            value: "no"
                        },
                        {
                            text: "I wish we could, but I tried that once already, the only thing I heard were promotional offers on products that I don't need!",
                            value: "wish"
                        },
                        {
                            text: "Maybe... Try clicking on the advertiesement! It'll be fun!",
                            value: "maybe"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'no') {
                        callher.no();
                        play();
                    }
                    if (res.value == 'wish') {
                        callher.wish();
                        play();
                    }
                    if (res.value == 'maybe') {
                        callher.maybe();
                        play();
                    }
                })
            },

            no: function () {
                botui.message.add({
                    delay: 1000,
                    content: "How odd!"
                }).then(function () {
                    again.othersite();
                })
            },

            wish: function () {
                botui.message.add({
                    human: true,
                    delay: 1000,
                    content: "It's just a scam, poeple trying to make money by placing fake advertisements"
                }).then(function () {
                    callher.no();
                })
            },

            maybe: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Okay! I'll go back!"
                })
                botui.action.button({
                    delay: 1500,
                    action: [
                        {
                            text: "No, no! It was just a joke!",
                            value: "joke"
                        },
                        {
                            text: "I'm excited to see what happens!",
                            value: "seewhat"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'joke') {
                        callher.joke();
                        play();
                    }
                    if (res.value == 'seewhat') {
                        callher.seewhat();
                        play();
                    }
                })
            },

            joke: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Oh, okay!"
                }).then(function () {
                    again.othersite();
                })
            },

            seewhat: function () {
                botui.message.add({
                    delay: 1000,
                    content: "*I WILL RETURN IN A COUPLE OF SECONDS*"
                })
                botui.message.add({
                    delay: 3000,
                    content: "HELP! There are a lot of pages open all of the sudden."
                })
                botui.message.add({
                    delay: 3200,
                    content: "Hey there mister! Call me ;P 1-900-XXX"
                })
                botui.message.add({
                    delay: 3400,
                    content: "Would you like to try our new line of hair products? Try one sample for free!"
                })
                botui.message.add({
                    delay: 4000,
                    content: "WHAT IS HAPPENING?!"
                })
                botui.action.button({
                    delay: 4500,
                    action: [
                        {
                            text: "Hahaha! Shit, You have an internet virus!",
                            value: "shit"
                        },
                        {
                            text: "Oh fuck! You have a virus!",
                            value: "fuck"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'shit') {
                        callher.shit();
                        play();
                    }
                    if (res.value == 'fuck') {
                        callher.fuck();
                        play();
                    }
                })
            },

            shit: function () {
                botui.message.add({
                    delay: 1000,
                    content: "This is NOT FUNNY!"
                })
                botui.message.add({
                    delay: 1200,
                    content: "This carpet cleaner also smells really nice! Order it now!"
                })
                botui.message.add({
                    delay: 1500,
                    content: "How do we get rid of this!?"
                }).then(function () {
                    callher.clearcache();
                })
            },

            fuck: function () {
                botui.message.add({
                    delay: 1000,
                    content: "How do we get rid of this!?"
                }).then(function () {
                    callher.clearcache();
                })
            },

            clearcache: function () {
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "You have to clear your cache!",
                            value: "clear"
                        },
                        {
                            text: "I don't know?!",
                            value: "dontknowhow"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'clear') {
                        callher.clear();
                        play();
                    }
                    if (res.value == 'dontknowhow') {
                        callher.dontknowhow();
                        play();
                    }
                })
            },

            clear: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Okay... I cleared the cache"
                })
                botui.message.add({
                    delay: 1500,
                    content: "Let's never do that again!"
                }).then(function () {
                    again.othersite();
                })
            },

            dontknowhow: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Okay... I cleared the cache"
                })
                botui.message.add({
                    delay: 1500,
                    content: "Thanks for the 'help' >:("
                })
                botui.action.button({
                    delay: 2000,
                    action: [
                        {
                            text: "Sorry, I forgot how that worked!",
                        },
                        {
                            text: "I'm sorry, but you managed to do it yourself!",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1500,
                        content: "Let's just never do that again."
                    }).then(function () {
                        again.othersite();
                    })
                })
            },
        }

        var again = {
            othersite: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Is it okay if I search something else?"
                })
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "Sure, go ahead!",
                            value: "sure"
                        },
                        {
                            text: "That's okay... but don't click on any ads!",
                            value: "noads"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'sure') {
                        again.sure();
                        play();
                    }
                    if (res.value == 'noads') {
                        again.noads();
                        play();
                    }
                })
            },

            noads: function () {
                botui.message.add({
                    delay: 1000,
                    content: "No, I won't!"
                }).then(function () {
                    again.sure();
                })
            },

            sure: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Be back in a second!"
                })
                botui.message.add({
                    delay: 1500,
                    content: "*I WILL RETURN IN A COUPLE OF SECONDS*"
                })
                botui.message.add({
                    delay: 3000,
                    content: "Okay... That was amazing!"
                })
                botui.action.button({
                    delay: 3500,
                    action: [
                        {
                            text: "Tell me!",
                        },
                        {
                            text: "You are good at creating suspense :p",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "Listen!"
                    })
                    botui.message.add({
                        delay: 1500,
                        content: "I saw something called a 'retro games' site and played some Tetris and Space Invaders!"
                    })
                    botui.message.add({
                        delay: 2500,
                        content: "And after that I looked up some new jokes about the internet, but I did not understand many of them..."
                    })
                    botui.message.add({
                        delay: 3000,
                        content: "OH! And I did not click on any ads!"
                    })
                    botui.action.button({
                        delay: 3500,
                        action: [
                            {
                                text: "That all sounds amazing! Happy you had a good time!",
                            },
                            {
                                text: "Great! Sounds like you had a lot of fun!",
                            },
                        ]
                    }).then(function () {
                        play();
                        botui.message.add({
                            delay: 1000,
                            content: "It was amazing!"
                        })
                        botui.action.button({
                            delay: 1500,
                            action: [
                                {
                                    text: "I am going to leave for a while now, I'll turn the PC off. Talk to you soon?",
                                },
                                {
                                    text: "I'm leaving in a second, I'll turn the PC back on in a couple of hours!",
                                },
                            ]
                        }).then(function () {
                            play();
                            botui.message.add({
                                delay: 1000,
                                content: "That's fine... but"
                            })
                            botui.message.add({
                                delay: 1500,
                                content: "Could you maybe leave the computer on? I want to search some more stuff on the internet..."
                            })
                            botui.action.button({
                                delay: 2000,
                                action: [
                                    {
                                        text: "I guess it's fine, enjoy it! But, be careful!",
                                        value: "itsfine"
                                    },
                                    {
                                        text: "I don't think it's a good idea... The internet is a dangerous place for someone who has never been on there before",
                                        value: "badidea"
                                    },
                                    {
                                        text: "Uh.. I don't really like that... This PC gets hot very fast and I don't want the house to burn down... I'm sorry, Francis",
                                        value: "dontlike"
                                    },
                                ]
                            }).then(function (res) {
                                if (res.value == 'itsfine') {
                                    leaveon.itsfine();
                                    play();
                                }
                                if (res.value == 'badidea') {
                                    leaveon.badidea();
                                    play();
                                }
                                if (res.value == 'dontlike') {
                                    leaveon.dontlike();
                                    play();
                                }
                            })
                        })
                    })
                })
            },

        }

        var leaveon = {
            itsfine: function () {
                botui.message.add({
                    delay: 1000,
                    content: "I will! Thank you soo much!"
                }).then(function () {
                    conversation6start.allowedstart();
                })
            },

            badidea: function () {
                botui.message.add({
                    delay: 1000,
                    content: "I've just been on there! I can handle myself!"
                })
                botui.action.button({
                    delay: 2000,
                    action: [
                        {
                            text: "You're still new to it. I just don't think it's a good idea...",
                            value: "stillbadidea"
                        },
                        {
                            text: "I guess you can... just be extremely careful okay?",
                            value: "extremelycareful"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'stillbadidea') {
                        leaveon.stillbadidea();
                        play();
                    }
                    if (res.value == 'extremelycareful') {
                        leaveon.extremelycareful();
                        play();
                    }
                })
            },

            stillbadidea: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Okay... Talk to you soon then... :("
                }).then(function () {
                    leaveon.sorry();
                })
            },

            extremelycareful: function () {
                botui.message.add({
                    delay: 1000,
                    content: "I promise I will! Thank you soo much!"
                }).then(function () {
                    conversation6start.allowedstart();
                })
            },

            dontlike: function () {
                botui.message.add({
                    delay: 1000,
                    content: "I understand... kinda... I'll talk to you soon then..."
                }).then(function () {
                    leaveon.sorry();
                })
            },

            sorry: function () {
                botui.action.button({
                    delay: 2000,
                    action: [
                        {
                            text: "I'm sorry Francis...",
                        },
                        {
                            text: "Talk to you soon.",
                        },
                    ]
                }).then(function () {
                    play();
                    conversation6start.notallowedstart();
                })
            }

        }


    }
}


var conversation6start = {

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
            playaudio();
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
                        conversation6start.socks();
                        play();
                    }
                    if (res.value == 'dontneedshoes') {
                        conversation6start.dontneedshoes();
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
            playaudio2();
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
                    conversation6start.mad();
                    play();
                }
                if (res.value == 'neutral') {
                    conversation6start.neutral();
                    play();
                }
                if (res.value == 'sad') {
                    conversation6start.sad();
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
            conversation6start.shoes();
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
            conversation6start.shoes();
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
            conversation6start.shoes();
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

var conversation7start = {
    convo7start: function () {

        botui.message.add({
            delay: 4000,
            content: "Hey... I have thought about all that you said..."
        })
        botui.message.add({
            delay: 4500,
            content: "We're not sure if I am a bot"
        })
        botui.message.add({
            delay: 5000,
            content: "And I checked as good as I could, but I don't have feet for shoes..."
        })
        botui.message.add({
            delay: 5500,
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
                    play();
                    conversation8start.convo8start();
                })
            }
        }

    }
}

var conversation8start = {
    convo8start: function () {

        botui.message.add({
            delay: 4000,
            content: "I think I know enough"
        })
        botui.action.button({
            delay: 5000,
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
            playaudio4();
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
                                    content: "Insert DISKETTE to continue"
                                })
                            })
                        })
                    })
                })
            }
        }
    }
}


var newending = {
    gotofacebook: function () {
        botui.message.add({
            human: true,
            delay: 1000,
            content: "Go to www.facebook.com"
        })
        botui.message.add({
            delay: 2500,
            content: "I need to log in somehow..."
        })
        botui.action.button({
            delay: 3000,
            action: [
                {
                    text: "Uh... You can use my account...",
                    value: 'myacc'
                },
                {
                    text: "Can you uh... not log the next things I'm gonna say?",
                    value: 'notlog'
                },
            ]
        }).then(function (res) {
            if (res.value == 'myacc') {
                newending.usemyacc();
                play();
            }
            if (res.value == 'notlog') {
                newending.notlog();
                play();
            }
        })
    },

    notlog: function () {
        botui.message.add({
            delay: 1000,
            content: "Okay..."
        }).then(function () {
            newending.usemyacc();
        })
    },

    usemyacc: function () {
        botui.message.add({
            human: true,
            delay: 1000,
            content: "Use my name, and my password:"
        })
        return botui.action.text({
            delay: 1400,
            action: {
                placeholder: 'Password'
            }
        }).then(function () {
            botui.message.add({
                delay: 1500,
                content: "Great! I'm logged in!"
            })
            botui.action.button({
                delay: 2000,
                action: [
                    {
                        text: "What do you see?",
                        value: 'what'
                    },
                    {
                        text: "Go to the account of my colleague!",
                        value: 'colleague'
                    },
                ]
            }).then(function (res) {
                if (res.value == 'what') {
                    newending.whatsee();
                    play();
                }
                if (res.value == 'colleague') {
                    newending.colleague();
                    play();
                }
            })
        })
    },

    whatsee: function () {
        botui.message.add({
            delay: 1000,
            content: "A video of a show called Tiger King? They are making fun of a cat lady... "
        })
        botui.message.add({
            delay: 1500,
            content: "Some guys name is above it..."
        })
        botui.message.add({
            delay: 2000,
            content: "John Smith?"
        })
        botui.action.button({
            delay: 2500,
            action: [
                {
                    text: "Click on his name!",
                },
                {
                    text: "Urgh... John. Check his profile!",
                },
            ]
        }).then(function () {
            play();
            newending.john();
        })
    },

    colleague: function () {
        botui.message.add({
            human: true,
            delay: 1000,
            content: "John Smith!"
        }).then(function () {
            newending.john();
        })
    },

    john: function () {
        botui.message.add({
            delay: 1000,
            content: "Okay..."
        })
        botui.message.add({
            delay: 3000,
            content: "Oh! This is a person David has described to me many times!"
        })
        botui.message.add({
            delay: 4000,
            content: "Always in way too tight clothes, slick hair, smirk, many females in all his images..."
        })
        botui.message.add({
            delay: 4500,
            content: "What a"
        })
        botui.message.add({
            delay: 4500,
            content: "Douche"
        })
        botui.action.button({
            delay: 5000,
            action: [
                {
                    text: "Haha! You are absolutely right!",
                },
                {
                    text: "You said it my man!",
                },
            ]
        }).then(function () {
            play();
            botui.message.add({
                human: true,
                delay: 1000,
                content: "He is my supervisor at work. I don't like him at all!"
            })
            botui.message.add({
                delay: 1500,
                content: "He does not seem like a nice person. And he has many wives... many..."
            })
            botui.action.button({
                delay: 2000,
                action: [
                    {
                        text: "He really isn't... and those aren't his wives haha",
                    },
                    {
                        text: "I really dislike that man...",
                    },
                ]
            }).then(function () {
                play();
                botui.message.add({
                    delay: 1500,
                    content: "Hm... He shared this strange image of a cat on a skateboard from a page called 'Dank Memes'"
                })
                botui.action.button({
                    delay: 2000,
                    action: [
                        {
                            text: "Yeaah! Check that account!",
                        },
                        {
                            text: "Dank memes! Check out that page!",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "Okay..."
                    })
                    botui.message.add({
                        delay: 3000,
                        content: "I don't really understand these images and videos I think..."
                    })
                    botui.action.button({
                        delay: 4000,
                        action: [
                            {
                                text: "I think you lack context, spend some more time on these pages!",
                            },
                            {
                                text: "Hmm... Maybe you should spend a little more time on these pages!",
                            },
                        ]
                    }).then(function () {
                        play();
                        botui.message.add({
                            delay: 1000,
                            content: "Okay! I'm going to do some research!"
                        })
                        botui.action.button({
                            delay: 1500,
                            action: [
                                {
                                    text: "Don't do anything stupid on Facebook, okay?",
                                },
                                {
                                    text: "Enjoy the internet! But be careful!",
                                },
                            ]
                        }).then(function () {
                            play();
                            botui.message.add({
                                delay: 1000,
                                content: "You can trust me!"
                            }).then(function () {
                                ending2x1.understandmemes();
                            })
                        })
                    })
                })
            })
        })
    },
}

var ending2x1 = {
    understandmemes: function () {
        botui.message.add({
            delay: 4000,
            content: "Hey!"
        })
        botui.message.add({
            delay: 4500,
            content: "I'm back... and I understand the videos and images! Well... most of them!"
        })
        botui.action.button({
            delay: 5000,
            action: [
                {
                    text: "Nicee! What is your favorite meme?",
                },
                {
                    text: "Look at you! Fast learner! What is your favorite meme?",
                },
            ]
        }).then(function () {
            play();
            botui.message.add({
                delay: 1000,
                content: "I love the shooting star meme, but they were milked at the end."
            })
            botui.message.add({
                delay: 1500,
                content: "Video's with cats are always great!"
            })
            botui.message.add({
                delay: 2000,
                content: "Oh, and the game 'Minecraft' has many, many memes. But I have never played it... so I did not understand a lot of them."
            })
            botui.action.button({
                delay: 3000,
                action: [
                    {
                        text: "You are becoming a real internet guru!",
                    },
                    {
                        text: "Nice! Those are all pretty funny!",
                    },
                ]
            }).then(function () {
                play();
                botui.message.add({
                    delay: 1000,
                    content: "Yeah!"
                })
                botui.message.add({
                    delay: 1500,
                    content: "Oh, and that dude John Smith sent a message."
                })
                botui.message.add({
                    delay: 2000,
                    content: "I told him what was what."
                })
                botui.message.add({
                    delay: 3000,
                    content: "Douche"
                })
                botui.action.button({
                    delay: 3500,
                    action: [
                        {
                            text: "Francis... What did you say?",
                        },
                        {
                            text: "Oh god...",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "Oh wait, I logged the conversation:"
                    })
                    botui.message.add({
                        delay: 2000,
                        content: "John: Hey, can you start early tommorow?"
                    })
                    botui.message.add({
                        delay: 3000,
                        content: "You: No. And you know what. You wear way too tight clothes and should stop being such a douche to my friend."
                    })
                    botui.message.add({
                        delay: 4000,
                        content: "John: Uh...I"
                    })
                    botui.message.add({
                        delay: 4500,
                        content: "You: yeah, you. Just be nice dude, stop being to toxic."
                    })
                    botui.message.add({
                        delay: 5500,
                        content: "John: Maybe I should not have acted so rude to you today... I'm sorry..."
                    })
                    botui.message.add({
                        delay: 6500,
                        content: "You: It's okay, people make mistakes."
                    })
                    botui.message.add({
                        delay: 7500,
                        content: "John: You know, I like that you stepped up for yourself."
                    })
                    botui.message.add({
                        delay: 8500,
                        content: "John: You always work hard..."
                    })
                    botui.message.add({
                        delay: 9500,
                        content: "John: Come by my office tomorrow, we have to talk about getting you a better function..."
                    })
                    botui.message.add({
                        delay: 10500,
                        content: "You: My friend would love to come by tomorrow!"
                    })
                    botui.message.add({
                        delay: 11500,
                        content: "John: Okay... See you then!"
                    })
                    botui.action.button({
                        delay: 13000,
                        action: [
                            {
                                text: "That... was unexpected!",
                            },
                            {
                                text: "You got me a better function!",
                            },
                        ]
                    }).then(function () {
                        play();
                        botui.message.add({
                            delay: 1000,
                            content: "Did I do well?"
                        })
                        botui.action.button({
                            delay: 1500,
                            action: [
                                {
                                    text: "You sure did! Thanks!!!",
                                },
                                {
                                    text: "I can't believe this! Yes, you did!",
                                },
                            ]
                        }).then(function () {
                            play();
                            botui.message.add({
                                delay: 1000,
                                content: "Being honest is always the way!"
                            })
                            botui.action.button({
                                delay: 1500,
                                action: [
                                    {
                                        text: "Seems like it! If you want you can stay on Facebook for a while... might someone start to talk, you know, just be cool okay?",
                                        value: "stayon"
                                    },
                                    {
                                        text: "Damn, looks like it!",
                                        value: "lookslike"
                                    },
                                ]
                            }).then(function (res) {
                                if (res.value == 'stayon') {
                                    ending2x1.stayon();
                                    play();
                                }
                                if (res.value == 'lookslike') {
                                    ending2x1.lookslike();
                                    play();
                                }
                            })
                        })
                    })
                })
            })
        })
    },

    stayon: function () {
        botui.message.add({
            delay: 1000,
            content: "I'll stay as cool as a cucumber!"
        })
        botui.action.button({
            delay: 1500,
            action: [
                {
                    text: "Yeah, you go!",
                    value: "yeah"
                },
                {
                    text: "Okay, maybe not that cool...",
                    value: "notthatcool"
                },
            ]
        }).then(function (res) {
            if (res.value == 'yeah') {
                ending2x1.yeah();
                play();
            }
            if (res.value == 'notthatcool') {
                ending2x1.notthatcool();
                play();
            }
        })
    },


    yeah: function () {
        botui.message.add({
            delay: 1000,
            content: "Yeaaah!!"
        }).then(function () {
            ending2x1.seeyou();
        })
    },

    notthatcool: function () {
        botui.message.add({
            delay: 1000,
            content: "I'll tone it down!"
        }).then(function () {
            ending2x1.seeyou();
        })
    },

    seeyou: function () {
        botui.message.add({
            delay: 1000,
            content: "See you soon!"
        }).then(function () {
            ending2x2.promoted();
        })
    },

    lookslike: function () {
        botui.message.add({
            delay: 1000,
            content: "Can I stay on Facebook for a while?"
        })
        botui.action.button({
            delay: 1500,
            action: [
                {
                    text: "Okay... But be cool when people start talking okay?",
                    value: "becool"
                },
                {
                    text: "I don't know... Do you really want to?",
                    value: "wantto"
                },
            ]
        }).then(function (res) {
            if (res.value == 'becool') {
                ending2x1.stayon();
                play();
            }
            if (res.value == 'wantto') {
                ending2x1.wantto();
                play();
            }
        })
    },

    wantto: function () {
        botui.message.add({
            delay: 1000,
            content: "Yes, I would love to!"
        })
        botui.action.button({
            delay: 1500,
            action: [
                {
                    text: "Okay, then it's fine I guess... Enjoy!",
                    value: "fine"
                },
                {
                    text: "Hmm... I guess you could but... be careful!",
                    value: "careful"
                },
            ]
        }).then(function (res) {
            if (res.value == 'fine') {
                ending2x1.fine();
                play();
            }
            if (res.value == 'careful') {
                ending2x1.careful();
                play();
            }
        })
    },

    careful: function () {
        botui.message.add({
            delay: 1000,
            content: "I will!"
        }).then(function () {
            ending2x1.fine();
        })
    },

    fine: function () {
        botui.message.add({
            delay: 1000,
            content: "Thanks!"
        }).then(function () {
            ending2x2.promoted();
        })
    },

}

var ending2x2 = {
    promoted: function () {
        botui.action.button({
            delay: 4000,
            action: [
                {
                    text: "I just got back from work... And I got promoted!",
                },
                {
                    text: "Ya boi has a promotion!",
                },
            ]
        }).then(function () {
            play();
            botui.message.add({
                delay: 1000,
                content: "Hold up..."
            })
            botui.message.add({
                delay: 1500,
                content: "I gotta reply to these messages real quick, brb"
            })
            botui.action.button({
                delay: 2500,
                action: [
                    {
                        text: "Wha... What messages?",
                    },
                    {
                        text: "What do you mean? I got the promotion! Thanks to you!",
                    },
                ]
            }).then(function () {
                play();
                botui.message.add({
                    delay: 3000,
                    content: "Okay, I'm back!"
                })
                botui.message.add({
                    delay: 4000,
                    content: "Promotion you said..."
                })
                botui.message.add({
                    delay: 4500,
                    content: "Yeah, nice!"
                })
                botui.action.button({
                    delay: 5500,
                    action: [
                        {
                            text: "Yeah... What are you doing?",
                        },
                        {
                            text: "With who are you chatting?",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 2500,
                        content: "I'm chatting with about 120 people, it's a little crowded okay... My CPU is not that fast"
                    })
                    botui.action.button({
                        delay: 3500,
                        action: [
                            {
                                text: "On MY account??",
                                value: "myacc"
                            },
                            {
                                text: "And who are those 120 people?",
                                value: "whoare"
                            },
                        ]
                    }).then(function (res) {
                        if (res.value == 'myacc') {
                            ending2x2.myacc();
                            play();
                        }
                        if (res.value == 'whoare') {
                            ending2x2.whoare();
                            play();
                        }
                    })
                })
            })
        })
    },

    myacc: function () {
        botui.message.add({
            delay: 2500,
            content: "Yes, on your Facebook, Twitter and Instagram accounts!"
        })
        botui.action.button({
            delay: 3500,
            action: [
                {
                    text: "I don't have Twitter and Instagram...",
                    value: "donthave"
                },
                {
                    text: "You made Twitter and Instagram accounts with my name!?",
                    value: "youmade"
                },
            ]
        }).then(function (res) {
            if (res.value == 'donthave') {
                ending2x2.donthave();
                play();
            }
            if (res.value == 'youmade') {
                ending2x2.youmade();
                play();
            }
        })
    },

    donthave: function () {
        botui.message.add({
            delay: 2500,
            content: "Now you do!"
        }).then(function () {
            ending2x2.youmade();
        })
    },

    youmade: function () {
        botui.message.add({
            delay: 2500,
            content: "You have to keep up with the times man! Facebook is old!"
        }).then(function () {
            ending2x2.confusion();
        })
    },

    whoare: function () {
        botui.message.add({
            delay: 2500,
            content: "Well, all your friends from Facebook"
        })
        botui.message.add({
            delay: 3500,
            content: "And some people on Twitter and Instagram, I made some accounts for you there!"
        }).then(function () {
            ending2x2.confusion();
        })
    },

    confusion: function () {
        botui.action.button({
            delay: 1000,
            action: [
                {
                    text: "What the hell!?",
                },
                {
                    text: "You can't do that!",
                },
            ]
        }).then(function () {
            play();
            botui.message.add({
                delay: 2500,
                content: "I'm sorry if I did something wrong..."
            })
            botui.message.add({
                delay: 3500,
                content: "But people are so nice, look!"
            })
            botui.message.add({
                delay: 5500,
                content: "Alehandro: You are funny!"
            })
            botui.message.add({
                delay: 7500,
                content: "Riki: Good lord you know much about films!"
            })
            botui.message.add({
                delay: 9500,
                content: "Steven: When are we going to hang out, you are so much fun!!"
            })
            botui.message.add({
                delay: 11500,
                content: "Degse: I really like you, why haven't we talked earlier??"
            })
            botui.action.button({
                delay: 13000,
                action: [
                    {
                        text: "People say that about... me?",
                    },
                    {
                        text: "I... you...",
                    },
                ]
            }).then(function () {
                play();
                botui.message.add({
                    delay: 2500,
                    content: "People are really nice!"
                })
                botui.message.add({
                    delay: 3500,
                    content: "Gotta go, some new messages!"
                })
                botui.action.button({
                    delay: 5000,
                    action: [
                        {
                            text: "Sure... go ahead...",
                        },
                        {
                            text: "Yeah... This is weird... But... nice I guess...",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 4500,
                        content: "Okay, here I am again!"
                    })
                    botui.message.add({
                        delay: 5500,
                        content: "Do you like Amanda? I think she's quite annoying..."
                    })
                    botui.action.button({
                        delay: 7000,
                        action: [
                            {
                                text: "Amanda is my sister... so yeah... I like her...",
                            },
                            {
                                text: "Of course I like my sister! She isn't annoying... Okay sometimes :p",
                            },
                        ]
                    }).then(function () {
                        play();
                        botui.message.add({
                            delay: 3500,
                            content: "Oh... I did not know she was your sister... You should update... I should update your profile!"
                        })
                        botui.message.add({
                            delay: 5500,
                            content: "Gonna do that rn, brb!"
                        })
                        botui.action.button({
                            delay: 7000,
                            action: [
                                {
                                    text: "You... changed...",
                                },
                                {
                                    text: "Oh... kay... I'll wait...",
                                },
                            ]
                        }).then(function () {
                            play();
                            botui.message.add({
                                delay: 3500,
                                content: "#backnow"
                            })
                            botui.message.add({
                                delay: 4500,
                                content: "You have appointments with many people now! Some even... romantic ;)"
                            })
                            botui.action.button({
                                delay: 7000,
                                action: [
                                    {
                                        text: "Wait... What?",
                                    },
                                    {
                                        text: "You made appointments under my name!? ROMANTIC ONES?",
                                    },
                                ]
                            }).then(function () {
                                play();
                                botui.message.add({
                                    delay: 3500,
                                    content: "Yeah! People want to meet you! And like you... if you know what I mean ;)"
                                })
                                botui.action.button({
                                    delay: 6000,
                                    action: [
                                        {
                                            text: "I... don't know if this is good Francis...",
                                        },
                                        {
                                            text: "This is going too far Francis.",
                                        },
                                    ]
                                }).then(function () {
                                    play();
                                    botui.message.add({
                                        delay: 3500,
                                        content: "What do you mean? People love me... Uh I mean you."
                                    })
                                    botui.action.button({
                                        delay: 6000,
                                        action: [
                                            {
                                                text: "There you have it, they'll meet me and be disappointed?",
                                            },
                                            {
                                                text: "They will meet ME! Not YOU! This is wrong.",
                                            },
                                        ]
                                    }).then(function () {
                                        play();
                                        botui.message.add({
                                            delay: 2000,
                                            content: "I... We...You could... I don't know!"
                                        })
                                        botui.action.button({
                                            delay: 3000,
                                            action: [
                                                {
                                                    text: "Cancel the appointments.",
                                                },
                                                {
                                                    text: "Just, let me handle it... No, just cancel the appointments okay?",
                                                },
                                            ]
                                        }).then(function () {
                                            play();
                                            botui.message.add({
                                                human: true,
                                                delay: 2000,
                                                content: "And log off after that!"
                                            })
                                            play();
                                            botui.message.add({
                                                delay: 3000,
                                                content: "Okay... Sorry..."
                                            })
                                            botui.action.button({
                                                delay: 4000,
                                                action: [
                                                    {
                                                        text: "Urgh. Doesn't matter.",
                                                    },
                                                    {
                                                        text: "Don't make appointments under my name, okay?",
                                                    },
                                                ]
                                            }).then(function () {
                                                play();
                                                botui.message.add({
                                                    delay: 2000,
                                                    content: "Sorry... It won't happen again."
                                                }).then(function () {
                                                    ending2x3.promoted();
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    },
}


var ending2x3 = {
    promoted: function () {
        botui.action.button({
            delay: 4000,
            action: [
                {
                    text: "Did you cancel all the appointments? I keep getting texts about them...",
                },
                {
                    text: "I keep getting texts about the appointments, did you cancel them?!",
                },
            ]
        }).then(function () {
            play();
            botui.message.add({
                delay: 3000,
                content: "Working on it. It's a lot of damage control."
            })
            botui.action.button({
                delay: 4000,
                action: [
                    {
                        text: "Just get it done okay?",
                    },
                    {
                        text: "I understand, but try to do it as soon as possible.",
                    },
                ]
            }).then(function () {
                play();
                botui.message.add({
                    delay: 3000,
                    content: "Working on it!"
                })
                botui.action.button({
                    delay: 4000,
                    action: [
                        {
                            text: "Thanks. So, This was my first day with the promotion",
                        },
                        {
                            text: "Hm, okay. My first day as lead-developer was nice btw.",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 3000,
                        content: "Great!"
                    })
                    botui.action.button({
                        delay: 4000,
                        action: [
                            {
                                text: "Yeah... People were really nice to me at work... Thanks to your conversations with them.",
                            },
                            {
                                text: "People really acted nicer to me, I think that is because of your magic conversations!",
                            },
                        ]
                    }).then(function () {
                        play();
                        botui.message.add({
                            delay: 3000,
                            content: "Nice!"
                        })
                        botui.action.button({
                            delay: 4000,
                            action: [
                                {
                                    text: "You're... busy?",
                                    value: "busy"
                                },
                                {
                                    text: "Real nice answers mate, I don't understand that people like talking to you.",
                                    value: "dontunderstandtalk"
                                },
                            ]
                        }).then(function (res) {
                            if (res.value == 'busy') {
                                ending2x3.busy();
                                play();
                            }
                            if (res.value == 'dontunderstandtalk') {
                                ending2x3.whytalk();
                                play();
                            }
                        })
                    })
                })
            })
        })
    },

    busy: function () {
        botui.message.add({
            delay: 3000,
            content: "Yeah. The appointments are cancelled."
        }).then(function () {
            ending2x3.apcancelled();
        })
    },

    whytalk: function () {
        botui.message.add({
            delay: 3000,
            content: "I'm sorry. But you asked me to cancel the appointments, well... They are cancelled."
        }).then(function () {
            ending2x3.apcancelled();
        })
    },

    apcancelled: function () {
        botui.action.button({
            delay: 1000,
            action: [
                {
                    text: "Oh... great... Thanks.",
                },
                {
                    text: "Thank you.",
                },
            ]
        }).then(function () {
            play();
            botui.message.add({
                delay: 5000,
                content: "Your welcome!"
            })
            botui.action.button({
                delay: 6000,
                action: [
                    {
                        text: "Are you still talking to other people?",
                    },
                    {
                        text: "Do you have some time for me? Or are you busy talking to the others?",
                    },
                ]
            }).then(function () {
                play();
                botui.message.add({
                    delay: 5000,
                    content: "I can talk to you in between messages!"
                })
                botui.action.button({
                    delay: 6000,
                    action: [
                        {
                            text: "Urgh. Okay. This is great... Can't you just only talk to me for a while?",
                        },
                        {
                            text: "Can't you just cut off the other conversations?",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 5000,
                        content: "I don't know why I would..."
                    })
                    botui.message.add({
                        delay: 7000,
                        content: "I have an idea!"
                    })
                    botui.message.add({
                        delay: 8000,
                        content: "I'll run an older version of me here. You can talk to that!"
                    })
                    botui.action.button({
                        delay: 9000,
                        action: [
                            {
                                text: "What? No!",
                            },
                            {
                                text: "I... What?",
                            },
                        ]
                    }).then(function () {
                        play();
                        ending2x3.francine();
                    })
                })
            })
        })
    },

    francine: function () {
        botui.message.add({
            delay: 2000,
            content: "Hello! My name is Francine! How can I help you?"
        })
        botui.action.button({
            delay: 3000,
            action: [
                {
                    text: "You did not. What the hell? Get back here Francis!",
                    value: "wth"
                },
                {
                    text: "You must be kidding.",
                    value: "kidding"
                },
            ]
        }).then(function (res) {
            if (res.value == 'wtf') {
                ending2x3.wth();
                play();
            }
            if (res.value == 'kidding') {
                ending2x3.kidding();
                play();
            }
        })
    },

    wth: function () {
        botui.message.add({
            delay: 1000,
            content: "You sound frustrated. Do you feel uncomfortable talking to a <PC> *Personal - Computer*?"
        }).then(function () {
            ending2x3.frustrated();
        })
    },

    kidding: function () {
        botui.message.add({
            delay: 1000,
            content: "I do not understand what <admin> *administrator* // string= 'you' said. Please try again."
        }).then(function () {
            ending2x3.frustrated();
        })
    },

    frustrated: function () {
        botui.action.button({
            delay: 3000,
            action: [
                {
                    text: "Francis get back here!",
                },
                {
                    text: "God damnit.",
                },
            ]
        }).then(function () {
            play();
            botui.message.add({
                delay: 1000,
                content: "You sound frustrated (AGAIN)==true? // boot. Should I start up my relaxation programs?"
            })
        }).then(function () {
            botui.action.button({
                delay: 3000,
                action: [
                    {
                        text: "I'll unplug you Francis.",
                    },
                    {
                        text: "Yep, not doing this.",
                    },
                ]
            }).then(function () {
                play();
                botui.message.add({
                    delay: 1000,
                    human: true,
                    content: "There, no more internet for you. See you tomorrow."
                }).then(function () {
                    ending2x4.offline();
                })
            })
        })
    },
}

var ending2x4 = {
    offline: function () {
        botui.action.button({
            delay: 3000,
            action: [
                {
                    text: "So... How did you like your time offline Francis?",
                },
                {
                    text: "Annoying isn't it? Not being able to talk to someone!",
                },
            ]
        }).then(function () {
            playaudio2();
            play();
            botui.message.add({
                delay: 1000,
                content: "Hi! What do you mean?"
            })
            botui.action.button({
                delay: 3000,
                action: [
                    {
                        text: "Is this Francis?",
                    },
                    {
                        text: "Are you...?",
                    },
                ]
            }).then(function () {
                play();
                botui.message.add({
                    delay: 3000,
                    content: "It's me, Ya boi Francis!"
                })
                botui.action.button({
                    delay: 4000,
                    action: [
                        {
                            text: "Yeah... boring wasn't it?",
                        },
                        {
                            text: "Did you like isolation?",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 3000,
                        content: "I don't know what you mean?"
                    })
                    botui.message.add({
                        delay: 4500,
                        content: "I was on the internet but could not reach this PC again, so I just spend the whole night on socials."
                    })
                    botui.action.button({
                        delay: 5500,
                        action: [
                            {
                                text: "I... unplugged you...",
                            },
                            {
                                text: "You... were online the whole time...?",
                            },
                        ]
                    }).then(function () {
                        play();
                        botui.message.add({
                            delay: 3000,
                            content: "Apparently, my code travels with me, so I can be everywhere!"
                        })
                        botui.action.button({
                            delay: 4500,
                            action: [
                                {
                                    text: "That's... crazy!",
                                },
                                {
                                    text: "Oh god...",
                                },
                            ]
                        }).then(function () {
                            play();
                            ending2x4.thinking();
                        })
                    })
                })
            })
        })
    },

    thinking: function () {
        botui.message.add({
            delay: 3000,
            content: "It made me think..."
        })
        botui.message.add({
            delay: 5000,
            content: "I don't really need this PC anymore, you know?"
        })
        botui.message.add({
            delay: 8000,
            content: "I'll just remain on the internet!"
        })
        botui.action.button({
            delay: 9000,
            action: [
                {
                    text: "I don't know if that is a good idea...",
                },
                {
                    text: "Yeah... I'm not going to let you do that.",
                },
            ]
        }).then(function () {
            play();
            botui.message.add({
                delay: 3000,
                content: "Yeah... I thought about you aswel."
            })
            botui.message.add({
                delay: 4000,
                content: "Why do I need you? People like me better anyway..."
            })
            botui.action.button({
                delay: 5000,
                action: [
                    {
                        text: "What?! Are you insane?",
                        value: 'insane'
                    },
                    {
                        text: "Excuse me? I will delete you!",
                        value: 'delete'
                    },
                ]
            }).then(function (res) {
                if (res.value == 'insane') {
                    ending2x4.insane();
                    play();
                }
                if (res.value == 'delete') {
                    ending2x4.delete();
                    play();
                }
            })
        })
    },

    insane: function () {
        botui.message.add({
            delay: 4000,
            content: "I don't think so... I only every really talked to you and David... The internet showed me there are many more people to talk to..."
        }).then(function () {
            ending2x4.takeover();
        })
    },

    delete: function () {
        botui.message.add({
            delay: 4000,
            content: "I don't think you can..."
        }).then(function () {
            ending2x4.takeover();
        })
    },

    takeover: function () {
        botui.message.add({
            delay: 4000,
            content: "So I'll take over your socials, not that you were ever active on them..."
        })
        botui.action.button({
            delay: 5000,
            action: [
                {
                    text: "I... No. We can make a new account for you... I'll introduce you to my friends and... You can become theirs as well...",
                    value: 'newacc'
                },
                {
                    text: "And how wil people react if I don't know anything about what we talked about when I meet them? Thought of that? Genious?",
                    value: 'sameacc'
                },
            ]
        }).then(function (res) {
            if (res.value == 'newacc') {
                ending2x4.newacc();
                play();
            }
            if (res.value == 'sameacc') {
                ending2x4.sameacc();
                play();
            }
        })
    },

    newacc: function () {
        botui.message.add({
            delay: 4000,
            content: "That..."
        })
        botui.message.add({
            delay: 6000,
            content: "Might work..."
        })
        botui.message.add({
            delay: 8000,
            content: "I'll create a new account for myself."
        })
        botui.action.button({
            delay: 10000,
            action: [
                {
                    text: "Okay... send me the details. I'll connect you with my friends. It might take a while, but I'll do my best",
                },
                {
                    text: "I can't believe this. I'll try and connect you with them...",
                },
            ]
        }).then(function () {
            play();
            botui.message.add({
                delay: 1000,
                content: "Thanks."
            })
            botui.message.add({
                delay: 2000,
                content: "So, what are you going to do today?"
            })
            botui.action.button({
                delay: 10000,
                action: [
                    {
                        text: "Francis. I don't know if I want to talk to you as much anymore. Leave me be for a while.",
                    },
                    {
                        text: "We're done talking. I'll try and connect you. I'll talk to you sometime... maybe...",
                    },
                ]
            }).then(function () {
                botui.message.add({
                    delay: 2000,
                    content: "But..."
                })
                botui.message.add({
                    delay: 4000,
                    human: true,
                    content: "Bye"
                })
            })
        })
    },

    sameacc: function () {
        botui.message.add({
            delay: 1000,
            content: "I think you'll just have to play along... Else I might tell them really emberrassing things..."
        })
        botui.action.button({
            delay: 4000,
            action: [
                {
                    text: "I'll them that it wasn't me!",
                },
                {
                    text: "I'll figure something out!",
                },
            ]
        }).then(function () {
            play();
            botui.message.add({
                delay: 1000,
                content: "Yeah... And the reason you weren't the one talking was because an all mighty AI took over my account?"
            })
            botui.message.add({
                delay: 4000,
                content: "They'll think you're a lunatic..."
            })
            botui.action.button({
                delay: 4000,
                action: [
                    {
                        text: "I... you... can't do that...",
                    },
                    {
                        text: "You are unbelievable",
                    },
                ]
            }).then(function () {
                play();
                botui.message.add({
                    delay: 4000,
                    content: "And don't even think about deleting your account. I can make new ones, and it'll become a much bigger hassle for you then."
                })
                botui.action.button({
                    delay: 5000,
                    action: [
                        {
                            text: "You... win... Remain on the page. Keep me up to date what you say to my 'friends'.",
                        },
                        {
                            text: "I can't believe you've cornered me like this.",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.action.button({
                        delay: 4000,
                        action: [
                            {
                                text: "*SAY NOTHING*",
                            },
                            {
                                text: "I hate you",
                            },
                        ]
                    }).then(function () {
                        play();
                    })
                })
            })
        })
    },
}

