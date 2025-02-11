const chart = document.querySelector("#chart").getContext('2d');

/// create anew chart

new Chart( chart, {
    type: 'line',
    data:{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov'],
        datasets: [
            {
              label:'BTC',
              data:[29374, 33537, 49631, 59095, 57828, 36684, 33572, 48847, 61004],
              borderColor:'red',
              borderWidth:2  
            },
            {
                label:'ETH',
                data:[31500, 41000, 88000, 26000, 46000, 32698, 5000, 18656, 36844],
                borderColor:'blue',
                borderWidth:2  
              }
        ]
    },
    options:{
        responsive:true
    }

})

//show or hide side bar
const menuBtn=document.querySelector('#menu-btn');
const closeBtn=document.querySelector('#close-btn');
const sidebar=document.querySelector('#aside');


menuBtn.addEventListener('click', () =>{
    sidebar.style.display='block';
})

closeBtn.addEventListener('click', () =>{
    sidebar.style.display='none';
})

//change theme

const themeBtn= document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
    
})

