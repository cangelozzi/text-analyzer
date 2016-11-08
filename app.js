$(document).ready(function(){

	$(".js-form").submit(function(event){
      event.preventDefault();
	var wordsEntered = 	$(".js-textWords").val();
    var wordsTotal = wordsEntered.split(" ");

//Word count   
      function wordCount (){
       return wordsTotal.length;
      }
     
       $("dl").removeClass("hidden");
       $(".wordC").html(wordCount());
   
// Unique word count
      var uniqueWords = [];
      $.each(wordsTotal, function(i, el){
      if($.inArray(el, uniqueWords) === -1) uniqueWords.push(el);
      });
      $(".uniqueW").html(uniqueWords.length);
    
// Average word length  
      var wordLength = wordsTotal.join("");
      wordLength = wordLength.replace(/\./g, '');
      var averageWordLength = wordLength.length / wordsTotal.length;
      $(".averageWL").html(averageWordLength.toFixed(2) + " characters");
 
// Average sentence length
      var totSentences = wordsEntered.split(".").slice(0, -1);  
      var AverageSentenceLength = wordsTotal.length / totSentences.length;
      $(".avgSentLngt").html(AverageSentenceLength.toFixed(2) + " words");
      
    //console.log(totSentences);
      
    });
});



