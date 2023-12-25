document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;

    if (nama && nim) {
        localStorage.setItem(nama, nim);
        window.location.href = 'login.html';
    } else {
        alert('Mohon untuk mengisi nama dan NIM.');
    }
});