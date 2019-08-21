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
    // Variable for students 
    let obj;
    obj = data;

    // Get the value for each field
    $("#courseid").val(CourseId);
    $("#category").val(course.Category);
    $("#title").val(course.Title);
    $("#location").val(course.Location);
    $("#startdate").val(course.StartDate);
    $("#enddate").val(course.EndDate);
    $("#meets").val(course.Meets);
    $("#fee").val(course.Fee);

    // ***ADD STUDENTS HERE ***
    // Table for Students
    //Table header
    let studentsHeader = $("<tr><th>Student Name</th><th>Email Address</th></tr>");
    $("#studentsHeader").append(studentsHeader);
    // End of table header

    // Loop  thru the array of students
    for (let i = 0; i < obj.Students.length; i++) {
      // Table body for students
      let students = "<tr><td>" + obj.Students[i].StudentName + "</td><td>" + obj.Students[i].Email + "</td></tr>";
      $("#studentsTable").append(students);
    }
  
    // Hide if there are not registered students
    if (obj.Students.length == "") {
      $("#studentsHide").hide();
    }
  }); // end of get JSON

  $("#editBttn").on("click", function () {
    $.ajax({
      url: '/api/courses',
      data: $("#editCourse").serialize(),
      method: 'PUT',
      success: function () {
        alert("Updated");
        window.location.href = "details.html?CourseId=" + CourseId;
      }
    });
  });
}); // end of ready fuction


