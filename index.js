function save() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;

    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);
}

var savename = localStorage.getItem("Name");
var saveemail = localStorage.getItem("Email");
var savepass = localStorage.getItem("Password");

function logsave() {
    var logemail = document.getElementById('login-email').value;
    var logpassword = document.getElementById('login-pass').value;

    if (logemail === saveemail && logpassword === savepass) {
        window.location.href = 'shopping.html'
        alert("congrats you are successfuly login!");
        
    } else {
        alert("Invalid email or password")
    }
}

//products

const products = [
    {
      name: "Electric Kettle",
      description: "Boil water quickly for tea, coffee, or cooking.",
      price: 19.99,
      img: "https://static-01.daraz.pk/p/59f07fdce6c9f0b6bf44303e537c61b1.jpg_300x0q75.webp"
    },
    {
      name: "Decorative lamp",
      description: "style to your living space with lamp.",
      price: 24.99,
      img: "https://static-01.daraz.pk/p/1e84aebf62d8ca2feee43d2b17536d4d.jpg_300x0q75.webp"
    },
    {
      name: "Artificial Potted Plants",
      description: "Bring nature indoors with low-maintenance faux plants.",
      price: 14.99,
      img: "https://static-01.daraz.pk/p/87748caabe6dbfd01e1b1ff2258ced8b.jpg_300x0q75.webp"
    },
    {
        name: "Non-Stick Silicone Baking Mat",
        description: "Bake without the mess with easy-to-clean, non-stick mats.",
        price: 12.99,
        img: "https://static-01.daraz.pk/p/09b1130713b20407b49b951c2c0f0059.jpg_300x0q75.webp"
      },
    {
      name: "Scented Candles Set",
      description: "Create a cozy atmosphere with fragrant candles in assorted scents.",
      price: 19.99,
      img: "https://static-01.daraz.pk/p/39ad2139157341a03c14209425f37e56.jpg_300x0q75.webp"
    },
    {
      name: "Wall Mounted Floating Shelves",
      description: "Display photos and decor items elegantly with sturdy shelves.",
      price: 34.99,
      img: "https://static-01.daraz.pk/p/cadbfcc915e9fc3009e25bbf40f43e7d.jpg_300x0q75.webp"
    },
    {
        name: "Silicone Cooking Utensil Set",
        description: "Cook with ease using durable and heat-resistant silicone utensils.",
        price: 19.99,
        img: "https://static-01.daraz.pk/p/b9e5fd89a8f090a37659fd2047075e28.jpg_300x0q75.webp"
      },
    {
      name: "Soft Area Rug",
      description: "Enhance your home decor with a plush rug for warmth and comfort.",
      price: 49.99,
      img: "https://static-01.daraz.pk/p/badbadbd863119fa6e3b51f4f797d248.jpg_300x0q75.webp"
    },
    {
      name: "Decorative Wall Clock",
      description: "Keep track of time in style with a modern, decorative clock.",
      price: 29.99,
      img: "https://static-01.daraz.pk/p/d4304828fffa875b22274d6757364d31.jpg_300x0q75.webp"
    },
    {
      name: "Plant Pots Set",
      description: "Showcase your plants with stylish ceramic pots in assorted sizes.",
      price: 39.99,
      img: "https://static-01.daraz.pk/p/737e5b0294e6db3772fd7cec521b3b1d.jpg_300x0q75.webp"
    },
    {
        name: "Decorative Mirrors Set",
        description: "Enhance your home decor with elegant mirrors in assorted shapes.",
        price: 59.99,
        img: "https://static-01.daraz.pk/p/61601c270a98d3a50dea624f0f524ab5.jpg_300x0q75.webp"
      },
      {
        name: "Digital Kitchen Scale",
        description: "Precisely measure ingredients for perfect cooking results every time.",
        price: 19.99,
        img: "https://static-01.daraz.pk/p/0ace575e0e1b9e392502d6c8e5570b43.jpg_300x0q75.webp"
      },
  ];


function createProductCard(product) {
    return `
        <div class="col">
            <div class="card product-card">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">$${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

function displayProducts() {
    var productRow = document.getElementById('productRow');
    productRow.innerHTML = '';


    for (let i = 0; i < products.length; i++) {
        var card = createProductCard(products[i]);
        productRow.innerHTML += card;
    }
}

function openCheckout() {
    document.getElementById('checkoutCard').style.display = 'block';
}

var selectedItems = [];

function addToCart(name, price) {
    selectedItems.push({ name: name, price: price });
    displaySelectedItems();
}

function displaySelectedItems() {
    var selectedItemsList = document.getElementById('selectedItems');
    selectedItemsList.innerHTML = '';

    var totalAmount = 0;
    selectedItems.forEach(item => {
        selectedItemsList.innerHTML += `<li>${item.name} - $${item.price}</li>`;
        totalAmount += item.price;
    });

    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
}


function confirmCheckout() {
    if (selectedItems.length === 0) {
        alert("Please select items before confirming.");
        document.getElementById('checkoutCard').style.display = 'none';
    } else {
        alert("Thank you for your purchase!");
        selectedItems = [];
        document.getElementById('checkoutCard').style.display = 'none';
        displaySelectedItems();
    }
}


window.onload = function() {
    displayProducts();
};
