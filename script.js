// console.log("script hello")
// document.querySelector('.cross').style.display = "none";
// document.querySelector('.hamburger').addEventListener("click", ()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebarGo');

//     if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
//         document.querySelector('.ham').style.display = 'inline'
//         document.querySelector('.cross').style.display = 'none'
//     }
//     else{
//         document.querySelector('.ham').style.display = 'none'
//         setTimeout(()=>{   
//         document.querySelector('.cross').style.display = 'inline'
        
//      }, 300);
//     }

// });

document.querySelector('.cross').style.display = 'none';

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.cross').style.display = 'none';
        document.querySelector('.ham').style.display = 'inline';
    } else {
        document.querySelector('.cross').style.display = 'inline';
        document.querySelector('.ham').style.display = 'none';
    }
});










