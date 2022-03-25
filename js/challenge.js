
let seconds = 0




document.addEventListener('DOMContentLoaded', function() {
    let count = document.getElementById('counter')
    
    function countSeconds() {
        seconds += 1;
    
        count.innerText = seconds;
    }
     
    let timer = setInterval(countSeconds, 1000);
    
    let minusTime = document.getElementById('minus')
    minusTime.addEventListener('click', () => {
        seconds -= 1
    })
    
    let addTime = document.getElementById('plus')
    addTime.addEventListener('click', () => {
        seconds += 1
    
    })
    
    let pauseTime = document.getElementById('pause')
        pauseTime.addEventListener('click', pauseResume)
        
           

        function pauseResume() {
            
           if(){console.log('hi')
            setInterval(countSeconds,1000); 
        }
            else {clearInterval(timer)
                pauseTime.innerHTML = 'Resume' }
        }
    
         
    
})