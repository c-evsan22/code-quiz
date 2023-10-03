class Question {
    constructor(question){
        this.questionElement = document.querySelector ('#question');
        this.answerElements = [
            document.querySelector('#a1'),
            document.querySelector('#a2'),
            document.querySelector('#a3'),
            document.querySelector('#a4'),
        ];
    
        this.correctAnswer = question.correct_answer:
        this.question = question.question;
        this.isCorrect = false;
        
        this.answers = this.shuffleAnswers ([
            question.correct_answer,
            ...question.incorrect_answers
        ]);
    }

    shuffleAnswers(answers) {
        for (let i = answers.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = answers[i]
            answers[i] = answers[j]
            answers[j] = temp
        }
        return answers;
    }

    answer(checkedElement) {
        this.isCorrect = (checkedElement[0].textContent === this.correctAnswer) ? true :
        false;
    }

    render() {
        this.questionElement.innerHTML = thisquestion;
        this.answerElements.forEach ((el,index) => {
            el.innerHTML = '<input type="radio" name="radio"><span class="checkmark"></span>' +
            this.answers[index];
        });
    }
}

export default Question;

class Final {
    constructor(count, totalAmount) {
      this.scoreElement = document.querySelector('.score');
      this.againButton = document.querySelector('#again');
      this.render(count, totalAmount);
      this.againButton.addEventListener('click', location.reload.bind(location));
    }
    render(count, totalAmount) {
      this.scoreElement.innerHTML = `You answered ${count} out of ${totalAmount} correct!`;
    }
  }
  export default Final;


  