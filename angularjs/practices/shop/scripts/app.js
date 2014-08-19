/**
 * Created by thanhnguyen on 8/19/2014.
 */

(function(){ // use javascript closure is good habit
    var app = angular.module('gemStore', []);

    var gems = [
        { name: 'Azurite', price: 110.50 },
        { name: 'Bloodstone', price: 22.90 },
        { name: 'Zircon', price: 1100 }
    ];

    app.controller("StoreController", function() {
        this.products = gems;
    });
})();