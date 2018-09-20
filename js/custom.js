
alertify.prompt("Please enter your term", function (e, term) {
	if (e) {
    $("body").addClass("loading");
    let fileObj = new File("./wordlist.txt");
    fileObj.getFileContent().then((data) => {
        $("body").removeClass("loading");
        let anagramsObj = new Anagrams(term, data);
        let anagrams = anagramsObj.getAnagrams();
        if (anagrams.length > 0) {
          $('.lead').html(anagrams.toString());
        } else {
          $('.lead').html("No terms found");
        }
    });
	}
});
