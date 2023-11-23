document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById('step2');
    var sourceCell = document.getElementById('upright');
    var targetCell = document.getElementById('lowmid');
        button.addEventListener('click', function() {
        targetCell.textContent = sourceCell.textContent
        document.getElementById('stepInfo').innerHTML = "On a créé une copie du Grand Projet sur nos PC.";
        document.getElementById('lowmid').style.color = "red";
    })

    var button2 = document.getElementById('step3');
        button2.addEventListener('click', function() {
        document.getElementById("upleft").style.border = "2px solid";
        document.getElementById("hideOrigin").style.opacity = "1";
        document.getElementById('stepInfo').innerHTML = "On a créé un endroit sur Github où on pourrait éventuellement mettre nos travaux.";
        document.getElementById('lowmid').style.color = "black";
        document.getElementById('upleft').style.color = "red";
    })

    var button3 = document.getElementById('step4');
    var sourceCell2 = document.getElementById('lowright');
    var targetCell2 = document.getElementById('lowmid');
    button3.addEventListener('click', function() {
        targetCell2.textContent = sourceCell2.textContent;
        sourceCell2.textContent = '';        
        document.getElementById('stepInfo').innerHTML = "On ajoute nos images à notre copie du Grand Projet.";
        document.getElementById('upleft').style.color = "black";
        document.getElementById('lowmid').style.color = "red";
})

    var button4 = document.getElementById('step7');
    var sourceCell3 = document.getElementById('lowmid');
    var targetCell3 = document.getElementById('upleft');
        button4.addEventListener('click', function() {
        targetCell3.textContent = sourceCell3.textContent;
        document.getElementById('stepInfo').innerHTML = "On a transféré une copie de nos travaux sur notre Github.";
        document.getElementById('lowmid').style.color = "black";
        document.getElementById('upleft').style.color = "red";
})

    var button5 = document.getElementById('step8');
        button5.addEventListener('click', function() {
        document.getElementById("upmid").style.opacity = "1";
        document.getElementById('stepInfo').innerHTML = "On demande au propriétaire du Grand Projet si nos changements sont bons.";
        document.getElementById('upleft').style.color = "black";
        document.getElementById('upmid').style.color = "red";
})

    var button6 = document.getElementById('step9');
    var sourceCell4 = document.getElementById('upleft');
    var targetCell4 = document.getElementById('upright');
        button6.addEventListener('click', function() {
        targetCell4.textContent = sourceCell4.textContent;
        document.getElementById("upmid").style.opacity = "0";
        document.getElementById('stepInfo').innerHTML = "Il les a acceptés. Bravo, votre travail est maintenant fusionné avec le projet.";
        document.getElementById('upmid').style.color = "black";
        document.getElementById('upright').style.color = "red";
 })
});









