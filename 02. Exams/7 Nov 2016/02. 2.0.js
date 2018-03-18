// let expect = require('chai').expect;
//
// let list = (function(){
//     let data = [];
//     return {
//         add: function(item) {
//             data.push(item);
//         },
//         delete: function(index) {
//             if (Number.isInteger(index) && index >= 0 && index < data.length) {
//                 return data.splice(index, 1)[0];
//             } else {
//                 return undefined;
//             }
//         },
//         toString: function() {
//             return data.join(", ");
//         }
//     };
// })();
//
// describe('asdasd',function () {
//     describe('add', function () {
//         it('should ', function () {
//             it('should ', function () {
//                 expect(list.toString()).to.equal('')
//             });
//             it("TODO", function () {
//                 list.add(1)
//                 expect(list.toString()).to.equal('1')
//             });
//             it('should ', function () {
//                 list.add('asd')
//                 list.add(2)
//                 expect(list.toString()).to.equal('1, asd, 2')
//             });
//         });
//     })
//     describe('delete', function () {
//         it('should ', function () {
//             expect(list.delete('asds')).to.undefined
//         });
//         it('should ', function () {
//             expect(list.delete(-1)).to.undefined
//         });
//         it('should ', function () {
//             expect(list.delete(3)).to.undefined
//         });
//         it('should ', function () {
//             list.add(5)
//             list.add(6)
//             list.add(7)
//             list.delete(2)
//              expect(list.toString()).to.equal('5, 6')
//         });
//     })
// })