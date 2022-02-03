/*
Copyright (c) 2021 by timdotcode (https://codepen.io/timdotcode/pen/bOejXp)

Permission is hereby granted, free of charge, to any person 
obtaining a copy of this software and associated documentation 
files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of 
the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall 
be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
DEALINGS IN THE SOFTWARE.
*/

// You can also do this by transfering it through a data-attribute
// var textArray = typeWriterElement.getAttribute('data-array');
// The TextArray: 
var textArray = [
    "I'm parpar8090",
    "I'm a developer",
    "I'm a 3D Artist",
    "I'm making YouTube videos",
    "I play Minecraft",
    "I'm a freelancer",
    "Want to hire me?"
];
// The typewriter element
var typeWriterElement = document.getElementById('typewriter');

// function to generate the backspace effect 
function delWriter(text, i, cb) {
    if (i >= 0) {
        typeWriterElement.innerHTML = text.substring(0, i--);
        // generate a random Number to emulate backspace hitting.
        var rndBack = 10 + Math.random() * 100;
        setTimeout(function() {
            delWriter(text, i, cb);
        }, rndBack);
    } else if (typeof cb == 'function') {
        setTimeout(cb, 1000);
    }
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
    if (i < text.length + 1) {
        typeWriterElement.innerHTML = text.substring(0, i++);
        // generate a random Number to emulate Typing on the Keyboard.
        var rndTyping = 250 - Math.random() * 100;
        setTimeout(function() {
            typeWriter(text, i++, cb)
        }, rndTyping);
    } else if (i === text.length + 1) {
        setTimeout(function() {
            delWriter(text, i, cb)
        }, 1000);
    }
};

// the main writer function
function StartWriter(i) {
    if (typeof textArray[i] == "undefined") {
        setTimeout(function() {
            StartWriter(0)
        }, 1000);
    } else if (i < textArray[i].length + 1) {
        typeWriter(textArray[i], 0, function() {
            StartWriter(i + 1);
        });
    }
};
// wait one second then start the typewriter
setTimeout(function() {
    StartWriter(0);
}, 1000);