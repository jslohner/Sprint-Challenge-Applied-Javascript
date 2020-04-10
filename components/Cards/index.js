// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function cardMaker(articleData) {

	// create elements
	let card = document.createElement('div');
	let headLine = document.createElement('div');
	let author = document.createElement('div');
	let imgContainer = document.createElement('div');
	let authorImg = document.createElement('img');
	let authorName = document.createElement('span');

	// structure
	card.appendChild(headLine);
	card.appendChild(author);
	author.appendChild(imgContainer);
	author.appendChild(authorName);
	imgContainer.appendChild(authorImg);

	// classes
	card.classList.add('card');
	headLine.classList.add('headLine');
	author.classList.add('author');
	imgContainer.classList.add('img-container');

	// content
	headLine.textContent = articleData.headline;
	authorImg.setAttribute('src', articleData.authorPhoto);
	authorName.textContent = articleData.authorName;

	return card;
}

let object = {
	headline: "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
	authorPhoto: "./assets/sir.jpg",
	authorName: "SIR RUFF'N'STUFF"
};

console.log(cardMaker(object));

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
// 	.then(r => {
// 		console.log(r);
// 	})
// 	.catch(e => {
// 		console.log('error');
// 	})
