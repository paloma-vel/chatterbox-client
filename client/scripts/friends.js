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
    for (var i = 0; i < Friends.friendList.length; i++) {
      var currentFriendUsername = Friends.friendList[i];
      // if a chat item contains the username
      // add friend class
    }
    MessagesView.render();
  },
  
  friendList: []


};