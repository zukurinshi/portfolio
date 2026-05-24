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

    const today = new Date();
    const year = today.getFullYear();
    const copyrightEl = document.getElementById('copyright');
    copyrightEl.textContent = `${year} | Made with Tailwind CSS`;

});