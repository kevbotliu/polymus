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

const EASY = 700;
const MEDIUM = 500;
const HARD = 300;

let startVisible = true;
let yC = 0;
let xC = 0;
let pieceQueue = [];
let piece = null;
let placed = true;

let interval = null;

let background = new Image();
background.src = "./assets/bg.png";

window.onload = function() {
    c = document.getElementById("canvas");
    cc = c.getContext("2d");

    boardHeight = document.documentElement.clientHeight * 0.8;
    boardWidth = boardHeight / 2;
    blockSize = boardHeight / 20;
    c.height = boardHeight;
    c.width = boardWidth;

    document.getElementById("start-menu").style.width = boardWidth + "px";
    document.getElementById("start-menu").style.height = boardHeight + "px";

    cc.imageSmoothingEnabled = false;


    document.getElementById("start-button").addEventListener('click', function() {
        startVisible = false;
        document.getElementById("start-menu").style.display = "none";

        
        


        interval = setInterval(update, EASY);
    }); 


    window.onkeydown = function(e) {
        let code = e.keyCode ? e.keyCode : e.which;
        if (code === 37) { //left key
            xC -= blockSize;
            yC -= blockSize;
            update();
        }
        else if (code === 38) { //up key
            alert('up');
        } 
        else if (code === 39) { //right key
            xC += blockSize;
            yC -= blockSize;
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
    

    drawPiece(piece, xC, yC);

    yC+=blockSize;

}

function drawPiece(arr, x, y) {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            if(arr[i][j] == 1) {
                cc.fillRect(x + j*blockSize, y + i*blockSize, blockSize, blockSize);
            }
        }
    }
    console.log(piece);
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

window.onresize = function() {
    location.reload(); 
}
