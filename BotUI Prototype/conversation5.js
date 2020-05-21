var conversation5start = {
    convo5start: function () {

        botui.action.button({
            delay: 1000,
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
            }
            if (res.value == 'connected') {
                connected.connected();
                play();
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
                            text: "You can go on the interent now!",
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
                    })
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
                    conversation6start.convo6start();
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
                    conversation6start.convo6start();
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
                    conversation6start.convo6start();
                })
            }

        }


    }
}