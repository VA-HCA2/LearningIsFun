// This page Enrolls students in classes by the ID of the class they selcted in the Course Details page.
// Author: Vanessa Arce
"use strict";
$(function () {

  let urlParams = new URLSearchParams(location.search);
  let CourseId = urlParams.get("CourseId");
  let pattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

  // Get the value of the course ID 
  $("#courseId").val(CourseId);

  // On Click Function 
  $("#registerBtn").on("click", function () {
    let courseValue = $("#courseId").val();
    let nameOfStudent = $("#studentname").val();
    let emailAddress = $("#email").val();
    // Validation if no data is entered 
    $("#error").show();
    if (nameOfStudent.trim() == "") {
      $("#error").html("Please fill out Name field");
      return false;
    } else if (!pattern.test(emailAddress)) {
      $("#error").html("Please fill out Email-Address field");
      return false;
    }
    else {
      // If data is entered post in the students table  
      $.post("/api/register", $("#newStudent").serialize(), function (data) {
        window.location.href = "details.html?CourseId=" + courseValue;
      })
        .fail(function () {
          alert("error");
        });
      return false;
    }

  }); // end of on click
}); // end of ready fuction
