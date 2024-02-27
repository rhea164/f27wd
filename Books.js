let links=document.querySelectorAll(".links a");
let bodyId=document.querySelector("body").id;
//checking if the navigation bar list element's data-active state matches the body id.
for(let link of links){
    if(link.dataset.active==bodyId){
        link.classList.add("active");
    }
}