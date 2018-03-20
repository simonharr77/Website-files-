var yoff = 4.0;
let apiKey = "64fe6ea46cffc94ae0a802b17d832833";
let jsondata = [];
let spotID = 1322;//initial spotID
let getHeights;
//draw function to call the menu a select amount of times
let getMenuSelection;
let getMenuSelectionCheck = 0;

function getData(data) {
  jsondata = data;
  //console.log(jsondata);

  getHeights = jsondata[0].swell.absMinBreakingHeight;
  //console.log(getHeights);
}

function setup(){
  //console.log("Set Up Runs");
  createCanvas(1280, 720);

  runJSON();

  background(255,255,255);
  textSize(18);
  fill(255);


}
//function for calling the API
function runJSON(){
  loadJSON ("http://magicseaweed.com/api/64fe6ea46cffc94ae0a802b17d832833/forecast/?spot_id="+spotID+"&fields=swell.absMinBreakingHeight",getData, 'jsonp');
}

function draw(){

  background(153,255,255);
//selecting the html menu
  getMenuSelection = document.getElementById("menu1").value;
// menu check to stop it re loading over and over
  if (getMenuSelectionCheck != getMenuSelection){
    console.log("change");
    if (getMenuSelection == 1){
      spotID == 1322;
      loadJSON ("http://magicseaweed.com/api/64fe6ea46cffc94ae0a802b17d832833/forecast/?spot_id=1322&fields=swell.absMinBreakingHeight",getData, 'jsonp');
      //console.log(1000);
    }
    if (getMenuSelection == 2){
      spotID == 10;
      loadJSON ("http://magicseaweed.com/api/64fe6ea46cffc94ae0a802b17d832833/forecast/?spot_id=10&fields=swell.absMinBreakingHeight",getData, 'jsonp');
      //console.log(2000);
    }
    getMenuSelectionCheck = getMenuSelection;
  }

  //We are going to draw a polygon out of the wave points
  beginShape();

  //var xoff = 1;       // Option #1: 2D Noise
  var xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (var x = 0; x <= 1380; x += 60) {
    // Calculate a y value according to noise, map to
    // Option #1: 2D Noise
    //var y = map(noise(xoff, yoff), 0, 1, 50,400);

    // Option #2: 1D Noise
    var y = map(noise(xoff), 0, 3, 50, getHeights*350);


    //console.log(y);

    // Set the vertex
  vertex(x, y);
  //  curveVertex(x,y)
  
    // Increment x dimension for noise
    xoff += 0.2;
  }
  //  increment y dimension for noise
  yoff += 0.02;
  vertex(width, height);
  fill(0,0,204);
  vertex(0, height);
  endShape(OPEN);

  textSize(30);
  //text that shows the swell dependant on the height
  text("Max Swell Height:  " + getHeights+" ft", 0,30);

}
