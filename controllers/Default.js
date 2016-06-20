'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.candidatesGET = function candidatesGET (req, res, next) {
  Default.candidatesGET(req.swagger.params, res, next);
};

module.exports.chatGET = function chatGET (req, res, next) {
  Default.chatGET(req.swagger.params, res, next);
};

module.exports.chatLastPUT = function chatLastPUT (req, res, next) {
  Default.chatLastPUT(req.swagger.params, res, next);
};

module.exports.chatMessagePOST = function chatMessagePOST (req, res, next) {
  Default.chatMessagePOST(req.swagger.params, res, next);
};

module.exports.chatNewGET = function chatNewGET (req, res, next) {
  Default.chatNewGET(req.swagger.params, res, next);
};

module.exports.chatsGET = function chatsGET (req, res, next) {
  Default.chatsGET(req.swagger.params, res, next);
};

module.exports.interestsGET = function interestsGET (req, res, next) {
  Default.interestsGET(req.swagger.params, res, next);
};

module.exports.login_userPUT = function login_userPUT (req, res, next) {
  Default.login_userPUT(req.swagger.params, res, next);
};

module.exports.matchConfirmPOST = function matchConfirmPOST (req, res, next) {
  Default.matchConfirmPOST(req.swagger.params, res, next);
};

module.exports.matchGET = function matchGET (req, res, next) {
  Default.matchGET(req.swagger.params, res, next);
};

module.exports.matchNoPOST = function matchNoPOST (req, res, next) {
  Default.matchNoPOST(req.swagger.params, res, next);
};

module.exports.matchYesPOST = function matchYesPOST (req, res, next) {
  Default.matchYesPOST(req.swagger.params, res, next);
};

module.exports.userNewuserPOST = function userNewuserPOST (req, res, next) {
  Default.userNewuserPOST(req.swagger.params, res, next);
};

module.exports.userPhotoGET = function userPhotoGET (req, res, next) {
  Default.userPhotoGET(req.swagger.params, res, next);
};

module.exports.userUpdateuserPUT = function userUpdateuserPUT (req, res, next) {
  Default.userUpdateuserPUT(req.swagger.params, res, next);
};
