let root = document.querySelector("section");

let nextBtn = document.createElement("button");
nextBtn.innerText = "Next Question";
nextBtn.classList.add("buttons");

let scoreBtn = document.createElement("button");
scoreBtn.innerText = "Total Scores";
scoreBtn.classList.add("buttons");

class Question {
  constructor(title, options, correctIndex) {
    this.title = title;
    this.options = options;
    this.correctIndex = correctIndex;
  }
  isCorrect(ans) {
    return ans == this.options[this.correctIndex];
  }
  get CorrectAnswer() {
    return this.options[this.correctIndex];
  }
}

class Quiz {
  constructor(questns = [], score = 0) {
    this.questns = questns;
    this.score = score;
    this.activeIndex = 0;
  }
  addQue(title, options, correctIndex) {
    let ques = new Question(title, options, correctIndex);
    this.questns.push(ques);
  }
  nextQues() {
    if (this.activeIndex !== this.questns.length - 1) {
      this.activeIndex++;
      this.createUI();
    } else {
      this.createUI();
    }
  }
  scores() {
    this.score = this.score + 1;
  }
  showButton() {
    if (this.activeIndex == this.questns.length - 1) {
      nextBtn.classList.add("none");
      scoreBtn.classList.remove("none");
    } else {
      nextBtn.classList.remove("none");
      scoreBtn.classList.add("none");
    }
  }

  createUI() {
    root.innerHTML = "";

    let activeQues = this.questns[this.activeIndex];
    let h2 = document.createElement("h2");
    h2.innerText = `${this.activeIndex + 1}.${activeQues.title}`;
    let form = document.createElement("form");
    let buttons = document.createElement("div");

    let submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.classList.add("submit");

    activeQues.options.forEach((option, index) => {
      let contains = document.createElement("div");
      let input = document.createElement("input");
      input.type = "radio";
      input.name = "options";
      input.value = option;
      input.id = `opt${index}`;
      let label = document.createElement("label");
      label.setAttribute("for", `option${index}`);
      label.innerText = option;

      contains.append(input, label);

      form.append(contains, submitBtn);
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (input.checked) {
          if (activeQues.isCorrect(input.value)) {
            this.scores();
          }
          this.nextQues();
        } else if (this.activeIndex === this.questns.length - 1) {
          alert(`The total scores are ${quiz.score}`);
        }
      });
    });

    buttons.append(nextBtn, scoreBtn);
    buttons.classList.add("flex");

    root.append(h2, form, buttons);
    this.showButton();
  }
}
let quiz = new Quiz();
allQues.forEach((ques) => {
  quiz.addQue(ques.title, ques.options, ques.correctIndex);
});

scoreBtn.addEventListener("click", () => {
  alert(`The total scores are ${quiz.score}`);
});

nextBtn.addEventListener("click", quiz.nextQues.bind(quiz));

quiz.createUI();
