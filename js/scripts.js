$(document).ready(function() {
  $("#formOne").submit(function() {
    var name = $('#name1').val();
    $('.name span').text(name);
    $('#letter').show();
    event.preventDefault();
  });
});
