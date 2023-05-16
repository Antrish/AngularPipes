import { Component } from '@angular/core';
import { StudentService } from './student-service';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'AngularPipes';
  students: Student[];
  totalMarks : number;
  filteredText: string ='';
  totalStudents = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve(this.students.length)
    }, 2000);
  })
  constructor(private studentservice : StudentService){}
  ngOnInit(){
    this.students = this.studentservice.students;
    this.totalMarks = this.studentservice.totalMarks;
  }
  AddStudent(){
     // we do not see this entry when table is filtered for Male, because we have pushed the item into the same object
  //  and the refererence was not chnaged. That's why it is "NOT A PURE CHANGE"
  // ================================================Impure Change==============================================================================
     this.students.push({name: 'Bahubali', course:'Gundai', marks:600, dob: new Date('02-26-1900'), gender: 'Male'},) 


    // we can see this entry when table is filtered for Male, because we have changed the reference by assigning the current object to copy of the object.
    // that means the reference of students array has been changed and it's considered as a "PURE CHANGE"
    // ================================================Pure Change==============================================================================
    // let copyOfStudents = Object.assign([], this.students)
    // copyOfStudents.push({name: 'Bahubali', course:'Gundai', marks:600, dob: new Date('02-26-1900'), gender: 'Male'});
    // this.students = copyOfStudents;
  
  }

}
