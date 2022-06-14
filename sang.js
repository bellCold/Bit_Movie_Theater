const form = document.getElementById("expertComentFrom");
const expertName = document.getElementById("expertName");
const expertComent = document.getElementById("expertComent");
const comentBox = document.getElementById("expertComentBox");

function printExpertComent(event) {
   event.preventDefault();
   const name = expertName.value;
   const coment = expertComent.value;
   if (name != "" && coment != ""){
      expertName.value = "";
      expertComent.value ="";
   
      const spanName = document.createElement("span");
      spanName.innerText = `작성자:   ${name}`;
      const spanComent = document.createElement("span");
      spanComent.innerText = coment;
      const div = document.createElement("div")
      
      div.appendChild(spanName);
      div.appendChild(spanComent);
      comentBox.appendChild(div);
   }
}
form.addEventListener("submit", printExpertComent)