"use strict";

$(function () {
    let objs;
    let coursesObjs;

    $.getJSON("/api/categories", function (data) {
        objs = data;
        // Create my dropdown information from api/categories
        for (let i = 0; i < objs.length; i++) {
            let text = objs[i].Category;
            let value = objs[i].value;
            let mydropDownOption = $("<option>", {
                value: text,
                text: text,
            });
            mydropDownOption.appendTo("#coursesddl");
        }
    }); // end of get JSON

    $("#addBtn").on("click", function () {

        $.post("api/courses", $("#newCourse").serialize(), function (data) {
            window.location.href = "courses.html"
        })
        return false;
    }); // end of on click

});

