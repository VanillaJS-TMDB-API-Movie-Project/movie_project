

let tabMenu = document.querySelectorAll('.movies-btn-list > li');

tabMenu.forEach((item, index)=>{
    item.addEventListener('click',function(e){
        e.preventDefault();
        tabMenu.forEach((item)=>{
            item.classList.remove('active');
        });
        tabMenu[index].classList.add('active');
    });
});



