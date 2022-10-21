 document.querySelectorAll('.card').forEach(element => {
     //querySelector returns an nodeList.
     element.addEventListener('click',playerFlip)
})
//changed to an array from a nodeList
let suit = ['king','king','queen','queen','jack','jack','ten','ten','ace','ace','nine','nine']
let cards = Array.from(document.querySelectorAll('.card'))
let firstPick = ''
let secondPick = ''
let count = 0
let matched = []
shuffle(suit)
// console.log(cards)

function playerFlip(evt){
   evt.target.children[0].classList.toggle('hidden')
      if(firstPick === ''){
        firstPick = evt.target.children[0]
        firstPick.parentElement.removeEventListener('click', playerFlip)
        evt.target.classList.add('flipped')
      }else if(secondPick === ''){
        secondPick = evt.target.children[0]
        firstPick.parentElement.addEventListener('click', playerFlip)
        evt.target.classList.add('flipped')
        checkMatch()
      } 
    // if(evt.target.classList.contains('king')){
    // evt.target.children[0].src = 'reinheart.jpg'
    // console.log(evt.target.children[0].src)
    // checkMatch()
    // }else if(evt.target.classList.contains('queen')){
    // evt.target.src = 'mercy.jpg'
    // }else if(evt.target.classList.contains('jack')){
    // evt.target.src = 'soldier.jpg'
    // }
}

function checkMatch(){
    if(firstPick.src === secondPick.src){
        // console.log('match')
        firstPick.parentElement.removeEventListener('click', playerFlip)
        secondPick.parentElement.removeEventListener('click', playerFlip)
        firstPick.parentElement.classList.remove('flipped')
        firstPick.parentElement.classList.add('matched')
        secondPick.parentElement.classList.remove('flipped')
        secondPick.parentElement.classList.add('matched')
        firstPick = ''
        secondPick = ''
        count += 1
        document.getElementById('match').innerText = `${count} Match!`
        if (count === 6){
          document.getElementById('match').innerText = `${count} Match! You Win`
        }
        // console.log(count)
        // console.log(cards)
      }else if (firstPick !== secondPick){
        // console.log('Try Again!')
        setTimeout(() => {
          firstPick.classList.toggle('hidden')
          secondPick.classList.toggle('hidden')
          firstPick = ''
          secondPick = ''
        }, 500);
        document.getElementById('match').innerText = 'Try Again!'
      //   console.log(cards)
      //  console.log(cards[0].classList.contains('flipped'))
      //   for(let i = 0; i < cards.length - 1; i++){
      //       let matchCount = 0
      //       if((cards[i].children[0].attributes[1].nodeValue ===  'reinheart.jpg') && (cards[i].classList.contains('flipped'))){
      //           matchCount += 1
      //           console.log(matchCount)
      //           if(matchCount % 2 !== 0){
      //               cards[i].children[0].attributes[1].nodeValue = ''
      //           }
      //       }else if((cards[i].children[0].attributes[1].nodeValue === 'mercy.jpg') && (cards[i].classList.contains('flipped'))){
      //           matchCount += 1
      //           console.log(matchCount)
      //           if(matchCount % 2 !== 0){
      //               cards[i].children[0].attributes[1].nodeValue = ''
      //           }
      //       }else if((cards[i].children[0].attributes[1].nodeValue === 'soldier.jpg') && (cards[i].classList.contains('flipped'))){
      //           matchCount += 1
      //           console.log(matchCount)
      //           if(matchCount % 2 !== 0){
      //               cards[i].children[0].attributes[1].nodeValue = ''
      //           }
      //       }
      //  }
      }
}
//reset html on click
document.querySelector('#reset').addEventListener('click',()=>{
  location.reload()
})
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  let nodes = document.querySelectorAll('.card')
  console.log(nodes)
  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  for(let i =0; i < array.length; i++){
    nodes[i].classList.add(array[i])
  }
  for(let i =0; i < nodes.length; i++){
    if(nodes[i].classList[1] === 'king'){
    nodes[i].children[0].src = 'reinheart.jpg'
  }else if(nodes[i].classList[1] === 'queen'){
    nodes[i].children[0].src = 'mercy.jpg'
  }else if(nodes[i].classList[1] === 'jack'){
    nodes[i].children[0].src = 'soldier.jpg'
  }else if(nodes[i].classList[1] === 'ten'){
    nodes[i].children[0].src = 'reaper.jpg'
  }else if(nodes[i].classList[1] === 'ace'){
    nodes[i].children[0].src = 'tracer.jpg'
  }else if(nodes[i].classList[1] === 'nine'){
    nodes[i].children[0].src = 'genji.jpg'
  }
  }
}
//gave each element a number value
// cards[0] = 1
// cards[1] = 1
// cards[2] = 2
// cards[3] = 2
// cards[4] = 3
// cards[5] = 3

// console.log(cards)
// //shuffles the array
// cards = cards.sort((a,b)=> 0.5 - Math.random())

// console.log(cards)
// document.querySelector('#one').innerText = `${cards[0]}`
// document.querySelector('#two').innerText = `${cards[1]}`
// document.querySelector('#three').innerText = `${cards[2]}`
// document.querySelector('#four').innerText = `${cards[3]}`
// document.querySelector('#five').innerText = `${cards[4]}`
// document.querySelector('#six').innerText = `${cards[5]}`

// let check = []

// function match(evt){
    // evt.target = check.push(evt.target.innerText)
    // if (check.length === 2){
    //     if(check[0] === check[1]){
    //         //leave flipped
            
    //     }else if(check[0] === check[1]){
    //         //flip back
    //     }
    // }
    // console.log(check)

    // if(check.length === 2){
    //     check = []
    // }
    // console.log(check)
// }
