document.addEventListener('DOMContentLoaded', function () {
  var options = {
    autoClose: true
  };
  var elems = document.querySelector('.datepicker');
  var instance = M.Datepicker.init(elems, options);
  // instance.open();
});

notes = []

function saveNewTask() {

  let date = document.querySelector('.datepicker').value;
  let text = document.querySelector('.newTask').value;
  let title = document.querySelector('.taskName').value;


  let taskElement = `<div class="smallNote card">
    <div class="card-content">
    <span class="card-title showTaskName">${title}</span>
    <div class="showTaskTime">${date}</div>
    <div class="showTask">${text}</div>
    </div>
    <a class="delete btn-floating halfway-fab waves-effect waves-light teal lighten-2 "
    ><i class="material-icons">delete</i></a> </div>`;

  $('.taskList').append(taskElement);

  let note = {
    date: date,
    text: text,
    title: title
  }

  // save in local storage
  if (localStorage.getItem('notes')) {
    let n = JSON.parse(localStorage.getItem('notes'));
    n.push(notes);
    localStorage.setItem("notes", JSON.stringify(n));
  } else { //new list
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  $('body').on('click', 'a.delete', function () {
    var cur = $(this);
    cur.parent().remove();
  });
}


// Validdaitors

function require(empty) {

}
