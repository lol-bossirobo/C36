class Form {

constructor() {











}


display() {

    var title = createElement('h1');
    title.html("Car-Racer");
    title.position(615,100);
    var input1 = createInput('nameHere');
    input1.position(615,250);
    
    var button1 = createButton('Click to Play')
    button1.position(800,500)
    


    button1.mousePressed (function () {

        input1.hide();
        button1.hide();
        var name = input1.value();
        plCount +=1;
        
        player.update(name);
        player.updateCount(plCount);
        var greet = createElement('h1');
        greet.html("Hello " + name);
        greet.position(615,400);


    });




}












}