function mean() {
	document.getElementsByClassName("media_screen")[0].classList.toggle("responsive");
}

var i = 0;

/*function sizeNo(var i){
	var sizeNo=0;
	if(i==sizeNo)
		return true;
	return false;
}*/

function small_size(){
	 document.getElementById("body").style.fontSize = "medium";
	 
	 if(i==3){
	 document.getElementById("info_top").classList.toggle("x_large_top");
	 document.getElementById("info_middle").classList.toggle("x_large_middle");
	 document.getElementById("info_end").classList.toggle("x_large_end");
	 i=0;
	}

	else if(i==2){
		document.getElementById("info_top").classList.toggle("large_top");
		i=0;
	}
}

function medium_size(){
	 document.getElementById("body").style.fontSize = "large";
	 
	 if(i==0){
	 document.getElementById("info_top").classList.toggle("large_top");
	 i=2;
	}
	
	else if(i==3){
	document.getElementById("info_top").classList.toggle("x_large_top");
	 document.getElementById("info_top").classList.toggle("large_top");
	 document.getElementById("info_middle").classList.toggle("x_large_middle");
	 document.getElementById("info_end").classList.toggle("x_large_end");
	 i=2;
	}
}

function large_size(){
	 document.getElementById("body").style.fontSize = "x-large";
	 if(i==0){
	 i=3;
	 document.getElementById("info_top").classList.toggle("x_large_top");
	 document.getElementById("info_middle").classList.toggle("x_large_middle");
	 document.getElementById("info_end").classList.toggle("x_large_end");
	}
	else if(i==2){
		i=3;
		document.getElementById("info_top").classList.toggle("large_top");
		 document.getElementById("info_top").classList.toggle("x_large_top");
	 document.getElementById("info_middle").classList.toggle("x_large_middle")
	  document.getElementById("info_end").classList.toggle("x_large_end");
	}

}
