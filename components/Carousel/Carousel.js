/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let carouselContainer = document.querySelector('div.carousel-container');

const images = [
	'./assets/carousel/mountains.jpeg',
	'./assets/carousel/computer.jpeg',
	'./assets/carousel/trees.jpeg',
	'./assets/carousel/turntable.jpeg'
];

function carouselMaker(images) {

	// create elements
	let carousel = document.createElement('div');
	let leftButton = document.createElement('div');
	let rightButton = document.createElement('div');
	let mountains = document.createElement('img');
	let computer = document.createElement('img');
	let trees = document.createElement('img');
	let turntable = document.createElement('img');
	let imageArray = [mountains, computer, trees, turntable];

	// structure
	carousel.appendChild(leftButton);
	carousel.appendChild(mountains);
	carousel.appendChild(computer);
	carousel.appendChild(trees);
	carousel.appendChild(turntable);
	carousel.appendChild(rightButton);

	// classes
	carousel.classList.add('carousel');
	leftButton.classList.add('left-button');
	rightButton.classList.add('right-button');

	// content
	leftButton.textContent = 'L';
	rightButton.textContent = 'R';
	imageArray.forEach((image, index) => {
		image.setAttribute('src', images[index]);
		image.style.display = 'flex';
		image.style.width = '50%';
	})

	// event listeners
	leftButton.addEventListener('click', (image) => {
		imageArray.forEach((image, index) => {
			console.log(index);
			let newIndex = 0;
			if (index = 0) {
				newIndex = 3;
			}
			else {
				newIndex -= 1;
			}
			console.log(imageArray);
			image.setAttribute('src', imageArray[newIndex].src);
		})
	})
	console.log(imageArray);

	return carousel;
}

carouselContainer.appendChild(carouselMaker(images));
