let expect = require('chai').expect;

function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

describe('createList',function () {
    let list;
     beforeEach(function () {
         list = createList();
     });

    describe('add',function () {
        it('with a multiple elements of different types, should work correctly', function () {
            list.add(1)
            list.add('asd')
            let obj = {asd:1}
            list.add(obj)
            expect(list.toString()).to.equal('1, asd, [object Object]');
        });
    })
    describe('shiftLeft',function () {
        it('with a multiple elements of different types, should work correctly', function () {
            list.add(1)
            list.add(2)
            list.add('asd')
            list.add(4)
            list.shiftLeft()
            expect(list.toString()).to.equal('2, asd, 4, 1');
        });
        it('should ', function () {
            list.add(1)
            return expect(list.toString()).to.equal('1');
        });
    })
    describe('shiftReft',function () {
        it('with a multiple elements of different types, should work correctly', function () {
            list.add(1)
            list.add(2)
            list.add('asd')
            list.add(4)
            list.shiftRight()
            expect(list.toString()).to.equal('4, 1, 2, asd');
        });
    })
    describe('swap',function () {
        it('with a multiple elements of different types, should work correctly', function () {
            list.add(1)
            list.add(2)
            list.add('asd')
            list.add(4)
            list.swap(0,3)
            expect(list.toString()).to.equal('4, 2, asd, 1');
        });
        it('should ', function () {
            list.add(1)
            list.add(2)
            list.add(3)
            list.add(4)
            expect(list.swap(0,3)).to.true
        });
        it('should ', function () {
            list.add(1)
            list.add(2)
            list.add(3)
            list.add(4)
            expect(list.swap(-1,3)).to.false
        });
        it('should ', function () {
            list.add(1)
            list.add(2)
            list.add(3)
            list.add(4)
            expect(list.swap('asd',3)).to.false
        });
        it('should ', function () {
            list.add(1)
            list.add(2)
            list.add(3)
            list.add(4)
            expect(list.swap(1,7)).to.false
        });
        it('should ', function () {
            list.add(1)
            list.add(2)
            list.add(3)
            list.add(4)
            expect(list.swap(1,3)).to.false
        });
    })
});