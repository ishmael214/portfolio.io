const showProjects = document.querySelector("section p");
const wrap = document.querySelector(".wrap");
const video = document.querySelector("video");

showProjects.addEventListener('click', () => {
    video.style.filter = `brightness(35%)`;
    wrap.innerHTML = 
    `
    <div class ="form" id = "login">
                <button data-close-button class="close-button">&times;</button>
                    <div class="summaryvid">
                        <video src="realestatevid.mp4" autoplay muted loop></video>
                    </div>
                    <div class="summary">
                        <p>Made this to resemble a realistic real estate website</p>
                    </div>
            </div>

            <div class ="form1" id = "login">
            <button data-close-button class="close-button">&times;</button>
                <div class="summaryvid">
                    <video src="myflixvid.mp4" autoplay muted loop></video>
                </div>
                <div class="summary">
                    <p>MyFLIX is a netflix spinoff I made that'll have all my favorite movies, 
                    tv shows, anime, and manga on there, as well as my very own reviews.</p>
                </div>
        </div>

        <div class ="form2" id = "login">
            <button data-close-button class="close-button">&times;</button>
                <div class="summaryvid">
                    <video src="pokedexvid.mp4" autoplay muted loop></video>
                </div>
                <div class="summary">
                    <p>A fun pokedex I created to practice using fetch and API's</p>
                </div>
        </div>
          
          
          <div id="overlay"></div>

    <div class="subProjectContainer">
            <div class="projects">
            <img src="realestate.jpg">
            <div class="options">
                <h4 data-login-target="#login" class= "login" >View Desc</h4>
                <a href ="https://ishmael214.github.io/realestateproject.io/" target="_blank"><h4>View Project</h4></a>
                <a href ="https://github.com/ishmael214/realestateproject.io" target="_blank"><h4>View Code</h4></a>
                
            </div> 
            <p>Real Estate </p> 
                
        </div>
        <!-- WHEN U ADD JAVASCRIPT MAKE SURE TO LOWER BRIGHTNESS OF BACKGROUND VID -->
        <div class="projects">
            <img src="myflix.jpg">
            <div class="options">
                <h4 data-login-target="#login" class= "login" >View Desc</h4>
                <a href ="https://ishmael214.github.io/myflix.io/" target="_blank"><h4>View Project</h4></a>
                <a href ="https://github.com/ishmael214/animeflix" target="_blank"><h4>View Code</h4></a>
                
            </div> 
            <p>My Flix</p>    
        </div>

        <div class="projects">
            <img src="pokedex.jpg">
            <div class="options">
                <h4 data-login-target="#login" class= "login" >View Desc</h4>
                <a href ="https://ishmael214.github.io/pokedexproj.io/" target="_blank"><h4>View Project</h4></a>
                <a href ="https://github.com/ishmael214/pokedexproj" target="_blank"><h4>View Code</h4></a>
                
            </div> 
            <p>Pokedex</p>      
        </div>

                    
    </div>
    `
    const viewDesc = document.querySelectorAll(".login");
    console.log(viewDesc);

    for ( const x of viewDesc) {
        x.addEventListener('click', () => {
           
            if (x === viewDesc[0]) {
                firstModalFunc();
            } else if (x === viewDesc[1]) {
                secondModalFunc();
            } else {
                thirdModalFunc();
            } 
        }) 
    }
})

const firstModalFunc = () => {
const openModalButtons = document.querySelectorAll('[data-login-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(p =>{
    p.addEventListener('click', () => {
        const login = document.querySelector(p.dataset.loginTarget)
        openModal(login)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.form.active')
    modals.forEach(login => {
        closeModal(login)
    })
})

closeModalButtons.forEach(p =>{
    p.addEventListener('click', () => {
        const login = p.closest('.form')
        closeModal(login)
    })
})

function openModal(login) {
    if (login == null) return
    login.classList.add('active')
    overlay.classList.add('active')

}

function closeModal(login) {
    if (login == null) return
    login.classList.remove('active')
    overlay.classList.remove('active')
}
}


const secondModalFunc = () => {
    const openModalButtons = document.querySelectorAll('[data-login-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')
    
    openModalButtons.forEach(p =>{
        p.addEventListener('click', () => {
            const login = document.querySelector(p.dataset.loginTarget)
            openModal(login)
        })
    })
    
    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.form1.active')
        modals.forEach(login => {
            closeModal(login)
        })
    })
    
    closeModalButtons.forEach(p =>{
        p.addEventListener('click', () => {
            const login = p.closest('.form1')
            closeModal(login)
        })
    })
    
    function openModal(login) {
        if (login == null) return
        login.classList.add('active')
        overlay.classList.add('active')
    
    }
    
    function closeModal(login) {
        if (login == null) return
        login.classList.remove('active')
        overlay.classList.remove('active')
    }
}

const thirdModalFunc = () => {
    const openModalButtons = document.querySelectorAll('[data-login-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')
    
    openModalButtons.forEach(p =>{
        p.addEventListener('click', () => {
            const login = document.querySelector(p.dataset.loginTarget)
            openModal(login)
        })
    })
    
    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.form2.active')
        modals.forEach(login => {
            closeModal(login)
        })
    })
    
    closeModalButtons.forEach(p =>{
        p.addEventListener('click', () => {
            const login = p.closest('.form2')
            closeModal(login)
        })
    })
    
    function openModal(login) {
        if (login == null) return
        login.classList.add('active')
        overlay.classList.add('active')
    
    }
    
    function closeModal(login) {
        if (login == null) return
        login.classList.remove('active')
        overlay.classList.remove('active')
    }
}    