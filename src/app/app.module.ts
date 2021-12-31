import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CountdownModule} from 'ngx-countdown'
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { InfoStudentComponent } from './home-component/info-student/info-student.component';
import { StudentssTestComponent } from './home-component/studentss-test/studentss-test.component';
import { HomeComponent } from './home-component/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { StudentssTestedComponent } from './home-component/studentss-tested/studentss-tested.component';
import { StudentGradeComponent } from './student-grade/student-grade.component';
import { StudentExamComponent } from './student-exam/student-exam.component';
import { TestInfoComponent } from './test-info/test-info.component';




const routes: Routes =[
  { path: 'student-home', component: HomeComponent},
  {path:'student-test', component: TestComponent},
  {path:'student-exam', component: StudentExamComponent},
  {path:'student-grade', component: StudentGradeComponent}
]
@NgModule({
  declarations: [		
    AppComponent,
      NavbarComponentComponent,
      SlideBarComponent,
      InfoStudentComponent,
      StudentssTestComponent,
      HomeComponent,
      TestComponent,
      StudentssTestedComponent,
      StudentGradeComponent,
      StudentExamComponent,
      TestInfoComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
