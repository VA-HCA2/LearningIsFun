"use strict";
$(function () {
  let urlParams = new URLSearchParams(location.search);
  let CourseId = urlParams.get("CourseId");
  let studentName = urlParams.get("studentName");
  let emailAddress = urlParams.get("email");


  // Get the value for each field
  $("#courseid").val(CourseId);
  $("#studentname").val(studentName);
  $("#email").val(emailAddress);


  $("#unregisterBtn").on("click", function () {
    $.post('/api/unregister', $("#deleteStudent").serialize(), function (data) {

      window.location.href = "details.html?CourseId=" +CourseId;
      
    })

  });

}); // end of ready fuction


