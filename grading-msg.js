window.onload = function() {
    if(window.location.href.indexOf("bloc") > -1) {
        console.log("Grading extension is running");
        // grab the HTML element that has the students name in it
        var studentNameContainer = document.getElementsByClassName('mentor-review-header');

        // get the text
        var studentNameSentence = studentNameContainer[0].innerText;
        // split the text
        var splitString = studentNameSentence.split(" ");

        // grab the name!
        var studentName = splitString[2];

        // grading message goes here
        var gradingMessage = "Hi " + studentName + "! \n\nLauren from the grading team here.\n\nIf you're still having trouble or have questions about the above, please don’t hesitate to [reach out for help on Slack.](https://www.bloc.io/resources/getting-unstuck) \n\nThanks, Lauren";

        // get textzarea
        var submissionTextarea = document.getElementById('comment-box');

        // set value of text area with student name
        submissionTextarea.value = gradingMessage;
    }

    // rawgit.com url magic
    if(window.location.href.indexOf("rawgit") > -1) {
        console.log("rawgit js");
        let urlProdInput = document.querySelector("#url-prod");

        let urlPasted = document.querySelector("#url");

        var changeURL = function () {
            document.location.href = urlProdInput.value;
        }

        urlPasted.addEventListener("input", function() {
            // needed to use setTimeout because the prodURL does not populate right away
            setTimeout(changeURL, 200);
        });
    }

};
