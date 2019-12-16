// this code is make the feedback form have a alert
function validate1() {


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
  if (document.myForm.feedback.value == "")
  {
    alert ("Please enter your feedback");
    document.myForm.feedback.focus();
    return false;
  }

  return (true);
}
