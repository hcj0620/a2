KSB045.onBtnChanged(KSB045.btnName.C, KSB045.pushType.down, function () {
    music.ringTone(262)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
KSB045.onBtnChanged(KSB045.btnName.SW, KSB045.pushType.up, function () {
    KSB045.setVibration(KSB045.vibrate.off)
    basic.showIcon(IconNames.Sad)
})
KSB045.onBtnChanged(KSB045.btnName.D, KSB045.pushType.down, function () {
    basic.showString("D")
})
KSB045.onBtnChanged(KSB045.btnName.D, KSB045.pushType.up, function () {
    basic.clearScreen()
})
KSB045.onBtnChanged(KSB045.btnName.SW, KSB045.pushType.down, function () {
    KSB045.setVibration(KSB045.vibrate.on)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
})
KSB045.onBtnChanged(KSB045.btnName.E, KSB045.pushType.up, function () {
    basic.clearScreen()
})
KSB045.onBtnChanged(KSB045.btnName.F, KSB045.pushType.up, function () {
    basic.clearScreen()
})
KSB045.onBtnChanged(KSB045.btnName.F, KSB045.pushType.down, function () {
    basic.showString("F")
})
KSB045.onBtnChanged(KSB045.btnName.C, KSB045.pushType.up, function () {
    basic.clearScreen()
})
KSB045.onBtnChanged(KSB045.btnName.E, KSB045.pushType.down, function () {
    basic.showString("E")
})
basic.forever(function () {
	
})
