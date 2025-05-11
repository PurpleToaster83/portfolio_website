        const targetArea = document.getElementByID('element'.eq(1));
        
        targetArea.addEventListener('click', function(event) {
            const x = event.clientX();
            const y = event.clientY();
            
            const rect = targetArea.getBoundingClientRect();
            
            if(x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                console.log("blah");
            }
        });