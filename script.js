let correctAnswers=['B','A','A','A'];
const form=document.querySelector(".quiz-form")
form.addEventListener('submit',e=>{
    e.preventDefault();
    let score=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    //checkAnswer
    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score+=25;
        }
    });
    scrollTo(0,0);
    const result=document.querySelector('.result');
    result.classList.remove('d-none');
    const mark=document.querySelector('.score');
    let i=0;
    const timer=setInterval(()=>{
        if(i<score){
            i++;
            mark.innerHTML=i+"%";
        }
        else if(i===0){
            mark.innerHTML=0+'%';
        }
    },5);
});

