$(document).ready(function() {
  var socket = io.connect('http://localhost:3000');

  socket.on('entrance', function(data) {
    $('.socket-log').append('<p>' + data.message + '</p>');
  });

});
