const questions = document.querySelectorAll(".question")

questions.forEach(function (qiestion) {
const btn = qiestion.querySelector(".question-btn")
btn.addEventListener("click", function(){

   
    questions.forEach(function (item) {
      if (item !== qiestion) {
        item.classList.remove("show-text");
      }
    });
    qiestion.classList.toggle("show-text")
})
})
