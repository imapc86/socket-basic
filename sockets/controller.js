
const socketController = (socket) => {
    
  console.log(`Cliente conectado con id: ${socket.id}` );

  socket.on('disconnect', () => {
    console.log('Cliente desconectado', socket.id );
  });

  socket.on('enviar-mensaje', ( payload, callback ) => {
    
    console.log(payload);
    const id = 123456789;
    callback( `Confirmación: ${id}` );
    
    socket.broadcast.emit('enviar-mensaje', payload );

  })

}


module.exports = {
  socketController
}
