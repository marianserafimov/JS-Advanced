function result() {
    let countOfEachType = {}
    for (var i = 0; i < arguments.length; i++) {
        var argumentsValue = arguments[i];
        console.log(`${typeof argumentsValue}: ${argumentsValue}`)
        if(!countOfEachType[typeof argumentsValue]){
            countOfEachType[typeof argumentsValue] = 0
        }
        countOfEachType[typeof argumentsValue]++
    }
    
}
result('cat', 42, function () { console.log('Hello world!') })
