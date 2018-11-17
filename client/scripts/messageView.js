var MessageView = {

  render: (message) => {
    var template = _.template(`
      <div class="chat">
        <div class="username"><%=username%></div>
        <div><%=text%></div>
      </div>
    `);
    $('#chats').append(template(message));
  }

};