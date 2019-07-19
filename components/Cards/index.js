// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        list1.pop('node.js')
        list1.push('node')
        list1.forEach(topic =>{
            let articleTopics = data.data.articles[`${topic}`]
            // console.log(articleTopics)
            articleTopics.forEach(articleTopic => {
                createArticle(articleTopic)
                // console.log(articleTopic)

            }); 
        })
            
    })
    // .catch(error => {
    //     console.log(`error: ${error}`)
    // })

    let cardContainer = document.querySelector('.cards-container')

    let createArticle = function(articleData) {
        let card = document.createElement('div')
        let headline = document.createElement('div')
        let author = document.createElement('div')
        let imgContainer = document.createElement('div')
        let image = document.createElement('img')
        let by = document.createElement('span')

        card.classList.add('card')
        headline.classList.add('headline')
        author.classList.add('author')
        imgContainer.classList.add('img-container')

        card.appendChild(headline)
        card.appendChild(author)
        author.appendChild(imgContainer)
        imgContainer.appendChild(image)
        author.appendChild(by)

        headline.textContent = articleData.headline
        image.src = articleData.authorPhoto
        by.textContent = `by ${articleData.authorName}`

        cardContainer.appendChild(card)



    }