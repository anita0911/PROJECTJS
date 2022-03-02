class Father {
    constructor(city) {
        this.city = city;
    }
    
    getAddress () {
        return `from city ${this.city}`;
    }
}

class Boy extends Father {
    constructor(name, age, city) {
        super(city);
        this.name = name;
        this.age = age;
        this.city = 'Bang'; // These changes will be reflected in the parent class as well.
    }

    getFatherAdd() {
        return `${this.name} is from city ${this.city}`;
    }
}

class Girl extends Father {
    constructor(name, age, city) {
        super(city);
        this.name = name;
        this.age = age;
        this.city = 'Nagpur'; // These changes will be reflected in the parent class as well.
    }

    getFatherAdd() {
        return `${this.name} is from city ${this.city}`;
    }
}

module.exports = Boy;
module.exports = Girl;
//module.exports = Father;


