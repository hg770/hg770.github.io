const answers = [document.querySelector(".answer1"), document.querySelector(".answer2"), document.querySelector(".answer3"), document.querySelector(".answer4"), document.querySelector(".answer5")]
const questions = [document.querySelector(".question1"), document.querySelector(".question2"), document.querySelector(".question3"), document.querySelector(".question4"), document.querySelector(".question5")]
const arrows = [document.querySelector(".arrow1"), document.querySelector(".arrow2"), document.querySelector(".arrow3"), document.querySelector(".arrow4"), document.querySelector(".arrow5")]
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

for (let i = 0; i < 5; i++) {
    questions[i].addEventListener("click", () => {
        if (answers[i].classList.contains("hidden")) {
            for (let j = 0; j < 5; j++) {
                if (!answers[j].classList.contains("hidden")) {
                    answers[j].classList.add("hidden")
                    answers[j].classList.remove("unhidden")
                    arrows[j].classList.remove("flipped")
                    questions[j].style.fontWeight = "400"
                }
            }
            arrows[i].classList.add("flipped")
            questions[i].style.fontWeight = "700"
            answers[i].classList.add("unhidden")
            answers[i].classList.remove("hidden")
        } else {
            answers[i].classList.add("hidden")
            answers[i].classList.remove("unhidden")
            arrows[i].classList.remove("flipped")
            questions[i].style.fontWeight = "400"
        }
    })
}