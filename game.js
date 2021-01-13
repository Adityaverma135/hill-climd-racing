class Game {
  constructor(){}

  getstate(){
    var gamestate=database.ref('gamestate')
    gamestate.on('value',function(data){
      gamestate=data.val();
    })
  }
  updatestate(state){
    database.ref('/').update({
      gamestate:state
    })
  }

  async start(){
    
    if (gamestate===0){        
      textAlign(CENTER)
      background(bgimg)
      text("Tap space to start",displayWidth/2,displayHeight/2+200)
      player=new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      player.getcount()
    }
      
}
    play(){
      Player.getPlayerInfo();
      player.getcart();
      game.getstate();
    }
}