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

describe('sumator',function () {
    let dataArr
    beforeEach(function () {
        dataArr = new Sumator()
    })
    it('check if the functions are there', function () {
        expect(Object.getPrototypeOf(dataArr).hasOwnProperty('add')).to.equal(true)
        expect(Object.getPrototypeOf(dataArr).hasOwnProperty('sumNums')).to.equal(true)
        expect(Object.getPrototypeOf(dataArr).hasOwnProperty('removeByFilter')).to.equal(true)
        expect(Object.getPrototypeOf(dataArr).hasOwnProperty('toString')).to.equal(true)
    });
    it('should ', function () {
        expect(dataArr.hasOwnProperty('data')).to.equal(true)
    });
    it('should ', function () {
        expect(dataArr.data instanceof Array).to.equal(true)
        expect(dataArr.data.length).to.be.equal(0)
    });
    describe('add', function () {
        it('should ', function () {
            dataArr.add(5)
            dataArr.add('asd')
            dataArr.add({asd:1})
            expect(dataArr.toString()).to.equal('5, asd, [object Object]')
        });
    })
    describe('sum',function () {
        it('should ', function () {
            dataArr.add(5)
            dataArr.add(5)
            dataArr.add(5)
            expect(dataArr.sumNums()).to.equal(15)
        });
        it('should ', function () {
            expect(dataArr.sumNums()).to.equal(0)
        });
    })
    describe('filter', function () {
        it('should ', function () {
            dataArr.add(5)
            dataArr.add(5)
            dataArr.add(3)
            dataArr.add(6)
            dataArr.removeByFilter(x => x % 2 === 0)
            expect(dataArr.toString()).to.equal('5, 5, 3')
        });
    })
    describe('toString', function () {
        it('should ', function () {
            expect(dataArr.toString()).to.equal('(empty)')
        });
    })
})

