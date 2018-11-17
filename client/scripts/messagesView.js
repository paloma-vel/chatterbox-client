var MessagesView = {

  $chats: $('#chats'),

  // initialize: function() {
  //   MessagesView.render();
  //   // $('.username').on('click', function(event) {
  //   //   console.log('here');
  //   //   Friends.toggleStatus(event.target.innerText);
  //   // });
  // },

  // render: function() {
  //   App.fetch((data) => {
  //     Messages.messages = data.results;
  //     for (var i = 0; i < Messages.messages.length; i++) {
  //       MessagesView.renderMessage(Messages.messages[i]);
  //     }
  //   });
  // },
  
  // renderMessage: function(message) {
  //   MessageView.render(message);
  // }
  
  initialize: function() {
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
      MessageView.renderMessage(Messages.messages[i]);
    }
  }

};