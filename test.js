var activePage = 1;

function changePage(page) {
    if(page == 'home') {
        window.location.href = "test.html";
        activePage = 1;
    }
    else if(page == 'about') {
        window.location.href = "about.html";
        activePage = 2;
    }
    else if(page == 'projects') {
        window.location.href = "projects.html";
        activePage = 3;
    }
}