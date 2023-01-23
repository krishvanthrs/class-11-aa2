var weight = [35,38,42,45,43,34,36,41,48,32];
function weights_average()
 {
   var sum = 0;
    for(var i = 0;i<weight.length; i= i+1) 
    { sum = sum + weight[i]; }
     var average_weight =sum/weight.length; 
     console.log(average_weight);
     }

     function setup() {
       createCanvas(400, 400);
        weights_average(); }
       function draw() { 
        background(150); }