let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
   item.addEventListener('click', (e)=>{
       buttonText = e.target.innerText;
       console.log(buttonText);
       if(buttonText== '='){
           screen.value = eval(screenValue);
       }
       else if(buttonText== 'C'){
           screenValue='';
           screen.value = screenValue;
       }
       else if((buttonText=='*' || buttonText=='+' || buttonText=='-' ||buttonText=='/' || buttonText=='%' ||buttonText==')' )&& (screenValue.charAt(screenValue.length-1)=='*' || screenValue.charAt(screenValue.length-1)=='+' ||screenValue.charAt(screenValue.length-1)=='%' || screenValue.charAt(screenValue.length-1)=='-' || screenValue.charAt(screenValue.length-1)=='/' || screenValue.charAt(screenValue.length-1) == '')){
           screenValue=screenValue;
       }
       else{
       screenValue +=buttonText;
       screen.value= screenValue;
       }
       
   })
}