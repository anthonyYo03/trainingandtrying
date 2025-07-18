
const excelData=document.getElementById("excel-ctn");


function getData(){

fetch('https://trying-backend.onrender.com/try').then(res=>res.json()).then(data=>

{

for (let i = 0; i<= data.length; i++) {
  const li=document.createElement("li");
  li.innerHTML=`Id: ${data[i].Id} Name : ${data[i].Name}`
  excelData.appendChild(li);
    }



}
)
}