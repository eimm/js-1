

splitAndMerge = function(str,sp) {
    var arrWords=str.split(" ");
    var joinedArr = [];
    for (i=0; i<arrWords.length;i++) {
        var wordArr = arrWords[i].split('');
        var newWord = wordArr.join(sp);
        joinedArr.push(newWord);
    }
    var joinedStr = joinedArr.join(' ');
    return joinedStr;
};
var str = "My name is John";
console.log(splitAndMerge(str," "));
console.log(splitAndMerge("Hello World!",","));

var testObject = {name: 'Jeremy', age: 24, role: 'Software Engineer'};
hashToArray = function (hash){
    var keys = [];
    for (var i in hash){
        if (hash.hasOwnProperty(i)){
            var entrie = [];
            entrie.push(i,hash[i]);
            console.log(entrie);
            keys.push(entrie);
        }
    }
    return keys;
};
console.log(hashToArray(testObject));
var toCamelCase = function(string){
    var re = /-|_/;
    var arrWords = string.split(re);
    if (arrWords.length > 1){
        for ( i = 1 ; i<arrWords.length;i++){
            var temp = arrWords[i];
            var camelCasedWord = temp[0].toUpperCase() + temp.slice(1);
            arrWords[i] = camelCasedWord;
        }
        return arrWords.join('');
    }
    else {
        return arrWords.join();
    }
};
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));

var reverso = function(string) {
    var arrWords=string.split(" ");
    for (i = 0; i<arrWords.length; i++){
        arrLetters = arrWords[i].split('');
        arrLetters.reverse();
        revWord = arrLetters.join('');
        arrWords[i] = revWord;
    }
    return arrWords.join(' ');
};
console.log(reverso('A fun little challenge!'));


var stringExpansion = function (string){
    var regexNumber = /\d\D/g;
    var arrNumbers = string.match(regexNumber);
    if (arrNumbers === null){
        return string;
    }else{
        for  (i=0 ; i<arrNumbers.length;i++){
            temp = arrNumbers[i];
            n = temp[0];
            var word =[];
            for (var j =0; j<n; j++){
                word.push(temp[1]);
            }
            arrNumbers[i] = word.join('');
        }
        return arrNumbers.join('');
    }
};

console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));



function smallest() {
    var arr = [].slice.call(arguments).sort(compareNumbers);
    return arr[0];
}
function largest() {
    var arr = [].slice.call(arguments).sort(compareNumbers);
    return arr[arr.length-1];
}

function compareNumbers(a, b) {
    return a - b;
  }

console.log(smallest(2, 0.1, -5, 100, 3));
console.log(largest(2, 0.1, -5, 100, 3));






var transform = function(arr) {// es 6
    var functionsContainer = [];
    for (let i = 0; i < arr.length; i++) {
        functionsContainer.push(function(){
            return arr[i];
        }); 
    }
    return functionsContainer;
};
var baseArray = [10, 20, 30, 40, 50];
var newArray = transform(baseArray);
console.log(newArray[0]());



var transform1 = function (arr){
    return arr.map(function(n){
        return function(){
            return n;
        };
    });
};
var baseArray = [10, 20, 30, 40, 50];
var newArray = transform1(baseArray);
console.log(newArray[0]());


function sum (){
    var arr = [].slice.call(arguments);
    var sum1 = function(arr) {
        return (arr.length === 0) ? 0 : arr[0] + sum1(arr.slice(1));
    };
    return sum1(arr);
}
console.log(sum(1,3,5,7));





function countDown (n){
    function timer(){
        console.log(n);
        n--;
        if (n==-1){
            clearInterval(timerId);
        }
    }
    var timerId = setInterval(timer,1000,n);
}
countDown(10);

Function.prototype.myBind = function(oThis) {
    if (typeof this !== 'function') {
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP && oThis
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
};
function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1)); 
