input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    5000,
    0,
    255,
    0,
    3710,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . # # .
        . . . # .
        . . . # .
        . . . # #
        . . . # .
        `)
    basic.showLeds(`
        . # # . .
        . . # . .
        . . # . .
        . . # # #
        . . # . #
        `)
    basic.showLeds(`
        # # . . .
        . # . . .
        . # . . .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # # # . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        `)
})
