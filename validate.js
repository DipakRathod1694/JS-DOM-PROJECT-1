function validate() {
  var name = document._form.name;
  var name1 = document.getElementById("name");
  //   var name1 = name;
  var email = document._form.email;
  var phone = document._form.phone;
  var password = document._form.password;
  var confirmpassword = document._form.confirmpassword;
  var dob = document._form.dob;
  var year = parseInt(dob.value.slice(-4));
  var gender = document._form.gender;
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );
  

  //   for (var i = 0; i < name1.length; i++) {
  //     var flag = 0;
  //     if (name1[i] == " ") {
  //       flag++;
  //     }
  //   }

  if (name.value.length <= 0) {
    alert("Name is required");
    name.focus();
    
    return false;
  }
  //   else if (flag != 1) {
  //     alert("Name is not valid");
  // name.focus();
  //     return false;
  // }
  else if (email.value.length <= 0) {
    alert("Email Id is required");
    email.focus();
    return false;
  } else if (!email.value.match(validRegex)) {
    alert("Email is not valid");
    email.focus();
    return false;
  } else if (phone.value.length <= 0) {
    alert("Phone number is required");
    phone.focus();
    return false;
  } else if (phone.value.length != 10) {
    alert("Phone number is not valid");
    phone.focus();
    return false;
  } else if (password.value.length <= 0) {
    alert("Password is required");
    password.focus();
    return false;
  } else if (password.value.length <= 5) {
    alert("Password must have at least 5 characters");
    password.focus();
    return false;
  } else if (!password.value.match(strongPassword)) {
    alert("Password is not strong");
    password.focus();
    return false;
  } else if (confirmpassword.value.length <= 0) {
    alert("Confirm Password is required");
    confirmpassword.focus();
    return false;
  } else if (confirmpassword.value != password.value) {
    alert("Password must be same");
    confirmpassword.focus();
    return false;
  } else if (dob.value.length <= 0) {
    alert("Date of Birth is required");
    dob.focus();
    return false;
  }
  else if(year>2004){
    alert("Year is not valid");
    dob.focus();
    return false;
  }
  else if (gender.value.length <= 0) {
    alert("Gender is required");
    gender.focus();
    return false;
  }
  else if(gender.value=="male") {
    alert("Males are not allowed");
    gender.focus();
    return false;
  }
  return false;
}
