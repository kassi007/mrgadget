
  function validateSignInForm() {
  var $email = document.signinform.email.value;
  var $pass = document.signinform.pass.value;
  var $result = true;
  if ($pass.length < 5) {
    
    document.getElementById('signin-pass-msg').innerHTML = "Password is too short";
    $result = false;
  } else{
    document.getElementById('signin-pass-msg').innerHTML = "";
  }


  return $result;

}



  function validateSignUpForm() {


  var $fname = document.signupform.fname.value;
  var $lname = document.signupform.lname.value;
  var $email = document.signupform.email.value;
  var $pass = document.signupform.pass.value;
  var $cpass = document.signupform.cpass.value;
  var $dob = document.signupform.dob.value;
  var $gender = document.signupform.gender.value;
  var $address = document.signupform.address.value;
  var $result = true;


  if ($fname.length < 3) {
    
    document.getElementById('signup-fname-msg').innerHTML = "First name is too short";
    $result = false;
  } else{
    document.getElementById('signup-fname-msg').innerHTML = "";
  }


  if ($lname.length < 3) {
    
    document.getElementById('signup-lname-msg').innerHTML = "Last name is too short";
    $result = false;
  } else{
    document.getElementById('signup-lname-msg').innerHTML = "";
  }


  if ($pass.length < 5) {
    
    document.getElementById('signup-pass-msg').innerHTML = "Password is too short";
    $result = false;
  } else{
    document.getElementById('signup-pass-msg').innerHTML = "";
  }



  return $result;

}

  function validateSellForm(){


  var $fname = document.sellform.fname.value;
  var $lname = document.sellform.lname.value;
  var $country = document.sellform.country.value;
  var $city = document.sellform.city.value;
  var $company = document.sellform.company.value;  
  var $email = document.sellform.email.value;
  var $pass = document.sellform.pass.value;
  var $cpass = document.sellform.cpass.value;
  var $result = true;


  if ($fname.length < 3) {
    
    document.getElementById('sell-fname-msg').innerHTML = "First name is too short";
    $result = false;
  } else{
    document.getElementById('sell-fname-msg').innerHTML = "";
  }



  if ($lname.length < 3) {
    
    document.getElementById('sell-lname-msg').innerHTML = "Last name is too short";
    $result = false;
  } else{
    document.getElementById('sell-lname-msg').innerHTML = "";
  }

    if ($country.length < 3) {
    
    document.getElementById('sell-country-msg').innerHTML = "Country Name is too short";
    $result = false;
  } else{
    document.getElementById('sell-country-msg').innerHTML = "";
  }

      if ($city.length < 3) {
    
    document.getElementById('sell-city-msg').innerHTML = "City Name is too short";
    $result = false;
  } else{
    document.getElementById('sell-city-msg').innerHTML = "";
  }


  if ($pass.length < 5) {
    
    document.getElementById('sell-pass-msg').innerHTML = "Password is too short";
    $result = false;
  } else{
    document.getElementById('sell-pass-msg').innerHTML = "";
  }

  return $result;


  }


function showCategory(){
  document.getElementById('category_sidebar').style.marginLeft = "0";
  document.getElementById('screen_overlay').style.display = "block";
}


function hideCategory(){
  document.getElementById('category_sidebar').style.marginLeft = "-25%";
  document.getElementById('screen_overlay').style.display = "none";
}



// List View
function listView() {
  var col = document.getElementsByClassName("product-content-col");
  for ( var i = 0; i < col.length; i++) {
    col[i].style.width = "98%";
  }

    document.getElementById("viewButton1").classList.add("active");
    if (document.getElementById("viewButton2").classList.contains("active")) {
      document.getElementById("viewButton2").classList.remove("active");
    }



}

// Grid View
function gridView() {
  var col = document.getElementsByClassName("product-content-col");
  for (var i = 0; i < col.length; i++) {
    
    col[i].style.width = "32%";
  }


  document.getElementById("viewButton2").classList.add("active");
      if (document.getElementById("viewButton1").classList.contains("active")) {
      document.getElementById("viewButton1").classList.remove("active");
    }


}

//validate contact Form
function validateContactForm() {	
	var $fname = document.getElementById("fname").value;
	var $trFname=$fname.trim();
	var $lname = document.getElementById("lname").value;
	var $trLname=$lname.trim();
	var $msg = document.getElementById("message").value;
	var isValid=false;
	
	if ($trFname.length == 0)
	{
		document.getElementById("contact-fname-msg").innerHTML="First name cannot be blank";
		isValid=false;
	}
	else
	{
		isValid=true;
	}	
	
	if ($trLname.length == 0)
	{
		document.getElementById("contact-lname-msg").innerHTML="Last name cannot be blank";
		isValid=false;
	}
	else
	{
		isValid=true;
	}
	
	if ($msg.length < 6)
	{
		document.getElementById("contact-txtarea-msg").innerHTML="Text message too short. Provide more details";
		isValid=false;
	}
	else
	{
		isValid=true;
	}
	return isValid;
}	
	
	
	