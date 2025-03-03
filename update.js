const searchBar=document.getElementById('search-bar');
const universityList=document.querySelector('university-list');
const bursaryList=document.querySelector('bursary-list');
const updateList=document.querySelector('update-list');

searchBar.addEventListener('input',(e)=>{
    const searchTerm=e.target.value.toLowerCae();
    
    //Filter universities
    const university=universityList.children;
    for(let i=0;i<university.length;i++){
        const universityName=university[i].querySelector('h3').textContent.toLowerCase();
        
        if(universityName.includes(searchTerm)){
            university[i].style.display='block';
        }else{
            university[i].style.diplay='none';
        }
    }
    
    const bursary=bursaryList.children;
    for(let i=0;i<bursary.length;i++){
        const bursaryName=bursary[i].querySelector('h3').textContent.toLowerCase();
        if(bursaryName.include(searchTerm)){
            bursary[i].style.display='block';
        }else{
            bursary[i].style.display='none';
        }
    }
    
    const updates=updateList.children;
    for(let i=0;i<updates.length;i++){
        const updateName=updates[i].querySelector('h3').textContent.toLowerCase();
        if(updateName.include(searchTerm)){
            updates[i].style.display='block';
        }else{
            updates[i].style.display='none';
        }
    }
});

