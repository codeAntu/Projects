let btn = document.getElementById('btn');
let brdr = document.getElementById('heading');

function changeColor(color){
   document.body.style.background = color;
   btn.style.background = color;
   brdr.style.borderColor = color;
   document.querySelectorAll('span').forEach(function(item){
      item.classList.remove('active');
   })
   event.target.classList.add('active');
}
