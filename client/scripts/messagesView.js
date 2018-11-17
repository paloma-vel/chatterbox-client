var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll((data) => {
      for (var i = 0; i < data.results.length; i++) {
        var message = data.results[i];
        if (message.username) {
          MessagesView.renderMessage((data.results[i]));
        }
      }
    });
  },

  render: function() {
  },
  
  renderMessage: function(message) {
    MessageView.render(message);
  }

};