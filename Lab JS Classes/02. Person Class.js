function createPerson() {
    class Person{
        constructor(firstName, lastName, age, email){
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.email = email
        }

        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, ${this.email})`
        }
    }
    return[
        new Person("asd", "Asddd", 123, "asdasdads@asd.bg"),
        new Person("asd", "Asddd", 123, "asdasdads@asd.bg"),
        new Person("asd", "Asddd", 123, "asdasdads@asd.bg"),
        new Person("asd", "Asddd", 123, "asdasdads@asd.bg")
    ]
}