const autumnImageList = ['pair.jpg', 'horse.jpg', 'child.jpg', 'tree.jpg', 'flower.jpg', 'phone.jpg']
const winterImageList = ['tree.jpg', 'flower.jpg', 'phone.jpg', 'pair.jpg', 'horse.jpg', 'child.jpg',]
const springImageList = ['child.jpg', 'tree.jpg', 'flower.jpg', 'phone.jpg', 'pair.jpg', 'horse.jpg']
const summerImageList = ['horse.jpg', 'child.jpg', 'tree.jpg', 'flower.jpg', 'phone.jpg', 'pair.jpg',]
const renderImages = (imageList) => {
    const contaier = document.querySelector('.portfolio__items')
    contaier.innerHTML = ''
    for (let index = 0; index < imageList.length; index++) {
        const name = imageList[index];
        const img = document.createElement('img')
        img.src = `../images/${name}`
        img.alt = name
        img.className = 'items'
        contaier.append(img)
    }
}
renderImages(autumnImageList)
const seasonButtons = document.querySelectorAll('.pf_button')
const selectSeason = (event) => {
    const season = event.target.innerText
    for (let index = 0; index < seasonButtons.length; index++) {
        const element = seasonButtons[index];
       element.classList.remove('pf_button_active')
    }
    console.log(event.target.classList)
    if (season === 'Winter') {
       renderImages(winterImageList)
    }
    if (season === 'Spring') {
      renderImages(springImageList)
    }
    if (season === 'Summer') {
      renderImages(summerImageList)
    }
    if (season === 'Autumn') {
      renderImages(autumnImageList)
    }
}
for (let index = 0; index < seasonButtons.length; index++){
    const element = seasonButtons[index];
    element.addEventListener('click', selectSeason)

}

