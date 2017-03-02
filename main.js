const monominos =   [[[1]]];
const dominos =     [
						[
							[1, 1]
						]
					];

const trominos =    [
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

const tetrominos =  [
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

const pentominos =  [
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
const hexominos =   [
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

let game = (() => {
	const EASY = 700, MEDIUM = 500, HARD = 300;

	let board, pieceQueue, piece, 
	score, placed, blockSize, 
	scalingFactor = 20,

	play = () => {
		//Transition start menu out
		document.getElementById("start-button").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
		document.getElementById("start-button").style.boxShadow = "none";
		document.getElementById("canvas").style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";
		document.getElementById("start-menu").style.filter = "blur(20px)";
		document.getElementById("start-menu").style.opacity = "0";
		//document.getElementById("start-menu").style.display = "none";

		window.addEventListener("keydown", keyInput);

		init();


		//Start game timer
		interval = setInterval(() => {
			update(); 
			piece.down();
		}, EASY);
	},

	init = () => {
		//Init blockSize from scaling
		blockSize = c.height / scalingFactor;

		board = [];
		pieceQueue = [];
		score = 0;
		placed = false;

		//Populate board
		for(let i=0; i<(c.height/blockSize); i++) {
			board[i] = [];
			for(let j=0; j<(c.width/blockSize); j++) {
				board[i][j] = 0;
			}
		}


		//Generate piece queue & set piece
		while(pieceQueue.length < 3) {
			pieceQueue.push(transcode(generatePiece()));
		}
		//Initialize piece object
		piece = {
			pos: pieceQueue.shift(),
			left() {
				for(let i=0; i<this.pos.length; i++) {
					if(this.pos[i][1] <= 0 || board[this.pos[i][0]][this.pos[i][1]-1] == 1) {
						return;
					}
				}
				for(let i=0; i<this.pos.length; i++) {
					this.pos[i][1]--;
				}
				update();

			},
			right() {
				for(let i=0; i<this.pos.length; i++) {
					if(this.pos[i][1] >= board[0].length - 1 || board[this.pos[i][0]][this.pos[i][1]+1] == 1) {
						return;
					}
				}
				for(let i=0; i<this.pos.length; i++) {
					this.pos[i][1]++;
				}
				update();
			},
			down() {
				for(let i=0; i<this.pos.length; i++) {
					if(this.pos[i][0] >= board.length - 1 || board[this.pos[i][0]+1][this.pos[i][1]] == 1 || board[this.pos[i][0]+1][this.pos[i][1]] == undefined) {
						placed = true;
						return;
					}
				}
				for(let i=0; i<this.pos.length; i++) {
					this.pos[i][0]++;
				}
				update()
			},
			up() {

			}
		}
		
	},

	update = () => {
		cc.drawImage(background, 0, 0, c.width, c.height); 
		cc.fillStyle = "white";

		updateBoard();
		draw();

		if(placed) {
			piece.pos = pieceQueue.shift();
			pieceQueue.push(transcode(generatePiece()));
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
	},

	draw = () => {
		traverseBoard((i,j) => {
			if(board[i][j] != 0) roundRect(cc, j*blockSize + 2, i*blockSize + 2, blockSize - 4, blockSize - 4, 3, true);
		});
	},

	updateBoard = () => {
		if(!placed) {
			//Clearing previous piece
			traverseBoard((i,j) => {
				if(board[i][j] == -1) board[i][j] = 0;
			});
			//Setting board with piece
			for(let i=0; i<piece.pos.length; i++) {
				board[piece.pos[i][0]][piece.pos[i][1]] = -1;
			}
		}
		else {
			//Set piece to board statically
			traverseBoard((i,j) => {
				if(board[i][j] == -1) board[i][j] = 1;
			});
		}
	},

	keyInput = (e) => {
		switch(e.keyCode) {
			case 27:
				clearInterval(interval);
				break;
			case 37:
				//left
				piece.left();
				break;
			case 38:
				// up key pressed
				piece.up();
				break;
			case 39:
				// right key pressed
				piece.right();
				break;
			case 40:
				// down key pressed
				piece.down();
				break;  
		}   
	},

	resetBoard = () => {
		board = board.map(layer => layer.fill(0));
	},

	traverseBoard = (callback) => {
		for(let i=0; i<board.length; i++) {
			for(let j=0; j<board[i].length; j++) {
				callback(i,j);
			}
		}
	},

	generatePiece = () => {
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
	},

	transcode = (matrix) => {
		let pieceArray = [];
		for(let i=0; i<matrix.length; i++) {
			for(let j=0; j<matrix[0].length; j++) {
				if(matrix[i][j]) pieceArray.push([i, j]);
			}
		}
		return pieceArray;
	},

	rotate = (matrix) => {
		let tempMatrix = [];

		for(let j=0; j<matrix[0].length; j++) {
			tempMatrix.push([]);
			for(let i=0; i<matrix.length; i++) {
				tempMatrix[j].push(matrix[matrix.length-1-i][j]);
			}
		}
		return tempMatrix;
	},

	roundRect = (ctx,x,y,width,height,radius,fill,stroke) => {
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
	};

	return {
		play: play
	};
})();



let background = new Image();
background.src = "./assets/bg.png";

function canvasInit() {
	//Dynamic canvas scalingFactor
	c.height = document.documentElement.clientHeight * 0.8;
	c.width = c.height / 2;
	cc.imageSmoothingEnabled = false;
	cc.drawImage(background, 0, 0, c.width, c.height); 

	//Canvas overlay scaling
	document.getElementById("start-menu").style.width = c.width + "px";
	document.getElementById("start-menu").style.height = c.height + "px";
}

window.onload = () => {
	c = document.getElementById("canvas");
	cc = c.getContext("2d");
	
	canvasInit();
	document.getElementById("start-button").addEventListener("click", game.play);  
};

window.onresize = () => {
	location.reload(); 
}
