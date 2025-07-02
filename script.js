document.querySelector('.menu').addEventListener('click',()=>{
  openSidebar();
})
document.querySelector('.close').addEventListener('click',()=>{
  closeSidebar();
})

document.querySelectorAll('.features').forEach((button)=>{
  button.addEventListener('click',()=>{
  toggleFeatures();
})
})

let togglef;
function toggleFeatures(){
  if(togglef === 0){
    button = document.querySelectorAll('.dropdown_menu');
    button.forEach((b) => {
      b.classList.add('dropdown_menu_active');
      document.querySelectorAll('.features .arrow').forEach((arrow)=>{
        arrow.src = 'images/icon-arrow-up.svg';
      });
      togglef = 1;
    });
  }else{
    button = document.querySelectorAll('.dropdown_menu');
    button.forEach((b) => {
      b.classList.remove('dropdown_menu_active');
      document.querySelectorAll('.features .arrow').forEach((arrow)=>{
        arrow.src = 'images/icon-arrow-down.svg';
      });
      togglef = 0;
    });
  }
  
}
  document.querySelectorAll('.company').forEach((button)=>{
  button.addEventListener('click',()=>{
  toggleCompany();
})
})

let togglec;
function toggleCompany(){
  if(togglec === 0){
    const button = document.querySelectorAll('.dropdown_menu_company');
    button.forEach((b) => {
      b.classList.add('dropdown_menu_active');
      document.querySelectorAll('.company .arrow').forEach((arrow)=>{
        arrow.src = 'images/icon-arrow-up.svg';
      });
      togglec = 1;
    });
  }else{
    const button = document.querySelectorAll('.dropdown_menu_company');
    button.forEach((b) => {
      b.classList.remove('dropdown_menu_active');
      document.querySelectorAll('.company .arrow').forEach((arrow)=>{
        arrow.src = 'images/icon-arrow-down.svg';
      });
      togglec = 0;
    });
  }
  
}


function openSidebar(){
  document.querySelector('.sidebar').classList.add('show');
  document.querySelector('.overlay').classList.add('show');
}
function closeSidebar(){
  document.querySelector('.sidebar').classList.remove('show');
  document.querySelector('.overlay').classList.remove('show');
}