var database;
var canvas,playerCount,gameState = 0,form,player,game, allPlayers, distance = 0;
var car1,car2,car3,car4,cars;
function setup(){
    database = firebase.database()
  createCanvas (displayWidth-20, displayHeight-30)  
  game = new Game ()
  game.getState()
  game.start()

 
}

function draw(){
    background("lightgreen")
if(playerCount === 4){
  game.update(1)
}

if(gameState === 1){
  game.play()
}
    

}


