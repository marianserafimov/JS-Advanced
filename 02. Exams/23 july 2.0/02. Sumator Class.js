let expect = require('chai').expect;
class Sumator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }
    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }
    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}

describe('Sumator', function () {
    let data
    beforeEach(function () {
        data = new Sumator()
    })
    describe('check if all the functions contains ', function () {
        it('should ', function () {
            expect(Object.getPrototypeOf(data).hasOwnProperty('add')).to.equal(true)
            expect(Object.getPrototypeOf(data).hasOwnProperty('sumNums')).to.equal(true)
            expect(Object.getPrototypeOf(data).hasOwnProperty('removeByFilter')).to.equal(true)
            expect(Object.getPrototypeOf(data).hasOwnProperty('toString')).to.equal(true)
        });
    })
    describe('add', function () {
        it('should ', function () {
            data.add(1)
            data.add('asd')
            data.add({asd: 1})
            expect(data.toString()).to.equal('1, asd, [object Object]')
        });
        it('should ', function () {
            expect(data.toString()).to.equal('(empty)')
        });
    })
    describe('sumNums', function () {
        it('should ', function () {
            data.add(1)
            data.add(1)
            data.add(1)
            expect(data.sumNums()).to.equal(3)
        });
        it('should ', function () {
            expect(data.sumNums()).to.equal(0)
        });
    })
    describe('removeByFilter', function () {
        it('should ', function () {
            data.add(2)
            data.add(2)
            data.add(2)
            data.add(3)
            data.add(3)
            data.add(3)
            data.removeByFilter(x => x % 2 === 0)
            expect(data.toString()).to.equal('3, 3, 3')
        });
    })
})
