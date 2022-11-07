$(document).ready(function () {
  $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function (e) {
    // var UrlValue = e;
    // console.log(e.length);
    for (var i = 0; i < e.length; i++) {
      var form = $("<form>").attr("id", "quiz-form");
      var label = $("<label>").attr("id", "question_label");
      label.html("Q " + e[i].id + " " + e[i].question);
      form.append(label);
      $(".quiz_main_body").append(form);
      for (var j = 0; j < e[i].options.length; j++) {
        var optionDiv = $("<div>").attr("id", "options_div");
        var input = $("<input>")
          .attr("type", "radio")
          .attr("name", "option" + e[i].id)
          .attr("value", j + 1)
          .attr("class", "option" + e[i].id);
        optionDiv.append(input);
        form.append(optionDiv);
        var span = $("<span>").attr("id", "options").html(e[i].options[j]);
        optionDiv.append(span);
      }
      // console.log(option);
      var hr = $("<hr>");
      form.append(hr);
    }

    $("#submit_btn").click(function (pi) {
      pi.preventDefault();
      // console.log("hello");
      var ansSelected = [];
      var answer = [];

      for (var k = 0; k < e.length; k++) {
        var opt = "option" + e[k].id;
        ansSelected.push($("input[name= " + opt + "]:checked").val());
        answer.push(e[k].answer);
        // console.log($("input[name= " + opt + "]:checked").val());

        // console.log(ansSelected[k]);
        // console.log("answer " + answer[k]);
        if (ansSelected[k] == answer[k]) {
          // console.log("hello");
          $("input[name= " + opt + "]:checked")
            .parent()
            .append("<i class='fas fa-check'></i>");
        } else {
          // console.log("no hello");
          $("input[name= " + opt + "]:checked")
            .parent()
            .append("<i class='fas fa-times'></i>");
        }
        var count = 0;
        for (var m = 0; m < ansSelected.length; m++) {
          for (var m = 0; m < answer.length; m++) {
            if (ansSelected[m] == answer[m]) {
              count++;
            }
          }
        }
        console.log(count);
        $("#totalScore").html(count + " /5");
      }
    });
  });
});
