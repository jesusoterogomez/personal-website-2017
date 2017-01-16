import {init as type} from 'ityped';

let strings = [
    "Javascript",
    "Node.js",
    "React",
    "SCSS",
    "Gulp",
    "Browserify"
];

let target = '.replace';
type(`.replace`, {
    strings: strings,

    //optional
    typeSpeed: 50,
    backSpeed: 35,
    startDelay: 500,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: "|"
});
