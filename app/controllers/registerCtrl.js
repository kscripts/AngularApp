function registerFn($scope){

	$scope.registerDetails={
		firstName:"",
		lastName:"",
		dob:"",
		country:"",
		state:"",
		city:"",
	    zipcode:"",
		Phone:""
	};
	$scope.registerUser= function(){
        console.log($scope.registerDetails);


	};

	$scope.locations=[{
          country:"india",
          code:"IN",
          state:"telangana",
         },
         {
         country:"United States",
         code:"US"
         }
	];
	
        

}



app.controller('registerCtrl', registerFn);