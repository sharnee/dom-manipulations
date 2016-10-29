
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2x
	 // access the element that contains the number. 
   var numberEl = document.querySelector('#compoundInvestment')

   // double the number.
   var num = parseInt(numberEl.innerHTML)
   num = num * 2

   // write the doubled number into the element.
   numberEl.innerHTML= num 
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  // alert('hey')
  var colorCircle = document.querySelector("#circle-bw")
  console.log(colorCircle)
  if (colorCircle.style.background === 'black') {
    // then turn the color white. 
    colorCircle.style.background = 'white'
    // console.log('if block entered')

  } else {
      colorCircle.style.background = 'black'
      // console.log('if block else is entered')
    }

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4} By manipulating the <div class='circle'> DOM element in JS, make the circle 
  // double height and width until its width is greater-than/equal-to 320px.
  // At that point make it reduce back to its original size of 40px x 40px

// first we want to grab the circle dom node
  var expandCircleNode = document.querySelector('.circle-red')
  // console.log ('print this thing')
  // if(expandCircleNode.style.width === '')
  expandCircleStyles = window.getComputedStyle(expandCircleNode)
  expandCircleOrigWidth= expandCircleStyles.width
  // console.log(expandCircleOrigWidth)
  //notes to self : take the number form the px value.

   intWidth = parseInt(expandCircleOrigWidth) * 2
 // console.log(intWidth) test
  
  
 
  
// console.log('printme')
if (expandCircleNode.style.width === '320px') {
  expandCircleNode.style.width = '40px'
} else {
  (expandCircleNode.style.width = intWidth + 'px')
}

if (expandCircleNode.style.height === '320px'){
  expandCircleNode.style.height = '40px'
}else{
   expandCircleNode.style.height = intWidth + 'px'
}

})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
// Remove each element of the list below that has the class 'inactive'.
// first we have to grab the list 
  var  = document.querySelector('#userList')
then we have to get the list out of the #userlist

//   var removeInactive = function(node) {
//   var userList = node.children
//   for (var i = 0; i < userList.length; i ++) {
//     var liNode = userList[i]
//     if (liNode.classList.contains('done')) {
//       node.removeChild(liNode)
//       i--
//     }
//   }
// }

var ulNode = document.querySelector("#userList ul")
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6

  var inactiveUser = function(node) {
  var listItems = node.children
  for (var i = 0; i < listItems.length; i ++) {
    var liNode = listItems[i]
    if (liNode.classList.contains('inactive')) {
      console.log('print me')
      node.removeChild(liNode)
    }
  }
  var ulNode = document.querySelector("#userList ul")
}


})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var flip = function(node) {
  var listItems = node.children
  for (var i = 0; i < listItems.length; i ++) {
    var liNode = listItems[i]
    if (liNode.classList.contains('inactive')) {
      console.log('print me')
      node.removeChild(liNode)
    }
    if (bmoState.hidden) {
      bmo.style.opacity = '1'
      bmoState.hidden = false
    }
    else {
      bmo.style.opacity = '0'
      bmoState.hidden = true
    }
  }
  }


})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
  //By increasing the number at the end of this image's 'src' attribute, you can cycle 
  //through different city photos. To cycle forever, you may need to use the % operator!
})