'use strict';

exports.candidatesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * token (String)
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.chatGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * token (String)
  * idUser1 (String)
  * idUser2 (String)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.chatLastPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * token (String)
  * message (Message)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : "aeiou",
  "success" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.chatMessagePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * token (String)
  * message (Message_1)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : "aeiou",
  "success" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.chatNewGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * token (String)
  * idUser1 (String)
  * idUser2 (String)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.chatsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * token (String)
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.interestsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * token (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "interests" : [ {
    "category" : "aeiou",
    "value" : "aeiou"
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.login_userPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * credentials (Credentials)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : "aeiou",
  "success" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.matchConfirmPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * token (String)
  * idFrom (String)
  * idTo (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : "aeiou",
  "success" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.matchGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * token (String)
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.matchNoPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * token (String)
  * idFrom (String)
  * idTo (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : "aeiou",
  "success" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.matchYesPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * token (String)
  * idFrom (String)
  * idTo (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : "aeiou",
  "success" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.userNewuserPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user (User)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : "aeiou",
  "success" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.userPhotoGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * token (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "photo" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.userUpdateuserPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user (User)
  * token (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : "aeiou",
  "success" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

