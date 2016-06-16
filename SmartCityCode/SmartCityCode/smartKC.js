var burnedcal = 0;

function burnedPlus(){
	burnedcal++;
	console.log(parseInt(burnedcal));
	
}

function move(d) {
		
	  var elem;  
	  var width = 0;
	  var id = setInterval(frame, 10);
	  var goal;
	  var current;
	  
	 if(d == 0){
			elem = document.getElementById("myBar");  
			goal = document.getElementById("calgoal").value;
			current = document.getElementById("burnedgoal").value;
			current =  (current / goal) *100;
	}
	else if(d == 1){
			elem = document.getElementById("myBar1");  
			goal = document.getElementById("walkgoal").value;
			current = document.getElementById("walk").value;
			current =  (current / goal) *100;
			
		}
		
	  
	  function frame() {
		if (width >= 100) {
		  clearInterval(id);
		}else if(width >= current){
			clearInterval(id);
		} 
		else {
		  width++; 
		  elem.style.width = width + '%'; 
		  if (d == 0){
			document.getElementById("demo").innerHTML = width * 1  + '%';
		 }
		 if(d == 1){
			document.getElementById("demo1").innerHTML = width * 1  + '%';
		 }
		
		}
	  }
	}