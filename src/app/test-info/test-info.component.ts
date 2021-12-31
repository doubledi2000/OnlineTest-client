import { Component, OnInit } from '@angular/core';
import { TestInfo } from '../common/test-info';

@Component({
  selector: 'app-test-info',
  templateUrl: './test-info.component.html',
  styleUrls: ['./test-info.component.css']
})
export class TestInfoComponent implements OnInit {

  test_info: TestInfo = {id:1, title:"Thi", start_time: new Date(), real_time: new Date(), time:90, professor: "dong dong"};
  constructor() { }

  ngOnInit() {

  }

}
