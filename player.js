class Player {

constructor () {



}

getCount() {

    var plref = database.ref("playerCount");
    plref.on("value", function (data){
        plCount = data.val();
    })

}

updateCount(count){
  database.ref('/').update({
      playerCount: count
    
    }
  )
 
}

update(name){
  var playerIndex= "player"+plCount;
  database.ref(playerIndex).set({
     name:name
  })

}







}