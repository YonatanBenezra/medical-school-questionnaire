import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/questions.json'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  question: any = "click on the button";
  savedQuestions: any = []
  randomNumber: any
  isSaved: any = false

  constructor() { }

  ngOnInit(): void {
    this.savedQuestions = JSON.parse(localStorage["questions"])
  }

  createRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 103)
  }

  currentQuestion() {
    this.createRandomNumber()
    this.question = data.default.Questions[this.randomNumber];
  }

  saveQuestionLocalStorage() {
    localStorage["questions"] = JSON.stringify(this.savedQuestions);
  }

  saveQuestion() {
    if (this.savedQuestions.includes(this.randomNumber)) {
      const num = this.savedQuestions.indexOf(this.randomNumber)
      this.savedQuestions.splice(num, 1)
      this.saveQuestionLocalStorage()
    } else {
      this.savedQuestions.push(this.randomNumber)
      this.saveQuestionLocalStorage()
    }
  }

}
