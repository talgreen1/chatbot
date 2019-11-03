function getAdAvatar(gender){
    if(gender === 'm') {
        return  {
            "idleUrl": "assets/avi/idle.gif",
            "typingUrl": "assets/avi/typing.gif",
            "faceUrl": "assets/avi/face.png",
            "couponText": "Get limited cup 50% off!",
            "couponUrl": "https://www.amazon.com/adidas-Bottles-Training-Performance-Running/dp/B078TBLJ6P",
            "botFirstName": "Avi",
            "botLastName": "Ulman"
          };
    } else {
        return  {
            "idleUrl": "assets/dorit/idle.gif",
            "typingUrl": "assets/dorit/typing.gif",
            "faceUrl": "assets/dorit/face.png",
            "couponText": "Get limited cup 50% off!",
            "couponUrl": "https://www.amazon.com/adidas-Bottles-Training-Performance-Running/dp/B078TBLJ6P",
            "botFirstName": "Dorit",
            "botLastName": "Rieur"
          };
    }
}