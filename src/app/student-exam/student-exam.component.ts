import { Component, OnInit } from '@angular/core';
import { Test } from '../common/test';

@Component({
  selector: 'app-student-exam',
  templateUrl: './student-exam.component.html',
  styleUrls: ['./student-exam.component.css']
})
export class StudentExamComponent implements OnInit {

  tests: Test[] = [
    {
      id: 123,
      title: 'Kiểm tra cuối kì Giải Tích 1.',
      professor: 'Đoàn Mạnh Đông',
      time: 90,
      startTime: new Date('2021-12-12 14:00'),
      submitionTime: new Date('2021-12-12 14:00'),
      numberOfQuestion: 20,
      correctAnswer: 0,
      score: 0,
      status: 1,
      realTime: new Date(),
    },
    {
      id: 1234,
      title: 'Kiểm tra cuối kì Giải Tích 2.',
      professor: 'Đoàn Mạnh Đông',
      time: 90,
      startTime: new Date('2021-12-12 15:30:10'),
      submitionTime: new Date('2021-12-12 15:31'),
      numberOfQuestion: 20,
      correctAnswer: 0,
      score: 0,
      status: 1,
      realTime: new Date('2021-12-12 15:30'),
    },
    {
      id: 123,
      title: 'Kiểm tra cuối kì Đại số.',
      professor: 'Đoàn Mạnh Đông',
      time: 90,
      startTime: new Date('2021-12-12 14:23'),
      submitionTime: new Date('2021-12-12 14:23'),
      numberOfQuestion: 20,
      correctAnswer: 0,
      score: 0,
      status: 1,
      realTime: new Date(),
    },

    {
      id: 123,
      title: 'Kiểm tra cuối kì Trí Tuệ Nhân Tạo.',
      professor: 'Đoàn Mạnh Đông',
      time: 60,
      startTime: new Date('2021-12-19 09:00'),
      submitionTime: new Date('2021-12-19 10:00'),
      numberOfQuestion: 0,
      correctAnswer: 20,
      score: 100,
      status: 1,
      realTime: new Date(),
    },

    {
      id: 123,
      title: 'Kiểm tra cuối kì Lập trình hướng đối tượng.',
      professor: 'Đoàn Mạnh Đông',
      time: 90,
      startTime: new Date('2021-12-12 14:00'),
      submitionTime: new Date('2021-12-12 14:00'),
      numberOfQuestion: 20,
      correctAnswer: 0,
      score: 0,
      status: 1,
      realTime: new Date(),
    },
  ];
  testActive: Test[] = [];
  testUnactive: Test[] = [];
  testUnactiveToLong: Test[] = [];
  countdown: number = 0;
  config:Object[] = [];
  dayConfig: Object[] = [];
  hourConfig: Object[] = [];
  minuteConfig: Object[] = [];
  secondConfig: Object[] = [];
  timeString: String[] = [];
  constructor() { }

  ngOnInit() {
    this.classifyTest();
    this.disableCountDown();
    // let date: Date = new Date('2021-12-12 01:19');
    // let now: Date = new Date();
    // this.countdown = Math.floor((date.getTime() - now.getTime())/1000);
    //this.config = { leftTime:this.countdown, format: 'd:h:m:s' };
  }

  classifyTest(): void{
    let _this = this;
    this.tests.forEach(function(e) {
      let countdown = Math.floor((e.startTime.getTime() - e.realTime.getTime())/1000);
      if(countdown < 0) {
        _this.testActive.push(e);
      } else if (countdown < 86400){
        _this.testUnactive.push(e)
      } else {
        _this.testUnactiveToLong.push(e);
      }
    })
    setTimeout(function(){
      _this.testActive.pop()
    }, 3000)
  }
  disableCountDown(): void{
    const _this = this;
    let countdown;
    this.testUnactive.forEach(function(e, index){
      countdown = Math.floor((-e.realTime.getTime() + e.startTime.getTime())/1000);
      _this.dayConfig.push({
        leftTime:countdown, format:'d'
      });
      _this.hourConfig.push({leftTime: countdown, format:'H'});
      _this.minuteConfig.push({leftTime: countdown, format:'m'});
      _this.secondConfig.push({leftTime: countdown, format:'s'});
      //activ test
      setTimeout(() => {
        _this.testUnactive.splice(index,1);
        _this.dayConfig.splice(index,1);
        _this.hourConfig.splice(index,1);
        _this.minuteConfig.splice(index,1);
        _this.secondConfig.splice(index,1);
        _this.testActive.splice(0,0,e);
      },countdown * 1000);
    })

    this.testUnactiveToLong.forEach(function(e, index) {
      let str = e.startTime.getDate().toString() + '-' + e.startTime.getMonth().toString() +'-'+e.startTime.getFullYear().toString()
                + '  ' + e.startTime.getHours().toString() +':' + e.startTime.getMinutes().toString();
      _this.timeString.push(str)
      console.log(str)
    })

  }
}
