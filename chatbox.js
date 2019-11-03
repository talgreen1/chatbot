function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {

        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string') {
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
}


var gender = getAllUrlParams().gender;
if (!gender) {
  gender = 'f';
}
console.log('******************************* gender = ' + gender);
var avatar = getAdAvatar(gender);

// var = agentFace = document.getElementById('agentFace');
// agentFace.style = "visibl"  avatarImage.src = avatar.typingUrl;

agentName = document.getElementById('agentName');
agentName.textContent = avatar.botFirstName + ' ' + avatar.botLastName;


// $('#agentFace').show();

var $messages = $('.messages-content'),
  d, h, m,
  i = 0;

$(window).load(function () {
  $messages.mCustomScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 100);
});


function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate() {
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    $('<div class="checkmark-sent-delivered">&check;</div>').appendTo($('.message:last'));
    $('<div class="checkmark-read">&check;</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 1000);//+ (Math.random() * 20) * 100);
}

$('.message-submit').click(function () {
  insertMessage();
});

$(window).on('keydown', function (e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  { msg: 'Hi there, I\'m ' + avatar.botFirstName + '. How can I help you?', wait: true }, //I'm looking for a store near by.
  { msg: 'What is your location?', wait: true }, // Airport city
  { msg: 'Wonderful! We have a store near by - Yeynot-Bitan', wait: false },
  { msg: 'I have a special suprise for you :) ', wait: false },
  { msg: '<div class="coupon"><div class="coupon__tag">✶ Coupon ✶</div><div class="coupon__body"><div class="coupon__title">Coca Cola</div><div class="coupon__value"><strong>-5$</strong></div></div></div>', wait: false },
  { msg: 'Is there anything else I can help you with?', wait: true }, // no, thank you
  { msg: 'Thank you. Have a great day!', wait: true }
]

function fakeMessage() {
  console.log('***************** in fakeMessage()');
  avatarImage = document.getElementById('avatar');
  $('#agentFace').show();
  avatarImage.src = avatar.typingUrl;
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="' + avatar.faceUrl + '" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  let wait = false;
  while (!wait) {
    const msg = Fake[i].msg;
    let j = i;
    setTimeout(function () {
      $('.message.loading').remove();
      $('<div class="message new"><figure class="avatar"><img src="' + avatar.faceUrl + '" /></figure>' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
      setDate();
      updateScrollbar();
      if(Fake[j].wait){
        avatarImage.src = avatar.idleUrl;
      }
  
    }, 2000 * (i + 1));

    wait = Fake[i].wait;
    i++;

  }

}

$('.button').click(function () {
  $('.menu .items span').toggleClass('active');
  $('.menu .button').toggleClass('active');
});

