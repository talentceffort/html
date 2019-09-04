document.querySelector('.menu-item').onclick = function() {
    document.querySelector('#container').classList.remove('page1');
    document.querySelector('#container').classList.add('page2')
}

document.querySelector('.back').onclick = function() {
    document.querySelector('#container').classList.remove('page2');
    document.querySelector('#container').classList.add('page1')
}

