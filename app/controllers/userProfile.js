function editprofileFn($scope,userDataFactory){

	$scope.users = userDataFactory.fetchUserInfo(); 

	$scope.edit = function(item){

		userDataFactory.editUser(item);

			}
			
		
	

}



app.controller('editProfileCtrl', ['$scope','userDataFactory',editprofileFn]);

