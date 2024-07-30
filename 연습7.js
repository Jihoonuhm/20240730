//filter

const testArr = [30, 10, 25, 7];

const newArr = testArr.filter(function (숫자) {
    //console.log(숫자);
    //return true;

    if (숫자 >= 20) {
        return true;
    } else {
        return false;
    }
});
const isTarget = 숫자 >= 20;
console.log(newArr);