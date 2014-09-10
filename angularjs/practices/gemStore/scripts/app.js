/**
 * Created by thanhnguyen on 01/09/2014.
 */

(function() {
    var app = angular.module('gemStore', ['storeProducts']);

    app.controller('StoreController', ['$http',function($http) {
        /**
         * Those datas move to products.json
         */
//        this.products = [
//            {
//                name: 'Audi A4',
//                price: 200,
//                description: 'A modern model of Audi corporation with specifications as strong engine, auto drive, safely stop',
//                canPurchase: false,
//                reviews: [
//                    {
//                        stars: 5,
//                        body: "My dream is this auto, it look pretty all of body",
//                        author: "Johnsmeeth@gmail.com"
//                    },
//                    {
//                        stars: 4,
//                        body: "A product of a famous brand, it good for bussiness.",
//                        author: "dungnt@gmail.com"
//                    }
//                ]
//            },
//            {
//                name: 'BMW Q5',
//                price: 250,
//                description: "Nice SUV for your family with all modern features, best for your family travel",
//                canPurchase: true,
//                reviews: [
//                    {
//                        stars: 5,
//                        body: "a good product",
//                        author: "obama@gmail.com"
//                    }
//                ]
//            }
//        ];
        var store = this; // eo hieu tai sao
        store.products = [];

        $http.get('datas/products.json').success(function(resp) {
            store.products = resp;
        });

        this.delete = function() {
            $http.delete('datas/test.json')
                .success(function(resp) {
                    console.log('deleted: ', resp);
                 })
                .error(function(err) {
                    console.log('error: ', err);
                })
        }

        /**
         * header('Access-Control-Allow-Origin: *');
         * Header('Access-Control-Allow-Headers: origin, x-requested-with, content-type, accept');
         * header('Access-Control-Allow-Method: GET, POST, OPTIONS, DELETE');
         */

    }]);


    /**
     * Those move to directives
     */
//    app.controller('PanelController', function() {
//        this.tab = 1;
//
//        this.selectTab = function(setTab) {
//            this.tab = setTab;
//        }
//
//        this.isSelectedTab = function(tab) {
//
//            return this.tab === tab;
//        }
//    });
//
//
//    app.controller('ReviewController', function() {
//        this.review = {};
//
//        this.addReview = function(product) {
//            product.reviews.push(this.review);
//            this.review = {};
//        }
//    });

//    /**
//     * Directives - Those move to products.js
//     */
//    app.directive('productPanels', function() {
//        return {
//            restrict: 'EA',
//            templateUrl: 'views/productPanels.html',
//            controller: function() {
//                this.tab = 1;
//
//                this.selectTab = function(setTab) {
//                    this.tab = setTab;
//                };
//
//                this.isSelectedTab = function(tab) {
//
//                    return this.tab === tab;
//                };
//            },
//            controllerAs: 'panelCtrl'
//        }
//    });
//
//    app.directive('productReviews', function() {
//        return {
//            restrict: 'EA',
//            replace: true,
//            scope: {
//                review: "=currentReview"
//            },
//            templateUrl: 'views/productReviews.html'
//        };
//    });
//
//    app.directive('productReviewForm', function() {
//        return {
//            replace: true,
//            restrict: 'EA',
//            controller: function() {
//                this.review = {};
//
//                this.addReview = function(product) {
//                    product.reviews.push(this.review);
//                }
//            },
//            controllerAs: 'reviewCtrl',
//            templateUrl: 'views/productReviewForm.html'
//        }
//    });
})();