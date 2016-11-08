function userCtrlFn($scope){

	$scope.users=[
      {
      	firstName: "Karthik",
      	lastName: "Komakula",
      	dob: "10-31-1991",
      	country:"India"
      },
       {
      	firstName: "Kranthi",
      	lastName: "Komakula",
      	dob: "10-31-1993",
      	country:"India"
      }, 
      {
      	firstName: "Jagan",
      	lastName: "Komakula",
      	dob: "11-02-1971",
      	country:"India"
      }
	];

}



app.controller('userCtrl', ['$scope',userCtrlFn]);

