/**
 * Created by thanhnguyen on 25/08/2014.
 */
console.log(angular ? "Loaded angular" : "Not loaded angular !");

//good habit is wrap js code with a closure
(function() {
    var app = angular.module('bookManager', []);

    app.controller('productController', function() {
        this.products = [
            {
                name: "Sea law national and real at Bien Dong",
                author: 'Dr.Nguyen Ba Dien',
                description: "The rules of sea law on national and perform on real at Bien Dong asia",
                images: [
                    {full: "images/f01.png", thumbnail: "images/t01.png"}
                ],
                reviews: [
                    {stars: 4, body: "you should rethink to found solve", author: "tapcanbinh@gov.com.cn"},
                    {stars: 5, body: "Viet Nam say all right, Chinal should solve by peace", author: "obama@gov.com.us"},
                    {stars: 5, body: "A good reference for student and fact of Bien Dong", author: "putin@gov.com.ru"}
                ]
            },
            {
                name: "When has peace at Bien Dong",
                author: 'Dr.Nguyen Ba Dien',
                description: "The dream about peace at Bien Dong and some think of Vietnamese",
                images: [
                    {full: "images/f02.png", thumbnail: "images/t02.png"}
                ],
                reviews: [
                    {stars: 4, body: "you should rethink to found solve", author: "tapcanbinh@gov.com.cn"},
                    {stars: 5, body: "Viet Nam say all right, Chinal should solve by peace", author: "obama@gov.com.us"},
                    {stars: 5, body: "A good reference for student and fact of Bien Dong", author: "putin@gov.com.ru"}
                ]
            }
        ];
    });
})();