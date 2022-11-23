let { body } = document

let btn1 = document.querySelector('.background-1')
let btn2 = document.querySelector('.background-2')
let btn3 = document.querySelector('.background-3')

btn1.addEventListener('click', toggleBack)
btn2.addEventListener('click', toggleBack)
btn3.addEventListener('click', toggleBack)

function clearClass(){
    body.className = ''
}

function toggleBack() {
    clearClass()
        switch (this) {
            case btn1:
                return body.classList.add('background-1')
            case btn2:
               return body.classList.add('background-2')
            case btn3:
                return body.classList.add('background-3')
        }
    
}



