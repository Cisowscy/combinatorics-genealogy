var app = angular.module('app', ['ngTable']);
app.controller('MainCtrl', ['$scope', '$http','ngTableParams' ,
    function ($scope, $http, ngTableParams) {
    var tableData = [
    {
      "id" : 1,
      "primary" : {"name":"John", "age":"20"},
      "secondary" : {"name":"LINDA", "age":"23"}
    },
    {
      "id" : 2,
      "primary" : {"name":"SMITH", "age":"20"},
      "secondary" : {"name":"KATE", "age":"25"}
    },
    {
      "id" : 3,
      "primary" : {"name":"Sandeep", "age":"20"},
      "secondary" : {"name":"Sumanta", "age":"21"}
    },
    {
      "id" : 4,
      "primary" : {"name":"Bapi", "age":"20"},
      "secondary" : {"name":"Tapi", "age":"25"}
    },
    {
      "id" : 5,
      "primary" : {"name":"John", "age":"20"},
      "secondary" : {"name":"LINDA", "age":"23"}
    },
    {
      "id" : 6,
      "primary" : {"name":"SMITH", "age":"20"},
      "secondary" : {"name":"KATE", "age":"25"}
    },
    {
      "id" : 7,
      "primary" : {"name":"Sandeep", "age":"20"},
      "secondary" : {"name":"Sumanta", "age":"21"}
    },
    {
      "id" : 8,
      "primary" : {"name":"Bapi", "age":"20"},
      "secondary" : {"name":"Tapi", "age":"25"}
    },
    {
      "id" : 1,
      "primary" : {"name":"John", "age":"20"},
      "secondary" : {"name":"LINDA", "age":"23"}
    },
    {
      "id" : 2,
      "primary" : {"name":"SMITH", "age":"20"},
      "secondary" : {"name":"KATE", "age":"25"}
    },
    {
      "id" : 3,
      "primary" : {"name":"Sandeep", "age":"20"},
      "secondary" : {"name":"Sumanta", "age":"21"}
    },
    {
      "id" : 4,
      "primary" : {"name":"Bapi", "age":"20"},
      "secondary" : {"name":"Tapi", "age":"25"}
    },
    {
      "id" : 5,
      "primary" : {"name":"John", "age":"20"},
      "secondary" : {"name":"LINDA", "age":"23"}
    },
    {
      "id" : 6,
      "primary" : {"name":"SMITH", "age":"20"},
      "secondary" : {"name":"KATE", "age":"25"}
    },
    {
      "id" : 7,
      "primary" : {"name":"Sandeep", "age":"20"},
      "secondary" : {"name":"Sumanta", "age":"21"}
    },
    {
      "id" : 8,
      "primary" : {"name":"Bapi", "age":"20"},
      "secondary" : {"name":"Tapi", "age":"25"}
    },
    {
      "id" : 1,
      "primary" : {"name":"John", "age":"20"},
      "secondary" : {"name":"LINDA", "age":"23"}
    },
    {
      "id" : 2,
      "primary" : {"name":"SMITH", "age":"20"},
      "secondary" : {"name":"KATE", "age":"25"}
    },
    {
      "id" : 3,
      "primary" : {"name":"Sandeep", "age":"20"},
      "secondary" : {"name":"Sumanta", "age":"21"}
    },
    {
      "id" : 4,
      "primary" : {"name":"Bapi", "age":"20"},
      "secondary" : {"name":"Tapi", "age":"25"}
    },
    {
      "id" : 5,
      "primary" : {"name":"John", "age":"20"},
      "secondary" : {"name":"LINDA", "age":"23"}
    },
    {
      "id" : 6,
      "primary" : {"name":"SMITH", "age":"20"},
      "secondary" : {"name":"KATE", "age":"25"}
    },
    {
      "id" : 7,
      "primary" : {"name":"Sandeep", "age":"20"},
      "secondary" : {"name":"Sumanta", "age":"21"}
    },
    {
      "id" : 8,
      "primary" : {"name":"Bapi", "age":"20"},
      "secondary" : {"name":"Tapi", "age":"25"}
    },
    {
      "id" : 1,
      "primary" : {"name":"John", "age":"20"},
      "secondary" : {"name":"LINDA", "age":"23"}
    },
    {
      "id" : 2,
      "primary" : {"name":"SMITH", "age":"20"},
      "secondary" : {"name":"KATE", "age":"25"}
    },
    {
      "id" : 3,
      "primary" : {"name":"Sandeep", "age":"20"},
      "secondary" : {"name":"Sumanta", "age":"21"}
    },
    {
      "id" : 4,
      "primary" : {"name":"Bapi", "age":"20"},
      "secondary" : {"name":"Tapi", "age":"25"}
    },
    {
      "id" : 5,
      "primary" : {"name":"John", "age":"20"},
      "secondary" : {"name":"LINDA", "age":"23"}
    },
    {
      "id" : 6,
      "primary" : {"name":"SMITH", "age":"20"},
      "secondary" : {"name":"KATE", "age":"25"}
    },
    {
      "id" : 7,
      "primary" : {"name":"Sandeep", "age":"20"},
      "secondary" : {"name":"Sumanta", "age":"21"}
    },
    {
      "id" : 8,
      "primary" : {"name":"Bapi", "age":"20"},
      "secondary" : {"name":"Tapi", "age":"25"}
    }
  ];

    //Table configuration
    $scope.tableParams = new ngTableParams({
        page: 1,
        count: 6
    },{
        total:tableData.length, tableData
        //Returns the data for rendering
       
    });
}]);