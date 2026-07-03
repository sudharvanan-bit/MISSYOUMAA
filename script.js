function startGame(){
window.location.href="question1.html";
}

/* FLOATING HEARTS */
for(let i=0;i<40;i++){
let h=document.createElement("div");
h.className="heart";
h.innerHTML="❤";
h.style.left=Math.random()*100+"vw";
h.style.animationDuration=(5+Math.random()*5)+"s";
h.style.fontSize=(15+Math.random()*30)+"px";
document.getElementById("hearts-container").appendChild(h);
}

/* MOUSE SPARKLES */
document.addEventListener("mousemove",function(e){
let s=document.createElement("div");
s.className="sparkle";
s.style.left=e.clientX+"px";
s.style.top=e.clientY+"px";
document.body.appendChild(s);

setTimeout(()=>s.remove(),600);
});

function wrongAnswer(){
alert("❌ Wrong answer Maa Maa 🥺 Try again ❤️");
}

function correct1(){
document.body.innerHTML=`
<div class="glass-card">
<h1>❤️ Congratulations Maa Maa ❤️</h1>

<p>
உன் கூந்தல்
கருமேகத்தின் கவிதை;<br><br>

உன் புன்னகை
என் இதயத்தின் இசை.
</p>

<br>

<button class="loveButton" onclick="location.href='question2.html'">
Next ➜
</button>
</div>
`;
}
function correct2(){
document.body.innerHTML=`
<div class="glass-card">
<h1>❤️ Amazing Maa Maa ❤️</h1>

<p>
உன் அழகை
ஓவியமாக வரைய முடியாது;<br><br>

ஏனெனில்<br><br>

அனைத்து ஓவியர்களும்
உன் அழகில் மயங்கி விடுவார்கள்.
</p>

<br>

<button class="loveButton" onclick="location.href='question3.html'">
Next ➜
</button>
</div>
`;
}
function correct3(){
document.body.innerHTML=`
<div class="glass-card">

<h1>❤️ Final Poem ❤️</h1>

<p>
உன் பார்வை<br><br>
ஒரு கவிதை,<br><br>
அதை<br><br>
தினமும் படிக்க ஆசைப்படும் வாசகன் நான்.
</p>

<br>

<button class="loveButton" onclick="location.href='final.html'">
💌 Click Here Maa Maa 💌
</button>

</div>
`;
}
function openLetter(){

document.body.innerHTML=`
<div class="glass-card">

<h1>❤️ Maa Maa ❤️</h1>

<p id="letter"></p>

</div>
`;

let text = `
En alagu maa maa onnum ille seriya ❤️

En chellathuku kovam sogam etha irunthalum paathukelam seriya.

Nan irukke maa...

Enkitte sollunge...

Illati time venuma...

Eduthuko.

Ana onnum ille seriya...

Nan irukke...

En Mahalakshi maa maa neenga.

❤️ MISS YOU MAA MAA PATRAM ❤️
`;

let i = 0;
let speed = 50;

function typeWriter(){
if(i < text.length){
document.getElementById("letter").innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter, speed);
}
}

typeWriter();

/* AFTER LETTER → HEART EXPLOSION */
setTimeout(()=>{
explodeHearts();
}, 5000);

}

function explodeHearts(){

document.body.innerHTML = `
<div class="glass-card">

<h1>❤️ I LOVE YOU ❤️</h1>

<p>
You are my happiness Maa Maa 💖
</p>

</div>
`;

for(let i=0;i<100;i++){
let h=document.createElement("div");
h.innerHTML="❤️";
h.style.position="absolute";
h.style.left=Math.random()*100+"vw";
h.style.top=Math.random()*100+"vh";
h.style.fontSize=(20+Math.random()*40)+"px";
h.style.animation="floatUp 3s linear infinite";
document.body.appendChild(h);
}

setTimeout(()=>{
alert("💖 YOU MADE ME THE HAPPIEST PERSON ❤️");
},1000);
}