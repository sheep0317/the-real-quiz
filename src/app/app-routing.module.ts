import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProfileComponent } from './student-ui/student-profile/student-profile.component';
import { StudentCourseComponent } from './student-ui/student-course/student-course.component';
const routes: Routes = [
  {path:'', redirectTo:'/student-profile', pathMatch: 'full'},
  {path:'student-profile', component: StudentProfileComponent},
  {path:'student-course', component: StudentCourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
