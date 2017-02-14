const monominos =      [[[1]]];
const dominos =        [
                        [
                            [1, 1], 
                            [0, 0]
                        ]
                    ];

const trominos =       [
                        [
                            [0, 0, 0], 
                            [1, 1, 1],
                            [0, 0, 0]
                        ],
                        [
                            [0, 1, 0], 
                            [1, 1, 0],
                            [0, 0, 0]
                        ]
                    ];

const tetrominos =    [
                        [
                            [0, 0, 0, 0], 
                            [1, 1, 1, 1],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0], 
                            [0, 1, 1, 0],
                            [0, 1, 1, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 0, 0], 
                            [0, 1, 0, 0],
                            [0, 1, 1, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 0, 0], 
                            [0, 1, 0, 0],
                            [1, 1, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 0, 0], 
                            [0, 1, 1, 0],
                            [0, 0, 1, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 0, 0], 
                            [1, 1, 0, 0],
                            [1, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0], 
                            [0, 1, 0, 0],
                            [1, 1, 1, 0],
                            [0, 0, 0, 0]
                        ]
                    ];

const pentominos =    [
                        [
                            [0, 0, 0, 0, 0], 
                            [0, 0, 0, 0, 0],
                            [1, 1, 1, 1, 1],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0], 
                            [0, 0, 1, 0, 0],
                            [0, 0, 1, 1, 0],
                            [0, 0, 1, 1, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0], 
                            [0, 0, 0, 1, 0],
                            [0, 0, 1, 1, 0],
                            [0, 0, 1, 1, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0], 
                            [1, 1, 1, 1, 0],
                            [0, 0, 0, 1, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 1, 0], 
                            [1, 1, 1, 1, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 0, 0, 0], 
                            [1, 1, 1, 0, 0],
                            [0, 0, 1, 0, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 1, 0, 0], 
                            [1, 1, 1, 0, 0],
                            [0, 1, 0, 0, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0], 
                            [1, 1, 1, 0, 0],
                            [0, 0, 1, 1, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 1, 1, 0], 
                            [1, 1, 1, 0, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 1, 0, 0], 
                            [1, 1, 1, 0, 0],
                            [0, 0, 1, 0, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0], 
                            [1, 1, 1, 0, 0],
                            [1, 0, 1, 0, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0], 
                            [1, 1, 1, 0, 0],
                            [0, 0, 1, 0, 0],
                            [0, 0, 1, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0], 
                            [1, 1, 0, 0, 0],
                            [0, 1, 1, 0, 0],
                            [0, 0, 1, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0], 
                            [0, 1, 0, 0, 0],
                            [1, 1, 1, 0, 0],
                            [0, 1, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0], 
                            [1, 1, 1, 1, 0],
                            [0, 0, 1, 0, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 1, 0, 0], 
                            [1, 1, 1, 1, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 1, 0, 0, 0], 
                            [0, 1, 1, 1, 0],
                            [0, 0, 0, 1, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 1, 0], 
                            [0, 1, 1, 1, 0],
                            [0, 1, 0, 0, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ]
                    ];
//not done
const hexominos =      [
                        [
                            [0, 0, 0, 0, 0, 0], 
                            [0, 0, 0, 0, 0, 0],
                            [1, 1, 1, 1, 1, 1],
                            [0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0],
                        ],
                        [
                            [0, 0, 0, 0, 0, 0], 
                            [0, 0, 0, 0, 0, 0],
                            [1, 1, 1, 1, 1, 0],
                            [0, 0, 0, 0, 1, 0],
                            [0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0],
                        ],
                        [
                            [0, 0, 0, 0, 0, 0], 
                            [0, 0, 0, 0, 1, 0],
                            [1, 1, 1, 1, 1, 0],
                            [0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0],
                        ],
                        [
                            [0, 0, 0, 0, 0, 0], 
                            [0, 0, 0, 0, 0, 0],
                            [1, 1, 1, 1, 1, 1],
                            [0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0],
                        ]
                    ];

let boardWidth = 300;
let boardHeight = 600;
let blockSize = 30;
let board = [], boardLayer = [];

const EASY = 700;
const MEDIUM = 500;
const HARD = 300;

let startVisible = true;
let yC = 0, xC = 0;
let pieceQueue = [];
let piece = null;
let placed = true;

let interval = null;

let background = new Image();
background.src = "./assets/bg.png";

