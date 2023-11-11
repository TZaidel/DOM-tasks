const container = document.querySelector('.container')

const imgEl = document.createElement('img')
imgEl.src = 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRCFnOaPxRFJKF8oaDU8qoN7RDEBSr6kr5XpSIr3fEPMj0bqqRmv1wwdkvgDhh1yg0UU2QtGaG9ciU2vt0jqJWYLfaiE1-RDvIEzHT6rg'
imgEl.style.width = '350px'

const title = document.createElement('h2')
title.textContent = 'Norway. Lofoten island'

const link = document.createElement('a')
link.href = 'https://www.visitnorway.com/places-to-go/northern-norway/the-lofoten-islands/'
link.textContent = 'Visit Norway'
link.style.display = 'block'
link.style.textDecoration = 'none'
link.style.marginTop = '10px'
link.style.textAlign = 'right'
link.setAttribute('target', '_blank')

container.style.border = '1px solid gray'
container.style.width = '350px'
container.style.padding = '10px'

container.append(title, imgEl, link)