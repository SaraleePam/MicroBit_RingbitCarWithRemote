radio.onReceivedNumberDeprecated(function (receivedNumber) {
    basic.pause(2)
    radio2 = receivedNumber
})
let radio2 = 0
basic.showIcon(IconNames.Cow)
radio.setGroup(7)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
	
})
basic.forever(function () {
    if (radio2 == 1) {
        RingbitCar.freestyle(50, 43)
        basic.pause(4000)
        RingbitCar.brake()
        basic.pause(1000)
        RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 135)
        basic.pause(2000)
        RingbitCar.brake()
        basic.pause(1000)
        RingbitCar.freestyle(49, 43)
        basic.pause(4000)
        RingbitCar.brake()
        basic.pause(1000)
        RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 145)
        basic.pause(2000)
        RingbitCar.brake()
        basic.pause(1000)
    } else if (radio2 == 2) {
        RingbitCar.freestyle(50, 43)
        basic.pause(4000)
        RingbitCar.brake()
        basic.pause(1000)
        RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 145)
        basic.pause(2000)
        RingbitCar.brake()
        basic.pause(1000)
        RingbitCar.freestyle(50, 43)
        basic.pause(4000)
        RingbitCar.brake()
        basic.pause(1000)
        RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 153)
        basic.pause(2000)
        RingbitCar.brake()
        basic.pause(1000)
    } else if (radio2 == 3) {
        RingbitCar.freestyle(0, 50)
        basic.pause(4000)
        RingbitCar.brake()
    } else if (radio2 == 4) {
        RingbitCar.brake()
        basic.pause(5000)
    } else {
        radio2 = 0
    }
})
