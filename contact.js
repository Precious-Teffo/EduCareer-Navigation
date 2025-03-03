//Get the form element
const form=document.getElementById('contact-form');

//Get the form status element
const formStatus=document.getElementById('form-status');

//Add an element event listener to the form
form.addEventListener('submit',(e)=>{
    //Prevent the default form submission behaviour
    e.preventDefault();
    
    //Get the form data
     const name=document.getElementById('name').value;
     const email=document.getElementById('email').value;
     const message=document.getElementById('message').value;
     
    //Validate the form data
    if(name==='' || email=== '' ||message===''){
        formStatus.textContent='Please fill out all field.';
        formStatus.style.color='red';
    }else{
        //Send the form data to the server using AJAX
        const xhr=new XMLHttpRequest();
        xhr.open('POST','contact.php',true);
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.onload=function(){
            if(xhr.status===200){
                document.getElementById('form-status').textContent='Thank you  for your message!';
                document.getElementById('form-status').style.color='green';
                
                const name=document.getElementById('name').value='';
                const email=document.getElementById('email').value='';
                 const message=document.getElementById('message').value='';
            }else{
                document.getElementById('form-status').textContext='Error sending message';
                document.getElementById('form-status').style.color='red';
            }
        };
        xhr.send(`name=${name}&email=${email} &message=${message}`);
    }
});