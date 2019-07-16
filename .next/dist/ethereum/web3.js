'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web3Providers = require('web3-providers');

var Web3 = require('web3');

var web3 = void 0;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
} else {
    var provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/07e50c52ce8c4b26827310ba457bb268');
    web3 = new Web3(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiSHR0cFByb3ZpZGVyIiwiV2ViMyIsInJlcXVpcmUiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVMsQUFBVDs7QUFFQSxJQUFNLE9BQU8sQUFBUCxBQUFOOztBQUVBLElBQUksWUFBSjtBQUNBLElBQUcsT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTNELGFBQXdFLEFBQ3BFO1dBQU8sSUFBSSxBQUFKLEtBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNIO0FBRkQsT0FFTyxBQUNIO1FBQU0sV0FBVyxJQUFJLEtBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2IsQUFEYSxBQUFqQixBQUdBO1dBQU8sSUFBSSxBQUFKLEtBQVMsQUFBVCxBQUFQLEFBQ0g7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL25pc2h1cmlzaGFiaC9Eb2N1bWVudHMva2lja1N0YXJ0ZXIifQ==