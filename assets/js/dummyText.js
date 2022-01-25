let dummy_btn = document.getElementById("dummy_btn")
let output = document.getElementById('dummyOutput')

dummy_btn.addEventListener('click', function(e){
    e.preventDefault()

    let input_num = document.getElementById("dummyNumber").value
    let value = parseInt(input_num)
    
    let dummyTexts = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.", " No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.","On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire","There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.","If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text"]
    let random = Math.floor(Math.random() * dummyTexts.length)

    if(value == '' || value <= 0 || isNaN(value)){
        output.innerHTML = `<p>${dummyTexts[random]}</p>`
    }else{
        let sliceArray = dummyTexts.slice(0, value)
        let finalArray = sliceArray.map(singleDummy => {
            return `<p>${singleDummy}</p>`
        }).join('')

        output.innerHTML = finalArray
    }

    

})