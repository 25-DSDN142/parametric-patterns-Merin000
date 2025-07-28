//your parameter variables go here!




function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(GRID_WALLPAPER); // Use grid mode, not develop mode
  pWallpaper.output_mode(DEVELOP_GLYPH); 
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false);

  // Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255, 220, 220); // pink
}

function drawDetailedGrid() {
  stroke(200);
  noFill();
  rect(0, 0, 200, 200);  // Tile border

  stroke(150);
  // Center lines
  line(100, 0, 100, 200);
  line(0, 100, 200, 100);

  // Quarter lines vertical
  line(50, 0, 50, 200);
  line(150, 0, 150, 200);

  // Quarter lines horizontal
  line(0, 50, 200, 50);
  line(0, 150, 200, 150);

  // Halfway lines between center and quarter (optional)
  stroke(180);
  line(25, 0, 25, 200);
  line(75, 0, 75, 200);
  line(125, 0, 125, 200);
  line(175, 0, 175, 200);

  line(0, 25, 200, 25);
  line(0, 75, 200, 75);
  line(0, 125, 200, 125);
  line(0, 175, 200, 175);

  // Crosshair at center
  stroke(100);
  line(95, 100, 105, 100);
  line(100, 95, 100, 105);

  // Labels
  noStroke();
  fill(0);
  textSize(3);      
  textAlign(LEFT, TOP);
  text('(0,0)', 2, 2);          
  text('(100,0)', 90, 2);       
  text('(200,0)', 180, 2);      
  text('(0,100)', 2, 90);       
  text('(100,100)', 90, 90);    
  text('(200,100)', 170, 90);   
  text('(0,200)', 2, 180);      
  text('(100,200)', 90, 180);   
  text('(200,200)', 170, 180);  
}

function drawButterflyWings(){
   // wings
   noFill();
   stroke(58, 5, 25);
   strokeWeight(0.8);
 
   //top left wing
   beginShape();
   vertex(100, 100);
   bezierVertex(30, 60, 40, 20, 90, 60);
   endShape(CLOSE);
 
   // top right wing 
   beginShape();
   vertex(100, 100);
   bezierVertex(160, 60, 160, 20, 110, 60);
   endShape(CLOSE);
 
   // bottom left wing 
   beginShape();
   vertex(100, 100);
   bezierVertex(50, 120, 50, 170, 85, 145);
   endShape(CLOSE);
 
   // bottom right wing 
   beginShape();
   vertex(100, 100);
   bezierVertex(150, 120, 150, 170, 115, 145);
   endShape(CLOSE);
}


function my_symbol() {
  //drawDetailedGrid();


//branches
 stroke(167, 101, 69);
 strokeWeight(2);
 line (15,200,15,120);
 line (50,200,50,90); 
 line (80,200,80,120); 
 line (110,200,110,120);
 line (170,200,170,100); 
 line (190,200,190,120); 

 noStroke();
 circle (50,85,10);
 circle (55,81,10);
 circle (45,81,10);
 circle (50,77,10);
 fill(255, 223, 136);
 circle (50,81.5,6);

 fill(250);
 circle(15,115,10);
 circle(20,110,10);
 circle(10,110,10);
 circle (15,105,10);
 fill(255, 223, 136);
 circle (15,110,6);

 fill(250);
 circle (170,95,10);
 circle (170,104,10); 
 circle (175,100,10);
 circle (165,100,10);
 fill(255, 223, 136);
 circle (170,100,6);

 fill(250);
 circle(190,117,10);
 circle(195,113,10);
 circle(185,113,10);
 circle(190,107,10);
 fill(255, 223, 136);
 circle (190,113,6);



  // wings
  fill(200, 100, 150);
  stroke(200,100,150);
  strokeWeight(10);

  //top left wing
  beginShape();
  vertex(100, 100);
  bezierVertex(30, 60, 40, 20, 90, 60);
  endShape(CLOSE);

  // top right wing 
  beginShape();
  vertex(100, 100);
  bezierVertex(160, 60, 160, 20, 110, 60);
  endShape(CLOSE);

  // bottom left wing 
  beginShape();
  vertex(100, 100);
  bezierVertex(50, 120, 50, 170, 85, 145);
  endShape(CLOSE);

  // bottom right wing 
  beginShape();
  vertex(100, 100);
  bezierVertex(150, 120, 150, 170, 115, 145);
  endShape(CLOSE);

 // wings
  fill(200, 100, 150);
  stroke(200,100,150);
  strokeWeight(5);

  //top left wing
  beginShape();
  vertex(100, 100);
  bezierVertex(30, 60, 40, 20, 90, 60);
  endShape(CLOSE);

  // top right wing 
  beginShape();
  vertex(100, 100);
  bezierVertex(160, 60, 160, 20, 110, 60);
  endShape(CLOSE);

  // bottom left wing 
  beginShape();
  vertex(100, 100);
  bezierVertex(50, 120, 50, 170, 85, 145);
  endShape(CLOSE);

  // bottom right wing 
  beginShape();
  vertex(100, 100);
  bezierVertex(150, 120, 150, 170, 115, 145);
  endShape(CLOSE);


 // left antenna
  stroke(50);
  strokeWeight(0.6);
  noFill();
  bezier(98, 65, 90, 50, 85, 40, 88, 35);
  noStroke();
  fill(50);
  ellipse(88, 35, 2, 2);  // circle at tip

  // right antenna
  stroke(50);
  strokeWeight(0.6);
  noFill();
  bezier(102, 65, 110, 50, 115, 40, 112, 35);
  noStroke();
  fill(50);
  ellipse(112, 35, 2, 2); // circle at tip

  drawButterflyWings();

  //body
  noStroke();
  fill(50);
  ellipse(100, 110, 12, 40);

  fill(60);
  ellipse(100, 86, 14, 22);

  fill(80);
  ellipse(100, 70, 12, 12);

  //ground
  fill(94, 147, 108);
  rect(0,196,200,5);



  

  






  
  
  
  

  


}