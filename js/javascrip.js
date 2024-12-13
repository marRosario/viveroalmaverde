window.onload = function() {
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("close-modal");

    // Mostrar el modal
    modal.style.display = "flex";

    // Cerrar el modal al hacer clic en el botón
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });
};
