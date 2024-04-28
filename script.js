alert("Welcome to Cara");





document.addEventListener('DOMContentLoaded',(e)=>{
   const addCartbtn=document.querySelectorAll('.cart');
//    var proDiv=document.querySelectorAll('.pro');
 let count=0;
   addCartbtn.forEach(button => {
      button.addEventListener('click',(e)=>{
        count++;
       let preview=document.createElement('div');
       preview.style.width=`400px`;
       preview.style.height=`400px`;
       preview.style.border=`1px solid #000`;
       preview.style.margin=`5px 4px 5px 4px `
       const productName = this.parentNode.querySelector("h5").innerText;
       console.log(productName);
       document.body.appendChild(preview);
      })
   });      
});