class CheckingAccount {
    constructor(clientId,email,firstName,lastName){
        this.clientId = Number(clientId);
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this.clientId;
    }

    set clientId(value) {
        let regForId = /[0-9]{6}/g
        if(!regForId.test(value)){
            throw new TypeError("Client ID must be a 6-digit number")
        }

    }

    get email() {
        return this.email;
    }

    set email(value) {
        let regForEmail = /^[0-9a-zA-Z]+@[a-zA-Z.]+$/g
        let match = regForEmail.exec(value)
        if(!match) {
            throw new TypeError("Invalid e-mail")
        }

    }

    get firstName() {
        return this.firstName;
    }

    set firstName(value) {
        if(!/^(.){3,20}$/g.test(value)){
            throw new TypeError("First name must be between 3 and 20 characters long")
        }
        if(!/[a-zA-Z]+/g.test(value)){
            throw new TypeError("First name must contain only Latin characters")
        }

    }

    get lastName() {
        return this.lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }
}
let acc = new CheckingAccount('123456', 'ivan12@some.com', 'Ivan', 'Petrov')

console.log(acc);