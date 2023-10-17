const portfolioCard = document.querySelector('#portfolioCard');
const modalContainer = document.querySelector('.modal-container');
const projectData = [
    {
        id: '0',
        title: 'Grocery app',
        description: 'A simple grocery app that enables users to browse, select, and purchase groceries online. It offers a convenient way to create shopping lists, order items, schedule deliveries, and manage household essentials with ease',
        technologies: ['Html', 'CSS', 'JavaScript', 'Api'],
        image: 'images/grocery-app.png',
        'source code': 'https://github.com/dev-ransom/color-flipper',
        'live demo': 'https://jade-fox-27c55e.netlify.app/',
    },
    {        
        id: '1',
        title: 'Weather app',
        description: 'A simple weather app that provides current and forecasted weather information for a specified location, helping users stay informed about temperature, precipitation, wind, and other meteorological conditions in real-time.',
        technologies: ['Html', 'CSS', 'JavaScript', 'Api'],
        image: 'images/weather-app.png',
        'source code': 'https://github.com/dev-ransom/whether_app',
        'live demo': 'https://sparkly-cuchufli-aa32f3.netlify.app/',
    },
    {        
        id: '2',
        title: 'Random quote app',
        description: 'A simple Random Quote app that generates and displays inspirational or thought-provoking quotes. Users can click a button to retrieve a new random quote, offering quick moments of motivation or reflection.',
        technologies: ['Html', 'CSS', 'JavaScript', 'Api'],
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
        technologies: ['Html', 'CSS', 'JavaScript', 'Api'],
        image: 'images/Dad-jokes.png',
        'source code': 'https://github.com/dev-ransom/Dad_Jokes',
        'live demo': 'https://lustrous-syrniki-32ec80.netlify.app/',
    },
]



function createProjectCard(project){
    const article = document.createElement('article');
    const child = document.createElement('article');
    const grandChild1 = document.createElement('article');
    const grandChild2 = document.createElement('article');
    const imageElement = document.createElement('img');
    const btn = document.createElement('button');
    portfolioCard.appendChild(article);
    article.appendChild(child);
    imageElement.src = project.image;
    child.appendChild(grandChild1);
    child.appendChild(grandChild2)
    grandChild1.appendChild(imageElement);
    grandChild2.appendChild(btn);
    //  add textcontent
    btn.textContent = 'view project';
    // Add classes to the elements
    article.classList.add('portfolio-item', 'padd-15');
    child.classList.add('portfolio-inner-item', 'shadow-dark');
    grandChild1.classList.add('portfolio-img');
    grandChild2.classList.add('portfolio-btn');
    btn.classList.add('view-btn', 'pop');
    btn.setAttribute('data-project-id', project.id);

    }

    projectData.forEach((project)=>{
        createProjectCard(project)
    });

    const popBtn = document.querySelectorAll('.pop');

    function handlePopButtonClick(event){
            const projectId = event.target.getAttribute('data-project-id');
            const project = projectData.find((proj) => proj.id === projectId);
            // clear modalcontainer to avoid repition of modal content
             modalContainer.innerHTML = '';
            const modalContent = document.createElement('div');
            const modalHeader = document.createElement('article');
            const heading3 = document.createElement('h3');
            const listContainer = document.createElement('ul');
            const icon = document.createElement('i');
            // start here
            const row = document.createElement('div');
            const modalImg = document.createElement('div');
            const img = document.createElement('img');
            const modalDescription = document.createElement('div');
            const paragragh = document.createElement('p');
            const btnContainer = document.createElement('div');
            const liveButton = document.createElement('button');
            const sourceButton = document.createElement('button');
            const liveDemoLink =  document.createElement('a');
            const SourceCodeLink =  document.createElement('a');
            //  appending children
            modalContainer.appendChild(modalContent);
            modalContent.appendChild(modalHeader);
            heading3.innerHTML = project.title;
            modalHeader.appendChild(heading3);
            modalHeader.appendChild(icon);
            modalContent.appendChild(listContainer);
            // start here
            modalContent.appendChild(row);
            row.appendChild(modalImg);
            modalImg.appendChild(img);
            img.src = project.image;
            row.appendChild(modalDescription);
            modalDescription.appendChild(paragragh);
            paragragh.innerHTML = project.description;
            modalDescription.appendChild(btnContainer);
            btnContainer.appendChild(liveButton);
            btnContainer.appendChild(sourceButton);
            liveButton.appendChild(liveDemoLink);
            sourceButton.appendChild(SourceCodeLink);
            for(let i = 0; i < project.technologies.length; i++){
                const listItem = document.createElement('li');
                const proj = project.technologies[i];
                listContainer.appendChild(listItem);
                listItem.innerHTML = proj;
            }
            // add classlist
            modalContent.classList.add('modal-content', 'padd-15', 'shadow-dark');
            modalHeader.classList.add('modal-header', 'padd-15');
            icon.classList.add('fa', 'fa-close');
            listContainer.classList.add('list-container', 'padd-15');
            row.classList.add('row');
            modalImg.classList.add('modal-img', 'padd-15');
            modalDescription.classList.add('modal-description');
            btnContainer.classList.add('btn-container', 'padd-15');
            liveButton.classList.add('live-demo', 'btn');
            sourceButton.classList.add('source-code', 'btn');
            console.log(modalContainer);
        }

   Array.from(popBtn).forEach((btn)=>{
    btn.addEventListener('click', handlePopButtonClick);
   })
