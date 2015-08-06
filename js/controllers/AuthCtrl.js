'use strict';

/* Controllers */

var authControllers = angular.module('authControllers', []);

authControllers.controller('AuthCtrl', ['$scope', '$location', function($scope, $location) {
  

    $scope.currentPath = $location.path();


  $scope.message = [
    { title:'The Auth Title', message:'Message from the AuthCtrl' }
  ];


    $scope.barcode = "Lenovo Laptop Computer";

    $scope.mainGridOptions = {
        dataSource: {
            type: "odata",
            transport: {
                read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
            },
            pageSize: 5,
            serverPaging: true,
            serverSorting: true
        },
        sortable: true,
        pageable: true,
        dataBound: function() {
            this.expandRow(this.tbody.find("tr.k-master-row").first());
        },
        columns: [{
            field: "FirstName",
            title: "First Name",
            width: "120px"
            },{
            field: "LastName",
            title: "Last Name",
            width: "120px"
            },{
            field: "Country",
            width: "120px"
            },{
            field: "City",
            width: "120px"
            },{
            field: "Title"
        }]
    };

    $scope.detailGridOptions = function(dataItem) {
        return {
            dataSource: {
                type: "odata",
                transport: {
                    read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
                },
                serverPaging: true,
                serverSorting: true,
                serverFiltering: true,
                pageSize: 5,
                filter: { field: "EmployeeID", operator: "eq", value: dataItem.EmployeeID }
            },
            scrollable: false,
            sortable: true,
            pageable: true,
            columns: [
            { field: "OrderID", title:"ID", width: "56px" },
            { field: "ShipCountry", title:"Ship Country", width: "110px" },
            { field: "ShipAddress", title:"Ship Address" },
            { field: "ShipName", title: "Ship Name", width: "190px" }
            ]
        };
    };


 $scope.onSeriesHover = function(e) {
                 kendoConsole.log(kendo.format("event :: seriesHover ({0})", e.value));
            };
    
            $scope.weather = new kendo.data.DataSource({
                transport: {
                    read: {
                         url: "http://demos.telerik.com/kendo-ui/service/Weather/SOFIA/2012/1",
                         dataType: "jsonp"
                    }
                }
            });

    $scope.showInContainer = function() {
        var date = new Date();
        date = kendo.toString(date, "HH:MM:ss.") + kendo.toString(date.getMilliseconds(), "000");
        $scope.notf2.show(date, "info");
    };
    $scope.dismissAll = function() {
        $scope.notf1.hide();
        $scope.notf2.hide();
    };






}]);