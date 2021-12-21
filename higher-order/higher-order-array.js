const employees = [
    { id: 1, firstName: 'John', lastName: 'Doe', salary: 1200 },
    { id: 2, firstName: 'Allen', lastName: 'Green', salary: 2200 },
    { id: 3, firstName: 'Smith', lastName: 'Woods', salary: 5400 },
    { id: 4, firstName: 'Berry', lastName: 'Allen', salary: 4300 },
    { id: 5, firstName: 'Clark', lastName: 'Kent', salary: 3300 }
];

// get employees having salary greater than 4k
const result1 = employees.filter(i => i.salary > 4000);
console.log(result1);

// get employee whose id is 3
const result2 = employees.find(i => i.id === 3);
console.log(result2);

// get employee index whose id is 4
const result3 = employees.findIndex(i => i.id === 4);
console.log(result3);

// get id and full name of employees
const result4 = employees.map(i => ({ id: i.id, fullName: `${i.firstName} ${i.lastName}` }));
console.log(result4);