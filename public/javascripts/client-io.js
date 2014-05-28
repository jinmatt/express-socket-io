$(document).ready(function() {
  var socket = io.connect('http://localhost:3000');

  socket.on('entrance', function(data) {
    socket.emit('join_room', { dock_id: $('.dock-id').text() });
    $('.socket-log').append('<p>' + data.message + '</p>');
  });

  socket.on('toggle', function(data) {
    $('.socket-log').append('<p>' + data.message + '</p>');
  });

  $('.btn-toggle').click(function(e) {
    socket.emit('toggle', { message: 'button toggle', dock_id: $('.dock-id').text() });
  });

});
