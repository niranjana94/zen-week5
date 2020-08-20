var finaldata;
var quesno =0;
async function getdata() {
    try {
      var data = await fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple");
  
      var queans = await data.json();
      finaldata = queans.results;     
  
      console.log(finaldata);
      createform();
      questionanswerblock(quesno);
      
    } catch (err) {
      alert(err);
    }
  }
  
  getdata();
  

    function createform()
    {
        var container = document.createElement('div');
        container.classList.add('container','text-center');

        var row1 = document.createElement('div');
        row1.classList.add('row','row-cols-2');
        var progcol = document.createElement('div');
        progcol.classList.add('col');        

        var label = document.createElement('div');
        label.setAttribute('class','labelquestion');
        
        var progress =document.createElement('div');
        progress.classList.add('progress');
        progress.id = 'progresstext';
        var progbar = document.createElement('div');
        progbar.classList.add('progress-bar');
        progbar.setAttribute('role','progressbar');
        progbar.setAttribute('aria-valuemin','0');
        progbar.setAttribute('aria-valuemax','100');
        
        progress.append(progbar);

        progcol.append(label,progress);

        var score = document.createElement('div');
        score.classList.add('col','score');
        score.innerText =  'score';
        //score.innerText = 'score '+ calscore(); 
        row1.append(progcol,score);

        var row2 = document.createElement('div');
        row2.classList.add('row');
        var question = document.createElement('div');
        question.classList.add('question');
        //question.innerHTML = 'question';
        row2.append(question);

        var row3 = document.createElement('div');
        row3.classList.add('row','answerblock'); 
        
                
        container.append(row1,row2,row3);
        document.body.append(container);
    }


    var ansarr =[];
    var randomans = [];
    function questionanswerblock(quesno)
    {
        let label = document.querySelector('.labelquestion');
        label.innerText = 'Question' +(quesno+1) +'/'+'10';

        let progbar = document.querySelector('.progress-bar');
        progbar.setAttribute('aria-valuenow',((quesno+1)*10));
        progbar.setAttribute('style','width:'+((quesno+1)*10)+'%');

        let score = document.querySelector('.score');
        //score.innerHTML = calculatescore(quesno);

        let question = document.querySelector('.question');
        question.innerHTML = finaldata[quesno].question;

        ansarr = [].concat(finaldata[quesno].incorrect_answers, finaldata[quesno].correct_answer);
        console.log(ansarr);
        ansarr = shuffle(ansarr);

        let row3 = document.querySelector('.answerblock');        
        var ans;
        for(var index =0;index<4;index++)
        {
         ans = ansblock(index,ansarr[index]);
         row3.append(ans);
         ans.addEventListener('click',function(){checkcorrectans(ans["innerText"].substr(2,ans.length))});
        }
        
   
    }   
    function clearBox(elementID) { 
        var div = document.getElementsByClassName(elementID); 
        div[0].innerHTML ="";

        /*if(div != null)
           document.getElementsByClassName(elementID).innerHTML = "";
           while(div[0].childNodes)
              div[0].removeChild(div[0].firstChild);*/
    }
    
    function shuffle(array) {
        var ctr = array.length, temp, index;  
    
        while (ctr > 0) {    
            index = Math.floor(Math.random() * ctr);   
            ctr--;
    
            temp = array[ctr];
            array[ctr] = array[index];
            array[index] = temp;
        }
        return array;
    }
    var score =0;

    function checkcorrectans(answer)
    {
        let container = document.querySelector('.container'); 
        let totalscore = document.querySelector('.score');   

        let correct = finaldata[quesno].correct_answer;
        if(answer == correct){ 
            totalscore.innerText = 'Score : '  + (score+10);
        }
        clearBox('answerblock');
        //content.removeChild(content.lastElementChild);
       // container.removeChild(container.lastElementChild);
       if(quesno == 9 )
       {       
        var queryString = "?para1=" + (score+10) ;
       
           localStorage.setItem('currentScore', score);
           window.open('end.html'+ queryString);
       }
       else
        questionanswerblock(++quesno);
        
    }
        

    function ansblock(index,answer)
    {      

        var ansfield = document.createElement('div');
        ansfield.setAttribute('class','input-group mb-3');
        var option =  document.createElement('div');
        option.setAttribute('class','input-group-prepend');
        var span = document.createElement('span');
        span.setAttribute('class','input-group-text');
        span.id ='basic-addon1';
        span.innerHTML = String.fromCharCode(65 + index);
        option.append(span);
        var ans = document.createElement('div');
        ans.innerHTML = answer;
       // ans.addEventListener('click',function(){checkcorrectans(ans.innerText)});
        ansfield.append(option,ans);
        return ansfield;
        
    }


       

       
  