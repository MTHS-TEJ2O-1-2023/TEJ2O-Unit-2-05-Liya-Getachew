/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Liya Getachew
 * Created on: Sep 2023
 * This program ...
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

// variable
let temperature: number

input.onButtonPressed(Button.A, function () {
  // input
  temperature = input.temperature()

  // process
  temperature = temperature + 273.15
  temperature =  Math.round(temperature)

  // output
  basic.showString('The temperature is ' + temperature.toString() + 'K.')
})
