var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('.option').remove();
    
    App.fetch((data) => {
      // make 'lobby' be the first room in the dropdown menu
      RoomsView.renderRoom('lobby');
      
      // populate Rooms.rooms with all distinct roomNames
      for (var i = 0; i < data.results.length; i++) {
        var roomname = data.results[i].roomname;
        if (roomname) {
          Rooms.rooms.add(roomname.trim());
        } else {
          // if roomname is falsey, default to 'lobby'
          Rooms.rooms.add('lobby');
        }
      }
      
      // add the distinct roomNames to the rooms dropdown
      RoomsView.render();
      
      // storing selected room in Rooms.currentRoom
      $('#rooms select').on('change', function() {
        var text = $("#rooms select option:selected").text();
        Rooms.currentRoom = text;
        MessagesView.initialize();
      });
      
    });
    
    // bind addRoom functionality to 'add room' button
    $('#addRoomButton').on('click', function(event) {
      var roomName = $('#addRoomText').val();
      RoomsView.renderRoom(roomName);
    });
    
  },

  render: function() {
    // call renderRoom on all existing rooms
    Rooms.rooms.forEach(function(roomname) {
      RoomsView.renderRoom(roomname);
    });
    
  },
  
  renderRoom: function(roomName) {
    $('#rooms select').append(`<option class="option" value="${roomName}">${roomName}</option>`);
  }

};
