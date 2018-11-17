var Friends = {
  
  toggleStatus: (username) => {
    if (Friends.friendList.includes(username)) {
      var indexToRemove = Friends.friendList.indexOf(username);
      Friends.friendList.splice(indexToRemove, 1);
    } else {
      Friends.friendList.push(username);
    }
    console.log(Friends.friendList);
    Friends.addFriendClass();
  },
  
  includesUsername: (username) => {
    return (Friends.friendList.includes(username));
  },
  
  addFriendClass: () => {
    $('.chat').removeClass('friend');
    for (var i = 0; i < Friends.friendList.length; i++) {
      var currentFriendUsername = Friends.friendList[i];
      $('.username').filter(function() {
        return $.trim($(this).text()) === currentFriendUsername;
      }).parent().addClass('friend');
    }
  },
  
  friendList: []


};