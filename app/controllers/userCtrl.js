function userCtrlFn($scope,userDataFactory){

	$scope.users = userDataFactory.fetchUserInfo(); 

}



app.controller('userCtrl', ['$scope','userDataFactory',userCtrlFn]);

