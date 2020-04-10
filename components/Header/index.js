// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

	// create elements
	let header = document.createElement('div');
	let date = document.createElement('span');
	let title = document.createElement('h1');
	let temp = document.createElement('span');

	// structure
	header.appendChild(date);
	header.appendChild(title);
	header.appendChild(temp);

	// classes
	header.classList.add('header');
	date.classList.add('date');
	temp.classList.add('temp');

	// content
	date.textContent = 'SMARCH 28, 2019';
	title.textContent = 'Lambda Times';
	temp.textContent = '98°';

	return header;
}

// v1
document.querySelector('div.header-container').appendChild(Header());

// v2
// let headerContainer = document.querySelector('div.header-container');
// headerContainer.appendChild(Header());

// v3
// let header = Header();
// headerContainer.appendChild(header);
