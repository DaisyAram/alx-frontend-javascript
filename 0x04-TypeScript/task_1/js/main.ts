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

//writing a class
interface classInterface {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements classInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    }

    displayName(): string {
    return this.firstName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

}
