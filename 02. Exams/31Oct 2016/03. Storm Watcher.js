(function stormWaatcher() {
    let id = 0

    class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
            this.bool = true
            this.id = id++
        }

        get temperature() {
            return this._temperature;
        }

        set temperature(value) {
            if(this.temperature>=20){
                this.bool = false
            }

            this._temperature = value;
        }

        get bool() {
            return this._bool;
        }

        set bool(value) {
            this._bool = value;
        }

        get humidity() {
            return this._humidity;
        }

        set humidity(value) {
            this._humidity = value;
        }

        get pressure() {
            return this._pressure;
        }

        set pressure(value) {
            if(this.pressure>=700 && this.pressure<=900){
                this.bool = false
            }
            this._pressure = value;
        }

        get windSpeed() {
            return this._windSpeed;
        }

        set windSpeed(value) {
            if(this.windSpeed<=25){
                this.bool = false
            }
            this._windSpeed = value;
        }

        toString(){
            console.log('Reading ID: ' + this.id)
            console.log(`Temperature: ${this.temperature}*C`)
            console.log(`Relative Humidity: ${this.humidity}%`)
            console.log(`Pressure: ${this.pressure}hpa`)
            console.log(`Wind Speed: ${this.windSpeed}m/s`)
            if(this.bool==true){
                console.log(`Weather: Stormy`)
            }else {
                console.log(`Weather: Not stormy`)
            }
        }
    }
})()

let res1 = stormWaatcher()


