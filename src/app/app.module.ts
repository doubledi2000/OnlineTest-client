import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { InfoStudentComponent } from './home-component/info-student/info-student.component';
import { StudentssTestComponent } from './home-component/studentss-test/studentss-test.component';
import { HomeComponent } from './home-component/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';



const routes: Routes =[
  { path: 'student-home', component: HomeComponent},
  {path:'student-test', component: TestComponent}
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
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
