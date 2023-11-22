document.addEventListener("DOMContentLoaded", function() { 
   

   var button = document.getElementById('step2');
   var sourceCell = document.getElementById('upright');
   var targetCell = document.getElementById('lowmid');
        button.addEventListener('click', function() {
        targetCell.textContent = sourceCell.textContent;

    })

    var button2 = document.getElementById('step3');
        button2.addEventListener('click', function() {
        document.getElementById("upleft").style.border = "2px solid";
        document.getElementById("hideOrigin").style.opacity = "1";
        
    })

    var button3 = document.getElementById('step4');
    var sourceCell2 = document.getElementById('lowright');
    var targetCell2 = document.getElementById('lowmid');
    button3.addEventListener('click', function() {
        targetCell2.textContent = sourceCell2.textContent;
        sourceCell2.textContent = '';        

})

    var button4 = document.getElementById('step7');
    var sourceCell3 = document.getElementById('lowmid');
    var targetCell3 = document.getElementById('upleft');
        button4.addEventListener('click', function() {
        targetCell3.textContent = sourceCell3.textContent;

})

    var button5 = document.getElementById('step8');
        button5.addEventListener('click', function() {
        document.getElementById("upmid").style.opacity = "1";

})

    var button6 = document.getElementById('step9');
    var sourceCell4 = document.getElementById('upleft');
    var targetCell4 = document.getElementById('upright');
         button6.addEventListener('click', function() {
         targetCell4.textContent = sourceCell4.textContent;
         document.getElementById("upmid").style.opacity = "0";

 })
});




