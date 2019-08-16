"use strict";

$(function() {
  let objs;
  let coursesObjs;

  $.getJSON("/api/categories", function(data) {
    objs = data;
    // Create my dropdown
    for (let i = 0; i < objs.length; i++) {
      let text = objs[i].Category;
      let value = objs[i].Value;
      let mydropDownOption = $("<option>", {
        value: value,
        text: text
      });
      mydropDownOption.appendTo("#categoriesddl");
    }
  }); // end of get JSON

  // Onchange function
  $("#categoriesddl").change(function() {
    $("#coursesTable").empty();
    $("#coursesHeader").empty();

    $.getJSON("/api/courses/bycategory/" + $("#categoriesddl").val(), function(
      data
    ) {
      coursesObjs = data;
      //Table header
      let coursesHeader = $(
        "<tr><th>Title</th><th>Start Date</th><th>&nbsp;</th><tr>"
      );
      $("#coursesHeader").append(coursesHeader);
      // End of table header

      for (let i = 0; i < coursesObjs.length; i++) {
        //Table Body
        let str =
          "<tr><td>" +
          coursesObjs[i].Title +
          "</td><td>" +
          coursesObjs[i].StartDate +
          "</td><td>" +
          "<a href=details.html?CourseId=" +coursesObjs[i].CourseId +">Details<a>" +"</td></tr>";$("#coursesTable").append(str);
        //End of body table
      }
    }); // end of get JSON
  }); //End of my onchange function
}); // end of ready fuction
