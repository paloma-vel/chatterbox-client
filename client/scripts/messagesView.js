var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    App.fetch((data) => {
      Messages.messages = data.results;
      for (var i = 0; i < Messages.messages.length; i++) {
        MessagesView.renderMessage(Messages.messages[i]);
      }
    });
  },
  
  renderMessage: function(message) {
    MessageView.render(message);
  }

};