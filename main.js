// NAV TOGGLE
const navBtn = document.querySelector('.nav-hamburger')
navBtn.addEventListener('click', (e) => {
    const ul = document.querySelector('nav ul')
    ul.classList.toggle('open')

    e.target.classList.toggle('active')
})

navBtn.addEventListener('focusout', (e) => {
    const ul = document.querySelector('nav ul')
    ul.classList.remove('open')

    e.target.classList.remove('active')
    console.log(e.target)
})


// FOR DARK THEME
const logoBtn = document.querySelector('.nav-logo')
logoBtn.addEventListener('click', (e) => {
    const body = document.querySelector('body')
    const footerLogo = document.querySelector('.footer-logo-link').firstChild
    body.classList.toggle('dark-mode')

    if (body.classList.contains('dark-mode')) {
        e.target.children[0].src = './Assets/Logo dark.svg'
        footerLogo.src = './Assets/Logo dark.svg'
    } else {
        e.target.children[0].src = './Assets/Logo.svg'
        footerLogo.src = './Assets/Logo.svg'
    }
})


// DATA JSON
async function dataJson() {
    const response = await fetch('./data.json')
    const data = await response.json()
    const main = document.querySelector('main')

    data.forEach((el) => {
        const createSection = document.createElement('section')
        main.appendChild(createSection)
        
        createSection.innerHTML = 
        `
        <a href="#" class='main-smaller-container'>
            <img src="${el.image}" alt=${el.imageDescription}>
            <div class="main-detail">
                <article>
                    <h1>${el.title}</h1>
                    <p>${el.description}</p>
                </article>
                <div class="author-container">
                    <img src="${el.authorPic}" alt="User Avatar">
                    <section class="author-text">
                        <h2>${el.authorName}</h2>
                        <p>${el.occupation}</p>
                    </section>
                </div>
            </div>
        </a>
        `
    })
}

dataJson()