function bounceOff(){
    if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
        && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2  && 
        movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
        && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
         movingRect.shapeColor = rgb(255,80,60);
         fixedRect.shapeColor = rgb(255,80,60);
      }
    
      
    
    
    
      else {
        fixedRect.shapeColor = "green";
        movingRect.shapeColor = "green";
      }
}