const preguntes = {

    esports: [
        {
            id: 1,
            pregunta: "Amb quants jugadors comença un equip de futbol al camp?",
            opcions: ["9", "10", "11", "12"],
            correcta: 2
        },
        {
            id: 2,
            pregunta: "Quants punts val un triple en bàsquet?",
            opcions: ["3", "2", "1", "4"],
            correcta: 0
        },
        {
            id: 3,
            pregunta: "En quin esport es disputa Wimbledon?",
            opcions: ["Golf", "Futbol", "Bàsquet", "Tennis"],
            correcta: 3
        },
        {
            id: 4,
            pregunta: "Quants anells té el símbol dels Jocs Olímpics?",
            opcions: ["4", "5", "6", "7"],
            correcta: 1
        },
        {
            id: 5,
            pregunta: "De quin color és el mallot del líder del Tour de França?",
            opcions: ["Verd", "Vermell", "Groc", "Blau"],
            correcta: 2
        },
        {
            id: 6,
            pregunta: "Quants jugadors té un equip de voleibol a la pista?",
            opcions: ["4", "5", "7", "6"],
            correcta: 3
        },
        {
            id: 7,
            pregunta: "Quina distància té una marató oficial?",
            opcions: ["42,195 km", "40 km", "35 km", "50 km"],
            correcta: 0
        },
        {
            id: 8,
            pregunta: "Quin esport es practica en una piscina?",
            opcions: ["Rugbi", "Natació", "Ciclisme", "Handbol"],
            correcta: 1
        },
        {
            id: 9,
            pregunta: "En quin esport es fa servir un disc anomenat puck?",
            opcions: ["Beisbol", "Golf", "Tennis", "Hoquei sobre gel"],
            correcta: 3
        },
        {
            id: 10,
            pregunta: "Quants tornejos de Grand Slam hi ha cada any en tennis?",
            opcions: ["4", "3", "5", "6"],
            correcta: 0
        }
    ],


    geografia: [
        {
            id: 11,
            pregunta: "Quina és la capital de França?",
            opcions: ["Roma", "París", "Berlín", "Madrid"],
            correcta: 1
        },
        {
            id: 12,
            pregunta: "Quin és l'oceà més gran del món?",
            opcions: ["Atlàntic", "Índic", "Àrtic", "Pacífic"],
            correcta: 3
        },
        {
            id: 13,
            pregunta: "En quin continent es troba Egipte?",
            opcions: ["Àfrica", "Europa", "Àsia", "Amèrica"],
            correcta: 0
        },
        {
            id: 14,
            pregunta: "Quina és la capital d'Austràlia?",
            opcions: ["Sydney", "Melbourne", "Canberra", "Perth"],
            correcta: 2
        },
        {
            id: 15,
            pregunta: "Quin és el país més gran del món per superfície?",
            opcions: ["Canadà", "Rússia", "Xina", "Brasil"],
            correcta: 1
        },
        {
            id: 16,
            pregunta: "Quin riu passa per la ciutat de Londres?",
            opcions: ["Sena", "Danubi", "Rin", "Tàmesi"],
            correcta: 3
        },
        {
            id: 17,
            pregunta: "Quina és la muntanya més alta del món sobre el nivell del mar?",
            opcions: ["Everest", "K2", "Mont Blanc", "Kilimanjaro"],
            correcta: 0
        },
        {
            id: 18,
            pregunta: "En quin país es troba la ciutat de Venècia?",
            opcions: ["Grècia", "França", "Itàlia", "Portugal"],
            correcta: 2
        },
        {
            id: 19,
            pregunta: "Quin desert es troba al nord d'Àfrica?",
            opcions: ["Gobi", "Sàhara", "Atacama", "Kalahari"],
            correcta: 1
        },
        {
            id: 20,
            pregunta: "Quina és la capital del Japó?",
            opcions: ["Kyoto", "Osaka", "Hiroshima", "Tòquio"],
            correcta: 3
        }
    ],



    historia: [
        {
            id: 21,
            pregunta: "En quin any va arribar Cristòfor Colom a Amèrica?",
            opcions: ["1492", "1510", "1453", "1500"],
            correcta: 0
        },
        {
            id: 22,
            pregunta: "Quina civilització va construir les piràmides de Gizeh?",
            opcions: ["Romana", "Grega", "Egípcia", "Maia"],
            correcta: 2
        },
        {
            id: 23,
            pregunta: "En quin any va acabar la Segona Guerra Mundial?",
            opcions: ["1939", "1945", "1950", "1942"],
            correcta: 1
        },
        {
            id: 24,
            pregunta: "Qui va ser el primer emperador romà?",
            opcions: ["Neró", "Juli Cèsar", "Trajà", "August"],
            correcta: 3
        },
        {
            id: 25,
            pregunta: "En quin país es va iniciar la Revolució Industrial?",
            opcions: ["Gran Bretanya", "França", "Alemanya", "Itàlia"],
            correcta: 0
        },
        {
            id: 26,
            pregunta: "Quin mur va caure l'any 1989?",
            opcions: ["Mur d'Adrià", "Muralla Xinesa", "Mur de Berlín", "Mur de les Lamentacions"],
            correcta: 2
        },
        {
            id: 27,
            pregunta: "Qui va ser el primer ésser humà que va trepitjar la Lluna?",
            opcions: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
            correcta: 1
        },
        {
            id: 28,
            pregunta: "En quin any va començar la Revolució Francesa?",
            opcions: ["1804", "1776", "1815", "1789"],
            correcta: 3
        },
        {
            id: 29,
            pregunta: "Quina ciutat romana va quedar sepultada pel Vesuvi l'any 79?",
            opcions: ["Pompeia", "Atenes", "Roma", "Cartago"],
            correcta: 0
        },
        {
            id: 30,
            pregunta: "Qui va introduir la impremta de tipus mòbils metàl·lics a Europa al segle XV?",
            opcions: ["Galileu", "Leonardo da Vinci", "Johannes Gutenberg", "Isaac Newton"],
            correcta: 2
        }
    ],



    ciencia: [
        {
            id: 31,
            pregunta: "Quin planeta és conegut com el planeta vermell?",
            opcions: ["Venus", "Mart", "Júpiter", "Mercuri"],
            correcta: 1
        },
        {
            id: 32,
            pregunta: "Quin gas absorbeixen les plantes durant la fotosíntesi?",
            opcions: ["Oxigen", "Nitrogen", "Heli", "Diòxid de carboni"],
            correcta: 3
        },
        {
            id: 33,
            pregunta: "Quin és el símbol químic de l'aigua?",
            opcions: ["H2O", "CO2", "O2", "NaCl"],
            correcta: 0
        },
        {
            id: 34,
            pregunta: "Quants ossos té habitualment l'esquelet humà adult?",
            opcions: ["180", "250", "206", "150"],
            correcta: 2
        },
        {
            id: 35,
            pregunta: "Quin és l'animal terrestre més ràpid?",
            opcions: ["Lleó", "Guepard", "Cavall", "Tigre"],
            correcta: 1
        },
        {
            id: 36,
            pregunta: "Quin és el planeta més gran del sistema solar?",
            opcions: ["Saturn", "Neptú", "Terra", "Júpiter"],
            correcta: 3
        },
        {
            id: 37,
            pregunta: "Quin òrgan bombeja la sang pel cos humà?",
            opcions: ["Cor", "Pulmó", "Fetge", "Ronyó"],
            correcta: 0
        },
        {
            id: 38,
            pregunta: "A quina temperatura es congela l'aigua pura a pressió atmosfèrica normal?",
            opcions: ["10 °C", "-10 °C", "0 °C", "5 °C"],
            correcta: 2
        },
        {
            id: 39,
            pregunta: "Quin és el mamífer més gran del món?",
            opcions: ["Elefant africà", "Balena blava", "Girafa", "Orca"],
            correcta: 1
        },
        {
            id: 40,
            pregunta: "Quina força ens manté sobre la superfície de la Terra?",
            opcions: ["Magnetisme", "Fricció", "Electricitat", "Gravetat"],
            correcta: 3
        }
    ],


    cultura: []
};
