class Fan {
    slow: string = "slow"
    medium: string = "medium"
    fast: string = "fast"
    private speed: string = this.slow
    private status: boolean = false
    private radius: number = 5
    private color: string = "blue"

    constructor(color, radius) {
        this.color = color
        this.radius = radius
    }

    setFan(value: string) {
        if (value !== " ") {
            this.status = true
        } else {
            this.status = false
        }
        switch (value) {
            case this.slow:
                this.speed = value
                break
            case this.medium:
                this.speed = value
                break
            case this.fast:
                this.speed = value
                break
        }
    }

    getFan() {
        if (this.status == true) {
            return this.speed + " " + this.color + " " + this.radius + " " + "Fan is on"
        } else return this.color + " " + this.radius + " " + "Fan is off"
    }

}

let fan = new Fan("blue", 120)
fan.setFan('fast')
console.log(fan.getFan())