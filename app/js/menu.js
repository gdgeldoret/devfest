mdc.autoInit()

var lists = document.querySelectorAll('.mdc-bottom-navigation__list');
var activatedClass = 'mdc-bottom-navigation__list-item--activated';
for (var i = 0, list; list = lists[i]; i++) {
  list.addEventListener('click', function(event) {
    var el = event.target;
    while (!el.classList.contains('mdc-bottom-navigation__list-item') && el) {
      el = el.parentNode;
    }
    if (el) {
      var selectRegex = /.*(demo-card-\d).*/;
      var activatedItem = document.querySelector('.' + event.target.parentElement.parentElement.parentElement.className.replace(selectRegex, '$1') + ' .' + activatedClass);
      if (activatedItem) {
        activatedItem.classList.remove(activatedClass);
      }
      event.target.classList.add(activatedClass);
    }
  });
}

var MDCSnackbar = mdc.snackbar.MDCSnackbar;
var snackbar = new MDCSnackbar(document.querySelector('#snackbar'));
var data =  {
  message: 'Archived',
  actionText: 'Undo',
  actionHandler: function() {
    console.log('Hi!');
  }
};
var show = function(sb) {
  snackbar.dismissesOnAction = true;
  sb.show(data);
};
  
var snackbarBtn = document.getElementById('show-snackbar');
snackbarBtn.addEventListener('click', function() {
  show(snackbar);
});
