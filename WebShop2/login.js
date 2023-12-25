document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;

    if (nama && nim) {
        const storedNim = localStorage.getItem(nama);
        if (storedNim && storedNim === nim) {
            window.location.href = 'home.html';
        } else {
            alert('Nama atau NIM anda salah');
            alert('Atau mungkin anda belum mendaftar');
        }
    } else {
        alert('Mohon untuk mengisi nama dan NIM.');
    }
});