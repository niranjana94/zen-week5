async function getgiphy() {
    try {
      var getgif = await fetch("https://random-word-api.herokuapp.com/word?number=3");
  
      var word = await getgif.json();
      await word.forEach(item =>{
         displaygif(item);
      })
      //var search = word[0];
  
      console.log(search);
      //displaygif(search);
    } catch (err) {
      alert(err);
    }
  }
  getgiphy();
  

async function displaygif(search)
{
  //var search = document.getElementById('search').value;
  if(search !=null)
  {
    try {
        var gif = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=RATQtEyhSnKgpU0kPsbW4d0WKIpYdTeZ&q=${search}&limit=5&offset=0&rating=g&lang=en`);
    
        var search = await gif.json();

        var arr = search.data;
           var div = document.createElement('div');          
             
           var gif = document.createElement('object');            
           
           
        arr.forEach(element => {
           
           gif.data = `${element.images.original.url}`;
            
           div.append(gif);
           
            
        });
        document.body.append(div);
       // console.log(arr);
      } catch (err) {
        alert(err);
      }
    }
}

async function displaygif()
{
  var search = document.getElementById('search').value;
  if(search !=null)
  {
    try {
        var gif = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=RATQtEyhSnKgpU0kPsbW4d0WKIpYdTeZ&q=${search}&limit=5&offset=0&rating=g&lang=en`);
    
        var search = await gif.json();

        var arr = search.data;
          var div = document.getElementById('gif');  
          div.innerHTML="";
        arr.forEach(element => {
          var gif = document.createElement('object');   
           
           gif.data = element.images.original.url;
            
           div.append(gif);           
            
        });
        document.body.append(div);
       // console.log(arr);
      } catch (err) {
        alert(err);
      }
    }
}

var div = document.createElement('div');
div.id = 'container';
var textbox = document.createElement('input');
textbox.setAttribute('type','text');
textbox.id = 'search';   
var button = document.createElement('button');
button.innerText = 'submit';
button.type ='submit';
button.setAttribute('onclick','displaygif()');

div.append(textbox,button);
var div2 = document.createElement('div');
div2.id = 'gif';
document.body.append(div,div2);