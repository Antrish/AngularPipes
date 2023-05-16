import { Student } from "./student";

export class StudentService{
   students: Student [] = [
    {name: 'Antrish Mishra', course:'Angular12', marks:544, dob: new Date('05-10-1990'), gender: 'Male'},
    {name: 'Rashmi Mishra', course:'SCM', marks:555, dob: new Date('09-29-1990'), gender: 'Female'},
    {name: 'Niteesh Mishra', course:'Rxjs', marks:540, dob: new Date('07-29-1994'), gender: 'Male'},
    {name: 'Rajneesh  Mishra', course:'Politics', marks:500, dob: new Date('07-17-1984'), gender: 'Male'},
    {name: 'Nitin Mishra', course:'Venom Scientist', marks:580, dob: new Date('05-10-1995'), gender: 'Male'},
    {name: 'Jouliee Mentis', course:'Space Science', marks:544, dob: new Date('05-10-1996'), gender: 'Female'},
    {name: 'Anand Dwivedi', course:'Java', marks:550, dob: new Date('02-26-1992'), gender: 'Male'},
   ];
   totalMarks : number = 600;
}