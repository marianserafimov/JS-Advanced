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

describe('makelsit', function () {
    let dataa
        beforeEach(function () {
        dataa = makeList()
    })
    describe('hasProps',function () {
        it('should ', function () {
            expect(dataa.addLeft).to.exist;
            expect(dataa.addRight).to.exist;
            expect(dataa.clear).to.exist;
            expect(dataa.toString).to.exist;
        });
    })
    describe('addLeft', function () {
        it('should ', function () {
            dataa.addLeft(1)
            dataa.addLeft('asd')
            dataa.addLeft({asd:1})

            expect(dataa.toString()).to.equal('[object Object], asd, 1')
        });
    })
    describe('addRight', function () {
        it('should ', function () {
            dataa.addRight(1)
            dataa.addRight('asd')
            dataa.addRight({asd:1})

            expect(dataa.toString()).to.equal('1, asd, [object Object]')
        });
    })
    describe('clear', function () {
        it('should ', function () {
            dataa.addRight(1)
            expect(dataa.clear().toString()).to.equal('')
        });
    })
    describe('toString', function () {
        it('should ', function () {
            dataa.addRight(1)
            expect(dataa.toString()).to.equal('1')
        });
    })
    it('should ', function () {
        expect(dataa.toString()).to.equal('')
    });
})