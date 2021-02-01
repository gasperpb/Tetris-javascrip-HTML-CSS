//Atalhos para facilitar escrita das matrizes
var X = true;
var l = false;

//Criação das pedras do Tetris
var quadrado = [
    //Apenas uma posição
    [
        [X, X],
        [X, X]
    ]
];

var linha = [
    //Horizontal
    [
        [l, l, l, l],
        [X, X, X, X]
    ],

    //Vertical
    [
        [l, X],
        [l, X],
        [l, X],
        [l, X]
    ]
];

var Lesq = [
    //Posição 1
    [
        [l, X, l],
        [l, X, l],
        [l, X, X]
    ],
    //Posição 2
    [
        [X, X, X],
        [X, l, l]
    ],
    //Posição 3
    [
        [l, X, X],
        [l, l, X],
        [l, l, X]
    ],
    //Posição 4
    [
        [l, l, X],
        [X, X, X]
    ]
];

var Ldir = [
    //Posição 1
    [
        [l, X],
        [l, X],
        [X, X]
    ],
    //Posição 2
    [
        [X, X, X],
        [l, l, X]
    ],
    //Posição 3
    [
        [l, X, X],
        [l, X, l],
        [l, X, l]
    ],
    //Posição 4
    [
        [X, l, l],
        [X, X, X]
    ]
];

var Te = [
    //Posição 1
    [
        [l, X, l],
        [X, X, X]
    ],
    //Posição 2
    [
        [l, X],
        [X, X],
        [l, X]
    ],
    //Posição 3
    [
        [X, X, X],
        [l, X, l]
    ],
    //Posição 4
    [
        [l, X, l],
        [l, X, X],
        [l, X, l]
    ]
];

var S1 = [
    //Posição 1
    [
        [l, X, X],
        [X, X, l]
    ],
    //Posição 2
    [
        [l, l, X],
        [l, X, X],
        [l, X, l]
    ]
];

var S2 = [
    //Posição 1
    [
        [X, X, l],
        [l, X, X]
    ],
    //Posição 2
    [
        [X, l],
        [X, X],
        [l, X]
    ]
];

//Cria um array para indexar de forma aleatória uma peça
var todasPedras = [quadrado, linha, Lesq, Ldir, Te, S1, S2];