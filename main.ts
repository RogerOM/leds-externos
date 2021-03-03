function green (núm: number) {
    pins.analogWritePin(AnalogPin.P1, núm)
}
// colores primarios RGB
input.onButtonPressed(Button.A, function () {
    red(1023)
    green(0)
    blue(0)
    basic.pause(1000)
    red(0)
    green(1023)
    blue(0)
    basic.pause(1000)
    red(0)
    green(0)
    blue(1023)
    basic.pause(1000)
})
// al azar
input.onButtonPressed(Button.AB, function () {
    red(randint(0, 1023))
    green(randint(0, 1023))
    blue(randint(0, 1023))
})
// colores terciarios - combinaciones de ejemplo de las muchas que hay
input.onButtonPressed(Button.B, function () {
    red(500)
    green(1000)
    blue(0)
    basic.pause(1000)
    red(0)
    green(500)
    blue(1000)
    basic.pause(1000)
    red(1000)
    green(0)
    blue(500)
    basic.pause(1000)
})
function blue (núm: number) {
    pins.analogWritePin(AnalogPin.P2, núm)
}
function red (núm: number) {
    pins.analogWritePin(AnalogPin.P0, núm)
}
red(randint(0, 1023))
green(randint(0, 1023))
blue(randint(0, 1023))
