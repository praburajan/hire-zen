/**
 * Created by praburajan on 24/05/15.
 */

'use strict';
var hireZen = hireZen || angular.module('hireZen',['ngRoute','firebase']);

hireZen.factory('UsersStore', ['$firebaseArray','$firebaseAuth', 'FIREBASE_URL',function ($firebaseArray, $firebaseAuth, FIREBASE_URL) {
    var fbRef = new Firebase(FIREBASE_URL);
    var usersRef = fbRef.child("users");
    var users = $firebaseArray(usersRef);

    var teamsRef = fbRef.child("teams");
    var teams = $firebaseArray(teamsRef);
    var auth = $firebaseAuth(fbRef);

    function createUser(user) {
        return auth.$createUser({
            email : user.email,
            password : user.password
        });
    }

    function authenticate(user) {
        var self = this;
        return auth.$authWithPassword({
            email : user.email,
            password : user.password
        }).then(function (authData) {
            self.authData = self.authData || {};
            self.authData.email = authData.password.email;
            self.authData.userId = authData.uid;
            self.authData.name = user.firstName + " " + user.lastName;
            return Promise.resolve(self.authData);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    }

    function logout() {
        return auth.$unauth();
    }

    function addUser(user) {
        //first add the user and then insert the teams separately
        delete user.password;
        return users.$add(user);
    }

    function resolveNameParts(email) {
        var nameParts = [];
        if(!email || email.length ===  0 || email.indexOf('@') === -1) {
            return nameParts;
        }
        //Split email id to form first name and last name - only caters to oracle email ids
        //TODO: need to make this logic generic or enhance register form to include first name and last name
        var prefix = email.indexOf('@') > -1 ? email.substring(0,email.indexOf('@')) : email;
        var parts = prefix.split('.');
        if(parts.length > 1) {
            //deriving first and last names from email id and capitalizing the first letters
            nameParts[0] = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
            nameParts[1] = parts[parts.length-1].charAt(0).toUpperCase() + parts[parts.length-1].slice(1);
        }
        else {
            //if there were no dots, then assume first name as the whole prefix
            nameParts[0] = parts[0];
        }
        return nameParts;
    }

    return {
        getUsers : function () {
            return users;
        },

        getUser : function (id) {
            return $firebaseArray.$getRecord(id);
        },

        createUser : function (user) {
            return createUser(user);
        },
        
        addUser : function (user) {
            //create payload object to return in the promise payload
            var payload = {};
            //create the user in firebase's auth system and login the user
            var p1 = createUser;
            var p2 = authenticate;
            var p3 = addUser;

            p1(user).then(function (userData) {
                payload.userId = userData.uid;
                console.log("Created user in firebase auth db with id "+userData.uid);
                return p2(user);
            }).then(function (authData) {
                payload.authData = authData;
                console.log("Authenticated user in firebase auth db with id "+authData.uid);
                return p3(user);
            }).then(function (userData) {
                payload.userData = {
                    userId : userData.key(),
                    index : users.indexOf(userData),
                    toString : function() {
                        return "id : "+this.id+" index : "+this.index;
                    }
                };
                console.log("User created in profile db successfully with details "+payload);
                return Promise.resolve(payload);
            }).catch(function (error) {
                console.error(error);
                return Promise.reject(error);
            });
        },

        authUser : function (user) {
            return authenticate.call(this,user);
        },

        logout : function () {
            delete this.authData;
            logout();
        },

        getTeams : function () {
            return teams;
        },

        resolveNamePartsFromEmail: function(email) {
            return resolveNameParts(email);
        },

        isAuthenticated : function () {
            console.log(this.authData);
            return (this.authData && this.authData.userId != 'undefined');
        }
    };

}]);