var conversation4start = {
    convo4start: function () {


        botui.action.button({
            delay: 1000,
            action: [
                {
                    text: "Hey. I'm back!",
                    value: "back"
                },
                {
                    text: "Hey, are you there?",
                    value: "there"
                }
            ]
        }).then(function (res) {
            if (res.value == 'back') {
                feeling.back();
                play();
            }
            if (res.value == 'there') {
                feeling.there();
                play();
            }
        })

        var feeling = {
            back: function () {
                botui.message.add({
                    delay: 1000,
                    content: 'Hey! How are you?',
                }).then(function () {
                    feeling.feelingchoice();
                })
            },

            there: function () {
                botui.message.add({
                    delay: 1000,
                    content: 'Yes I am! How are you?',
                }).then(function () {
                    feeling.feelingchoice();
                })
            },

            feelingchoice: function () {
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "I'm doing great!",
                            value: "great"
                        },
                        {
                            text: "I'm fine, thanks",
                            value: "fine"
                        },
                        {
                            text: "Meh, have felt better",
                            value: "meh"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'great') {
                        feeling.great();
                        play();
                    }
                    if (res.value == 'fine') {
                        feeling.fine();
                        play();
                    }
                    if (res.value == 'meh') {
                        feeling.meh();
                        play();
                    }
                })
            },

            great: function () {
                botui.message.add({
                    delay: 1000,
                    content: "That's great to hear!",
                }).then(function () {
                    doingtoday.doingchoice();
                })
            },

            fine: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Good, keep it that way!",
                }).then(function () {
                    doingtoday.doingchoice();
                })
            },

            meh: function () {
                botui.message.add({
                    delay: 1000,
                    content: "When have you felt better?",
                }).then(function () {
                    feeling.whenbetter();
                })
            },

            whenbetter: function () {
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "No, not like that. It's more like an expression",
                            value: "serious"
                        },
                        {
                            text: "Uh, I don't know. When I had a new pack of Ben & Jerrys? :p",
                            value: "funny"
                        },
                    ]
                }).then(function (res) {
                    if (res.value == 'serious') {
                        feeling.serious();
                        play();
                    }
                    if (res.value == 'funny') {
                        feeling.funny();
                        play();
                    }
                })
            },

            serious: function () {
                botui.message.add({
                    delay: 1000,
                    content: "Aha...",
                }).then(function () {
                    doingtoday.doingchoice();
                })
            },

            funny: function () {
                botui.message.add({
                    delay: 1000,
                    content: "That new flavour, Frozen Yoghurt Peace Pop though... YUM!",
                }).then(function () {
                    doingtoday.doingchoice();
                })
            },
        }

        var doingtoday = {
            doingchoice: function () {
                botui.message.add({
                    delay: 1000,
                    content: "What are you going to do today?",
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
            }
        }

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
                        human: true,
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
                    moreaboutinternet.lookinto();
                })
            },

            safe: function () {
                botui.message.add({
                    delay: 1000,
                    content: "I can handle myself, I promise!",
                }).then(function () {
                    moreaboutinternet.lookinto();
                })
            },

            lookinto: function () {
                botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            text: "Alright, I'll look into it",
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