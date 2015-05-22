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
            self.authData.email = authData.password.email;
            self.authData.userId = authData.uid;
            return Promise.resolve(self.authData);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    }

    function addUser(user) {
        //first add the user and then insert the teams separately
        delete user.password;
        return users.$add(user);
    }

    return {
        authData : {},

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
                    id : userData.key(),
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

        getTeams : function () {
            return teams;
        }
    }

}]);