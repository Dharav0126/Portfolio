function Showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display= 'flex';
}

function Closesidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none';
}

function Toggleform(){
    var formcontainer = document.getElementById("form-container");
    if(formcontainer.style.display==="none"){
        formcontainer.style.display="block";
    }
    else{
        formcontainer.style.display="none";
    }
}

function Closeform(){
    var formcontainer = document.getElementById("form-container");
    formcontainer.style.display="none";
}