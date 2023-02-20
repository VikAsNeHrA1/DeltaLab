$(document).ready(function() {
  $("#generateButton").click(function() {
    const name = $("#nameInput").val();
    
    const length = name.length;
    const firstLetter = name.charAt(0);
    const lastLetter = name.charAt(name.length - 1);
    const vowels = name.match(/[aeiou]/gi);
    const numVowels = vowels ? vowels.length : 0;
    const consonants = name.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    const numConsonants = consonants ? consonants.length : 0;
    
    $("#facts").html(`
      <p>Your name has ${length} letters.</p>
      <p>The first letter of your name is "${firstLetter}".</p>
      <p>The last letter of your name is "${lastLetter}".</p>
      <p>Your name contains ${numVowels} vowels and ${numConsonants} consonants.</p>
    `);
    
    const animals = {
      A: "Alligator",
      B: "Bear",
      C: "Cat",
      D: "Dog",
      E: "Elephant",
      F: "Fox",
      G: "Giraffe",
      H: "Hippo",
      I: "Iguana",
      J: "Jaguar",
      K: "Kangaroo",
      L: "Lion",
      M: "Monkey",
      N: "Narwhal",
      O: "Octopus",
      P: "Penguin",
      Q: "Quokka",
      R: "Rabbit",
      S: "Sloth",
      T: "Turtle",
      U: "Unicorn",
      V: "Lion",
      W: "Wolf",
      X: "Xenops",
      Y: "Yak",
      Z: "Zebra"
    };
    const firstLetterUpperCase = firstLetter.toUpperCase();
    const spiritAnimal = animals[firstLetterUpperCase] || "unknown";
    
    $("#spiritAnimal").text(`Your spirit animal is a ${spiritAnimal}.`);
  });
  
  $("#resetButton").click(function() {
    $("#nameInput").val("");
    $("#facts").html("");
    $("#spiritAnimal").html("");
  });
});
