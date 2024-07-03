//building teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any
}

//extending the teacher class
interface Directors extends Teacher {
  numberofReports: number;
}

//printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string
  }
const printTeacher: printTeacherFunction = (firstName, lastName) => {
return `${firstName[0]}.${lastName}`;
};
