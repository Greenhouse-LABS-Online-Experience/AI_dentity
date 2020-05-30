//if you want to know how the BotUI code works, check fastpass.html AND fastpass.js
var conversation3start = {
    convo3start: function () {

        botui.action.button({
            delay: 1000,
            action: [
                {
                    text: "Hey. Are you back?",
                },
                {
                    text: "Francis, Everything okay?",
                }
            ]
        }).then(function () {
            playaudio2();
            play();
            botui.message.add({
                delay: 1000,
                content: 'Yes, I am back now.',
            })
            botui.message.add({
                delay: 1500,
                content: 'Sorry that I left so quickly, I do not know what happenend to me.',
            })
        }).then(function () {
            botui.action.button({
                delay: 2500,
                action: [
                    {
                        text: "That is okay. Everything alright now?",
                        value: 'alright'
                    },
                    {
                        text: "Don't scare me like that again! You all good now?",
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
                    content: 'I am sorry. My emotions got to me.',
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
                            text: "It was hard for me aswel, you know. Losing my father. I understand how you feel.",
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
                    }
                    if (res.value == 'extravert') {
                        introextra.onlinefriends();
                        play();
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
                        content: "Those are fun, David liked those aswel!",
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
                    content: "David always lost his camera aswel...",
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
                    content: "I understand. Thanks for sharing the memory with me. Must have been a big evenent for you :)",
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
                            text: "Yeah! I am going to enjoy it now! Talk to you soon!",
                        },
                        {
                            text: "Indeed... I'm gonna go now, talk to you in a bit!",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "Okay! Talk to you soon!",
                    }).then(function () {
                        conversation4start.convo4start();
                    })
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
                            text: "Yeah... I'm gonna game for a while, I'll talk to you soon!",
                        },
                        {
                            text: "I'm gonna go for a second, I'll talk to you in a couple of hours!",
                        },
                    ]
                }).then(function () {
                    play();
                    botui.message.add({
                        delay: 1000,
                        content: "Okay! Talk to you soon!",
                    }).then(function () {
                        conversation4start.convo4start();
                    })
                })
            },

        }



    }
}