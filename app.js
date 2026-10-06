async function apicall(){
   let res = await  fetch('https://meowfacts.herokuapp.com/')
   let finalres = await res.json()
   document.getElementById('box').innerText=finalres.data[0]
   console.log(finalres.data[0])
}