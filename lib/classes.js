class Employee {

    constructor() {
        this.name = name,
        this.id = id, 
        this.email = email
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.id
    }

    getRole() {
        return 'Employee'
    }
}

class Engineer extends Employee {

    constructor() {
        this.github = github
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
}

class Intern extends Employee {

    constructor() {
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}