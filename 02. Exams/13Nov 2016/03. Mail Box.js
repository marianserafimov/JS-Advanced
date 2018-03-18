class MailBox {
    constructor() {
        this.mailBoxArr = []
    }

    addMessage(subject, text){
        let arrOfSujebjectMessage = {subject:subject,text:text}
        this.mailBoxArr.push(arrOfSujebjectMessage)
    }

    get messageCount(){
        return this.mailBoxArr.length
    }

    deleteAllMessages(){
        this.mailBoxArr.splice(0,this.mailBoxArr.length)
    }

    findBySubject(substr){
        let arrOfObj = []

        for (var i = 0; i < this.mailBoxArr.length; i++) {
            let subject = this.mailBoxArr[i].subject
            let text = this.mailBoxArr[i].text
            var regex1 = RegExp(`${substr}`,'g');

            if(regex1.test(subject)){
                arrOfObj.push({subject:subject,text:text})
            }
        }
        return arrOfObj
    }

    toString(){
        if(this.mailBoxArr.length ===0){
            return '* (empty mailbox)'
        }else {
            let result = ``

            for (var i = 0; i < this.mailBoxArr.length; i++) {
                let subject = this.mailBoxArr[i].subject
                let text = this.mailBoxArr[i].text

                result+= `* [${subject}] ${text}\n`

            }
            return result
        }
    }
}
let mb = new MailBox();

mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");


let msgs = mb.findBySubject('ee');

console.log(msgs[0].text);

mb.deleteAllMessages();
console.log(mb.messageCount);
