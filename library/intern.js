class Intern { 

    constructor(name, id, email, school) { 
        this.name = name; 
        this.id = id; 
        this.title = "Intern"; 
        this.email = email;
        this.school = school; 
    };

    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getTitle() {
        return this.title;
    };
    getEmail() {
        return this.email;
    };
}

module.exports = Intern;