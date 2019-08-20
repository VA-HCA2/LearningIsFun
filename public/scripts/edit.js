//This function show the student the details of the course they selected.
//Author :Vanessa Arce

"use strict";
$(function () {
  let urlParams = new URLSearchParams(location.search);
  let CourseId = urlParams.get("CourseId");

  // Get information with the course Id of the selected course.
  $.getJSON("api/courses/" + CourseId, function (data) {
    let obj;
    obj = data;

 // Get the value of the course ID 
  $("#courseid").val(CourseId);
  $("#category").val(category);

    

  // ***ADD STUDENTS HERE ***
  }); // end of get JSON

  $("#editBttn").on("click", function () 
  {
        $.ajax({
        url: '/api/courses', 
    
        data: $("#courseInfo").serialize(),
        method: 'PUT', // method is any HTTP method
        success: function() {
        alert("Working");
        document.location.href = "courses.html?" + "instr=" + $.urlParam('instr');
        }
        });

  });
}); // end of ready fuction
