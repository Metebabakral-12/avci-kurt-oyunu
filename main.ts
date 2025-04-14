basic.showIcon(IconNames.Ghost)
basic.pause(100)
let AVcı = game.createSprite(2, 2)
let KUrt = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (AVcı.isTouching(KUrt)) {
        game.addScore(1)
        KUrt.delete()
        KUrt = game.createSprite(randint(0, 4), randint(0, 4))
    }
    if (input.acceleration(Dimension.X) > 0) {
        AVcı.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < 0) {
        AVcı.change(LedSpriteProperty.X, -1)
    }
    if (input.acceleration(Dimension.Y) < 0) {
        AVcı.change(LedSpriteProperty.Y, -1)
    }
    if (input.acceleration(Dimension.Y) > 0) {
        AVcı.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(500)
})
