// this code is make the login page form have a alert on it 
function validate() {


  if (document.myForm.EMail.value == "")
  {
    alert("Please enter your Email!");
    document.myForm.EMail.focus();
    return false;
  }

  var emailID = document.myForm.EMail.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");

  if (atpos < 1 || (dotpos - atpos < 2)) {
    alert ("Please enter a valid email!")
    document.myForm.EMail.focus();
    return false;
  }

  if (document.myForm.password.value == "")
  {
    alert ("Please enter your password!");
    document.myForm.password.focus();
    return false;
  }
  if (document.myForm.confirmpassword.value == "")
  {
    alert ("Please enter your Confirm password!");
    document.myForm.password.focus();
    return false;
  }
  if (document.myForm.confirmpassword.value != document.myForm.password.value )
  {
    alert ("Please enter your match password!");
    document.myForm.password.focus();
    return false;
  }
  return (true);
}
