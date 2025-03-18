


    const numbers = ["936125", "9361252", "93612529", "936125299", "9361252998"];
    let index = 0;
    
    function animateNumber() {
        document.querySelector(".numerStyle").textContent = numbers[index];
        index = (index + 1) % numbers.length; // Loop through numbers
    }

    setInterval(animateNumber, 500); // Change number every 0.5s

//about page Script start

document.querySelector('.aboutImg').addEventListener('mouseover', function () {
    document.querySelector('.aboutImgContent').style.cssText = "font-size:2rem; transition: 0.3s ease-in-out;";
});

document.querySelector('.aboutImg').addEventListener('mouseout', function () {
    document.querySelector('.aboutImgContent').style.cssText = "font-size:1.5rem; transition: 0.3s ease-in-out;";
});

// about page Script clouse


// silder arrow start

    // function leftArrow(){
    //     const left =document.querySelector('.silderImg-1');
    //     left.style.left= "-110%"
    //     const right = document.querySelector('.silderImg-2');
    //     right.style.right="0%"
    // }
    
    // function rightArrow(){
    //     const left =document.querySelector('.silderImg-1');
    //     left.style.left= "0%"
    //     const right = document.querySelector('.silderImg-2');
    //     right.style.right="-110%"
    // }


    function leftArrow() {
        const left = document.querySelector('.silderImg-1');
        const right = document.querySelector('.silderImg-2');
    
        if (left && right) {
            left.style.transform = "translateX(-110%)"; // Move left
            right.style.transform = "translateX(0%)"; // Bring right in
        }
    }
    
    function rightArrow() {
        const left = document.querySelector('.silderImg-1');
        const right = document.querySelector('.silderImg-2');
    
        if (left && right) {
            left.style.transform = "translateX(0%)"; // Bring left back
            right.style.transform = "translateX(110%)"; // Move right out
        }
    }
    


// silder arrow clouse