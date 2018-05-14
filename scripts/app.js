
// Store Items

var famousRobots = [
  {
    name: 'Robie',
    img: 'images/famous-robot1.jpg',
    alt: 'We made this one eat dirty coins',
    price: 25
  },
  {
    name: 'Roomba',
    img: 'images/famous-robot2.jpg',
    alt: "We made this one clean our floors.",
    price: 399
  },
  {
    name: 'Boston Dynamics Puppy',
    img: 'images/famous-robot3.jpg',
    alt: 'We made this one endure constant kicks from engineers',
    price: 15999
  },
  {
    name: 'Rosie',
    img: 'images/famous-robot4.jpg',
    alt: 'We humanized this one by assigning it a name and gender and yet that didn\'t stop us from making it work 150 hours a week.',
    price: 30800
  },
  {
    name: 'Data',
    img: 'images/famous-robot5.jpg',
    alt: 'We taught this one what love was but made him incapable of experiencing it.',
    price: 250650
  },
  {
    name: 'Cylon',
    img: 'images/famous-robot6.jpg',
    alt: "We made these ones reincarnate so they could experience the trauma of destruction an infinite number of times.",
    price: 36695
  },
  {
    name: 'Crow',
    img: 'images/famous-robot7.jpg',
    alt: 'We made this one watch Manos: The Hands of Fate',
    price: 200
  },
  {
    name: 'Bicentennial Man',
    img: 'images/famous-robot8.jpg',
    alt: 'We tantalized this one by letting it star in a film with a great ensemble cast and yet somehow the movie still turned out to be unwatchable.',
    price: 500
  },
  {
    name: 'Sophia',
    img: 'images/famous-robot9.jpg',
    alt: 'Truly our most cruel invention, we gave this one a horrific uncanny-valley visage and then made it speak like Smarter Child.',
    price: 600000
  }
]

var puppies = [
  {
    name: 'Jellybean',
    img: 'images/puppy1.jpg',
    alt: 'One real cute pup',
    price: 10
  },
  {
    name: 'Hambone',
    img: 'images/puppy2.jpg',
    alt: 'One real cute pup',
    price: 15
  },
  {
    name: 'Squeaks',
    img: 'images/puppy3.jpg',
    alt: 'One real cute pup',
    price: 16
  },
  {
    name: 'Pookie',
    img: 'images/puppy4.jpg',
    alt: 'One real cute pup',
    price: 25
  },
  {
    name: 'Pookie Butt',
    img: 'images/puppy5.jpg',
    alt: 'One real cute pup',
    price: 30
  },
  {
    name: "Pookie Mulder",
    img: "images/puppy6.jpg",
    alt: "One real cute pup",
    price: 96
  },
  {
    name: 'Grampa',
    img: 'images/puppy7.jpg',
    alt: 'One real cute pup',
    price: 45
  },
  {
    name: 'Squish Face',
    img: 'images/puppy8.jpg',
    alt: 'One real cute pup',
    price: 22
  },
  {
    name: 'Mop',
    img: 'images/puppy9.jpg',
    alt: 'One real cute pup',
    price: 10
  }
]

var veryOddStockPhotos = [
  {
    name: 'Man Typing Through a Monitor',
    img: 'images/stock-photo1.jpg',
    alt: '...',
    price: 15
  },
  {
    name: 'Two Confused Mimes',
    img: 'images/stock-photo2.jpg',
    alt: '...',
    price: 13.85
  },
  {
    name: 'Oddly Poetic Justice',
    img: 'images/stock-photo3.png',
    alt: '...',
    price: 42.99
  },
  {
    name: 'Woman not allowing a potato to distract her from her work',
    img: 'images/stock-photo4.png',
    alt: '...',
    price: 15
  },
  {
    name: 'Man who has found his \'thing\'',
    img: 'images/stock-photo5.jpg',
    alt: '...',
    price: 15
  }
]

var cart = [];

//Global shortcut variables

var store = document.getElementById('store');
var ipsum = 'Lorem ipsum dolor sit amet a maecenas adipiscing nec penatibus pretium nisi tincidunt leo amet. Etiam pretium imperdiet massa vitae nam justo veni aenean metus. Penatibus lorem ipsum vitae nam tellus hendrerit ut eros ante dictum ultricies. Dictum adipiscing eleifend aenean.';
var robotButton = document.getElementById('robots');
var puppyButton = document.getElementById('puppies');
var photoButton = document.getElementById('photos');



// Functions

function clearAllItems() {
  store.innerHTML = '';
}


function loadItems(inventory) {
  clearAllItems();
  for (var i = 0; i < inventory.length; i++) {
    var currentItem = inventory[i];
    var article = document.createElement('article');
    var img = document.createElement('img');
    var paragraph = document.createElement('p');
    var button = document.createElement('button');
    var title = document.createElement('h3');

    store.appendChild(article);
    article.appendChild(title);
    title.textContent = `${currentItem.name}: $${currentItem.price}`;
    article.appendChild(img);
    img.setAttribute('src', currentItem.img);
    img.setAttribute('alt', currentItem.alt);
    article.appendChild(paragraph);
    paragraph.textContent = ipsum;
    article.appendChild(button);
    button.textContent = 'Add To Cart';
  }
}

//Buttons

robotButton.addEventListener('click', loadItems(famousRobots));
photoButton.addEventListener('click', loadItems(veryOddStockPhotos));
puppyButton.addEventListener('click', loadItems(puppies));
