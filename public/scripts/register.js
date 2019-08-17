// This page Enrolls students in classes by the ID of the class they selcted in the Course Details page.
// Author: Vanessa Arce
"use strict";
$(function () {

  let urlParams = new URLSearchParams(location.search);
  let CourseId = urlParams.get("CourseId");
  let nameOfStudent = $("#studentname");
  let emailAddress = $("#email");

  // Get the value of the course ID 
  $("#courseId").val(CourseId);

  // On Click Function 
  $("#registerBtn").on("click", function () {
    let courseValue = $("#courseId").val();
    // Validation if no data is entered 
    $("#error").show();
    if (nameOfStudent.val() == "") {
      $("#error").html("Please fill out Name field");
      return false;
    } else if (emailAddress.val() == "") {
      $("#error").html("Please fill out Email-Address field");
      return false;
    }
    else {
      // If data is entered post in the students table  
      $.get("/api/register", $("#newStudent").serialize(), function (data) {
        window.location.href = "details.html?CourseId=" + courseValue;
      });
      return false;
    }

  }); // end of on click
}); // end of ready fuction
