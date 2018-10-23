let month = 8;
 //נותן את מס' הימים בחודש (מיספור החודשים מתחיל מ-0
function getLastDayOfMonth(year, month) {
    return new Date(year, month, 0).getDate()
}
// פונקצית assert
const assert = function(condition, message) {
    if (!condition)
        throw Error('Assert failed: ' + (message || ''));
};

//דוגמא לpromise
function sleep(amount) {
    return new Promise((resolve, reject) => {
        if (amount <= 300) {
            return reject('Yhat is too fast, cool it down!');
        }
        setTimeout(() => resolve(`Slept for ${amount}`), amount)
    });
}
// sleep(500)
//     .then((result) => {
//         console.log(result);
//         return sleep(1000);
//     })
//     .then((result) => {
//         console.log(result);
//         return sleep(750);
//     })
//     .then((result) => {
//         console.log(result);
//         console.log('Done!');
//         return sleep(500);
//     })
//     .catch((reject) => {
//         console.log(reject);
        
//     })