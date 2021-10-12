var visualScore = 0;
var auditoryScore = 0;
var kinestheticScore = 0;
var readwriteScore = 0;
var totalScore = 0;

function getLearningStyle()
{

   if(document.getElementById('Vis').checked){
     visualScore++;
   }
   if(document.getElementById('Aud').checked){
     auditoryScore++;
   }
   if(document.getElementById('Kin').checked){
     kinestheticScore++;
   }
   if(document.getElementById('R/W').checked){
     readwriteScore++;
   }

   totalScore = visualScore + auditoryScore + kinestheticScore + readwriteScore;
   visualScore = visualScore/totalScore;
   auditoryScore = auditoryScore/totalScore;
   kinestheticScore = kinestheticScore/totalScore;
   readwriteScore = readwriteScore/totalScore;

   //console.log(totalScore);
   //console.log(visualScore);
}

getLearningStyle();
//alert(visualScore);
//alert(auditoryScore);
//alert(kinestheticScore);
//alert(readwriteScore);

//really messy + doesn't work :(
