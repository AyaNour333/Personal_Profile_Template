// links active
let links = document.querySelectorAll(".links li a")

links.forEach(li => {
    li.addEventListener("click",(e) => {
        links.forEach(el => {
            el.classList.remove("active")
        })
        e.target.classList.add("active")
        console.log(e.target);
    })
})

let linksIcon = document.querySelectorAll(".burger-icon .icon-links li a")
console.log(linksIcon);

linksIcon.forEach(li => {
    li.addEventListener("click",(e) => {
        linksIcon.forEach(el => {
            el.classList.remove("active")
        })
        e.target.classList.add("active")
        console.log(e.target);
    })
})






// burger icon
let icon = document.querySelector('.all .burger-icon')
let menu = document.querySelector(".icon-links")

icon.onclick = function(){
    icon.classList.toggle('active')
    menu.classList.toggle("open")
}






let progress = document.querySelectorAll(".skills .progress span")
let skills = document.querySelector(".skills")
let skillId = document.querySelector("#skills")
const divCount = document.querySelector("#about #count");
const countSpans = document.querySelectorAll('.skills .skill h3 span')
let count = 0,
    timerSpeed = 10,
    isDone = 0


    let spans = document.querySelectorAll('.count-container .count-box span')
    let countContainer =  document.querySelector('.count-container')
    let started = false

window.onscroll = function(){
    let countOuterHeight = countContainer.offsetHeight
    let windowHeight = this.innerHeight
    if(window.scrollY >= (countContainer.offsetTop + countOuterHeight-windowHeight)-100){
        if(!started){
            spans.forEach(span=>countFun(span))
        }
        started = true
    }
}


function countFun(span){
    let goal = span.dataset.section
    let counter = setInterval(() => {
    span.textContent++
        if(span.textContent == goal){
                clearInterval(counter)
            }
            },10);
        }





// fn section
const setProgressWidth = () =>{
    progress.forEach((el) => el.style.width = el.dataset.width);
}
const resetProgressWidth = () =>{
    progress.forEach((el) => el.style.width = 0);
}


window.addEventListener("scroll", (ev) => {
    if (
        window.screenTop >
        skillId.getBoundingClientRect().top - window.innerHeight
    ) {
        setProgressWidth()
    }

    else resetProgressWidth()
});

let countInterval = setInterval(()=> {
    countSpans.forEach((el, index)=> {
        if(countSpans[index].dataset.count >= count)
            el.innerHTML = count
        else isDone += 1
    })
    count++
}, timerSpeed) 





// filter images
let filterButton = document.querySelectorAll(".portfolio .filter-row .box")
let images = document.querySelectorAll('.my-works img')
console.log(images);

filterButton.forEach(box=>{
    box.addEventListener('click',(e)=>{
        handleActive(e)
    })
    box.addEventListener('click',manageImages)
})

function handleActive(e){
    e.target.parentElement.querySelectorAll(".active").forEach(el=>{
        el.classList.remove('active')
    })
    e.target.classList.add('active')
}

function manageImages(){
    images.forEach(img=>{
        img.style.display = 'none'
    })
    document.querySelectorAll(this.dataset.fill).forEach(el=>{
        el.style.display = 'block'
    })
}

