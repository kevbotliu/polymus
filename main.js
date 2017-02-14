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
                            [1, 1],
                            [1, 1]
                        ],
                        [
                            [1, 0, 0],
                            [1, 1, 1],
                            [0, 0, 0]
                        ],
                        [
                            [0, 0, 1], 
                            [1, 1, 1],
                            [0, 0, 0]
                        ],
                        [
                            [0, 1, 1], 
                            [1, 1, 0],
                            [0, 0, 0]
                        ],
                        [
                            [1, 1, 0], 
                            [0, 1, 1],
                            [0, 0, 0]
                        ],
                        [
                            [0, 1, 0], 
                            [1, 1, 1],
                            [0, 0, 0]
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
                            [1, 1, 0],
                            [1, 1, 0],
                            [0, 1, 0]
                        ],
                        [
                            [1, 1, 0],
                            [1, 1, 0],
                            [1, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0], 
                            [1, 0, 0, 0],
                            [1, 1, 1, 1],
                            [0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0], 
                            [1, 1, 1, 1],
                            [1, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        [
                            [1, 0, 0], 
                            [1, 1, 1],
                            [0, 1, 0]
                        ],
                        [
                            [0, 0, 1], 
                            [1, 1, 1],
                            [0, 1, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0], 
                            [0, 0, 0, 0, 0],
                            [1, 1, 1, 0, 0],
                            [0, 0, 1, 1, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0], 
                            [0, 0, 0, 0, 0],
                            [0, 0, 1, 1, 0],
                            [1, 1, 1, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 1, 0, 0], 
                            [0, 0, 1, 0, 0],
                            [0, 1, 1, 1, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [1, 0, 1],
                            [1, 1, 1],
                            [0, 0, 0]
                        ],
                        [
                            [0, 0, 1],
                            [0, 0, 1],
                            [1, 1, 1]
                        ],
                        [
                            [1, 0, 0],
                            [1, 1, 0],
                            [0, 1, 1]
                        ],
                        [ 
                            [0, 1, 0],
                            [1, 1, 1],
                            [0, 1, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0], 
                            [0, 0, 1, 0, 0],
                            [0, 1, 1, 1, 1],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0], 
                            [0, 0, 1, 0, 0],
                            [1, 1, 1, 1, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ],
                        [
                            [1, 0, 0],
                            [1, 1, 1],
                            [0, 0, 1]
                        ],
                        [
                            [0, 0, 1],
                            [1, 1, 1],
                            [1, 0, 0]
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
let score = 0;

let leftBound, rightBound, topBound, bottomBound;

let interval = null;

let background = new Image();
background.src = "./assets/bg.png";

window.onload = function() {
    init();

    document.getElementById("start-button").addEventListener('click', function() {
        startVisible = false;
        document.getElementById("start-button").style.background = "grey";
        document.getElementById("start-button").style.boxShadow = "none";
        document.getElementById("canvas").style.boxShadow = "0 0 50px rgba(0, 0, 0, 0.5)";
        document.getElementById("start-menu").style.filter = "blur(20px)";
        document.getElementById("start-menu").style.opacity = "0";
        //document.getElementById("start-menu").style.display = "none";
        interval = setInterval(update, HARD);
    }); 


    window.onkeydown = function(e) {
        let code = e.keyCode ? e.keyCode : e.which;
        if (code === 37) { //left key
            if(drawBoardLayer(piece, xC - 1, yC)) {
                xC--;
                yC--;
                update();
            }
        }
        else if (code === 38) { //up key
            piece = rotate(piece);
            yC--;
            update();
        } 
        else if (code === 39) { //right key
            if(drawBoardLayer(piece, xC + 1, yC)) {
                xC++;
                yC--;
                update();
            }
        } 
        else if (code === 40) { //down key
            yC = board.length - bottomBound - 1;
            update();
        }
        else if (code == 27) {
            //document.getElementById("start-menu").style.display = "flex";
            document.getElementById("start-menu").style.opacity = "1";
            document.getElementById("start-menu").style.filter = "blur(5px)";
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

    document.getElementById("bg-image").style.height = (boardHeight + 40) + "px";
    document.getElementById("bg-image").style.width = (boardWidth + 40) + "px";

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

        for(let i=0; i<board.length; i++) {
            let count = 0;
            for(let j=0; j<board[i].length; j++) {
                if(board[i][j] == 1) count++;
                if(count == board[i].length) {
                    let list = [];
                    for(let k=0; k<(boardWidth/blockSize); k++) {
                        list.push(0);
                    }
                    board.splice(i, 1);
                    board.unshift(list);
                    score++;
                }
            }
        }    
    }

    

    
    draw();
    drawBoardLayer(piece, xC, yC);

    reset(boardLayer);
    yC++;


}
function draw() {
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[i].length; j++) {
            if(board[i][j] == 1) {
                roundRect(cc, j*blockSize + 2, i*blockSize + 2, blockSize - 4, blockSize - 4, 3, "white", true)
            }
        }
    }
}

function drawBoardLayer(arr, x, y) {
    reset(boardLayer);

    //Collision handling
    leftBound = null, rightBound = null, topBound = null, bottomBound = null;

    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            if(arr[i][j] == 1) {
                if(leftBound == null || j < leftBound) leftBound = j;
                if(rightBound == null || j > rightBound) rightBound = j;
                if(topBound == null || i < topBound) topBound = i;
                if(bottomBound == null || i > bottomBound) bottomBound = i;
            }
        }
    }
    if((x + leftBound) < 0 || (x + rightBound) >= boardLayer[0].length) return false;


    //Piece rendering
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            if(arr[i][j] == 1) {
                if(board[i+y][j+x] == 1) {
                    placed = true;
                    drawBoardLayer(arr, x, y-1);
                    xC = 0;
                    yC = 0;
                    return true;
                }
                else boardLayer[i+y][j+x] = 1;
            }
        }
    }

    if(y + bottomBound == boardLayer.length - 1 || placed) {
        for(let i=0; i<boardLayer.length; i++) {
            for(let j=0; j<boardLayer[i].length; j++) {
                if(boardLayer[i][j] == 1) {
                    board[i][j] = boardLayer[i][j];
                }
            }
        }
        placed = true;
        xC = 0;
        yC = 0;
        return true;
    }

    for(let i=0; i<boardLayer.length; i++) {
        for(let j=0; j<boardLayer[i].length; j++) {
            if(boardLayer[i][j] == 1) {
                roundRect(cc, (j*blockSize + 2), (i*blockSize + 2), (blockSize - 4), (blockSize - 4), 3, "white", true);
                //cc.fillRect((j*blockSize + 3), (i*blockSize + 3), (blockSize - 3), (blockSize - 3));
            }
        }
    }
    
    console.log(x + ", " + y);
    return true;
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

function reset(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            arr[i][j] = 0;
        }
    }
}

function roundRect(ctx,x,y,width,height,radius,fill,stroke) {

    ctx.imageSmoothingEnabled = false;
    ctx.beginPath();

    // draw top and top right corner
    ctx.moveTo(x+radius,y);
    ctx.arcTo(x+width,y,x+width,y+radius,radius);

    // draw right side and bottom right corner
    ctx.arcTo(x+width,y+height,x+width-radius,y+height,radius); 

    // draw bottom and bottom left corner
    ctx.arcTo(x,y+height,x,y+height-radius,radius);

    // draw left and top left corner
    ctx.arcTo(x,y,x+radius,y,radius);

    if(fill){
    ctx.fill();
    }
    if(stroke){
    ctx.stroke();
    }
}


window.onresize = function() {
    location.reload(); 
}
