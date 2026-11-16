var age= 18;
var answer = document.getElementById('pergjigjja')


if(age>=18){
    answer.innerHTML = 'Ti ki te drejt vote'
}
else{
    answer.innerHTML = 'Ti ske te drejt vote'
}

var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');

// button.onClick = function(){
// text.innerHTML = input.value;

//}

button.onclick = function()
{
    if(input.value > 10)
    {
        text.innerHTML = "input value is greater than 10"
    }
    else if(input.value<10)
    {
         text.innerHTML = "input value is less than 10"
}
else{
     text.innerHTML = "input value is equal to 10"
}
}