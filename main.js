const monominos =      [[[1]]];
const dominos =        [
						[
							[1, 1]
						]
					];

const trominos =       [
						[
							[0, 0, 0], 
							[1, 1, 1],
							[0, 0, 0]
						],
						[
							[0, 1], 
							[1, 1]
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
let startVisible = playing = true;
let placed = false;

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
	cc.drawImage(background, 0, 0, c.width, c.height); 

	//Canvas overlay scaling
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

	//Generate piece queue & set piece
	while(pieceQueue.length < 3) {
		pieceQueue.push(generatePiece());
	}
	piece = pieceQueue.shift();

	xC = Math.floor(board[0].length/2) - Math.floor(piece[0].length/2);
	yC = 0;

	//Transition start menu out
	document.getElementById("start-button").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
	document.getElementById("start-button").style.boxShadow = "none";
	document.getElementById("canvas").style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";
	document.getElementById("start-menu").style.filter = "blur(20px)";
	document.getElementById("start-menu").style.opacity = "0";
	//document.getElementById("start-menu").style.display = "none";

	//Start game timer
	interval = setInterval(() => update("down"), EASY);
}
function update(dirParam) {
	cc.drawImage(background, 0, 0, c.width, c.height); 
	cc.fillStyle = "white";


	
	

	

	if(placed) {
		piece = pieceQueue.shift();
		pieceQueue.push(generatePiece());
		xC = Math.floor(board[0].length/2) - Math.floor(piece[0].length/2);
		yC = 0;
		placed = false;

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

	move(dirParam);
	updateBoard();
	draw();
	
	
}
function draw() {
	traverseBoard((i,j) => {
		if(board[i][j] != 0) roundRect(cc, j*blockSize + 2, i*blockSize + 2, blockSize - 4, blockSize - 4, 3, true);
	});
}
function move(dirParam) {
	switch(dirParam) {
		case "left":
			for(let i=0; i<board.length; i++) {
				if(board[i].includes(-1)) {
					if(board[i][board[i].indexOf(-1)-1] != 0) {
						xC++;
						break;
					}
				}
			}
			xC--;
			break;
		case "right":
			for(let i=0; i<board.length; i++) {
				if(board[i].includes(-1)) {
					if(board[i][board[i].lastIndexOf(-1)+1] != 0) {
						xC--;
						break;
					}
				}
			}
			xC++;
			break;
		case "up": 
			piece = rotate(piece);
			break;
		case "down":
			for(let i=0; i<board.length; i++) {
				for(let j=0; j<board[i].length; j++) {
					if(board[i][j] == -1 && i == board.length - 1 || board[i][j] == -1 && board[i+1] !== undefined && board[i+1][j] === 1) {
						console.log("doot here");
						placed = true;
						traverseBoard((i,j) => {
							if(board[i][j] == -1) board[i][j] = 1;
						});
						return;
					}
				}
			}
			yC++;
			
			break;
		default:
			alert("something dooted");
			return;
	}    
}

function updateBoard() {
	if(!placed) {
		console.log("path1");
		//Clearing previous piece
		traverseBoard((i,j) => {
			if(board[i][j] == -1) board[i][j] = 0;
		});

		let tempPiece = piece.slice(0);
		//Setting board with piece
		for(let i=0; i<tempPiece.length; i++) {
			if(!tempPiece[0].includes(1)) {
				tempPiece.splice(0, 1);
				i--;
				continue;
			}
			for(let j=0; j<tempPiece[i].length; j++) {
				if(tempPiece[i][j] == 1) {
					board[i+yC][j+xC] = -1;
				}
			}
		}
	}
	else {
		console.log("path2");
		//Set piece to board statically
		traverseBoard((i,j) => {
			if(board[i][j] == -1) board[i][j] = 1;
		});
	}    
}


function resetBoard() {
	board = board.map(layer => layer.fill(0));
}
function traverseBoard(callback) {
	for(let i=0; i<board.length; i++) {
		for(let j=0; j<board[i].length; j++) {
			callback(i,j);
		}
	}
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
function rotate(matrix) {
	let tempMatrix = [];

	for(let j=0; j<matrix[0].length; j++) {
		tempMatrix.push([]);
		for(let i=0; i<matrix.length; i++) {
			tempMatrix[j].push(matrix[matrix.length-1-i][j]);
		}
	}
	return tempMatrix;
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
