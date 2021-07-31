// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Add footer everywhere
let footer = document.querySelector('footer');
if (footer !== null) {
  footer.innerHTML = 'Copyright &copy; 2021';
}

const currentProjects = `
<div class="item">
<a href="#!">
  <img src="img/projects/realtor-estates.png" alt="Project" />
</a>
<a href="#" class="btn-light"> <i class="fas fa-eye"></i> Project </a>
<a
  href="https://github.com/Ash3601/realtor-estates-project"
  class="btn-dark"
>
  <i class="fab fa-github"></i> Github
</a>
</div>
<div class="item">
<a href="#!">
  <img src="img/projects/MCB.png" alt="Project" />
</a>
<a
  href="https://ash-360.000webhostapp.com/Project/Project/index.html"
  target="_blank"
  class="btn-light"
>
  <i class="fas fa-eye"></i> Project
</a>
<a href="https://github.com/Ash3601/MCB" class="btn-dark">
  <i class="fab fa-github"></i> Github
</a>
</div>
<div class="item">
<a href="#!">
  <img src="img/projects/MOHALI_Project.png" alt="Project" />
</a>
<a href="https://imgur.com/a/hIVmZkv" target="_blank" class="btn-light"> <i class="fas fa-eye"></i> Project </a>
<a
  href="https://github.com/Ash3601/102_Flowers_Detection_Flask_App/"
  class="btn-dark"
>
  <i class="fab fa-github"></i> Github
</a>
</div>
<div class="item">
<a href="https://fitness-tracker-eff8a.firebaseapp.com/" target="_blank">
  <img src="img/projects/Fitness-Tracker.png" alt="Project" />
</a>
<a
  href="https://fitness-tracker-eff8a.firebaseapp.com/"
  target="_blank"
  class="btn-light"
>
  <i class="fas fa-eye"></i> Project
</a>
<a
  href="https://github.com/Ash3601/AngularFitnessTracker"
  target="_blank"
  class="btn-dark"
>
  <i class="fab fa-github"></i> Github
</a>
</div>
<div class="item">
<a href="https://angular-recipe-app-1c894.firebaseapp.com/">
  <img src="img/projects/Angular-Recipe-App.png" alt="Project" />
</a>
<a
  href="https://angular-recipe-app-1c894.firebaseapp.com/"
  target="_blank"
  class="btn-light"
>
  <i class="fas fa-eye"></i> Project
</a>
<a
  href="https://github.com/Ash3601/AngularRecipeApp"
  class="btn-dark"
>
  <i class="fab fa-github"></i> Github
</a>
</div>
`;

const workListDiv = document.querySelector('.projects');
workListDiv.innerHTML = currentProjects;

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}
