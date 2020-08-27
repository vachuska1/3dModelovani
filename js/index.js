function datum() {
  const fullDate = new Date();
  var hours = fullDate.getHours();
  var minutes = fullDate.getMinutes();
  var seconds = fullDate.getSeconds();
  var days = fullDate.getDate();
  var months = fullDate.getMonth();
  var years = fullDate.getFullYear();

  if (hours < 10) {
      hours = "0" + hours;
  }
  if (minutes < 10) {
      minutes = "0" + minutes;
  }
  if (seconds < 10) {
      seconds = "0" + seconds;
  }
  // if (months > 0) {
  //   months = "1" + months
  // }

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
  document.getElementById("day").innerHTML = days;
  document.getElementById("month").innerHTML = months + 1;
  document.getElementById("year").innerHTML = years;
}
setInterval(datum, 10);

const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

portfolioItems.forEach(portfolioItem => {
  portfolioItem.addEventListener('mouseover', () => {
    console.log(portfolioItem.childNodes[1].classList)
    portfolioItem.childNodes[1].classList.add('image-blur');
  });

  portfolioItem.addEventListener('mouseout', () => {
    console.log(portfolioItem.childNodes[1].classList)
    portfolioItem.childNodes[1].classList.remove('image-blur');
  });
});
