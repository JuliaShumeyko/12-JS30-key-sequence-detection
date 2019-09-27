const secretCode = 'funkydino';
const pressedKeys = [];

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressedKeys.push(e.key);
    pressedKeys.splice(-secretCode.length - 1, pressedKeys.length - secretCode.length);
    if (pressedKeys.join('').includes(secretCode)) {
        cornify_add();
    }
    // console.log(pressedKeys);
})