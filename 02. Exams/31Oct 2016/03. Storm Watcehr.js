let Record =(function () {
    let colsureId = 0

    class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = colsureId++
            this.temperature = temperature
            this.humidity = humidity
            this.pressure = pressure
            this.windSpeed = windSpeed
        }

        get status() {
            if (this.temperature < 20 && this.windSpeed > 25) {
                if (this.pressure < 700 || this.pressure > 900) {
                    return 'Stormy'
                }
            } else {
                return 'Not stormy'
            }
        }

        toString() {
            let result = `Reading ID: ${this.id}
Temperature: ${this.temperature}*C
Relative Humidity: ${this.humidity}%
Pressure: ${this.pressure}hpa
Wind Speed: ${this.windSpeed}m/s
Weather: ${this.status}`

            return result
        }
    }
})()
