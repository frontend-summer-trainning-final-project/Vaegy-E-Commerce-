//fetch data from json file


// 1- feach plogs section

window.onload = function () {
    fetch('/js/db.json')
      .then(response => response.json())
      .then(data => {
        const DB = data;
  
        for (var i = 0; i < DB.BlogsSectionCards.length; i++) {
          var im_path = DB.BlogsSectionCards[i]["image-path"];
          var card_title = DB.BlogsSectionCards[i]["Card-title"];
          var date = DB.BlogsSectionCards[i].date;
          var para = DB.BlogsSectionCards[i]["card-paragraph"];
  
          // ... the rest of your code for creating and appending elements
  
          const div = document.createElement("div");
          div.classList.add("col-12", "col-md-6", "col-lg-4", "card");
  
          const div1 = document.createElement("div");
          div1.classList.add("image");
  
          const div2 = document.createElement("div");
          div2.classList.add("card-body");
  
          const card_img = document.createElement("img");
          card_img.classList.add("card-img");
          card_img.src = im_path;
  
          const h3 = document.createElement("h3");
          h3.classList.add("card-title");
          h3.textContent = card_title;
  
          const div21 = document.createElement("div");
          div21.classList.add("date");
  
          const p = document.createElement("p");
          p.classList.add("card-text");
          p.innerHTML = date;
  
          const p1 = document.createElement("p");
          p1.classList.add("card-text");
          p1.innerHTML = para;
  
          div1.appendChild(card_img);
          div21.appendChild(p);
          div2.appendChild(h3);
          div2.appendChild(div21);
          div2.appendChild(p1);
          div.appendChild(div1);
          div.appendChild(div2);
  
          const row = document.getElementById("r");
          row.appendChild(div);
        }
      })
      .catch(error => {
        console.error("Error fetching data from JSON file:", error);
      });
  };
  
  // 2- fetch footer section
  // Fetch the JSON data
  
  
//   const fetchData = () => {
//     return {
//        "logoSrc": "images/logo.webp",
//        "links": [
//        {
//          text: "Home",
//          href: "home.html",
//          isActive: true,
//        },
//        {
//          text: "About",
//          href: "about.html",
//        },
//        {
//          text: "Services",
//          href: "#services",
//        },
//        {
//          text: "Shop",
//          href: "product1.html",
//        },
//        {
//          text: "Blogs",
//          href: "Blogs-Page.html",
//        },
//        {
//          text: "Contact",
//          href: "contact us.html",
//        },    ],
//        "icons": [
//        {
//          class: "bx bx-search-alt",
//          id: "search-icon",
//        },
//        {
//          href: "Login.html",
//          class: "bx bx-user",
//        },
//        {
//          href: "product1.html",
//          class: "bx bx-heart",
//        },
//        {
//          href: "product1.html",
//          class: "bx bx-cart",
//        },
//        ]
//     };
//    };
   
//    const renderHeader = (data) => {
//     const container = document.getElementById('header-template');
     
//     // Logo
//     const logo = document.createElement('img');
//     logo.src = data.logoSrc;
//     logo.alt = 'Logo';
//     container.appendChild(logo);
     
//     // Links
//     const linksContainer = document.createElement('div');
//     linksContainer.classList.add('collapse', 'navbar-collapse');
//     data.links.forEach((link) => {
//        const linkElement = document.createElement('a');
//        linkElement.href = link.href;
//        linkElement.classList.add('nav-link');
//        linkElement.textContent = link.text;
//        linksContainer.appendChild(linkElement);
//     });
//     container.appendChild(linksContainer);
     
//     // Icons
//     const iconsContainer = document.createElement('div');
//     iconsContainer.classList.add('navbar-nav');
//     data.icons.forEach((icon) => {
//        const iconElement = document.createElement('a');
//        iconElement.href = icon.href;
//        iconElement.classList.add('nav-link', 'pe-2');
//        const iconTag = document.createElement('i');
//        iconTag.classList.add(icon.class);
//        iconElement.appendChild(iconTag);
//        iconsContainer.appendChild(iconElement);
//     });
//     container.appendChild(iconsContainer);
//    };
   
//    document.addEventListener('DOMContentLoaded', () => {
//     const data = fetchData();
//     renderHeader(data);
//    });







// function createHeader(data) {
//     const container = document.getElementById('header-template');
  
//     // Create the logo
//     const logo = document.createElement('img');
//     logo.src = data.logoSrc;
//     logo.alt = 'Logo';
//     container.appendChild(logo);
  
