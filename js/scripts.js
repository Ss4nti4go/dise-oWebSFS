const overlay = document.getElementById('overlay');
const card = document.getElementById('section-categorias');
function expandCard(element) {
    element.classList.add('expanded');
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.cerrar-card').style.display = 'block';
}
function cerrarCardOverlay() {
    document.querySelector('.section-categorias.expanded').classList.remove('expanded');
    document.querySelector('.cerrar-card').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}
function toggleForm(formType) {
    const formContainer = document.getElementById('form-container');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
   
    if(formType === 'login') {
        loginForm.classList.add('active', 'moverse-dentro-izquierda');
        registerForm.classList.remove('active', 'moverse-fuera-derecha');
        loginForm.classList.remove('inactive');
        registerForm.classList.add('inactive', 'moverse-dentro-derecha');
        loginBtn.style.backgroundColor = '#555';
        registerBtn.style.backgroundColor = '#333';
        
    } else if (formType === 'register') {
      
        registerForm.classList.add('active', 'moverse-dentro-derecha');
        loginForm.classList.remove('active', 'moverse-fuera-izquierda');
        registerForm.classList.remove('inactive');
        loginForm.classList.add('inactive', 'moverse-dentro-izquierda');
        registerBtn.style.backgroundColor = '#555';
        loginBtn.style.backgroundColor = '#333';
    }
    const activeForm = formType === 'login' ? loginForm : registerForm;
    formContainer.style.height = activeForm.offsetHeight + 100 + 'px'; 
}

window.onload = function() {
    const formContainer = document.getElementById('form-container');
    const activeForm = document.querySelector('.form.active');
    formContainer.style.height = activeForm.offsetHeight + 100 + 'px';
};