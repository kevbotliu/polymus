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

let blockSize;
let board = [];

const EASY = 700;
const MEDIUM = 500;
const HARD = 300;

let scalingFactor = 20;

let xC = yC = 0;
let startVisible = placed = initial = true;

let pieceQueue = [];
let piece;

let score = 0;

let background = new Image();
background.src = "./assets/bg.png";

window.onload = function() {
    init();

    window.addEventListener("keydown", keyInput);
    document.getElementById("start-button").addEventListener("click", start); 
}
function keyInput(e) {
    switch(e.keyCode) {
        case 27:
            clearInterval(interval);
            break;
        case 37:
            //left
            update("left");
            break;
        case 38:
            // up key pressed
            update("up");
            break;
        case 39:
            // right key pressed
            update("right");
            break;
        case 40:
            // down key pressed
            update("down");
            break;  
    }   
}
function init() {
    c = document.getElementById("canvas");
    cc = c.getContext("2d");

    //Dynamic canvas scaling
    c.height = document.documentElement.clientHeight * 0.8;
    c.width = c.height / 2;
    blockSize = c.height / scalingFactor;
    cc.imageSmoothingEnabled = false;

    //Canvas overlay scaling
    document.getElementById("bg-image").style.height = (c.height + 40) + "px";
    document.getElementById("bg-image").style.width = (c.width + 40) + "px";
    document.getElementById("start-menu").style.width = c.width + "px";
    document.getElementById("start-menu").style.height = c.height + "px";

    //Populate board
    for(let i=0; i<(c.height/blockSize); i++) {
        board[i] = [];
        for(let j=0; j<(c.width/blockSize); j++) {
            board[i][j] = 0;
        }
    }
}
function start() {
    startVisible = false;

    //Transition start menu out
    document.getElementById("start-button").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    document.getElementById("start-button").style.boxShadow = "none";
    document.getElementById("canvas").style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";
    document.getElementById("start-menu").style.filter = "blur(20px)";
    document.getElementById("start-menu").style.opacity = "0";
    //document.getElementById("start-menu").style.display = "none";

    //Start game timer
    interval = setInterval(function(){update("down")}, EASY);
}
function update(dirParam) {
    cc.drawImage(background, 0, 0, c.width, c.height); 
    cc.fillStyle = "white";

    while(pieceQueue.length < 3) {
        pieceQueue.push(generatePiece());
    }
    
    if(placed) {
        piece = pieceQueue.shift();
        xC = Math.floor(board[0].length/2) - Math.floor(piece[0].length/2);
        yC = 0;
        placed = false;
        initial = true;

        for(let i=0; i<board.length; i++) {
            let count = 0;
            for(let j=0; j<board[i].length; j++) {
                if(board[i][j] == 1) count++;
                if(count == board[i].length) {
                    let list = [];
                    for(let k=0; k<(c.width/blockSize); k++) {
                        list.push(0);
                    }
                    board.splice(i, 1);
                    board.unshift(list);
                    score++;
                    document.getElementById("score").innerHTML = score;
                }
            }
        }    
    }
    
    //console.log(dirParam);
    move(dirParam);
    draw();
}
function draw() {
    
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[i].length; j++) {
            if(board[i][j] != 0) {
                roundRect(cc, j*blockSize + 2, i*blockSize + 2, blockSize - 4, blockSize - 4, 3, true);
            }
        }
    }
    
}
function move(dirParam) {
    switch(dirParam) {
        case "left":
            xC--;
            break;
        case "right":
            xC++;
            break;
        case "up": 
            piece = rotate(piece);
            break;
        case "down":
            if(initial) initial = false;
            else yC++;
            break;
        default:
            alert("something dooted");
            return;
    }

    let tempPiece = piece.slice(0);
       //Trim rows
    for(let i=0; i<tempPiece.length; i++) {
    	if(!tempPiece[i].includes(1)) {
    		tempPiece.splice(i, 1);
    		i--;
    	}
    }
    //Trim cols
    for(let j=0; j<tempPiece[0].length; j++) {
    	let foundCol = false;
    	for(let i=0; i<tempPiece.length; i++) {
    		if(tempPiece[i][j] == 1) foundCol = true;
    	}
    	if(!foundCol) {
    		for(let i=0; i<tempPiece.length; i++) {
    			tempPiece[i].splice(j, 1);
    		}
    		j--;
    	}
    }

    for(let i=0; i<tempPiece.length; i++) {
    	for(let j=0; j<tempPiece[i].length; j++) {
    		if(tempPiece[i][j] == 1) {
    			switch(dirParam) {
                    case "left":
                        if(j + xC < 0 || board[i + yC][j + xC] == 1) {
                            xC++;
                        }
                        break;
                    case "right":
                        if(j + xC >= board[0].length || board[i + yC][j + xC] == 1) {
                            xC--;
                        }
                        break;
                    case "down":
                        if(i + yC >= board.length || board[i + yC][j + xC] == 1) {
                            yC--;
                            placed = true;
                        }
                        break;
                }
    		}
    	}
    }
    
    if(!placed) {
    	//Clearing previous piece
        for(let i=0; i<board.length; i++) {
            for(let j=0; j<board[i].length; j++) {
                if(board[i][j] == -1) {
                    board[i][j] = 0;    
                    cc.clearRect(j, i, blockSize, blockSize);                
                }
            }
        }
        //Setting board with tempPiece
	    for(let i=0; i<tempPiece.length; i++) {
	    	for(let j=0; j<tempPiece[i].length; j++) {
	    		if(tempPiece[i][j] == 1) {
	    			board[i + yC][j + xC] = -1;
	    		}
	    	}
	    }
    }
    else {
    	//Set piece to board statically
        for(let i=0; i<board.length; i++) {
            for(let j=0; j<board[i].length; j++) {
                if(board[i][j] == -1) {
                    board[i][j] = 1;              
                }
            }
        }
    }    
    
}


//Rotate Logic
function rotate(matrix) {
	/*
	console.log("BEFORE");
    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[i].length; j++) {
            console.log(i + ',' + j + " = " + matrix[i][j]);
        }
    }
    */
    let tempMatrix = [];

    for(let j=0; j<matrix[0].length; j++) {
    	tempMatrix.push([]);
    	for(let i=0; i<matrix.length; i++) {
    		tempMatrix[j].push(matrix[matrix.length-1-i][j]);
    	}
    }
    /*
    console.log("AFTER");
    for(let i=0; i<tempMatrix.length; i++) {
        for(let j=0; j<tempMatrix[i].length; j++) {
            console.log(i + ',' + j + " = " + tempMatrix[i][j]);
        }
    }
	*/
    return tempMatrix;
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
function roundRect(ctx,x,y,width,height,radius,fill,stroke) {
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
