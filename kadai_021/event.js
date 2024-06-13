const button=document.getElementById('btn');

 button.addEventListener('click',()=>{

  const txt=document.getElementById('text');

  setTimeout(() => {

  txt.textContent='ボタンをクリックしました';

  }, 2000);

})