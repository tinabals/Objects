function InstagramPost(author, content, image, viewsCount, likesCount) {
    this.author = author;
    this.content = content;
    this.image = image;
    this.views = viewsCount;
    this.likes = likesCount;
  }
  
  const post1 = new InstagramPost('johndoe', 'Check out my new puppy!', 'https://example.com/puppy.jpg', 1000, 50);
  const post2 = new InstagramPost('janedoe', 'I love sunsets 🌅', 'https://example.com/sunset.jpg', 500, 20);


// Factory function to create a person object
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location
  };
}

// Factory function to create a JAMB scores object
function createJambScores(eng, govt, lit, crk) {
  return {
    ENG: eng,
    GOVT: govt,
    LIT: lit,
    CRK: crk
  };
}

//person object representing Musa
const musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State');

// JAMB scores object for Musa
const musaScores = createJambScores(70, 85, 82, 94);

// Adding the JAMB scores object to the Musa object
musa.scores = musaScores;

console.log(musa)