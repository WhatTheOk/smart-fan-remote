input.onButtonPressed(Button.A, function on_button_pressed_a() {
    fanData[changeAt] -= 1
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    fanData[changeAt] += 1
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    if (changeAt == 0) {
        if (fanData[0] == 0) {
            
        } else if (fanData[0] == 1) {
            changeAt = 1
        } else if (fanData[0] == 2 || 4) {
            changeAt = 2
        } else if (fanData[0] == 3) {
            changeAt = 3
        }
        
    } else if (changeAt == 1) {
        changeAt = 0
    } else if (changeAt == 2) {
        changeAt = 3
    } else if (changeAt == 3) {
        if (fanData[0] == 2) {
            changeAt = 0
        } else {
            changeAt = 4
        }
        
    } else if (changeAt == 4) {
        changeAt = 5
    } else if (changeAt == 5) {
        changeAt = 0
    }
    
})
basic.forever(function on_forever() {
    let temp: string;
    
    basic.showNumber(fanData[changeAt])
    if (changeAt == 0) {
        if (fanData[changeAt] < 0) {
            fanData[changeAt] = 4
        } else if (fanData[changeAt] > 4) {
            fanData[changeAt] = 0
        }
        
    } else if (changeAt == 1) {
        if (fanData[changeAt] < 1) {
            fanData[changeAt] = 9
        } else if (fanData[changeAt] > 9) {
            fanData[changeAt] = 1
        }
        
    } else if (changeAt == 2) {
        if (fanData[changeAt] < 0) {
            fanData[changeAt] = 23
        } else if (fanData[changeAt] > 23) {
            fanData[changeAt] = 0
        }
        
    } else if (changeAt == 3) {
        if (fanData[changeAt] < 0) {
            fanData[changeAt] = 59
        } else if (fanData[changeAt] > 59) {
            fanData[changeAt] = 0
        }
        
    } else if (changeAt == 4) {
        if (fanData[changeAt] < 0) {
            fanData[changeAt] = 98
        } else if (fanData[changeAt] > 98) {
            fanData[changeAt] = 0
        }
        
    } else if (changeAt == 5) {
        if (fanData[changeAt] <= fanData[4]) {
            fanData[changeAt] = 99
        } else if (fanData[changeAt] > 99) {
            fanData[changeAt] = fanData[4] + 1
        }
        
    }
    
    if (input.lightLevel() == 0) {
        temp = "" + ("" + fanData[0]) + ("" + ("" + fanData[1]))
        for (let i = 2; i < 6; i++) {
            if (fanData[i] < 10) {
                temp += 0
                temp += fanData[i]
            } else {
                temp += fanData[i]
            }
            
        }
        radio.sendString(temp)
        changeAt = 0
    }
    
})
radio.setGroup(1)
radio.setTransmitPower(7)
let fanData = [0, 5, 3, 30, 15, 25]
let changeAt = 0