window.onload = function() {
    init();

    document.getElementById("start-button").addEventListener('click', function() {
        startVisible = false;
        document.getElementById("start-menu").style.display = "none";
        interval = setInterval(update, EASY);
    }); 


    window.onkeydown = function(e) {
        let code = e.keyCode ? e.keyCode : e.which;
        if (code === 37) { //left key
            xC -= 1;
            yC -= 1;
            update();
        }
        else if (code === 38) { //up key
            piece = rotate(piece);
            yC -= 1;
            update();
        } 
        else if (code === 39) { //right key
            xC += 1;
            yC -= 1;
            update();
        } 
        else if (code === 40) { //down key
            alert('down');
        }
        else if (code == 27) {
            document.getElementById("start-menu").style.display = "flex";
            clearInterval(interval);
            startVisible = true;
        }
    };
    
}

function init() {
    c = document.getElementById("canvas");
    cc = c.getContext("2d");

    boardHeight = document.documentElement.clientHeight * 0.8;
    boardWidth = boardHeight / 2;
    blockSize = boardHeight / 20;
    c.height = boardHeight;
    c.width = boardWidth;

    document.getElementById("start-menu").style.width = boardWidth + "px";
    document.getElementById("start-menu").style.height = boardHeight + "px";

    for(let i=0; i<(boardHeight/blockSize); i++) {
        board[i] = [];
        boardLayer[i] = [];
        for(let j=0; j<(boardWidth/blockSize); j++) {
            board[i][j] = 0;
            boardLayer[i][j] = 0;
        }
    }

    cc.imageSmoothingEnabled = false;
}
function update() {
    cc.drawImage(background, 0, 0, boardWidth, boardHeight); 
    cc.fillStyle = "white";

    while(pieceQueue.length < 3) {
        pieceQueue.push(generatePiece());
    }
    if(placed) {
        piece = pieceQueue.shift();
        placed = false;
    }
    
    draw();
    drawPiece(piece, xC, yC);

    yC += 1;


}
function draw() {
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[i].length; j++) {
            if(board[i][j] == 1) {
                cc.fillRect(j*blockSize, i*blockSize, blockSize, blockSize);
            }
        }
    }
}

function drawPiece(arr, x, y) {
    for(let i=0; i<(boardHeight/blockSize); i++) {
        for(let j=0; j<(boardWidth/blockSize); j++) {
            boardLayer[i][j] = 0;
        }
    }
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            if(arr[i][j] == 1) boardLayer[i + y][j + x] = 1;
        }
    }
    for(let i=0; i<boardLayer.length; i++) {
        for(let j=0; j<boardLayer[i].length; j++) {
            if(boardLayer[i][j] == 1) {
                cc.fillRect(j*blockSize, i*blockSize, blockSize, blockSize);
            }
        }
    }
    console.log(x + ", " + y);
}

function generatePiece() {
    polyminoList = [];

    if(document.getElementById("cb1").checked) polyminoList.push(monominos);
    else if(polyminoList.includes(monominos)) polyminoList.splice(polyminoList.indexOf(monominos),1);
    if(document.getElementById("cb2").checked) polyminoList.push(dominos);
    else if(polyminoList.includes(dominos)) polyminoList.splice(polyminoList.indexOf(dominos),1);
    if(document.getElementById("cb3").checked) polyminoList.push(trominos);
    else if(polyminoList.includes(trominos)) polyminoList.splice(polyminoList.indexOf(trominos),1);
    if(document.getElementById("cb4").checked) polyminoList.push(tetrominos);
    else if(polyminoList.includes(tetrominos)) polyminoList.splice(polyminoList.indexOf(tetrominos),1);
    if(document.getElementById("cb5").checked) polyminoList.push(pentominos);
    else if(polyminoList.includes(pentominos)) polyminoList.splice(polyminoList.indexOf(pentominos),1);
    if(document.getElementById("cb6").checked) polyminoList.push(hexominos);
    else if(polyminoList.includes(hexominos)) polyminoList.splice(polyminoList.indexOf(hexominos),1);

    let polyminoCat = polyminoList[Math.floor(Math.random()*polyminoList.length)];
    let polyminoPiece = polyminoCat[Math.floor(Math.random()*polyminoCat.length)];
    return polyminoPiece;
}   

//Rotate Logic
function reverseRows(matrix) {
  for (i in matrix) {
    matrix[i] = matrix[i].reverse();
  }
}
function transpose(matrix) {
    var n = matrix[0].length;
    var temp;

    for (var i = 0, j = 0; i < n; i++) {
        j = i;
        while (j < n) {
            if (i !== j) {
                temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
            j++;
        }
    }
}
function rotate(matrix) {
    transpose(matrix);
    reverseRows(matrix);
    return matrix;
}



window.onresize = function() {
    location.reload(); 
}
