function rectangle(a) {
  for (i = 1; i < 4; i++) {
    document.getElementById('rect-' + i).style.width = '25px';
    document.getElementById('collapse' + i).classList.add('hidden');
  }
  document.getElementById('rect-' + a).style.display = 'block';
  document.getElementById('rect-' + a).style.transition = '0.5s';
  document.getElementById('rect-' + a).style.width = '80px';
  document.getElementById('collapse' + a).classList.remove('hidden');

}
// Show scroll-to-top button after scrolling halfway through the page
window.onscroll = function () {
  var btn = document.getElementById("scroll-to-top-btn");
  if (document.body.scrollTop > (document.body.scrollHeight / 9) || document.documentElement.scrollTop > (document.documentElement.scrollHeight / 5)) {
      btn.style.display = "block";
  } else {
      btn.style.display = "none";
  }
};

// Scroll to top when button is clicked
document.getElementById("scroll-to-top-btn").addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Function to generate a random number between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get the container element
const container = document.querySelector('.container');

// Number of bubbles to generate
const numBubbles = 100;

for (let i = 1; i <= numBubbles; i++) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';

  const size = getRandomInt(10, 50); // Random size between 10 and 40 pixels
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';

  const delay = -i * 0.2 + 's';
  bubble.style.animationDelay = delay;

  const x = getRandomInt(-300, 300); // Random x-position between -500 and 500 pixels
  const y = getRandomInt(-300, 300); // Random y-position between -500 and 500 pixels
  const z = getRandomInt(-1000, 1000); // Random z-position between -1000 and 1000 pixels
  bubble.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;

  const hue = getRandomInt(-3, 34.3); // Random hue between 0 and 60
  bubble.style.background = `hsl(${hue}, 60%, 40%)`;

  container.appendChild(bubble);
}

// const threshold = 501;
// window.addEventListener('resize', () => {
//   if (window.innerWidth <= threshold) {
//     document.getElementById('Foot').classList.add('gap-1');
//   } else {
//     document.getElementById('Foot').classList.remove('gap-1');
//   }
// });
const threshold = 701;
if (window.innerWidth <= threshold) {
  document.getElementById('Foot').classList.add('gap-2');
} else {
  document.getElementById('Foot').classList.remove('gap-2');
}

