//P3: Object Literals
    const student = {
    firstName: 'John',
    lastName: 'Doe',
    studentId: '12345',
    courses: [],

        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        },

        enrollCourse(courseName) {
            this.courses.push(courseName);
            console.log(`${this.getFullName()} has been enrolled in ${courseName}.`);

        },

        getCourseCount() {
            return `Student's enrolled courses count:${this.courses.length}`;
        }
    };

    console.log(student.getFullName());
    student.enrollCourse('CMPS2212');
    student.enrollCourse('MATH2210');
    console.log(student.getCourseCount()); // Expected: 2