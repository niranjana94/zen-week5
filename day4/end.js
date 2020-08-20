var container = document.createElement('div');
        container.classList.add('container','text-center');

        var row1 = document.createElement('div');
        row1.classList.add('row');
        var divscore = document.createElement('div');
        divscore.id = 'score';
        
        row1.append(divscore);

        var row2 = document.createElement('div');
        row2.classList.add('row');
        var username = document.createElement('input');
        username.type = 'text';
        username.id = 'name';
        username.classList.add('name');
        username.placeholder = 'User Name';
        username.addEventListener('input',function(){savebtn(username.value)});
        row2.append(username);

        var row3 = document.createElement('div');
        row3.classList.add('row');
        var save = document.createElement('button');
        save.id= 'savescorebtn';
        save.innerText = 'Save';
        save.classList.add('btn','save');
        save.disabled = true;
        save.addEventListener('click', function(){savedetails()});
        row3.append(save);

        var row4 = document.createElement('div');
        row4.classList.add('row');
        var playagain = document.createElement('button');
        playagain.id= 'playagain';
        playagain.innerText = 'Play Again';
        playagain.classList.add('btn');
        playagain.setAttribute('onclick','game()');
        row4.append(playagain);

        var row5 = document.createElement('div');
        row5.classList.add('row');
        var home = document.createElement('button');
        home.id= 'Go Home';
        home.innerText = 'Go Home';
        home.classList.add('btn');
        home.setAttribute('onclick','home()');
        row5.append(home);

        container.append(row1,row2,row3,row4,row5);
        document.body.append(container);

        var queryString = decodeURIComponent(window.location.search);
        queryString = queryString.substring(1);
        queryString = queryString.split('=')[1];

        document.getElementById('score').innerHTML = queryString;

       

    function savedetails()
    {
        var user = localStorage.getItem('username');
        if(!user)
          var username = document.querySelector('.name').value;

        var arr =[];
        arr[username] = queryString;
        localStorage.setItem('user', JSON.stringify(arr));
        alert('Saved');
    }

    function savebtn(username)
    {
        if(username.length >0)
        {
            document.querySelector('.save').disabled = false;
        }
        else
            document.querySelector('.save').disabled = true;
    }

    function home(){
        localStorage.setItem('username', null);
        
        window.open('index.html', '_self');
    }
    
    
    function game(){
        localStorage.setItem('score', null);
        window.open('game.html', '_self');
    }
