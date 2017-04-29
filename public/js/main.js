/* global $ */
var loginURL = 'http://127.0.0.1:7979/api/login'
var loginBtn = $('#loginBtn')
function successfulLogin () {
  window.location = 'http://127.0.0.1:7979/index.html'
}

function responseFail (error) {
  if (error === 500) {
    alert('We are having some difficulties Try again later')
  } else if (error === 400) {
    alert('Check your username and/or password!')
  }
  loginBtn.attr('disable', false)
}

function waitingForServer () {
  loginBtn.attr('disable', true)
}

function login () {
  var username = $('#loginInput').val()
  var password = $('#passwordInput').val()
  if (username !== '' && password !== '') {
    var data = { username: username, password: password }
    var grabingAPI = $.post(loginURL, data).done().fail(responseFail)
  } else {
    alert('Please enter username and password')
  }
}


loginBtn.click(login)
