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


  // join room event
  socket.on('join_room', function(data) {
    socket.join(data.dock_id);
  });


  // toggle event
  socket.on('toggle', function(data) {
    socket.broadcast.to(data.dock_id).emit('toggle', { message: 'Toggle button clicked.' });
  });

};
