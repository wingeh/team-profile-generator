class Engineer { 

    constructor(name, id, email, github) { 
        this.name = name; 
        this.id = id; 
        this.title = "Engineer"; 
        this.email = email; 
        this.github = github;
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

module.exports = Engineer;