//     // Create the links
//     const linksContainer = document.createElement('ul');
//     linksContainer.classList.add('navbar-nav', 'mx-auto');
//     data.links.forEach((link) => {
//       const linkElement = document.createElement('li');
//       linkElement.classList.add('nav-item');
//       const anchor = document.createElement('a');
//       anchor.href = link.href;
//       anchor.target = '_self';
//       anchor.classList.add('nav-link');
//       if (link.isActive) {
//         anchor.classList.add('active');
//       }
//       anchor.textContent = link.text;
//       linkElement.appendChild(anchor);
//       linksContainer.appendChild(linkElement);
//     });
//     container.appendChild(linksContainer);
  
//     // Create the icons
//     const iconsContainer = document.createElement('div');
//     iconsContainer.classList.add('nav-icons');
//     data.icons.forEach((icon) => {
//       if (icon.href) {
//         const iconAnchor = document.createElement('a');
//         iconAnchor.href = icon.href;
//         const iconElement = document.createElement('i');
//         iconElement.classList.add(icon.class);
//         iconAnchor.appendChild(iconElement);
//         iconsContainer.appendChild(iconAnchor);
//       } else {
//         const iconElement = document.createElement('i');
//         iconElement.id = icon.id;
//         iconElement.classList.add(icon.class);
//         iconsContainer.appendChild(iconElement);
//       }
//     });
//     container.appendChild(iconsContainer);
//   }
  
//   document.addEventListener('DOMContentLoaded', () => {
//     // Fetch the JSON data from the external file
//     fetch('/js/db.json')
//       .then((response) => response.json())
//       .then((data) => {
//         createHeader(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data from JSON file:', error);
//       });
//   });



document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and render the footer data
    function renderFooter() {
        // Fetch the JSON data using the fetch API
        fetch('/js/db.json') // Replace with the correct path to your JSON data
            .then((response) => response.json())
            .then((data) => {
                const footer = data.footer;
                const container = document.querySelector('.footer .container');

                // Render the logo and description
                const logoColumn = container.querySelector('.col-md-3.logo-column');
                logoColumn.querySelector('img').src = footer.div[0].div[0].a.img['@src'];
                logoColumn.querySelector('p').innerText = footer.div[0].div[0].p['#text'].join(' ');

                // Render the social icons
                const socialList = logoColumn.querySelector('.list-inline.socials');
                const socialItems = footer.div[0].div[0].ul.li;
                socialList.innerHTML = '';
                socialItems.forEach((item) => {
                    const icon = document.createElement('i');
                    icon.className = item['@class'];
                    icon.classList.add('new-class'); // Add a new class here
                    socialList.appendChild(icon);
                });

                // Render the Help & Information section
                const helpInfo = container.querySelector('.col-md-3');
                const helpList = helpInfo.querySelector('ul');
                const helpItems = footer.div[1].ul.li;
                helpList.innerHTML = '';
                helpItems.forEach((item) => {
                    const link = document.createElement('a');
                    link.href = item.a['@href'];
                    link.innerText = item.a['#text'];
                    link.classList.add('new-class'); // Add a new class here
                    const listItem = document.createElement('li');
                    listItem.appendChild(link);
                    helpList.appendChild(listItem);
                });

                // Render the About Us section
                const aboutUs = container.querySelector('.col-md-3:nth-child(3)');
                const aboutUsList = aboutUs.querySelector('ul');
                const aboutUsItems = footer.div[2].ul.li;
                aboutUsList.innerHTML = '';
                aboutUsItems.forEach((item) => {
                    const link = document.createElement('a');
                    link.href = item.a['@href'];
                    link.innerText = item.a['#text'];
                    link.classList.add('new-class'); // Add a new class here
                    const listItem = document.createElement('li');
                    listItem.appendChild(link);
                    aboutUsList.appendChild(listItem);
                });

                // Render the Categories section
                const categories = container.querySelector('.col-md-3:nth-child(4)');
                const categoriesList = categories.querySelector('ul');
                const categoriesItems = footer.div[3].ul.li;
                categoriesList.innerHTML = '';
                categoriesItems.forEach((item) => {
                    const link = document.createElement('a');
                    link.href = item.a['@href'];
                    link.innerText = item.a['#text'];
                    link.classList.add('new-class'); // Add a new class here
                    const listItem = document.createElement('li');
                    listItem.appendChild(link);
                    categoriesList.appendChild(listItem);
                });

                // Render the Copyright section
                const copyright = container.querySelector('.copyright');
                copyright.innerHTML = `Copyright ${footer.div[4].p['#text']} | design by <span>${footer.div[4].p.span}</span>`;
            })
            .catch((error) => {
                console.error('Error fetching footer data:', error);
            });
    }

    // Call the renderFooter function to display the footer on the page
    renderFooter();
});

  