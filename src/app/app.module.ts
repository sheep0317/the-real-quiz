import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentBodyComponent } from './student-ui/student-body/student-body.component';
import { StudentSidebarComponent } from './student-ui/student-sidebar/student-sidebar.component';
import { StudentUiComponent } from './student-ui/student-ui/student-ui.component';
import { StudentProfileComponent } from './student-ui/student-profile/student-profile.component';
import { StudentCourseComponent } from './student-ui/student-course/student-course.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentBodyComponent,
    StudentSidebarComponent,
    StudentUiComponent,
    StudentProfileComponent,
    StudentCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
