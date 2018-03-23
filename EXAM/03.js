class PaymentProcessor {
    constructor(id, name, type, value) {
        this.id = id
        this.name = name
        this.value = value

        if(this.type = type)
        this.types = ["service", "product", "other"]
        this.precision = 2
        this.map = new Map()
    }

    registerPayment(id, name, type, value) {
        let contains = false
        // if (this.types[0] === type || this.types[1] === type || this.types[2] === type) {
        //     contains = true
        // }
        for (var i = 0; i < this.types.length; i++) {
            if (this.types[i] === type) {
                contains = true
            }
        }

        if (id !== "" &&
            id !== 1 &&
            !this.map.has(id) &&
            name !== "" &&
            name !== 1 &&
            contains === true &&
            Number(value)) {
            if (!this.map.has(id)) {
                this.map.set(id, [name, type, value])
            }
        }
        else {
            throw TypeError
        }
    }

    deletePayment(id) {
        if (this.map.has(id)) {
            this.map.delete(id)
        } else {
            throw TypeError
        }
    }

    get(id) {
        if (this.map.has(id)) {
            let idd = id
            let name = this.map.get(id)[0]
            let type = this.map.get(id)[1]
            let value = this.map.get(id)[2]
            return `Details about payment ID: ${idd}
- Name: ${name}
- Type: ${type}
- Value: ${value.toFixed(this.precision)}
`
        } else {
            throw TypeError
        }
    }

    setOptions(options) {
        if ('types' in options) {
            this.types = options.types
        }
        if ('precision' in options) {
            this.precision = options.precision
        }
    }

    toString() {
        let paymentsCount = 0
        let paymentsNum = 0
        for (let [key, value] of this.map) {
            paymentsCount++
            paymentsNum += value[2]
        }
        return `Summary:
- Payments: ${paymentsCount}
- Balance: ${paymentsNum.toFixed(this.precision)}`
    }
}



const generalPayments = new PaymentProcessor({types: ['material']});


    generalPayments.registerPayment('0001', 'Microchips', 'material', 15000);
    generalPayments.registerPayment('01A3', 'Biopolymer', 'material', 23000);
