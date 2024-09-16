// Función para abrir un modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Función para cerrar un modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Obtener los elementos del DOM
const btnConocenos = document.getElementById('openModalConocenos');
const btnCart = document.getElementById('openModalCart');
const closeBtns = document.querySelectorAll('.close');

// Agregar evento para abrir el modal "Conócenos"
btnConocenos.addEventListener('click', () => openModal('Modal-conocenos'));

// Agregar evento para abrir el modal del carrito
btnCart.addEventListener('click', () => openModal('Modal-cart'));

// Agregar evento para cerrar el modal al hacer clic en el botón de cerrar
closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        closeModal(modalId);
    });
});

// Agregar evento para cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
});
document.getElementById("formSelector").addEventListener("change", function() {
    const forms = document.querySelectorAll("article");
    forms.forEach(form => {
        form.classList.remove("visible");
        form.style.display = "none"; // Ocultar todos los formularios
    });
    const selectedForm = this.value;
    if (selectedForm) {
        const formToShow = document.getElementById(selectedForm + "Form");
        formToShow.style.display = "block"; // Mostrar solo el formulario seleccionado
    }
});