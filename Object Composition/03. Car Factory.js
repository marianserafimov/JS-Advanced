function carFactory(carHeWants) {
    return carHeNeeds :{
        model : carHeWants.model
        engine :{
            if (carHeWants.power <= 90) {
                power: 90,
                    volume:1800
            } else if (carHeWants.power <= 120) {
                power: 120,
                    volume:2400
            } else {
                power: 200,
                    volume:3500


            }
        }
        carriage:{
            type : carHeWants.carriage
            color : carHeWants.color
        }
        wheels : function wheelsizeee() {
            if (carHeWants.wheelsize % 2 !== 1) {
                return [carHeWants.wheelsize, carHeWants.wheelsize, carHeWants.wheelsize, carHeWants.wheelsize]
            } else {
                return [carHeWants.wheelsize - 1, carHeWants.wheelsize - 1, carHeWants.wheelsize - 1, carHeWants.wheelsize - 1]
            }
        }
    }
}