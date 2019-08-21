//This function show the student the details of the course they selected.
//Author :Vanessa Arce

"use strict";
$(function () {
  let urlParams = new URLSearchParams(location.search);
  let CourseId = urlParams.get("CourseId");

  // Get information with the course Id of the selected course.
  $.getJSON("api/courses/" + CourseId, function (data) {
    let course; // like obj
    course = data;

 // Get the value for each field
  $("#courseid").val(CourseId);
  $("#category").val(course.Category);
  $("#location").val(course.Location);
  $("#startdate").val(course.StartDate);
  $("#enddate").val(course.EndDate);
  $("#meets").val(course.Meets);
  $("#fee").val(course.Fee);


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
