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

    //Table Body

    let details =
      "<tr><td class='font-weight-bold'> Course Id:</td><td>" +
      obj.CourseId + "</td></tr>" + // First Row
      "<tr><td class='font-weight-bold'> Details: </td><td>" +
      obj.Title +"</td></tr>" + // Second Row
      "<tr><td class='font-weight-bold'> Category: </td><td>" +
      obj.Category +"</td></tr>" + // Third Row
      "<tr><td class='font-weight-bold'> Location: </td><td>" +
      obj.Location +"</td></tr>" + // Fourth Row
      "<tr><td class='font-weight-bold'> Start Date:</td><td>" +
      obj.StartDate +"</td></tr>" + // Fifth Row
      "<tr><td class='font-weight-bold'> End Date:</td><td>" +
      obj.EndDate +"</td></tr>" + // Sixth Row
      "<tr><td class='font-weight-bold'> Meets:</td><td>" +
      obj.Meets +"</td></tr>" + // Seventh Row
      "<tr><td class='font-weight-bold'> Fee:</td><td>" +
      obj.Fee +"</td></tr>"; // Eight Row

    $("#detailsTable").append(details);

    // Table for Students

    //Table header
    let studentsHeader = $("<tr><th>Student Name</th><th>Email Address</th></tr>");
    $("#studentsHeader").append(studentsHeader);
    // End of table header

    // Loop  thru the array of students
    for (let i = 0; i < obj.Students.length; i++) 
    {
      // Table body for students
      let students ="<tr><td>" +obj.Students[i].StudentName +"</td><td>" +obj.Students[i].Email +"</td></tr>";
      $("#studentsTable").append(students);
    }

    // Hide if there are not registered students
    if (obj.Students.length == "")
    {
      $("#studentsHide").hide();
    }
  }); // end of get JSON

  $("#registerButton").attr("href", "register.html?CourseId=" + CourseId);

  $("#registerButton").on("click", function () 
  {
    document.location.href = "register.html?CourseId=" + CourseId;
  });
}); // end of ready fuction
