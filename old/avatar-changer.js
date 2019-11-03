function updateAvatarTyping() {
  console.log("##updateAvatarTyping ####" + typingAvatarUrl)
  avatarDiv.style = ""
  avatarImage.src = typingAvatarUrl;
}

function updateAvatarIdle() {
  console.log("###updateAvatarIdle###" + idleAvatarUrl)
  avatarImage.src = idleAvatarUrl;
}


/*

global botTyping
global avatarImage
global idleAvatarUrl
global typingAvatarUrl
global avatarDiv

*/