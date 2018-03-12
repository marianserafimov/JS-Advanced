class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString
        this.innerLength = Number(innerLength)
    }

    increase(length) {
        this.innerLength += length
    }

    decrease(length) {
        if (this.innerLength - length < 0) {
            this.innerLength = 0
        } else {
            this.innerLength -= length
        }
    }

    toString() {
        if(this.innerLength == 0){
            return "...";
        }

        if(this.innerString.length > this.innerLength){
            this.innerString = this.innerString.substr(0, this.innerLength) + "...";
        }
        return this.innerString;

    }
}

let test = new Stringer("test", 5)
console.log(test.toString())
test.decrease(3)
console.log(test.toString())