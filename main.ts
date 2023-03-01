input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (menu == 0) {
        fanData[0] = (fanData[0] + 1) % 5
        basic.showNumber(fanData[0])
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    let menu: number;
    if (menu == 0) {
        menu = 1
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    let temp: string;
    if (menu == 0) {
        temp = "" + fanData[0] + fanData[1]
        for (let i = 2; i < 6; i++) {
            if (fanData[i] < 10) {
                temp += 0
                temp += fanData[i]
            } else {
                temp += fanData[i]
            }
            
        }
        radio.sendString(temp)
    }
    
})
radio.setGroup(1)
radio.setTransmitPower(7)
let fanData = [5, 9, 23, 59, 99, 99]
let menu = 0
basic.showNumber(fanData[0])
