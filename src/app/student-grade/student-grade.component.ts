import { Component, OnInit } from '@angular/core';
import { Test } from '../common/test';

@Component({
  selector: 'app-student-grade',
  templateUrl: './student-grade.component.html',
  styleUrls: ['./student-grade.component.css']
})
export class StudentGradeComponent implements OnInit {
  tests: Test[] = [
    {
      id: 123,
      title: 'Kiểm tra cuối kì Giải Tích 1.',
      professor: 'Đoàn Mạnh Đông',
      time: 90,
      startTime: new Date('2021-12-12 14:00'),
      submitionTime: new Date('2021-12-12 14:00'),
      numberOfQuestion: 20,
      correctAnswer: 17,
      score: 17/2,
      status: 2,
      realTime: new Date(),
    },
    {
      id: 1234,
      title: 'Kiểm tra cuối kì Giải Tích 2.',
      professor: 'Đoàn Mạnh Đông',
      time: 90,
      startTime: new Date('2021-12-12 15:30'),
      submitionTime: new Date('2021-12-12 15:30'),
      numberOfQuestion: 20,
      correctAnswer: 10,
      score: 10/2,
      status: 2,
      realTime: new Date(),
    },
    {
      id: 123213,
      title: 'Kiểm tra cuối kì Đại số.',
      professor: 'Đoàn Mạnh Đông',
      time: 90,
      startTime: new Date('2021-12-12 10:00'),
      submitionTime: new Date('2021-12-12 11:30'),
      numberOfQuestion: 20,
      correctAnswer: 6,
      score: 6/2,
      status: 2,
      realTime: new Date(),
    },

    {
      id: 123,
      title: 'Kiểm tra cuối kì Trí Tuệ Nhân Tạo.',
      professor: 'Đoàn Mạnh Đông',
      time: 60,
      startTime: new Date('2021-12-10 09:00'),
      submitionTime: new Date('2021-12-10 10:00'),
      numberOfQuestion: 20,
      correctAnswer: 20,
      score: 10,
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
      correctAnswer: 3,
      score: 3/2,
      status: 2,
      realTime: new Date(),
    },

    {
      id: 123,
      title: 'Kiểm tra cuối kì Giải Tích 1.',
      professor: 'Đoàn Mạnh Đông',
      time: 90,
      startTime: new Date('2021-12-12 14:00'),
      submitionTime: new Date('2021-12-12 14:00'),
      numberOfQuestion: 20,
      correctAnswer: 20,
      score: 10,
      status: 2,
      realTime: new Date(),
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
