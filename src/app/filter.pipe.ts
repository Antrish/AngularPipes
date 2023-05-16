import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "./student";

@Pipe({
    name: 'studentFilter',
    pure : false
})
export class FilterPipe implements PipeTransform{
    transform(students : Student[], filteredText:string) {
        if(students.length ===0 || filteredText ===''){
            return students;
        } else{
          return  students.filter((student)=>
            { 
               return student.gender.toLowerCase() === filteredText.toLowerCase()
            })
        }
    }
}