interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Mike',
  age: 56,
  location: 'Wale'
};

const student2: Student = {
  firstName: 'Joy',
  lastName: 'Que',
  age: 42,
  location: 'London'
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const firstNameCell: HTMLTableCellElement = row.insertCell();
  const locationCell: HTMLTableCellElement = row.insertCell();
  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});
