const toggleBtn = document.querySelector('.toggle')
const toggleBadge = document.querySelector(".toggle__badge");

toggleBtn.addEventListener('click',()=>{
    toggleBadge.classList.toggle("active-toggle");
})
