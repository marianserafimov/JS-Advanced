function sortedList() {
    let sorted = (a, b) => a - b
    return {
        arraay: [],
        size: 0,
        add: function (element) {
            this.arraay.push(element)
            this.arraay.sort(sorted)
            this.size+=1
        },
        remove: function (indexToRemove) {
            if (indexToRemove < this.arraay.length && indexToRemove >= 0) {
                this.arraay.splice(indexToRemove, 1)
                this.size-=1
            }
        },
        get: function (indexToGet) {
            if (indexToGet < this.arraay.length && indexToGet >= 0) {
                return this.arraay[indexToGet]
            }
        }
    }
}

let arr = sortedList()

arr.add(1)
arr.add(-5)
arr.add(4)
arr.add(7)
console.log(arr.arraay);
console.log(arr.get(2));