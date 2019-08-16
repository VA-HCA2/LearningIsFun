"use strict";
$(function () {
  let urlParams = new URLSearchParams(location.search);
  let CourseId = urlParams.get("CourseId");

  $.getJSON("api/courses/" + CourseId, function (data) {
    let obj;
    obj = data;


    //Table Body

    let details =
      "<tr><td> Course Id:</td><td>" + obj.CourseId + "</td></tr>" + // First Row
      "<tr><td> Details: </td><td>" + obj.Title + "</td></tr>" + // Second Row
      "<tr><td> Category: </td><td>" + obj.Category + "</td></tr>" + // Third Row
      "<tr><td> Location: </td><td>" + obj.Location + "</td></tr>" + // Fourth Row
      "<tr><td> Start Date:</td><td>" + obj.StartDate + "</td></tr>" + // Fifth Row
      "<tr><td> End Date:</td><td>" + obj.EndDate + "</td></tr>" + // Sixth Row
      "<tr><td> Meets:</td><td>" + obj.Meets + "</td></tr>" + // Seventh Row
      "<tr><td> Fee:</td><td>" + obj.Fee + "</td></tr>"; // Eight Row

    $("#detailsTable").append(details);

    // Table for Students
    //Table header
    let studentsHeader = $("<tr><th>Student Name</th><th>Email Address</th><tr>");
    $("#studentsTable").append(studentsHeader);
    // End of table header


    for (let i = 0; i < obj.Students.length; i++) {

      let students = "<tr><td>" + obj.Students[i].StudentName + "</td><td>" + obj.Students[i].Email + "</td></tr>";

      
      $("#studentsTable").append(students);

    }

  }); // end of get JSON

  $("#registerButton").attr("href", "register.html?CourseId=" + CourseId)

  $("#registerButton").on("click", function () {

    document.location.href = "register.html?CourseId=" + CourseId
  })
}); // end of ready fuction
