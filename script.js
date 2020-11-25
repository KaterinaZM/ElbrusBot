let askButton = document.getElementById('myButton');
// bot logic
askButton.addEventListener('click', function(){
  let text = document.getElementById('question').value.toLowerCase();
  let question = document.createElement('p')
  question.innerText = text;
  let answerSection = document.getElementById('answer');
  answerSection.appendChild(question);
  let botAnswer = document.createElement('div');
  answerSection.appendChild(botAnswer);
if(text.includes('elbrus')) {
botAnswer.innerText = 'Класс! Ты хочешь учится у нас)';
}
else if (text.includes('js')){
botAnswer.innerText = 'Хочешь научится программировать?';
}
else {
  botAnswer.innerText = 'Я тебя не понимать(';
}
})