(function(){
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const countDisplay = document.getElementById('count');
    
    let count = 0;
    
    function updateCounter() {
        countDisplay.textContent = count;
        if(count < 0)
        {
            countDisplay.style.color = "red";
        }
        else if(count > 0){
            countDisplay.style.color = "green";
        }
    }
    
    decrementButton.addEventListener('click', () => {
        count--;
        updateCounter();
    });
    
    incrementButton.addEventListener('click', () => {
        count++;
        updateCounter();
    });
    updateCounter();    
})();
