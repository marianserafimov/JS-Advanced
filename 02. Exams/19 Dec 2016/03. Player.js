class Player {
    constructor(nickName){
        this.nickName = nickName;
        this.arr = []
    }

    addScore(score){
        if(!isNaN(score) && score!==null){
            this.arr.push(score);
            this.arr.sort((a,b) => b-a)
        }
    }

    get scoreCount(){
        return this.arr.length
    }

    get highestScore(){
        return this.arr[0]
    }

    get topFiveScore(){
        return this.arr.slice(0,5)
    }

    toString(){
        return `${this.nickName}: [${this.arr}]`;
    }
}

let player = new Player('Misho');

player.addScore(130);
player.addScore(0);
player.addScore(240);
player.addScore('Pesho');
console.log(player.topFiveScore[0]);
console.log(player.toString());
player.addScore(555);

console.log(player.toString());




