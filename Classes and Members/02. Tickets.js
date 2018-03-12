function solve(ticketArrStr, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }

    let unsortedArr = []
    for (let ticket of ticketArrStr) {
        let [destination,price,status] = ticket.split("|")
        unsortedArr.push(new Ticket(destination,price,status))
    }



    let sortedArr
    switch (sortCriteria){
        case "destination":
            sortedArr = unsortedArr.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case "price":
            sortedArr = unsortedArr.sort((a, b) => a.price - b.price);
            break;
        case "status":
            sortedArr = unsortedArr.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return sortedArr
}

console.log(solve(['Philadelphia|94.20|available'], 'status'));