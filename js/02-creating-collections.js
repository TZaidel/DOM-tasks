const colorPicker = [
    {label: 'red', color: '#F44336'},
    {label: 'green', color: '#4CAF50'},
    {label: 'blue', color: '#2196F3'},
    {label: 'gray', color: '#607D8B'},
    {label: 'pink', color: '#E91E63'},
]

const container = document.querySelector('.color-picker')

//*-----for
// const element = []

// for (let i = 0; i < colorPicker.length; i += 1){
//     const button = document.createElement('button')
//     button.type = 'button'
//     button.textContent = colorPicker[i].label
//     button.style.backgroundColor = colorPicker[i].color
//     button.style.padding = '20px'
//     element.push(button)
// }

// container.append(...element)

//*-----map
// const element = colorPicker.map(({ label, color }) => {
//     const button = document.createElement('button')
//     button.type = 'button'
//     button.textContent = label
//     button.style.backgroundColor = color
//     button.style.padding = '20px'
// return button

// })
// container.append(...element)


//*-----function
const  addItems = color =>{
  return color.map(({ label, color }) => {
    const button = document.createElement('button')
    button.type = 'button'
    button.textContent = label
    button.style.backgroundColor = color
      button.style.padding = '20px'
  return button
  })
}

const elements = addItems(colorPicker)
container.append(...elements)