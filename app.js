async function apicall(){
   let res = await  fetch('https://meowfacts.herokuapp.com/')
   let finalres = await res.json()
   document.getElementById('box').innerText=finalres.data[0]
   let msg = new SpeechSynthesisUtterance(finalres.data[0]);
   msg.lang = "en-US";
   speechSynthesis.cancel();
   speechSynthesis.speak(msg);
}