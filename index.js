
const input = document.querySelector('#myUL');

function newElement() { /*
  let closeButton = document.createElement("button");
  let txt = document.createTextNode("x");
  closeButton.className = "close";
  closeButton.appendChild(txt);
  li.appendChild(closeButton);*/

  const newLi = document.querySelector('.inputs').cloneNode(true)
  input.appendChild(newLi)
  newLi.firstChild.value=''
  newLi.classList.add('inputs')

}


function deleted() {
    
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        if(close.length > 1){
        let dead = this.parentElement;
        dead.parentNode.removeChild(dead);}
    }
  }
}

let arr = []

let order = true
function sortList() {
  
    const liElements=document.querySelectorAll('.inputTxt')
    liElements.forEach(element=>{arr.push(element.value)})
    arr=arr.sort()
    if(order == true){
    for(let i = 0 ; i < arr.length ; i++){
      liElements[i].value = arr[i]
    }   
        
        order= false;
        document.getElementById("sor").className =
        document.getElementById("sor").className.replace(new RegExp('(?:^|\\s)'+ 'lineDown' + '(?:\\s|$)'), 'lineUp');
    }
    else if(order==false){
       arr = arr.reverse()
        for(let i=0;i<arr.length;i++){
          liElements[i].value = arr[i]
        } 
        order = true
        document.getElementById("sor").className =
        document.getElementById("sor").className.replace(new RegExp('(?:^|\\s)'+ 'lineUp' + '(?:\\s|$)'), 'lineDown');
    }
    arr=[]
    


/*
console.log(arr)

   for(let i = 0 ; i <= num ; i++){
      let li = document.querySelector('li')
      li.remove()}
    
  console.log('sda')*/
    /*
  
  console.log(liElements.length)
  if (order == true){
    clickSort.textContent = 'Sort reverb';
    liElements.sort((li1,li2) => li1.textContent.localeCompare(li2.textContent));
    order = false;
  }
  else{
   clickSort.textContent = 'Sort';
    liElements.sort((li1,li2) => li2.textContent.localeCompare(li1.textContent));
    order = true;
  }
  appendCh(liElements,ul)
  function appendCh(liArr,parent){
          liArr.forEach(el => {
              parent.appendChild(el);
          })
      }*/
    }



  /*
  console.log(li)
  let num = li.length;
  arr = [];
  for (i = 0; i < num; i++){
      let values = li[i].value
      arr.push(values);
      ul.firstChild.remove()
      console.log(arr)}*/



const clickSort = document.getElementById('sor');
clickSort.addEventListener('click', sortList);

const click = document.querySelector('.addBtn');
click.addEventListener('click', newElement);

click.addEventListener('click', deleted);

const close = document.getElementsByClassName("close");

const inputsMy = document.getElementsByClassName("myInput");

