/*var li = document.getElementsByTagName('li');
for ( var lis = 0; lis < li.length;lis++){
    li[lis].style.backgroundColor = '#f4f4f4';
}*/

// QUERY SELECTOR
/*
var items = document.querySelector('#header');
items.style.borderBottom= ' solid 1px black';

var input = document.querySelector('#item-input');
input.placeholder= " hello world";
*/

/*
var div = document.createElement('div');
 div.id = 'hello';
 div.setAttribute('title' , 'hello div');
console.log(div);
 var divText = document.createTextNode('hello this is text node made');
 div.appendChild(divText);
 */
 /*var button = document.getElementById('button');
 button.addEventListener('mouseenter', run);
 button.addEventListener('mouseleave', function sun(){
    console.log('i am out ');
    });

 function run(){
    console.log('he clicked me haaaaaa....');
    }
*/
/*
var submit = document.querySelector('#Submit');
var input = document.querySelector('#item-input').value;
submit.addEventListener('click', function(){
    if(input.value == ''){
    alert('Input Item please');
}
else{
    console.log('perfect');
}
});
*/  


 /*var input = document.querySelector('#item-input');
 //input.addEventListener('keydown', runnd);
 //input.addEventListener('keyup', runnd);
 //input.addEventListener('keypress', runnd);
 input.addEventListener('focus', runnd);
 input.addEventListener('blur', runnd);
 function runnd(e){
    console.log(' key type : '+e.type);

 // console.log(e.target.value);
  //span.innerHTML = '<h3>'+e.target.value+'</h3>'
 }
var span = document.getElementById("span");

  //  var box = document.getElementById('box');
    /*box.addEventListener('mousemove' , function (e){
    //console.log(e.type);
      //  box.style.background = 'rgb('+e.offsetX+','+e.offsetY+',100)';
        
    });*/
      
    var submit = document.getElementById('Submit');
    var newItem = document.getElementById('item-input');
   
    submit.addEventListener('click', function(e){
        
     setTimeout(function (){
       newItem.value = '';
     
     },1000);
    });


    var form = document.getElementById('form');
    var itemlist = document.getElementById('items');

    form.addEventListener('submit', additem);
    function additem(e){
    e.preventDefault();
        var newItem = document.getElementById('item-input').value;
  var li = document.createElement('li');
  li.className = 'list-items';
  li.appendChild(document.createTextNode(newItem));
  itemlist.appendChild(li);
       // create button

       var button = document.createElement('button');

       button.className = 'button';
       button.appendChild(document.createTextNode('X'));
       li.appendChild(button);
       button.style.padding='4px 6px 4px 6px';
       button.style.background= "rgb(73, 72, 72)";
       button.style.border= 'none';
       button.style.cursor= 'pointer';
       button.style.position= 'absolute';
       button.style.right= '10px';
       button.style.outline= 'none';
       button.style.borderRadius= '4px';
        button.style.marginTop='-2px';
    }

    itemlist.addEventListener('click', removeitem);
    function removeitem(e){
    if(e.target.classList.contains('button')){
        if(confirm('Are You Sure You Wanna Delete Item ?')){
        let li = e.target.parentElement;
        itemlist.removeChild(li);
        }
    }   
    }
  
    var filter = document.getElementById('filter');
    filter.addEventListener('keyup', filteritems);

    function filteritems(e){
        //coverting to lowercase on event keyup is trigger !!
        var text = e.target.value.toLowerCase();
        // getting whole list html collection by tag name property 
    var items = itemlist.getElementsByTagName('li');
    // convert to array form html collections
    Array.from(items).forEach(function(items){
     var itemsName = items.firstChild.textContent;
      if(itemsName.toLowerCase().indexOf(text) != -1){
      items.style.display = 'block';
      }
      else{
       items.style.display = 'none';
      }
    });
    }