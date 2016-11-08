
function userDataFn(){

	var userData = [
      {
      	firstName: "Karthik",
      	lastName: "Komakula",
      	dob: "10-31-1991",
      	country:"India",
      	phone: 9948033007
      },
       {
      	firstName: "Kranthi",
      	lastName: "Komakula",
      	dob: "10-31-1993",
      	country:"India",
      	phone: 8686040502
      }, 
      {
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
	   }
	}
}

app.factory('userDataFactory',[userDataFn]);