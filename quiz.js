answers=["B","B","C"];
res=document.getElementById("demo");
form1=document.getElementById("formid");
btn=document.getElementById("btnsub");
btn.addEventListener("click",e=>{
    e.preventDefault();
    userans=[formid.q1.value,formid.q2.value,formid.q3.value];
    formid.reset();
    showresult(userans);
    
});
function showresult(userans)
{   var count=0;
    for(let i=0;i<answers.length;i++)
    {
        if(userans[i]==answers[i]){
            count++;

        }
    }
    percentage=count/answers.length*100;
    setTimeout(()=>{
    res.style.display="block";
    res.innerHTML=`you have scored ${Math.floor(percentage)}%`;
    scroll(0,0);
},1000);
}