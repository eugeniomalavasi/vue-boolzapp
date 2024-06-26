const { createApp } = Vue

createApp({
    data() {
        return {
            activeIndex: 0,
            classCheck: false,
            contacts: [
                {
                    name: 'Massimo',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            messageInput: "",
            popUp: false,
            popUpIndex: 0,
            searchInput: "",
            controll: 0,
            statusTxt: "ultimo accesso",
            timeDate: luxon.DateTime.now().setLocale('it').toLocaleString(luxon.DateTime.TIME_SIMPLE),
        }
    }, methods: {
        sendMessage: function () {
            if(this.messageInput !== "") {
                const newMessage = {
                    message: this.messageInput,
                    status: 'sent',
                    date: luxon.DateTime.now().setLocale('it').toLocaleString(luxon.DateTime.DATETIME_SHORT_WITH_SECONDS)
                };
                this.messageInput = "";
                this.controll++; 
                this.contacts[this.activeIndex].messages.push(newMessage);
            } else {
                this.messageInput = "";
                this.controll = 0;
            }
        }, autoAnswer: function () {
            const answArray = ["Mi chiamo Massimo Decimo Meridio, comandante dell'esercito del Nord, generale delle legioni Felix, servo leale dell'unico vero imperatore Marco Aurelio. Padre di un figlio assassinato, marito di una moglie uccisa... e avrò la mia vendetta... in questa vita o nell'altra", 
            "Tutto ebbe inizio con la forgiatura dei grandi Anelli. Tre furono dati agli elfi, gli esseri immortali più saggi e leali di tutti. Sette ai re dei nani, grandi minatori e costruttori di città nelle montagne. E nove, nove Anelli furono dati alla razza degli uomini che più di qualunque cosa desiderano il potere.", 
            "I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot, and you think that of me? No. I am the one who knocks!"];
            const rndNumber = Math.floor(Math.random() * 3);
            if(this.controll > 0) {
            const answMessage = {
                message: answArray[rndNumber],
                status: 'received',
                date: luxon.DateTime.now().setLocale('it').toLocaleString(luxon.DateTime.DATETIME_SHORT_WITH_SECONDS)
            }
            this.contacts[this.activeIndex].messages.push(answMessage)
        }
        }, autoAnswerTimer: function () {
            setTimeout(this.autoAnswer, 1000)
        }, deleteMsg: function (index) {
            if (index > 0) {
                this.contacts[this.activeIndex].messages.splice(index, 1);
            } else {
                this.contacts[this.activeIndex].messages.splice(0, 1);
            }
            console.log(index, this.activeIndex);
            console.log(this.contacts[this.activeIndex].messages);
        }, 
        statusTimer: function() {
            setTimeout(this.writingStatus, 300);
            setTimeout(this.onlineStatus, 1300);
            setTimeout(this.offlineStatus, 2300);
        }, writingStatus: function () {
            this.statusTxt = "sta digitando";
        }, onlineStatus: function () {
            this.statusTxt = "è online";
        }, offlineStatus: function () {
            this.statusTxt = "ultimo accesso";
        }, searchBar: function () {
            this.contacts.forEach(curName => {
                if (curName.name.toLowerCase().includes(this.searchInput.toLowerCase())) {
                    curName.visible = true;
                } else {
                    curName.visible = false;
                }
                console.log(curName);
            });
        }, resetSearchBar: function () {
            this.contacts.forEach(curName => {
                curName.visible = true
            })
        }
    },
}).mount('#app')