function getResources(userSegment) {
  var responseFromServer = {
    "idleUrl": "https://cdn.glitch.com/70de237d-3155-4aee-89f1-4dffb32733f6%2F2_crop.gif?v=1572771897500",
    "typingUrl": "https://cdn.glitch.com/70de237d-3155-4aee-89f1-4dffb32733f6%2F2_crop.gif?v=1572771897500",
    "couponText": "Get limited cup 50% off!",
    "couponUrl": "https://www.amazon.com/adidas-Bottles-Training-Performance-Running/dp/B078TBLJ6P"
  };
  
  var obj = JSON.parse(responseFromServer);
  idleAvatarUrl = obj.idleUrl;
  typingAvatarUrl = obj.typingUrl;
  couponText = obj.couponText;
  couponUrl = obj.couponUrl;
  
}

getResources();


/* 
global idleAvatarUrl;
global typingAvatarUrl;
global couponText;
global couponUrl;
*/

