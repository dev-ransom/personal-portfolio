const portfolioCard = document.querySelector('#portfolioCard');
const modalContainer = document.querySelector('.modal-container');
const projects = [
    {
        id: '0',
        title: 'Grocery app',
        description: 'A simple grocery app that enables users to browse, select, and purchase groceries online. It offers a convenient way to create shopping lists, order items, schedule deliveries, and manage household essentials with ease',
        technologies: ['Html', 'CSS', 'JavaScript'],
        image: 'images/grocery-app.png',
        'source code': 'https://github.com/dev-ransom/color-flipper',
        'live demo': 'https://jade-fox-27c55e.netlify.app/',
    },
    {        
        id: '1',
        title: 'Weather app',
        description: 'A simple weather app that provides current and forecasted weather information for a specified location, helping users stay informed about temperature, precipitation, wind, and other meteorological conditions in real-time.',
        technologies: ['Html', 'CSS', 'JavaScript'],
        image: 'images/weather-app.png',
        'source code': 'https://github.com/dev-ransom/whether_app',
        'live demo': 'https://sparkly-cuchufli-aa32f3.netlify.app/',
    },
    {        
        id: '2',
        title: 'Random quote app',
        description: 'A simple Random Quote app that generates and displays inspirational or thought-provoking quotes. Users can click a button to retrieve a new random quote, offering quick moments of motivation or reflection.',
        technologies: ['Html', 'CSS', 'JavaScript'],
        image: 'images/random-quote.png',
        'source code': 'https://github.com/dev-ransom/Ransom-quote-generator',
        'live demo': 'https://65290c9611e7240bf4c4a8c3--dazzling-licorice-66bb92.netlify.app/',
    },
    {        
        id: '3',
        title: 'sign-up app',
        description: 'A simple weather app that provides current and forecasted weather information for a specified location, helping users stay informed about temperature, precipitation, wind, and other meteorological conditions in real-time.',
        technologies: ['Html', 'CSS', 'JavaScript'],
        image: 'images/sign-up.png',
        'source code': 'https://github.com/dev-ransom/Sign_up-form',
        'live demo': 'https://6529079011e72407fac4a96e--subtle-tanuki-ef4da0.netlify.app/',
    },
    {        
        id: '4',
        title: 'lurika website',
        description: "A Lurika website likely serves as an online platform or community for users to explore and share content, connect with others, or engage in various activities related to a specific theme or interest. It may offer features like forums, discussions, or user-generated content related to the Lurika community's shared passion or subject matter",
        technologies: ['Html', 'CSS', 'JavaScript'],
        image: 'images/lurika-clone.png',
        'source code': 'https://github.com/dev-ransom/Loruki_website',
        'live demo': 'https://velvety-pony-072f85.netlify.app/',
    },
    {        
        id: '5',
        title: 'Dad jokes app',
        description: "A dad jokes generator is a simple program or service that delivers light-hearted and often cheesy jokes typically associated with dad humor. It's designed to entertain and amuse with jokes that are intentionally corny, pun-based, and family-friendly, appealing to a wide audience with a sense of humor.",
        technologies: ['Html', 'CSS', 'JavaScript'],
        image: 'images/Dad-jokes.png',
        'source code': 'https://github.com/dev-ransom/Dad_Jokes',
        'live demo': 'https://lustrous-syrniki-32ec80.netlify.app/',
    },
]



for(let i  = 0; i < projects.length; i++){
    const article = document.createElement('article');
    const child = document.createElement('article');
    const grandChild1 = document.createElement('article');
    const grandChild2 = document.createElement('article');
    const imageElement = document.createElement('img');
    const heading3 = document.createElement('h3');
    const paragragh = document.createElement('p');
    const listContainer = document.createElement('ul');
    const btns = document.createElement('button');
    const project = projects[i];
    portfolioCard.appendChild(article);
    article.appendChild(child);
    imageElement.src = project.image;
    child.appendChild(grandChild1);
    child.appendChild(grandChild2)
    grandChild1.appendChild(imageElement);
    grandChild2.appendChild(btns);
    //  add textcontent
    btns.textContent = 'view project';
    // Add classes to the elements
    article.classList.add('portfolio-item', 'padd-15');
    child.classList.add('portfolio-inner-item', 'shadow-dark');
    grandChild1.classList.add('portfolio-img');
    grandChild2.classList.add('portfolio-btn');
    btns.classList.add('view-btn');
    
}













