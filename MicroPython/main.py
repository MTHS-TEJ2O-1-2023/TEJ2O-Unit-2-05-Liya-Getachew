"""
Created by: Liya Getachew
Created on: Sep 2023
This module is a Micro:bit MicroPython program that shows the temperature in Kelvin.
"""

from microbit import *

display.clear()
display.show(Image.HAPPY)

# variable
temp = 0

while True:
    if button_a.is_pressed():
        temp = temperature()
        temp = temp + 273.15
        display.scroll("The temperature is " + str(temp) + " K.")
