
document.addEventListener('DOMContentLoaded', function () {
  // Photo Carousel
  const track = document.querySelector('.carousel-track');
  const images = document.querySelectorAll('.carousel-track img');

  let currentIndex = 0;
  const totalImages = images.length;

  function updateCarousel() {
    const newTransformValue = -currentIndex * 100 + '%';
    track.style.transform = `translateX(${newTransformValue})`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  }

  setInterval(nextSlide, 2000); // Auto-scroll every 2 seconds
});


// function scrollToSection(sectionId) {
//   var section = document.getElementById(sectionId);
//   if (section) {
//     section.scrollIntoView({ behavior: 'smooth' });
//   }
// }



/*
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/IMG_9712 copy.jpg") {
    myImage.setAttribute("src", "images/impala.JPG");
  } else {
    myImage.setAttribute("src", "images/IMG_9712 copy.jpg");
  }
};

let button = document.querySelector("button");
let heading = document.querySelector("heading");

function usernameprompt() {
  const name = prompt("Gimme name now");
  if (!name) {
    usernameprompt();
  } else {
    localStorage.setItem("name", name);
    heading.textContent = 'follow moi, ${name}';
  }
}
*/

/*
const apiUrl = 'https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=    IGQWRQOXpWejdfSXJoOENzQ1k0cUg5a01JNFlyM196M0VBd0JwbjlvaDMzd2Mzdi1Sbl9zajl1dFB1UXdTNkFQSlliaEJNVV9QWlUzSU1lWWNqRWtEYnhvYlpKYkFMcTZANdnVzcVJuaWtfb3JQTVBZATXk3TG44NVEZD';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const feedContainer = document.getElementById('instagram-feed');
        data.data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <img src="${post.media_url}" alt="${post.caption}">
                <p>${post.caption}</p>
                <a href="${post.permalink}" target="_blank">View on Instagram</a>
            `;
            feedContainer.appendChild(postElement);
        });
    })
    .catch(error => console.error('Error fetching Instagram feed:', error));
*/





/*
if (!localStorage.getItem("name")) {
  usernameprompt();
} else {
  const storedName = localStorage.getItem("name");
  heading.textContent = `follow moi, ${storedName}`;
}

button.onclick = () => {
  usernameprompt();
};

*/








/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Welcome to my page!";

alert("BOOO!");

/* let iceCream = "chocolate";
if (iceCream === "chocolate") {
    alert("Yay, I love chocolate ice cream!");
  } else {
    alert("Awwww, but chocolate is my favorite…");
  }



  let myvariable = document.querySelector("h1");




function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
  
document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
});
*/
