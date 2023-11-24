document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById('step2');
    var sourceCell = document.getElementById('upright');
    var targetCell = document.getElementById('lowmid');
        button.addEventListener('click', function() {
        targetCell.textContent = sourceCell.textContent
        document.getElementById('stepInfo').innerHTML = "On a créé une copie du Grand Projet sur nos PC.";
        document.getElementById('lowmid').style.color = "red";
        document.getElementById('step2').style.color = "black";
        document.getElementById('step3').style.color = "chartreuse";
    })

    var button2 = document.getElementById('step3');
        button2.addEventListener('click', function() {
        document.getElementById("upleft").style.border = "2px solid";
        document.getElementById("hideOrigin").style.opacity = "1";
        document.getElementById('stepInfo').innerHTML = "On a créé un endroit sur Github où on pourrait éventuellement mettre nos travaux.";
        document.getElementById('lowmid').style.color = "black";
        document.getElementById('upleft').style.color = "red";
        document.getElementById('step3').style.color = "black";
        document.getElementById('step4').style.color = "chartreuse";
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
        document.getElementById('step4').style.color = "black";
        document.getElementById('step7').style.color = "chartreuse";
})

    var button4 = document.getElementById('step7');
    var sourceCell3 = document.getElementById('lowmid');
    var targetCell3 = document.getElementById('upleft');
        button4.addEventListener('click', function() {
        targetCell3.textContent = sourceCell3.textContent;
        document.getElementById('stepInfo').innerHTML = "On a transféré une copie de nos travaux sur notre Github.";
        document.getElementById('lowmid').style.color = "black";
        document.getElementById('upleft').style.color = "red";
        document.getElementById('step7').style.color = "black";
        document.getElementById('step8').style.color = "chartreuse";
})

    var button5 = document.getElementById('step8');
        button5.addEventListener('click', function() {
        document.getElementById("upmid").style.opacity = "1";
        document.getElementById('stepInfo').innerHTML = "On demande au propriétaire du Grand Projet si nos changements sont bons.";
        document.getElementById('upleft').style.color = "black";
        document.getElementById('upmid').style.color = "red";
        document.getElementById('step8').style.color = "black";
        document.getElementById('step9').style.color = "chartreuse";
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
        document.getElementById('step9').style.color = "black";
        document.getElementById('refresh').style.color = "chartreuse";
})

        var button7 = document.getElementById('refresh');
        button7.addEventListener('click', function() {
        location.reload();

        })

        var showStep1 = "Tout d'abord, allons sur le <a href='https://github.com/Leerlandais/GitGuide' target='_blank'>'dépôt GitHub</a>'";
        var showStep2 = "À partir de là, nous devons aller dans 'Code' et copier le lien (soit SSH soit HTTPS). Ensuite, ouvrez BASH dans le dossier souhaité et copiez l'intégralité du dépôt. La commande est // git clone https://github.com/Leerlandais/GitGuide.git // Cliquez <span id='step2' class='visible2'>ici</span> pour voir ce qui se passe quand vous faites cela'";
        var showStep3 = "Maintenant que nous avons les fichiers sur notre PC, nous pouvons travailler dessus. Avant cela, nous pourrions aussi ajouter un endroit pour mettre nos fichiers. La commande est // git remote add origin main // Cliquez <span id='step3' class='visible3'>ici</span>'";
        var showStep4 = "Avec tout cela fait, nous pouvons maintenant travailler sur les modifications. Dans le Grand Projet, vous avez été chargé des images. Alors ajoutez-les. Cliquez <span id='step4' class='visible4'>ici</span>'";
        var showStep5 = "Maintenant que nous avons fait le travail nécessaire, nous devons le téléverser sur git pour qu'il soit accessible aux autres. Pour cela, retournez dans BASH et préparez vos fichiers // git add . // Ce qui se passe ici, c'est que GIT vérifie les différences entre les fichiers sur votre PC et la version Upstream, et signale les changements effectués'";
        var showStep6 = "L'étape suivante consiste à préparer les fichiers pour l'envoi, où nous incluons une description des changements. La commande est // git commit -m'Votre message' // Vos modifications sont maintenant prêtes à être envoyées...'";
        var showStep7 = "...et c'est pourquoi nous avons créé origin. Parce que nous ne possédons pas le Grand Projet, nous devons d'abord l'envoyer à Git en utilisant cette commande // git push origin main // Comme d'habitude, cliquez <span id='step7' class='visible7'>ici</span> pour voir ce qui se passe quand vous faites cela'";
        var showStep8 = "Maintenant que les modifications sont téléversées sur git, nous devons informer le propriétaire du Projet que le travail est terminé. Retournez sur Git et utilisez la Pull Request. Cliquez <span id='step8' class='visible8'>ici</span> pour voir ce qui se passe quand vous faites cela'";
        var showStep9 = "Le propriétaire peut maintenant voir vos modifications et les accepter (les fusionner dans le Grand Projet). Cliquez <span id='step9' class='visible9'>ici</span> pour voir ce qui se passe'";
        var showStep10 = "Refaire les étapes? Cliquez <span id='refresh'>ici</span>'";
        
});





// document.getElementById('refresh').style.cssText = 'color: chartreuse; text-decoration: underline;"; 



