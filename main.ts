function L () {
    if (!(gg.get(LedSpriteProperty.X) == 0)) {
        gg.move(-1)
    } else {
        gg.move(4)
    }
}
input.onButtonPressed(Button.A, function () {
    L2()
})
function win () {
    yy.delete()
    zd.delete()
    gg.delete()
    game.pause()
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("YOU WIN!")
}
function R2 () {
    if (!(yy.get(LedSpriteProperty.X) == 4)) {
        yy.move(1)
    } else {
        yy.move(-4)
    }
}
function L2 () {
    if (!(yy.get(LedSpriteProperty.X) == 0)) {
        yy.move(-1)
    } else {
        yy.move(4)
    }
}
input.onButtonPressed(Button.B, function () {
    R2()
})
function R () {
    if (!(gg.get(LedSpriteProperty.X) == 4)) {
        gg.move(1)
    } else {
        gg.move(-4)
    }
}
let p = 0
let zd: game.LedSprite = null
let gg: game.LedSprite = null
let yy: game.LedSprite = null
game.startCountdown(20000)
yy = game.createSprite(2, 4)
gg = game.createSprite(2, 0)
let cd = 0
basic.forever(function () {
    p = randint(0, 3)
    if (p == 0) {
        L()
    } else {
        if (p == 1) {
            R()
        }
    }
    basic.pause(500)
})
basic.forever(function () {
    cd += -1
    basic.pause(1000)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB) && cd <= 0) {
        cd = 2
        zd = game.createSprite(yy.get(LedSpriteProperty.X), 3)
        zd.set(LedSpriteProperty.Direction, 0)
        while (!(zd.get(LedSpriteProperty.Y) == 0)) {
            zd.move(1)
            if (gg.isTouching(zd)) {
                win()
            }
            basic.pause(100)
        }
        zd.delete()
    }
})
