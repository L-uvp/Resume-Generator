
function addNewEQField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",1)
    newNode.setAttribute('placeholder','Enter Here')

    let eqob=document.getElementById("eq");
    let eqButtonob=document.getElementById("eqButton");


    eqob.insertBefore(newNode,eqButtonob);
}

function addNewSKField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",1)
    newNode.setAttribute('placeholder','Enter Here')

    let skob=document.getElementById("sk");
    let skButtonob=document.getElementById("skButton");


    skob.insertBefore(newNode,skButtonob);
}

function addNewLGField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('lgField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",1)
    newNode.setAttribute('placeholder','Enter Here')

    let lgob=document.getElementById("lg");
    let lgButtonob=document.getElementById("lgButton");


    lgob.insertBefore(newNode,lgButtonob);
}

function addNewPGField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('pgField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",1)
    newNode.setAttribute('placeholder','Enter Here')

    let pgob=document.getElementById("pg");
    let pgButtonob=document.getElementById("pgButton");


    pgob.insertBefore(newNode,pgButtonob);
}


function generate(){
    document.getElementById("name").innerHTML = document.getElementById("nameField").value;

    document.getElementById("number").innerHTML = document.getElementById("contactField").value;

    document.getElementById("location").innerHTML = document.getElementById("addressField").value;

    // links
    document.getElementById("git").innerHTML = document.getElementById("githubField").value;
    document.getElementById("linkd").innerHTML = document.getElementById("LinkedinField").value
    document.getElementById("emaild").innerHTML = document.getElementById("emailField").value;

    // objective
    document.getElementById("obj").innerHTML = document.getElementById("objectField").value;

    // academic
    let wes = document.getElementsByClassName("eqField");
    let str = "";

    for(let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("eqt").innerHTML = str;


    // skills
    let sk = document.getElementsByClassName("skField");
    let st = '';

    for(let e of sk){
        st = st + `<li> ${e.value} </li>`;
    }

    document.getElementById("skt").innerHTML = st;


    // project
    let pg = document.getElementsByClassName("pgField");
    let s = '';

    for(let e of pg){
        s = s + `<li> ${e.value} </li>`;
    }

    document.getElementById("pgt").innerHTML = s;


    // language
    let lg = document.getElementsByClassName("lgField");
    let l = '';

    for(let e of lg){
        l = l + `<li> ${e.value} </li>`;
    }

    document.getElementById("lgt").innerHTML = l;

    // img
    // let file = document.getElementById("imgField").files[0];

    // console.log(file);
    // let reader = new FileReader();
    // reader.readAsDataURL(file);
    // console.log(reader.result);

    // reader.onloadend = function(){
    //     document.getElementById("imgTemplate").scr = reader.result;
    // };

    document.getElementById("Resume").style.display="none";
    document.getElementById("resume-template").style.display="block";

}

function printresume(){
    window.print();
}