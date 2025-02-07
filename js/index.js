const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


//nav text
let navText = document.querySelectorAll('a');

navText.forEach((item, index) =>
  {
    item.textContent = siteContent["nav"][`nav-item-${index}`];
    item.style.color = 'green';
  })

  //home tag
  let homeTag = document.createElement('a');
  homeTag.textContent = 'Home';
  homeTag.href = '#';
  homeTag.style.color = 'green';
  let navTag = document.querySelector('nav');
  navTag.prepend(homeTag);

//contact tag
let contactTag = document.createElement('a');
contactTag.textContent = 'Contact';
contactTag.href = '#';
contactTag.style.color = 'green';
navTag.appendChild(contactTag);

//logo image
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//dom is awesome text
let headerText = document.querySelector('h1');
headerText.textContent = siteContent.cta.h1;

//get started button text
let getStartedButton = document.querySelector('button');
getStartedButton.textContent = siteContent.cta.button;

//matrix image
let ctaImage = document.getElementById('cta-img');
ctaImage.src = siteContent.cta["img-src"];


//middle image accent
let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//h4 text
let h4Text = document.querySelectorAll('h4');
h4Text[0].textContent = siteContent["main-content"]["features-h4"];
h4Text[1].textContent = siteContent["main-content"]["about-h4"];
h4Text[2].textContent = siteContent["main-content"]["services-h4"];
h4Text[3].textContent = siteContent["main-content"]["product-h4"];
h4Text[4].textContent = siteContent['main-content']["vision-h4"];
h4Text[5].textContent = siteContent["contact"]["contact-h4"];

//p text
let pText = document.querySelectorAll('p');
pText[0].textContent = siteContent["main-content"]["features-content"];
pText[1].textContent = siteContent["main-content"]["about-content"];
pText[2].textContent = siteContent["main-content"]["services-content"];
pText[3].textContent = siteContent["main-content"]["product-content"];
pText[4].textContent = siteContent["main-content"]["vision-content"];
pText[5].textContent = siteContent["contact"]["address"];
pText[6].textContent = siteContent["contact"]["phone"];
pText[7].textContent = siteContent["contact"]["email"];
pText[8].textContent = siteContent["footer"]["copyright"];