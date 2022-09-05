var Fan = /** @class */ (function () {
    function Fan(color, radius) {
        this.slow = "slow";
        this.medium = "medium";
        this.fast = "fast";
        this.speed = this.slow;
        this.status = false;
        this.radius = 5;
        this.color = "blue";
        this.color = color;
        this.radius = radius;
    }
    Fan.prototype.setFan = function (value) {
        if (value !== " ") {
            this.status = true;
        }
        else {
            this.status = false;
        }
        switch (value) {
            case this.slow:
                this.speed = value;
                break;
            case this.medium:
                this.speed = value;
                break;
            case this.fast:
                this.speed = value;
                break;
        }
    };
    Fan.prototype.getFan = function () {
        if (this.status == true) {
            return this.speed + " " + this.color + " " + this.radius + " " + "Fan is on";
        }
        else
            return this.color + " " + this.radius + " " + "Fan is off";
    };
    return Fan;
}());
var fan = new Fan("blue", 120);
fan.setFan('fast');
console.log(fan.getFan());
