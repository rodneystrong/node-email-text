angular.module("emailApp")
.service("messageServ", function($http) {

  this.sendText = (message) => {
        return $http({
            method: "POST",
            url: "/text",
            data: message
        }).then((response) => {
            return response.data;
        });
    };

    this.sendEmail = (email) => {
        return $http({
            method: "POST",
            url: "/email",
            data: email
        }).then((response) => {
            return response.data;
        });
    };
});
