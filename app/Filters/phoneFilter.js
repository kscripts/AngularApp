function formatFn(){

return filterFn;
}

function filterFn(input, critieria) {
	var output=input;
	console.log(input);
	console.log(critieria);
	if(critieria){
		if(input && input.length==10){
              var firstThree=input.subString(0,2);
              var secondThree= input.subString(3,5);
              var lastFour= input.subString(6,9);
              return firstThree+"-"+secondThree+"-"+lastFour;
		}
	}

	return output;


	// body...
}
function formatter(){

}

app.filter('phoneFilter',[formatFn]);