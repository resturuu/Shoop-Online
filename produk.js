var sizeOptions = document.getElementsByClassName('size-option');

for (var i = 0; i < sizeOptions.length; i++) {
    sizeOptions[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');

        this.className += " active";
    });
}