const person = {
    species: 'Human',
    breathe() {
        return 'Breathing...';
    }
};

const employee = Object.create(person);
employee.company = 'Tech Corp';
employee.position = 'Developer';

const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = [];
manager.addTeamMember = function(name) {
    this.team.push(name);
    console.log(`${name} has been added to the ${this.department} department.`);
};

//prototype chain
manager.addTeamMember('Alice');
manager.addTeamMember('Bob');

console.log(manager.team);        // ['Alice', 'Bob']
console.log(manager.department);  // Engineering (own)
console.log(manager.company);     // Tech Corp (from employee)
console.log(manager.position);    // Developer (from employee)
console.log(manager.species);     // Human (from person)
console.log(manager.breathe());   // Breathing... (from person)
