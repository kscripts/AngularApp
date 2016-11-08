
function userDataFn(){

	var userData = [
      {
      	id: 1,
      	firstName: "Karthik",
      	lastName: "Komakula",
      	dob: "10-31-1991",
      	country:"India",
      	phone: 9948033007
      },
       {
       	id: 2,
      	firstName: "Kranthi",
      	lastName: "Komakula",
      	dob: "10-31-1993",
      	country:"India",
      	phone: 8686040502
      }, 
      {
      	id:3,
      	firstName: "Jagan",
      	lastName: "Komakula",
      	dob: "11-02-1971",
      	country:"India",
      	phone: 9866767529
      }
	];

	return {

		fetchUserInfo: function(){
		return userData;
	   },
        editUser: function(user){
	   angular.forEach(userData, function(item){
			if(item.id=user.id){
				item=user;
			}
	    });
	}
 }
}
app.factory('userDataFactory',[userDataFn]);