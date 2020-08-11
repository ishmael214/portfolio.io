const showProjects = document.querySelector("section p");
const wrap = document.querySelector(".wrap");
const video = document.querySelector("video");

showProjects.addEventListener('click', () => {
    video.style.filter = `brightness(35%)`;
    wrap.innerHTML = 
    `
    <div class="subProjectContainer">
                    <div class="projects">
                        <img src="/media/realestate.jpg">
                        <div class="options">
                            <h4>View Desc</h4>
                            <h4>View Project</h4>
                            <h4>View Code</h4>
                        </div> 
                        <p>Real Estate </p> 
                              
                    </div>
                <!-- WHEN U ADD JAVASCRIPT MAKE SURE TO LOWER BRIGHTNESS OF BACKGROUND VID -->
                    <div class="projects">
                        <img src="/media/myflix.jpg">
                        <div class="options">
                            <h4>View Desc</h4>
                            <h4>View Project</h4>
                            <h4>View Code</h4>
                        </div>  
                        <p>My Flix</p>    
                    </div>

                    <div class="projects">
                        <img src="/media/pokedex.jpg">
                        <div class="options">
                            <h4>View Desc</h4>
                            <h4>View Project</h4>
                            <h4>View Code</h4>
                        </div> 
                        <p>Pokedex</p>      
                    </div>

                    
    </div>
    `
})