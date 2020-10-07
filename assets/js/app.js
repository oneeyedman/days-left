'use strict';

const app = document.querySelector('.app');
const counter = app.querySelector('.js__counter');
const reloadInMS = 300000;
let rDays = getDays();

function getDays() {
  const now = new Date();
  const today = [now.getFullYear(), now.getMonth(), now.getDate()];
  const startDate = moment(today);
  const endDate = moment([2020, 9, 13]);
  const days = endDate.diff(startDate, 'days');
  return days;
}

function writeRemainingDays(days) {
  let result = '0';
  if (days >= 1) {
    result = days;
  }
  counter.innerHTML = result;
  app.classList.add('app--day-' + result);
}

writeRemainingDays(rDays);

const checkDays = setInterval(function(){
  rDays = getDays();
  writeRemainingDays(rDays);

}, reloadInMS);