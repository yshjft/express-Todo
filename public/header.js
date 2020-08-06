let logout= document.getElementById("logout");

logout.addEventListener("click", function(e){
    e.preventDefault();

    const xhr=new XMLHttpRequest();
    xhr.onload=function(){
    location.href='/';
    }

    xhr.onerror=function(){
        console.error(xhr.responseText);
    }

    xhr.open('GET', '/auth/logout');
    xhr.send();
});

