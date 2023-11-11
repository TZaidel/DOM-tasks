import products from './data/product.js';

const container = document.querySelector('.products')


const  createArticle = products => {
    
    const article = document.createElement('article')
    article.style.width = '260px'

    const title = document.createElement('h2')
    title.textContent = products.name  

    const description = document.createElement('p')
    description.textContent = products.description
        
    const price = document.createElement('p')
    price.textContent = products.price
    price.style.textAlign = 'right'
    price.style.fontWeight = 'bold'

    article.append(title, description, price)
    return article
}

const elem = products.map(createArticle)

container.append(...elem)
