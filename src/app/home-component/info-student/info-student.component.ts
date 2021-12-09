import { Component, OnInit } from '@angular/core';
import { Student } from '../../common/student';

@Component({
  selector: 'app-info-student',
  templateUrl: './info-student.component.html',
  styleUrls: ['./info-student.component.css']
})
export class InfoStudentComponent implements OnInit {

  s: Student = {fullname: "Đoàn Mạnh Đông",studentCode: "030100"};
  constructor() { }

  ngOnInit() {
  }

  getStudent(): Student{
    return this.s;
  }

}
