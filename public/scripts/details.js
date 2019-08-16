"use strict";
$(function() {
  let urlParams = new URLSearchParams(location.search);
  let CourseId = urlParams.get("CourseId");

  $.getJSON("api/courses/"+CourseId, function(data) {
    let objs;
    objs = data;

   
        //Table Body

        let details =
          "<tr><td> Course Id:</td><td>" +objs.CourseId +"</td></tr>" + // First Row
          "<tr><td> Details: </td><td>" +objs.Title +"</td></tr>" + // Second Row
          "<tr><td> Category: </td><td>" +objs.Category +"</td></tr>" + // Third Row
          "<tr><td> Location: </td><td>" +objs.Location +"</td></tr>"+ // Fourth Row
          "<tr><td> Start Date:</td><td>" +objs.StartDate +"</td></tr>"+ // Fifth Row
          "<tr><td> End Date:</td><td>"+objs.EndDate + "</td></tr>"+ // Fifth Row
          "<tr><td> Meets:</td><td>"+objs.Meets + "</td></tr>"+ // Fifth Row
          "<tr><td> Fee:</td><td>" +objs.Fee +"</td></tr>"; // Fifth Row

        $("#detailsTable").append(details);
        //End of body table
  }); // end of get JSON
}); // end of ready fuction
