// Set the date for countdown (modify according to your needs)
var countDownDate = new Date("2023-10-16").getTime();

// Update the countdown every 1 second
var countdown = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown with animation
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // When countdown ends
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "We're live!";
  }
}, 1000);