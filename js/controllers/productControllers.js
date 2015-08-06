'use strict';

/* Controllers */

var productControllers = angular.module('productControllers', []);


productControllers.controller('ProductListController', ['$scope', 'Product',
  function($scope, Product) {
    $scope.products = Product.query('description');
    $scope.orderProp = 'list_price';

    $scope.byRange = function(fieldName, minValue, maxValue) {
      if (minValue === undefined) minValue = '1';
      if (maxValue === undefined) maxValue = '500';
      
      return function predicateFunc(item) {
        return minValue <= item[fieldName] && item[fieldName] <= maxValue;
      };
    };
  }]);


productControllers.controller('ProductDetailController', ['$scope', '$routeParams', 'Product',
  function($scope, $routeParams, Product) {
    $scope.product = Product.get({productId: $routeParams.productId}, function(product) {
      $scope.mainImageUrl = product.image[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);