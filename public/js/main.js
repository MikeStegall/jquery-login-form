/* global $ */
// var loginURL = 'http://127.0.0.1:7979/api/login'
var loginBtn = $('#loginBtn')
var errorFeedback = $('.error-feedback')

function successfulLogin (data) {
  window.location = 'http://127.0.0.1:7979/index.html'
}

function responseFail (error) {
  if (error.status === 400) {
    if (error.responseText === '{"error":"Invalid username."}') {
      errorFeedback.html('Your username is invalid')
    } else if (error.responseText === '{"error":"Invalid password."}') {
      errorFeedback.html('Your password is incorrect')
    }
  } else if (error.status === 500) {
    errorFeedback.html('We are having some difficulties.<br>Pleasr try again later.')
  }
  loginBtn.attr('disable', false)
}

function waitingForServer () {
  loginBtn.attr('disable', true)
}

function login (evt) {
  evt.preventDefault()
  var username = $('#loginInput').val()
  var password = $('#passwordInput').val()
  if (username !== '' && password !== '') {
    waitingForServer()
    var loginURL = 'http://127.0.0.1:7979/api/login'
    var data = { username: username, password: password }
    $.post(loginURL, data).done(successfulLogin).fail(responseFail)
  } else {
    errorFeedback.html('Please enter username and password')
  }
}

function randomNumber () {
  return Math.floor(Math.random() * 4 + 1)
}

loginBtn.click(login)
