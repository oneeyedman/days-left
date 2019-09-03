'use strict';



const test = document.querySelector('.js__test');
const counter = document.querySelector('.js__counter');
const reloadInMS = 300000;
let rDays = getDays();
let t = 0;

function getDays() {
  const now = new Date();
  const today = [now.getFullYear(), now.getMonth() + 1, now.getDate()];
  const startDate = moment(today);
  const endDate = moment([2019, 10, 2]);
  const days = endDate.diff(startDate, 'days');
  return days;
}

function writeRemainingDays(days) {
  let result = '0';
  if (days >= 1) {
    result = days;
  }
  counter.innerHTML = result;
}

writeRemainingDays(rDays);

const checkDays = setInterval(function(){
  rDays = getDays();
  writeRemainingDays(rDays);
  t++;
  test.innerHTML = t;

}, reloadInMS);