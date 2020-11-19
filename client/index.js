const SERVER = 'http://localhost:3000/'

$("document").ready(() => {
  $("input[name='due_date']").val(new Date().toISOString().slice(0,10))
  if(!localStorage.getItem('token')) {
    hideAll()
    $("#login").show()
  } else {
    hideAll()
    userTodos()
  }
})

// Event Listeners Collections

// Login
$("#submitLogin").on('click', (event) => {
  event.preventDefault()
  if(!localStorage.getItem('token')) {
    // let email =  $('#email').val()
    // let password =  $('#password').val()
    // $('#email').val("")
    // $('#password').val("")
    let data = {}
    $("#loginForm").serializeArray().forEach(el => data[el.name.slice(6)] = el.value)
    $('#loginForm').trigger("reset")
    $.ajax({
      method: 'POST',
      url: SERVER + 'users/login/',
      data
    }).done(hasil => {
      success({ message: `Login successfully`})
      localStorage.setItem('token', hasil.token)
      hideAll()
      userTodos()
      $("#addTodo").show()
      $("#logout").show()
    }).fail(err => {
      error([err.responseJSON.errorMessage])
    })
  } else {
    error('you have to log out first')
  }
})

// Add User Todo
$("#addTodoForm").submit((event) => {
  event.preventDefault()
  const token = localStorage.getItem('token')

  let temp = $("#addTodoForm").serializeArray()
  let data = {}
  temp.forEach(el => data[el.name] = el.value )

  $.ajax({
    method: "post",
    url: SERVER + 'todos',
    headers: { token },
    data
  }).done(hasil => {
    userTodos()
    success({ message: `Todo "${hasil.title}" added successfully`})
    $('#addTodoForm').trigger("reset")
    $("input[name='due_date']").val(new Date().toISOString().slice(0,10))

  })
  .fail(err => {
    error(err.responseJSON.errorMessage)
  })
})

// Edit User Todo
$("#editTodo").submit(event => {
  event.preventDefault()
  const token = localStorage.getItem('token')
  let data = {}
  $("#editTodoForm").serializeArray().forEach(el => data[el.name] = el.value)
  let id = Number(data.id)
  delete data.id
  $('#editTodoForm').trigger("reset")
  $.ajax({
    method: 'put',
    url: SERVER + 'todos/' + id,
    headers: { token },
    data
  }).done(data => {
    $("#editTodo").hide()
    $("#addTodo").show()
    success({ message: `Todo with title "${data.title}" updated successfully` })
    userTodos()
  }).fail(err => {
    error(err.responseJSON.errorMessage)
    edit(id)
    userTodos()
  })
})

// Link Register Now!
$("#redirectRegister").on('click', e => {
  e.preventDefault()
  hideAll()
  $("#register").show()
})

$("#redirectLogin").on('click', e => {
  e.preventDefault()
  hideAll()
  $("#login").show()
})

// Register User
$("#registerForm").submit(e => {
  e.preventDefault()
  let data = {}
  $("#registerForm").serializeArray().forEach(el => data[el.name] = el.value)
  $('#registerForm').trigger("reset")
  $.ajax({
    method: 'post',
    url: SERVER + "users/register",
    data
  }).done(result => {
    success(result)
    hideAll()
    $("#login").show()
  }).fail(err => {
    error(err.responseJSON.errorMessage)
  })
})

// Log Out User
$("#logout").on('click', _=> {
  localStorage.removeItem('token')
  signOut()
  hideAll()
  $("#login").show()
})

// Functions Collections

// List user todo, and automatically clear user todo before
const userTodos = () => {
  const token = localStorage.getItem('token')

  $("#todoDone").empty()
  $("#todoNotYet").empty()
  $.ajax({
    method: 'get',
    url: SERVER + 'todos',
    headers: { token }
  }).done(hasil => {
    hasil.forEach(datum => {
      let status = `<div class="bg-success rounded p-1">
        <p style="color: #EEE; margin-bottom: 0; font-size: 15px;" >Done!</p></div>`
      if(!datum.status) status = `<a style="text-decoration: none;" onclick="done(${datum.id})">
      <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-check-square-fill" fill="green" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg></a>`
      date = new Date(datum.due_date)
      let todo = `
      <div class="card shadow bg-white mx-1 my-1" style="width: 13em; flex: 0 0 auto">
        <div class="card-header h5" style="text-align: center;">${datum.title}</div>
        <div class="card-body pb-2">
          <p class="card-text h6">${datum.description}</p>
          <div class="" style="text-align: center; font-family: 'Helvetica; font-size: 18pt; padding: 5px; border-radius: 20%">
            <div class="h3">${date.getDate()}</div>
            <span class="h6">${date.toLocaleString('default', { month: 'long' })}</span>,
            <span class="h6">${date.getFullYear()}</span>
          </div>
        </div>
        <div class="card-footer py-1 d-flex" style="justify-content: space-between;">
          <a style="text-decoration: none;" onclick="hapus(${datum.id})">
            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="red" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
            </svg></a>
          ${status}
          <a style="text-decoration: none;" onclick="edit(${datum.id})">
            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="blue" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg></a>
        </div>
      </div>
      `
      if(!datum.status) $("#todoNotYet").append(todo)
      else $("#todoDone").append(todo)
    })
      $("#todo").show()
      $("#logout").show() 
  }).fail(err => {
    error(err.responseJSON)
  })
}

