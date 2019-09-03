'use strict';

const now = new Date();
const today = [now.getFullYear(), now.getMonth() + 1, now.getDate()];
const startDate = moment(today);
const endDate = moment([2019, 10, 2]);
const test = document.querySelector('.js__test');
const counter = document.querySelector('.js__counter');
const rDays = endDate.diff(startDate, 'days');
let t = 0;
test.innerHTML = t;

setInterval(function(){
  t++;
  test.innerHTML = t;
}, 5000);

function writeRemainingDays(days) {
  let result = '0';
  if (days >= 1) {
    result = days;
  }
  counter.innerHTML = result;
}

writeRemainingDays(rDays);

