class Player {
    constructor(nickName) {
        this.nickName = nickName
        this.scoreList = []
    }

    addScore(score) {
        if (Number.isInteger(score)) {
            this.scoreList.push(score)
            this.scoreList.sort((a, b) => b - a)
        }
    }

    get scoreCount() {
        return this.scoreList.length
    }

    get highestScore() {
        return this.scoreList[0]
    }

    get topFiveScore() {
        return this.scoreList.slice(0, 5)
    }

    toString() {
        let result = `${this.nickName}: [${this.scoreList}]`
        return result
    }
}


let peter = new Player("Peter")
peter.addScore(1)
peter.addScore("asd")
peter.addScore(3)
peter.addScore(3)
peter.addScore(3)
peter.addScore(3)
peter.addScore(5)
console.log(peter.topFiveScore);
