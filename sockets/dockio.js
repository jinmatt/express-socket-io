var io = null;

exports.init = function(socket_io) {
  io = socket_io;
};

exports.dock_connect = function(socket) {
  // On entrance
  socket.emit('entrance', { message: 'Connected to Server. Dock socket id: ' + socket.id });

  socket.on('disconnect', function() {
    // do something to mark dock is offline
  });


  // toggle event
  socket.on('toggle', function(data) {
    console.log('Toggle button clicked');
    socket.emit('toggle', { message: 'Toggle button clicked.' });
  });
};
