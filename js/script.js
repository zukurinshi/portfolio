document.addEventListener('DOMContentLoaded',function(){
    const barBtn = document.getElementById('bar-btn');
    const sideBar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-sidebar');
    barBtn.addEventListener('click',function(){
        console.log('Sidebar Opened');
        sideBar.classList.toggle('hidden');
    })

    closeBtn.addEventListener('click',function(){
        console.log('Sidebar Closed');
        sideBar.classList.toggle('hidden');
    })
});