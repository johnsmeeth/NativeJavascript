/**
 * Created by thanhnguyen on 04/09/2014.
 */
(function() {
    var app = angular.module('storeProducts', []);

    /**
     * Directives
     */
    app.directive('productPanels', function() {
        return {
            restrict: 'EA',
            templateUrl: 'views/productPanels.html',
            controller: function() {
                this.tab = 1;

                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };

                this.isSelectedTab = function(tab) {

                    return this.tab === tab;
                };
            },
            controllerAs: 'panelCtrl'
        }
    });

    app.directive('productReviews', function() {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                review: "=currentReview"
            },
            templateUrl: 'views/productReviews.html'
        };
    });

    app.directive('productReviewForm', function() {
        return {
            replace: true,
            restrict: 'EA',
            controller: function() {
                this.review = {};

                this.addReview = function(product) {
                    product.reviews.push(this.review);
                }
            },
            controllerAs: 'reviewCtrl',
            templateUrl: 'views/productReviewForm.html'
        }
    });
})();
