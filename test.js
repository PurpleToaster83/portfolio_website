const nav_one = document.querySelector('.element'.eq(0));
const nav_two = document.querySelector('.element'.eq(1));
const nav_three = document.querySelector('.element'.eq(2));

const oneLinks = document.querySelector(".element".eq(0));
const twoLinks = document.querySelector(".element".eq(1));
const threeLinks = document.querySelector(".element".eq(2));


nav_one.addEventListener('click', function(event) {
    const x = event.clientX();
    const y = event.clientY();
    
    const rect_one = nav_one.getBoundingClientRect();
    
    if(x >= rect_one.left && x <= rect_one.right && y >= rect_one.top && y <= rect_one.bottom) {
        console.log("blah 1");
    }

    oneLinks.toggle('active');
});

nav_two.addEventListener('click', function(event) {
    const x = event.clientX();
    const y = event.clientY();
    
    const rect_two = nav_two.getBoundingClientRect();
    
    if(x >= rect_two.left && x <= rect_two.right && y >= rect_two.top && y <= rect_two.bottom) {
        console.log("blah 2");
        location.href = "about_me.html";
    }
    twoLinks.toggle('active');
});

nav_three.addEventListener('click', function(event) {
    const x = event.clientX();
    const y = event.clientY();
    
    const rect_three = nav_three.getBoundingClientRect();
    
    if(x >= rect_three.left && x <= rect_three.right && y >= rect_three.top && y <= rect_three.bottom) {
        console.log("blah 3");
    }
    threeLinks.toggle('active');
});

