/**
 * Created by thanhnguyen on 10/08/2014.
 */
function checkTamGiac(a, b, c) {
    return (a + b > c && a + c > b && b + c > a);
}

function checkObjTamGiac(objTamGiac) {
    return (objTamGiac.a + objTamGiac.b > objTamGiac.c && objTamGiac.a + objTamGiac.c > objTamGiac.b && objTamGiac.b + objTamGiac.c > objTamGiac.a);
}

function chuViTamGiac(tamGiacObj) {
    if (checkObjTamGiac(tamGiacObj)) {
        return (tamGiacObj.a + tamGiacObj.b + tamGiacObj.c);
    }
}

function dienTichTamGiac(tamGiacObj) {
    if (checkObjTamGiac(tamGiacObj)) {
        var p = chuViTamGiac(tamGiacObj) / 2;

        return canBacHai(p * (p - tamGiacObj.a) * (p - tamGiacObj.b) * (p - tamGiacObj.c));
    }
}

function canBacHai(x) {
    return Math.sqrt(x);
}

function allTamGiac() {

    // get input
    var tamGiacObj = {
        a: Number(document.getElementById('txta').value),
        b: Number(document.getElementById('txtb').value),
        c: parseInt(document.getElementById('txtc').value)
    };

    var result = document.getElementById('result');

    var strResult = "Chu vi: " + chuViTamGiac(tamGiacObj) + ', ' + 'Dien tich: ' + dienTichTamGiac(tamGiacObj);

    result.innerText = strResult;


    // test
    console.log('typeof tamGiacObj.a: ', typeof tamGiacObj.a);
    console.log('tamGiacObj: ', tamGiacObj);
    console.log('JSON.stringify of tamGiacObj: ', JSON.stringify(tamGiacObj));
}

 /**
  * Object using
  * object constructor function - prototype tamGiac
  * Note:  khong dung try .. catch de xu ly loi trong file js ma dung trong code chay
  */

function tamGiac(a, b, c) {
     //try {
         // defaul value properties
         this.a = a || 3;
         this.b = b || 4;
         this.c = c || 5;

         // methods
         this.isTamGiac = function() {
             return (this.a + this.b > this.c && this.a + this.c > this.b && this.b + this.c > this.a);// || 'Not valid tamGiac';
         };

         this.chuVi = function() {
             return this.isTamGiac() ? (this.a + this.b + this.c) : 0;
         };

    //     this.dienTich = function() { // bao loi cu phap do cua webstorm
    //         return this.isTamGiac() ? (
    //             var p = this.chuVi() / 2;
    //             return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    //             ) : 0;
    //     };

    //     this.dienTich = function() { // cach nay khong thong bao loi do cua webstorm
    //        return this.isTamGiac() ? function(){
    //             var p = this.chuVi() / 2;
    //             return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    //         }: 0;
    //     }
         this.dienTich = function() {
             if (this.isTamGiac()) {
                 var p = this.chuVi() /2;

                 return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
             } // else throw 'Not valid tamgiac !';
         }
//     } catch (err) {
//         console.log('Catch error: ', err.message);
//     } finally {
//         console.log('tamGiac constructor function run well till finnaly');
//     }
 }




