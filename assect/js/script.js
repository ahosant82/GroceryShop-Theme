//sidebar open close
let sidebar= document.querySelector(".sidebar");
let content= document.querySelector(".content");
let footer= document.querySelector(".footerArea");
let isshow = true;
function menuBtn(){
    if(isshow) {
        sidebar.style.display = "none";
        isshow = false;
        content.style.width = "100%";
        footer.style.width = "100%";
        content.style.margin = '0';
        footer.style.margin = '0';
    }
    else{
        content.style.width = "80%";
        footer.style.width = "80%";
        sidebar.style.display = "block";
        content.style.margin = '0 0 0 20%';
        footer.style.margin = '0 0 0 20%';
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

/// user admin open
let userAdminOpen = document.querySelector('.header-list');
let userAdmin = document.querySelector('.user-admin');

userAdminOpen.addEventListener('click', () => {
    if (userAdmin.style.display = "none") {
        userAdmin.style.display = 'block';

    }
    else{
        userAdmin.style.display = "none";
    }

});
//userAdmin close
$(document).ready(function(){
    $(".close").click(function(){
      $('.user-admin').hide(400);
      $('.cartPage').hide(400);
    });
});

//cartPage
$(document).ready(function(){
    $(".cart").click(function(){
      $('.cartPage').show(400);
    });
});

//discountbtn

$(document).ready(function(){
    $(".discountBtn").click(function(){
      $('.discountCode').toggle(400);
    });
});


