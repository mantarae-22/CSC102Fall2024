// this function will validate the user input
function validateForm(){
    // set up nickname/shortcut to our form values
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var zipCode = document.getElementById("zip").value;

    // create a new string that concatenates first name + " " + last name
    var fullName = firstName + " " + lastName;

    // see what values we are working with
    console.log("first name = " + firstName);
    console.log("last name = " + lastName);
    console.log("zipCode = " + zipCode);
    console.log("full name = " + fullName);

    // check to make sure that the full name is 20 characters or fewer
    if (fullName.length > 20 || fullName.length == 1){
        document.getElementById("loginStatus").innerHTML = "Please enter a valid name that is less than 20 characters";
        //alert("Please enter a valid name that is less than 20 characters");
    }
    else if(zipCode.length != 5){
        document.getElementById("loginStatus").innerHTML = "Please enter a 5 digit zip code";
        //alert("Please enter a 5 digit zip code");
    }
    else{
        document.getElementById("loginStatus").innerHTML = "Welcome, " + fullName + ". The secret word is validation.";
        //alert("Welcome, " + fullName + ". The secret word is validation.");
    }

    // we don't want this page to submit to a server/another page, so prevent that from happening
    return false;
}