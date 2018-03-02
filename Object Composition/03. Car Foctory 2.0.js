function carFact(carHeWantss) {
    let modelHeWants = carHeWantss.model
    let powerHeWants = carHeWantss.power
    let colorHeWants = carHeWantss.color
    let carriageHeWants = carHeWantss.carriage
    let wheelsHeWants = carHeWantss.wheelsize

    let engineWePredlagame = {power:90,volume:1800}
    if (powerHeWants <= 90) {
        engineWePredlagame = {power: 90, volume: 1800}
    } else if (powerHeWants <= 120) {
        engineWePredlagame =  {power: 120, volume: 2400}
    } else {
        engineWePredlagame =  {power: 200, volume: 3500}
    }

    let wheelWePredlagame = [wheelsHeWants, wheelsHeWants, wheelsHeWants, wheelsHeWants]
    if(wheelsHeWants%2===0){
        wheelWePredlagame = [wheelsHeWants - 1, wheelsHeWants - 1, wheelsHeWants - 1, wheelsHeWants - 1]
    }

    let carWePredlagame = {
        model: modelHeWants,
        engine: engineWePredlagame,
        carriage: {
            type: carriageHeWants,
            color: colorHeWants
        },
        wheels: wheelWePredlagame
    }
    return carWePredlagame
}

console.log(carFact({
    model: 'vw golf 2',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));