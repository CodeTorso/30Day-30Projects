

const anchorTags = document.getElementsByTagName('a');

for (i = 0; i < 30; i++){
  if (i % 3 === 0 ){

    anchorTags[i].addEventListener('mouseover', function() {
      console.log(this.innerHTML)
      let audio1 = new Audio('audio/audio1.mp3')
      audio1.play()
    })

  }
  if (i % 3 === 1 ){

    anchorTags[i].addEventListener('mouseover', function() {
      console.log(this.innerHTML)
      let audio2 = new Audio('audio/audio2.mp3')
      audio2.play()
    })

  }
  if (i % 3 === 2 ){

    anchorTags[i].addEventListener('mouseover', function() {
      console.log(this.innerHTML)
      let audio3 = new Audio('audio/audio3.mp3')
      audio3.play()
    })

  }
}

// document.querySelector(".projects-section").addEventListener("scrollend", () => {
//   console.log('scrolled')
// })

// document.querySelector(".projects-section").addEventListener("mousemove", () => {
//   console.log('mouse moved')
// })