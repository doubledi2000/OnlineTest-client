import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Question } from '../common/question';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit {
  innerHTMLS: string = '';
  index: number = 0;
  questions: Question[] = [
    {id: 1, content:"Cau hoi 1", image: "", type: 0,answer: [{id: 1, content: "Đáp án 1 sai", your_choose: false}, {id: 1, content: "Đáp án sai", your_choose: false}, {id: 2, content: "Đáp án sai", your_choose: false},{id: 3, content: "Đáp án Đúng", your_choose: false}]},
    {id: 2, content:"Cau hoi 2", image: "", type: 0,answer: [{id: 1, content: "Đáp án 2 sai", your_choose: false}, {id: 1, content: "Đáp án sai", your_choose: false}, {id: 2, content: "Đáp án sai", your_choose: false},{id: 3, content: "Đáp án Đúng", your_choose: false}]},
    {id: 3, content:"Cau hoi 3", image: "", type: 0,answer: [{id: 1, content: "Đáp án 3 sai", your_choose: false}, {id: 1, content: "Đáp án sai", your_choose: false}, {id: 2, content: "Đáp án sai", your_choose: false},{id: 3, content: "Đáp án Đúng", your_choose: false}]},
    {id: 3, content:"Cau hoi 4", image: "", type: 0,answer: [{id: 1, content: "Đáp án 4 sai", your_choose: false}, {id: 1, content: "Đáp án sai", your_choose: false}, {id: 2, content: "Đáp án sai", your_choose: false},{id: 3, content: "Đáp án Đúng", your_choose: false}]},
    {id: 5, content:"Cau hoi 5", image: "", type: 0,answer: [{id: 1, content: "Đáp án 5 sai", your_choose: false}, {id: 1, content: "Đáp án sai", your_choose: false}, {id: 2, content: "Đáp án sai", your_choose: false},{id: 3, content: "Đáp án Đúng", your_choose: false}]},
    {id: 6, content:"Cau hoi 6", image: "", type: 0,answer: [{id: 1, content: "Đáp án 6 sai", your_choose: false}, {id: 1, content: "Đáp án sai", your_choose: false}, {id: 2, content: "Đáp án sai", your_choose: false},{id: 3, content: "Đáp án Đúng", your_choose: false}]},
    {id: 7, content:"Cau hoi 7", image: "", type: 0,answer: [{id: 1, content: "Đáp án 7 sai", your_choose: false}, {id: 1, content: "Đáp án sai", your_choose: false}, {id: 2, content: "Đáp án sai", your_choose: false},{id: 3, content: "Đáp án Đúng", your_choose: false}]},
    {id: 8, content:"Cau hoi 8", image: "", type: 0,answer: [{id: 1, content: "Đáp án 8 sai", your_choose: false}, {id: 1, content: "Đáp án sai", your_choose: false}, {id: 2, content: "Đáp án sai", your_choose: false},{id: 3, content: "Đáp án Đúng", your_choose: false}]},
    {id: 9, content:"Cau hoi 9", image: "", type: 0,answer: [{id: 1, content: "Đáp án 9 sai", your_choose: false}, {id: 1, content: "Đáp án sai", your_choose: false}, {id: 2, content: "Đáp án sai", your_choose: false},{id: 3, content: "Đáp án Đúng", your_choose: false}]},
    {id: 10, content:"Cau hoi 10", image: "", type: 0,answer: [{id: 1, content: "Đáp án 10 sai", your_choose: false}, {id: 1, content: "Đáp án sai", your_choose: false}, {id: 2, content: "Đáp án sai", your_choose: false},{id: 3, content: "Đáp án Đúng", your_choose: false}]},
    {id: 11, content:"Cau hoi 11", image: "", type: 0,answer: [{id: 1, content: "Đáp án 11 sai", your_choose: false}, {id: 1, content: "Đáp án sai", your_choose: false}, {id: 2, content: "Đáp án sai", your_choose: false},{id: 3, content: "Đáp án Đúng", your_choose: false}]},
    {id: 12, content:"Cau hoi 12", image: "", type: 0,answer: [{id: 1, content: "Đáp án 12 sai", your_choose: false}, {id: 1, content: "Đáp án sai", your_choose: false}, {id: 2, content: "Đáp án sai", your_choose: false},{id: 3, content: "Đáp án Đúng", your_choose: false}]},
    {id: 13, content:"Cau hoi 13", image: "", type: 0,answer: [{id: 1, content: "Đáp án 13 sai", your_choose: false}, {id: 1, content: "Đáp án sai", your_choose: false}, {id: 2, content: "Đáp án sai", your_choose: false},{id: 3, content: "Đáp án Đúng", your_choose: false}]},
    {id: 14, content:"Cau hoi 14", image: "", type: 0,answer: [{id: 1, content: "Đáp án 14 sai", your_choose: false}, {id: 1, content: "Đáp án sai", your_choose: false}, {id: 2, content: "Đáp án sai", your_choose: false},{id: 3, content: "Đáp án Đúng", your_choose: false}]}
  ]
  question: Question = {id: 1, content:"Cau hoi 1", image: "", type: 0,answer: [{id: 1, content: "Đáp án sai", your_choose: false}, {id: 1, content: "Đáp án sai", your_choose: false}, {id: 2, content: "Đáp án sai", your_choose: false},{id: 3, content: "Đáp án Đúng", your_choose: false}]};
  constructor() {

  }
  ngAfterViewInit(): void {
  }

  ngOnInit() {

  }

  onClickMe(e:any): void{
    this.index = e.target.value;
    this.question = this.questions[this.index];
  }


}
