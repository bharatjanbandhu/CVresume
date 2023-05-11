$(document).ready(function(){

    $('#profile__ripple').ripples({
        resolution:515,
        // dropradius:0
    })
    const bars = document.querySelectorAll('.progress__bar');
    
    bars.forEach(function(bar){
        let percentage =bar.dataset.percent;
        let tooltips =bar.children[0];
        tooltips.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    })
    //counter

    const counters = document.querySelectorAll('.counter');
    
    function runCounter (){
        counters.forEach(counter =>{
            counter.innerText = 0;
            
            let target = +counter.dataset.count;
            let step = target/100;
            let countIt = function() {
                let displayedCount = +counter.innerText;
                if(displayedCount < target){

                    counter.innerText= Math.ceil(displayedCount + step);
                    setTimeout(countIt, 1);
                } else{
                    counter.innerText = target;
                }
            }
            countIt();
            
        })
    }
    runCounter();

    //window scroll event intersection Obervers = 
    let counterSection =document.querySelector('.counter__wrapper');
    let options={
        rootMargin : '0px 0px -200px 0px'
    }   
    let done = 0;
    const sectionObserver = new IntersectionObserver(function(entries){

            if(entries[0].isIntersecting && done == 0){
                done = 1;
                runCounter();
            }
        },options)
    sectionObserver.observe(counterSection);



    //image filter
    var $wrapper = $('.portfolio__wrapper');
    //initialize isotope
    $wrapper.isotope({
        filter :'*',
        layoutMode:'masonry',
        animationOption :{
            duration: 750,
            easing:'linear'
        }
    });
    let links = document.querySelectorAll('.tabs a');
    links.forEach(link=>{

        let selector =link.dataset.filter;
        link.addEventListener('click',function(e){
            e.preventDefault();

            $wrapper.isotope({
                filter :selector,
                layoutMode:'masonry',
                animationOption :{
                    duration: 750,
                    easing:'linear'
                }
            });
        });
    })
});