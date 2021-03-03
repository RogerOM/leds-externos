function green (núm: number) {
    pins.digitalWritePin(DigitalPin.P1, núm)
}
// colores primarios RGB
input.onButtonPressed(Button.A, function () {
    red(1)
    green(0)
    blue(0)
    basic.pause(1000)
    red(0)
    green(1)
    blue(0)
    basic.pause(1000)
    red(0)
    green(0)
    blue(1)
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
    red(randint(0, 1))
    green(randint(0, 1))
    blue(randint(0, 1))
})
// colores secundarios amarillo-cyan-magenta
input.onButtonPressed(Button.B, function () {
    red(1)
    green(1)
    blue(0)
    basic.pause(1000)
    red(0)
    green(1)
    blue(1)
    basic.pause(1000)
    red(1)
    green(0)
    blue(1)
    basic.pause(1000)
})
function blue (núm: number) {
    pins.digitalWritePin(DigitalPin.P2, núm)
}
function red (núm: number) {
    pins.digitalWritePin(DigitalPin.P0, núm)
}
red(1)
green(1)
blue(1)
