//P3: Object Literals
    const student = {
    firstName: 'John',
    lastName: 'Doe',
    studentId: '12345',
    courses: [],

        //methods work as functions inside objects.
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
            //this. refers to the current object (student object)
        },

        enrollCourse(courseName) {
            this.courses.push(courseName);
            console.log(`${this.getFullName()} has been enrolled in ${courseName}.`);
            //push() adds the courseName to the end of the  courses array
        },

        getCourseCount() {
            return `Student's enrolled courses count:${this.courses.length}`;
        }
    };

    console.log(student.getFullName());
    student.enrollCourse('CMPS2212');
    student.enrollCourse('MATH2210');
    console.log(student.getCourseCount()); // Expected: 2