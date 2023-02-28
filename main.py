def on_button_pressed_a():
    if menu == 0:
        fanData[0] = (fanData[0] + 1) % 5
        basic.show_number(fanData[0])
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if menu == 0:
        menu = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_button_pressed_ab():
    if menu == 0:
        temp = "" + str(fanData[0]) + ("" + str(fanData[1]))
        for i in range(2, 6):
            if fanData[i] < 10:
                temp += "0"
                temp += "" + ("" + ("" + str(fanData[i])))
            else:
                temp += "" + ("" + ("" + str(fanData[i])))
        radio.send_string(temp)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    basic.clear_screen()
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

radio.set_group(1)
radio.set_transmit_power(7)
fanData = [0, 5, 2, 30, 5, 25]
menu = 0
basic.show_number(fanData[0])