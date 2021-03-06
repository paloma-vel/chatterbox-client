var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var username = App.username;
    var text = $('#message').val();
    var roomname = Rooms.currentRoom;
    var message = {
      username: username,
      text: text,
      roomname: roomname
    };
    Parse.create(message, () => {});
    MessagesView.initialize();
    $('#message').val("");
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};