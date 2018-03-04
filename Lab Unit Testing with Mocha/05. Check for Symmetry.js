let expect = require('chai').expect

const SYMMETRY = require('Symmetry')

describe('SumTest',function () {
    it('should return falase for [1,2]', function () {
        expect(SYMMETRY([1,2])).to.be.equal(false)
    });
    it('should return true for [1]', function () {
        expect(SYMMETRY([1,2,1])).to.be.equal(true)
    });
    it('should return true for []', function () {
        expect(SYMMETRY([])).to.be.equal(true)
    });
    it('should return 3 for [1.5, 2.5, -1]', function () {
        expect(SYMMETRY(['test, 1, test'])).to.be.equal(true)
    });
    it('should return NaN for invalid data', function () {
        expect(SYMMETRY(['true'])).to.be.equal(true)
    });
    it('should return NaN for invalid data', function () {
        expect(SYMMETRY([{},{}])).to.be.equal(true)
    });
    it('should return NaN for invalid data', function () {
        expect(SYMMETRY('as')).to.be.equal(false)
    });
    it('should return NaN for invalid data', function () {
        expect(SYMMETRY([-1,1,1])).to.be.equal(false)
    });


})