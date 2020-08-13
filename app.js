const showProjects = document.querySelector("section p");
const wrap = document.querySelector(".wrap");
const video = document.querySelector("video");
let overlay = null;
let activeForm = null;

showProjects.addEventListener('click', () => {
    video.style.filter = `brightness(35%)`;
    wrap.innerHTML = 
    `
    <div class ="form" id = "1">
                <button data-close-button class="close-button">&times;</button>
                    <div class="summaryvid">
                        <video src="realestatevid.mp4" autoplay muted loop></video>
                    </div>
                    <div class="summary">
                        <p>Made this to resemble a realistic real estate website</p>
                    </div>
    </div>

            <div class ="form" id = "2">
            <button data-close-button class="close-button">&times;</button>
                <div class="summaryvid">
                    <video src="myflixvid.mp4" autoplay muted loop></video>
                </div>
                <div class="summary">
                    <p>MyFLIX is a netflix spinoff I made that'll have all my favorite movies, 
                    tv shows, anime, and manga on there, as well as my very own reviews.</p>
                </div>
        </div>

        <div class ="form" id = "3">
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
                <h4 data-login-target="#login" class= "login" data-id="1" >View Desc</h4>
                <a href ="https://ishmael214.github.io/realestateproject.io/" target="_blank"><h4>View Project</h4></a>
                <a href ="https://github.com/ishmael214/realestateproject.io" target="_blank"><h4>View Code</h4></a>
                
            </div> 
            <p>Real Estate </p> 
                
        </div>
        <!-- WHEN U ADD JAVASCRIPT MAKE SURE TO LOWER BRIGHTNESS OF BACKGROUND VID -->
        <div class="projects">
            <img src="myflix.jpg">
            <div class="options">
                <h4 data-login-target="#login" class= "login" data-id="2" >View Desc</h4>
                <a href ="https://ishmael214.github.io/myflix.io/" target="_blank"><h4>View Project</h4></a>
                <a href ="https://github.com/ishmael214/animeflix" target="_blank"><h4>View Code</h4></a>
                
            </div> 
            <p>My Flix</p>    
        </div>

        <div class="projects">
            <img src="pokedex.jpg">
            <div class="options">
                <h4 data-login-target="#login" class= "login" data-id="3" >View Desc</h4>
                <a href ="https://ishmael214.github.io/pokedexproj.io/" target="_blank"><h4>View Project</h4></a>
                <a href ="https://github.com/ishmael214/pokedexproj" target="_blank"><h4>View Code</h4></a>
                
            </div> 
            <p>Pokedex</p>      
        </div>

                    
    </div>
    `;

    setTimeout(function(){
        initApp();
    }, 1000);

    function initApp(){
        const loginButtons = document.querySelectorAll(".login");
        const closeButtons = document.querySelectorAll('[data-close-button]');
        overlay = document.getElementById('overlay')
        

        console.log(loginButtons);

        //add event listener to all login buttons
        Array.from(loginButtons).forEach((x) => {
            x.addEventListener('click', handleClick);
        });

        //add event listener to all close buttons
        Array.from(closeButtons).forEach((x) => {
            x.addEventListener('click', closeModal);
        })

        overlay.addEventListener('click', closeModal);
    }   

    const handleClick = (event) => {
        const clickTarget = event.target;
        const modalId = clickTarget.dataset.id;
        openModal(modalId);
    }

    function closeModal(event){
        const modalForm = document.getElementById(activeForm);
        modalForm.classList.remove('active');
        overlay.classList.remove('active');
        activeForm = null;
    }


    function openModal(modalId) {
        if (!modalId) return;
        activeForm = modalId;
        const modalForm = document.getElementById(modalId);
        modalForm.classList.add('active');
        overlay.classList.add('active');    
    }
})

