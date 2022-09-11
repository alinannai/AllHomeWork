const mouse = document.querySelector('.mouse');
mouse.addEventListener("mouseenter", function(event) {
    console.log('Курсор над элементом');
});
mouse.addEventListener("mouseleave", function(event) {
    console.log('Курсор покинул элемент');
});