// Mark as done a User Todo
function done(id) {
  const token = localStorage.getItem('token')
  $.ajax({
    method: 'patch',
    url: SERVER + 'todos/' + id,
    headers: { token }
  }).done(hasil => {
    userTodos()
  })
}

// Edit user Todo with Populated data from DB
async function edit(id) {
  try {    
    const token = localStorage.getItem('token')
    let result = await $.ajax({
      method: "get",
      url: SERVER + "todos/" + id,
      headers: { token }
    })
    hideAll()
    let date = new Date(result.due_date).toISOString().substring(0, 10)
    $("#editTodo").empty()
    $("#editTodo").append(`
    <div class="p-2 mx-0 mt-2 bg-info shadow rounded">
      <form id="editTodoForm" class="row mx-0">
        <input type="text" name="id" value="${result.id}" id="id">
        <div class="form-group col-2 mb-0">
          <input type="text" name="title" class='form-control' placeholder="Title" value="${result.title}"> 
        </div>
        <div class="form-group col-4 mb-0">
          <textarea class="form-control" name="description" rows="1" placeholder="Description">${result.description}</textarea>
        </div>
        <div class="form-group col-2 mb-0" >
          <input type="date" name="due_date" class="form-control" value="${date}">
        </div>
        <div class="input-group-prepend col-2">
          <div class="input-group-text">
            <input name="status" type="radio" value="false"  ${!result.status ? 'checked' : ""}>
            <div class="ml-2">Not yet</div>
          </div>
          <div class="input-group-text mx-2">
            <input name="status" type="radio" value="true" ${result.status ? 'checked' : ""}>
            <div class="ml-2">Done</div>
          </div>
        </div>
        <div class="form-group col-2 mb-0">
          <input type="submit" value="Edit Todo" class="form-control btn btn-success shadow">
        </div>
      </form>
    </div>
    `)
    userTodos()
    $("#id").hide()
    $("#addTodo").hide()
    $("#editTodo").show()
  } catch (error) {
    console.log(error.responseJSON)
  }
}

// Delete user Todo
function hapus(id) {
  const token = localStorage.getItem('token')

  $.ajax({
    method: 'delete',
    url: SERVER + 'todos/' + id,
    headers: { token }
  }).done(hasil => {
    userTodos()
  })
}

function hideAll() {
  $("#register").hide()
  $("#login").hide()
  $("#todo").hide()
  $("#addTodo").hide()
  $("#editTodo").hide() 
  $("#logout").hide() 
}

// Google sign in
function onSignIn(googleUser) {
  const token = googleUser.getAuthResponse().id_token;
  $.ajax({
    method: 'post',
    url: SERVER + "users/googleLogin",
    data: {token}
  }).done(hasil => {
    success({ message: `Login successfully`})
    localStorage.setItem('token', hasil.token)
    hideAll()
    userTodos()
    $("#addTodo").show()
    $("#logout").show()
  }).fail(err => {
    error([err.responseJSON.errorMessage])
  })
}

// Google sign out
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

function error(arr) {
  console.log(arr)
  if (typeof (arr) === 'object') {
    arr.forEach(el => {
      $("#error").append(`
        <div class="alert alert-danger p-0 my-1 text-center w-100" role="alert">${el}</div>
      `)
    })
  } else $("#error").append(`
    <div class="alert alert-danger p-0 my-1 text-center w-100" role="alert">${arr}</div>
  `) 
  $("#error").show()
  setTimeout(() => {
    $("#error").hide()
    $("#error").empty()
  }, 3000);
}

function success(arr) {
  console.log(arr)
  $("#success").append(`
    <div class="alert alert-success p-0 my-1 text-center w-100" role="alert">${arr.message}</div>
  `) 
  $("#success").show()
  setTimeout(() => {
    $("#success").hide()
    $("#success").empty()
  }, 4000);
}