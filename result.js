
const url = window.location.href
const params =new URL(url).searchParams


const regno = params.get("regNumber")
const name1 = params.get("name")
const age = params.get("age")
const sex = params.get("sex")
const address = params.get("address")
const contact = params.get("contact")
const res = document.getElementById('result')

   res.innerHTML = `Name:  ${name1} </br>
     Registration No: ${regno}  </br>
     Age:  ${age}  </br>
    Sex:  ${sex} </br>
   Contact:  ${contact} </br>
Address:  ${address} </br>`

const dbutton = document.querySelector('#download')
dbutton.addEventListener('click', ()=>{
   window.print()
})