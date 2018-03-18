let expect = require('chai').expect;

function makeList() {
    let data = [];
    return {
        addLeft: function(item) {
            data.unshift(item);
        },
        addRight: function(item) {
            data.push(item);
        },
        clear: function() {
            data = [];
        },
        toString: function() {
            return data.join(", ");
        }
    };
}

describe("TODO …", function() {
    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });
    
    
    describe('addLeft', function () {
        it('should ', function () {
            myList.addLeft(1)
            myList.addLeft(2)
            expect(myList.toString()).to.equal('2, 1')
        });
    })
    describe('addRight', function () {
        it('should ', function () {
            myList.addRight(1)
            myList.addRight(2)
            expect(myList.toString()).to.equal('1, 2')
        });
    })
    describe('clear', function () {
        it('should ', function () {
            myList.addRight(1)
            myList.addRight(2)
            myList.clear()
            expect(myList.toString()).to.equal('')
        });
    })
    describe('allTypes', function () {
        it('should ', function () {
            myList.addLeft('asd')
            myList.addLeft(2)
            myList.addLeft({asd:1})
            expect(myList.toString()).to.equal('[object Object], 2, asd')
        });
    })
});