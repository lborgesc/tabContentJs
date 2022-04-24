const btns = document.querySelectorAll('button');
const contents = document.querySelectorAll('.content');


btns.forEach(button => { 
    button.addEventListener('click', handleClickButton)
})


function handleClickButton(e) {
    removeActive()

    contents.forEach(content => {
        if(e.target.getAttribute("id") === "history" && content.getAttribute("id") === "history"){
            e.target.classList.add('active')
            content.classList.add('active')
        }
        if(e.target.getAttribute("id") === "vision" && content.getAttribute("id") === "vision"){
            e.target.classList.add('active')
            content.classList.add('active')
        }
        if(e.target.getAttribute("id") === "goals" && content.getAttribute("id") === "goals"){
            e.target.classList.add('active')
            content.classList.add('active')
        }
    })
}

function removeActive() {
    btns.forEach(button => button.classList.remove('active'))

    contents.forEach(content => content.classList.remove('active'))
}