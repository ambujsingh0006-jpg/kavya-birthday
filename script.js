function showMessage(){
  document.getElementById('surprise').classList.remove('hidden');

  window.scrollTo({
    top:document.body.scrollHeight,
    behavior:'smooth'
  });

  launchConfetti();
}

function launchConfetti(){
  for(let i=0;i<100;i++){
    let confetti=document.createElement('div');

    confetti.style.position='fixed';
    confetti.style.width='10px';
    confetti.style.height='10px';
    confetti.style.background=`hsl(${Math.random()*360},100%,50%)`;
    confetti.style.left=Math.random()*100+'vw';
    confetti.style.top='-20px';
    confetti.style.borderRadius='50%';
    confetti.style.zIndex='999';

    document.body.appendChild(confetti);

    let fall=Math.random()*3+2;

    confetti.animate([
      {transform:'translateY(0px)'},
      {transform:`translateY(${window.innerHeight}px)`}
    ],{
      duration:fall*1000,
      iterations:1
    });

    setTimeout(()=>{
      confetti.remove();
    },4000);
  }
}