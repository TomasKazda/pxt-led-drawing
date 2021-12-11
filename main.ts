let x = 2
let y = 2
let currentState = false
led.plot(x, y)

// input.onGesture(Gesture.TiltLeft, function() {
//     doMove(x - 1, y)
// })

input.onButtonPressed(Button.A, function() {
    doMove(x - 1, y)
})
input.onButtonPressed(Button.B, function () {
    doMove(x + 1, y)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    doMove(x, y - 1)
})
input.onButtonPressed(Button.AB, function () {
    doMove(x, y + 1)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function() {
    currentState = !currentState
})

function doMove(newX: number, newY: number) {
    if (currentState) led.plot(x, y)
    else led.unplot(x, y)
    //y = Math.constrain(newY, 0, 4)
    y = myConstrain(newY, 0, 4)
    x = myConstrain(newX, 0, 4)
    currentState = led.point(x, y)
}

function myConstrain(value: number, min: number, max: number) {
    let newNumber = value
    if (value < min) newNumber = min
    if (value > max) newNumber = max
    return newNumber
}

basic.forever(function () {
   led.toggle(x, y)
   basic.pause(300)
})
