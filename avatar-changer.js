function updateAvatar() {
  if(botTyping){
      avatarImage.src = typingAvatarUrl;
  } else {
      avatarImage.src = idleAvatarUrl;
  }
}


/*

global botTyping
global avatarImage
global idleAvatarUrl
global typingAvatarUrl

*/