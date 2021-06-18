class Manager { 

    constructor(name, id, email, office) { 
        this.name = name; 
        this.id = id; 
        this.title = "Manager"; 
        this.email = email; 
        this.office = office;
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

module.exports = Manager;