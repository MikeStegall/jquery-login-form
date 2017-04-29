/* global $ */
var loginURL = 'http://127.0.0.1:7979/api/login'

function responseFail (error) {
  if (error === 500) {
    alert('We are having some difficulties Try again later')
  } else if (error === 400) {
    alert('Check your username and/or password!')
  }
}

function functionName() {

}
