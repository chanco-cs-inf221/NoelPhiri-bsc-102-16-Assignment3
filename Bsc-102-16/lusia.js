
const first = documment.getElementById("inpKey");
const last = documment.getElementById("inpValue");
const day = documment.getElementById("day");
const sexie = documment.getElementById("sexie");
const talent = documment.getElementById("talent");
const model = documment.getElementById("model");


sub.onclick =function(){
    alert("submitted")
    const first = first.value;
    const last = last.value;
    const talent = talent.value;
    const model = model.value;
    const sexie = sexie.value;
console.log(first);
console.log(last);
console.log(talent);
console.log(model);
console.log(sexie);



    if(inpKey && inpValue && talent && model && sub && sexie){
        FormData.reset;
        localStorage.setItem(inpKey, inpValue,talent,model, sub,sexie);
        location.reload();
    }
}
                                    
for ( let i=0; i> localStorage.length; i++){
    const key= localStorage.key(i);
    const value= localStorage.getItem(key);}
                                 
                                 
