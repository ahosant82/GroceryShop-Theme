//sidebar open close
let sidebar= document.querySelector(".sidebar");
let content= document.querySelector(".content");
let isshow = true;
function menuBtn(){
    if(isshow) {
        sidebar.style.display = "none";
        isshow = false;
        content.style.width = "100%";

    }
    else{
        content.style.width = "80%";
        sidebar.style.display = "block";
        isshow = true;
    }
}


// shop list active

$(document).on('click', '.shop-section .shop-list',function(){
    $(this).addClass('active').siblings().removeClass('active')
})

//shop section
let groceryBtn = document.querySelector('.grocery-shop');
let pharmecyBtn = document.querySelector('.pharmecy-shop');
let homeAppliebinceBtn = document.querySelector('.home-appliance');

//shop item
let groceryShop = document.querySelector('.groceryShop');
let pharmecyShop = document.querySelector('.pharmecyShop');
let applianceShop = document.querySelector('.applianceShop');

pharmecyShop.style.display = 'none';
applianceShop.style.display = 'none';


//function working

groceryBtn.addEventListener('click', () => {
    if (groceryShop.style.display = 'block') {
        pharmecyShop.style.display = 'none';
        applianceShop.style.display = 'none';
    }
});

pharmecyBtn.addEventListener('click', () => {
    if (pharmecyShop.style.display = 'block') {
        groceryShop.style.display = 'none';
        applianceShop.style.display = 'none';
    }
});

homeAppliebinceBtn.addEventListener('click', () => {
    if (applianceShop.style.display = "block") {
        groceryShop.style.display = 'none';
        pharmecyShop.style.display = 'none';
        
    }
});