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

let cardContainer = document.querySelector('div.cards-container')

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

function getArticleData (url) {
	axios.get(url)
		.then(response => {
			let a = Object.values(response.data.articles);
			a.forEach((articleValues) => {
				articleValues.forEach((articleData) => {
					cardContainer.appendChild(cardMaker(articleData));
				})
			})
		})
		.catch(error => {
			console.log('error');
		})
}

getArticleData('https://lambda-times-backend.herokuapp.com/articles');
