var Refresh = {
  
  initialize: function() {
    $('#refreshButton').on('click', function(event) {
      MessagesView.initialize();
    });
  }
  
}