angular.module('emailApp')
.controller('messageCtrl', function ($scope, messageServ) {
  $scope.sendEmail = (email) => {
      messageServ.sendEmail({
          toField: $scope.email.toField,
          subjectField: $scope.email.subjectField,
          textField: $scope.email.textField
      }).then((response) => {
          clearEmail();
      });
  };

  const clearEmail = () => {
      $scope.email = null;
      return alert("email received!");
  };


  $scope.sendText = (number, message) => {
      let newMessage = {
          to: [number],
          from: "+18013969302",
          message: message
      };
      messageServ.sendText(newMessage).then((response) => {
        clearText();
          $scope.message = response;
      });
  };
  const clearText = () => {
      $scope.text = null;
      return alert("Text received!");
    };
});
