var MessageView = {

  render: (message) => {
    if (message.username && message.text) {
      var template = _.template(`
        <div class="chat">
          <div class="username">  <%- username %></div>
          <div class="text"    >  <%- text %></div>
        </div>
      `);
      $('#chats').append(template(message));
    }
  }

};