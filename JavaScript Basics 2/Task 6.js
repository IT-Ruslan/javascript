const numberToGuess = 3;

        function guessNumber() {
            let userInput;

            while (true) {
                userInput = prompt("գուշակեք 1-ից մինչև 5 թիվը: ");

                userInput = parseInt(userInput);

                if (isNaN(userInput)) {
                    alert("Խնդրում ենք մուտքագրել թիվ:");
                    continue;
                }

                if (userInput < 1 || userInput > 5) {
                    alert("Ներմուծված թիվը միջակայքից դուրս է:");
                    alert("Փորձեք նորից:");
                    continue;
                }
                if (userInput === numberToGuess) {
                    alert("Շնորհավորում եմ, դուք գուշակեցիք:");
                    break; 
                } else {
                    alert("չգուշակեցիր:");
    }
 }
}


guessNumber();