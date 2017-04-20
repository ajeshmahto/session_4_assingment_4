"use strict";
exports.__esModule = true;
var User = (function () {
    function User() {
    }
    User.prototype.setName = function (person) {
        this.username = person.username;
    };
    User.prototype.getName = function () {
        return this.username;
    };
    return User;
}());
exports.User = User;
var GenericUser = (function () {
    function GenericUser() {
    }
    GenericUser.prototype.setName = function (username) { this.username = username; };
    ;
    GenericUser.prototype.getName = function () {
        return this.username;
    };
    return GenericUser;
}());
var myUser = new GenericUser();
myUser.setName("ajesh");
console.log(myUser.getName());
var person = {
    username: "testname"
};
var secondUser = new User();
secondUser.setName(person);
console.log(secondUser.getName());
