'use strict'

// function for animation
const animateBox = function(){
    const box = $('#animated-box')
    box.animate({
            left:'100px',
            height: '100px', 
            width: '100px',
        }, 
        3000, 
        function(){
            box.animate({backgroundColor: 'blue'}, 5000)
    })    
}

// Click event on button
$(document).ready(function(){
            const btnAnim = $('#btn-animation');
            btnAnim.click(animateBox)
    }
)



