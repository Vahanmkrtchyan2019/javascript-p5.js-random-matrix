var setup = 20;
var stayd = 30;
var matrix = [];
	
	function setup() {
    createCanvas(600,600);
    background('#acacac');
   }

    function draw() {
    for (var y = 0; y < setup; y++){
		matrix[y] = [];
		for (var x = 0; x < stayd; x++){
				matrix[y][x] = Math.round(random(0,2));
				if(matrix[y][x]==1){
					fill(0,255,0);
					rect(y*setup,x*setup,setup,setup);
				}
					else if (matrix[y][x]==2) {

							fill(255, 1, 7);
					rect(y*setup,x*setup,setup,setup);				

					console.log(matrix);
					}
		  }
		}

		  
	
  
	}