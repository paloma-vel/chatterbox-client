var MessagesView = {

  $chats: $('#chats'),
  
  initialize: function() {
    $('.chat').remove();
    App.fetch((data) => {
      Messages.messages = data.results;
      MessagesView.render();
      $('.username').on('click', function(event) {
        Friends.toggleStatus(event.target.innerText);
      });
    });
  },
  
  render: function() {
    for (var i = 0; i < Messages.messages.length; i++) {
      var currentMessage = Messages.messages[i];
      // show only messages in the current room when a room is specified
      if (currentMessage.roomname === Rooms.currentRoom) {
        MessageView.renderMessage(currentMessage);
      }
    }
  }

};