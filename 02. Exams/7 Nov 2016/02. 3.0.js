let expect = require('chai').expect;

let list = (function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();

describe("add delete", function() {
    describe('checkForFunctions',function () {

        it('should ', function () {
            expect(list.hasOwnProperty('add')).to.equal(true, "Missing add function");
            expect(list.hasOwnProperty('delete')).to.equal(true, "Missing sumNums function");
            expect(list.hasOwnProperty('toString')).to.equal(true, "Missing toString function");
        });
    })
    
    describe('add', function () {
        it('should ', function () {
            expect(list.toString()).to.equal('')
        });
        it("TODO", function () {
            list.add(1)
            expect(list.toString()).to.equal('1')
        });
        it('should ', function () {
            list.add('asd')
            expect(list.toString()).to.equal('1, asd')
        });
    })
    describe('delete', function () {
        it('should ', function () {
            expect(list.delete('asd')).to.undefined
        });
        it('should ', function () {
            expect(list.delete(-3)).to.undefined
        });
        it('should ', function () {
            expect(list.delete(3)).to.undefined
        });
        it('should ', function () {
            list.delete(0)
            expect(list.toString()).to.equal("asd")
        });
        it('should ', function () {
            expect(list.delete(0)).to.equal('asd')
        });
    })
    describe('toString', function () {
        it('should ', function () {
            expect(list.toString()).to.equal('')
        });
        it('should ', function () {
            list.add(1)
            expect(list.toString()).to.equal("1")
        });
    })
});

// describe('uauuuu', function () {
//     let arr
//     beforeEach(function () {
//         arr = (function(){
//             let data = [];
//             return {
//                 add: function(item) {
//                     data.push(item);
//                 },
//                 delete: function(index) {
//                     if (Number.isInteger(index) && index >= 0 && index < data.length) {
//                         return data.splice(index, 1)[0];
//                     } else {
//                         return undefined;
//                     }
//                 },
//                 toString: function() {
//                     return data.join(", ");
//                 }
//             };
//         })()
//     })
//
//     describe('add', function () {
//         it('should ', function () {
//             arr.add(1)
//             arr.add('asd')
//             arr.add({asd:1})
//             expect(arr.toString()).to.equal('1, asd, [object Object]')
//         });
//         it('should ', function () {
//             expect(arr.toString()).to.equal("")
//         });
//     })
//
//     describe('delete', function () {
//         it('should ', function () {
//             arr.add(7)
//             arr.add(6)
//             arr.add(5)
//             arr.delete(2)
//             expect(arr.toString()).to.equal("7, 6")
//         });
//         it('should ', function () {
//             arr.add(7)
//             arr.add(6)
//             arr.add(5)
//             expect(arr.delete(-1)).to.undefined
//         });
//         it('should ', function () {
//             arr.add(7)
//             arr.add(6)
//             arr.add(5)
//             expect(arr.delete(3)).to.undefined
//         });
//         it('should ', function () {
//             arr.add(7)
//             arr.add(6)
//             arr.add(5)
//             expect(arr.delete('asd')).to.undefined
//         });
//         it('should ', function () {
//             arr.add(7)
//             arr.add(6)
//             arr.add(5)
//             arr.delete(0)
//             expect(arr.toString()).to.equal("6, 5")
//         });
//     })
//     describe('toString', function () {
//         it('should ', function () {
//             arr.add(1)
//             arr.add(2)
//             expect(arr.toString()).to.equal("1, 2")
//         });
//     })
// })