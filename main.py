def on_button_pressed_a():
    fanData[changeAt] -= 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    fanData[changeAt] += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_button_pressed_ab():
    global changeAt
    basic.clear_screen()
    if changeAt == 0:
        if fanData[0] == 0:
            pass
        elif fanData[0] == 1 or fanData[0] == 2:
            changeAt = 1
        elif fanData[0] == 3:
            changeAt = 4
        elif fanData[0] == 4:
            changeAt = 2
    elif changeAt == 1:
        if fanData[0] == 1:
            changeAt = 0
        else:
            changeAt = 2
    elif changeAt == 2:
        changeAt = 3
    elif changeAt == 3:
        if fanData[0] == 2:
            changeAt = 0
        else:
            changeAt = 4
    elif changeAt == 4:
        changeAt = 5
    elif changeAt == 5:
        changeAt = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_forever():
    global changeAt
    basic.show_number(fanData[changeAt])
    if changeAt == 0:
        if fanData[changeAt] < 0:
            fanData[changeAt] = 4
        elif fanData[changeAt] > 4:
            fanData[changeAt] = 0
    elif changeAt == 1:
        if fanData[changeAt] < 1:
            fanData[changeAt] = 9
        elif fanData[changeAt] > 9:
            fanData[changeAt] = 1
    elif changeAt == 2:
        if fanData[changeAt] < 0:
            fanData[changeAt] = 23
        elif fanData[changeAt] > 23:
            fanData[changeAt] = 0
    elif changeAt == 3:
        if fanData[changeAt] < 0:
            fanData[changeAt] = 59
        elif fanData[changeAt] > 59:
            fanData[changeAt] = 0
    elif changeAt == 4:
        if fanData[changeAt] < 0:
            fanData[changeAt] = 98
        elif fanData[changeAt] > 98:
            fanData[changeAt] = 0
    elif changeAt == 5:
        if fanData[changeAt] <= fanData[4]:
            fanData[changeAt] = 99
        elif fanData[changeAt] > 99:
            fanData[changeAt] = fanData[4] + 1
    if input.light_level() == 0:
        temp = ""
        for i in range(6):
            if fanData[i] < 10:
                temp += 0
                temp += fanData[i]
            else:
                temp += fanData[i]
        radio.send_string(temp)
        changeAt = 0
basic.forever(on_forever)

radio.set_group(1)
radio.set_transmit_power(7)
fanData = [0, 5, 3, 30, 15, 25]
changeAt = 0