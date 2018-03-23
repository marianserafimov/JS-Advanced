let expect = require('chai').expect;

class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}


describe("main desc …", function() {
    describe("all ", function () {
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            expect(paymentPackage.toString()).to.equal('Package: HR Services\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800')
        });
    })
    describe('instantiated ', function () {
        it('should ', function () {
            let paymentPackage = new PaymentPackage('asd', 1)
            expect(paymentPackage.value).to.equal(1)
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('asd', 1)
            expect(paymentPackage.VAT).to.equal(20)
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('asd', 1)
            expect(paymentPackage.active).to.equal(true)
        });
    })
    describe('vat', function () {
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            expect(() => paymentPackage.VAT = -1).to.throw()
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            expect(() => paymentPackage.VAT = '').to.throw()
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            paymentPackage.VAT = 10
            expect(paymentPackage.toString()).to.equal('Package: HR Services\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 10%): 1650.0000000000002')
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            expect(paymentPackage.VAT).to.equal(20)
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            paymentPackage.VAT = 0
            expect(paymentPackage.toString()).to.equal('Package: HR Services\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 0%): 1500')
        });
    })
    describe('name', function () {
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            expect(() => paymentPackage.name = "").to.throw()
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            expect(() => paymentPackage.name = 1).to.throw()
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            paymentPackage.name = 'asd'
            expect(paymentPackage.toString()).to.equal('Package: asd\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800')
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            expect(paymentPackage.name).to.equal('HR Services')
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            expect(paymentPackage.name).to.equal("HR Services")
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            expect(() => paymentPackage.name.length = 0).to.throw
        });
    })
    describe('active', function () {
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            expect(() => paymentPackage.active = null).to.throw
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            expect(() => paymentPackage.active = "asd").to.throw
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            expect(() => paymentPackage.active = 123).to.throw
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            paymentPackage.active = true
            expect(paymentPackage.toString()).to.equal('Package: HR Services\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800')
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            paymentPackage.active = false
            expect(paymentPackage.toString()).to.equal('Package: HR Services (inactive)\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800')
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)

            expect(paymentPackage.active = false).to.false
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            expect(paymentPackage.active).to.true
        });
    })
    describe('value', function () {
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            paymentPackage.value = 1000
            expect(paymentPackage.toString()).to.equal('Package: HR Services\n' +
                '- Value (excl. VAT): 1000\n' +
                '- Value (VAT 20%): 1200')
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            expect(() => paymentPackage.value = "").to.throw
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            expect(() => paymentPackage.value = -1).to.throw
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            expect(paymentPackage.value).to.equal(1500)
        });
        it('should ', function () {
            let paymentPackage = new PaymentPackage('HR Services', 1500)
            paymentPackage.value = 0
            expect(paymentPackage.toString()).to.equal('Package: HR Services\n' +
                '- Value (excl. VAT): 0\n' +
                '- Value (VAT 20%): 0')
        });

    })

});
