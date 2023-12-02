gsap.from(".img-thumbnail", { duration: 2, rotationX: 360 });
gsap.from(".navbar", { duration: 1.5, opacity: 0, y: "-100%", ease: "bounce" });
gsap.from(".display-4", { delay: 1, duration: 1, opacity: 0, x: "-10%" });

gsap.registerPlugin(TextPlugin);
gsap.to(".lead", {
  delay: 1.5,
  duration: 2,
  text: "Software Enggineer ",
});

const galleryImages = document.querySelectorAll(".gallery-img");
const delayTimes = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
const newDelay = shuffleArray(delayTimes);
galleryImages.forEach((img, i) => {
  img.dataset.aos = "fade-up";
  img.dataset.aosDelay = i * 50 + "";
  // img.dataset.aosDelay = newDelay[i]; 
});

AOS.init({
  once: true,
  duration: 3000,
});

gsap.registerPlugin(TextPlugin);
gsap.to(".lead", {
  duration: 2,
  delay: 1.5,
  text: "Software Enggineer | IT Consultant",
});
