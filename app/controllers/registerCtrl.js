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
        console.log($scope.locations);


	};

	$scope.locations=[{
          country:"india",
          code:"IN",
         },
         {
         country:"United States",
         code:"US"
         }
	];
	
	$scope.dropdownChange= function(){
        console.log($scope.selectedLocation);

	}

	// $scope.states=[{
 //          state:"Andhra Pradesh",
 //          city:"vijaywada",
 //         },
 //         {
 //         state:"telangana",
 //         city:"warangal"
 //         }
	// ];
	
        

}



app.controller('registerCtrl', registerFn);