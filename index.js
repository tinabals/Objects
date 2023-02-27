
//question One

function InstagramPost(author, content, image, viewsCount, likesCount) {
    this.author = author;
    this.content = content;
    this.image = image;
    this.views = viewsCount;
    this.likes = likesCount;
  }
  
  // question Two
  const post1 = new InstagramPost('johndoe', 'Check out my new puppy!', 'https://example.com/puppy.jpg', 1000, 50);
  const post2 = new InstagramPost('janedoe', 'I love sunsets 🌅', 'https://example.com/sunset.jpg', 500, 20);


  //question Three

  //a
// Factory function to create a person object
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location
  };
}

//b
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


//question Four

//Using the spread operator (...) to create a shallow copy of an object:
const result_one = { a: 1, b: 2 };
const result_two = { ...result_one };
console.log(result_two); 

// Using the Object.assign() method to create a shallow copy of an object:
const obj1 = { a: 1, b: 2 };
const obj2 = Object.assign({}, obj1);
console.log(obj2); 


// Using JSON.parse() and JSON.stringify() to create a deep copy of an object:
const object_one = { a: { b: 1 } };
const object_two = JSON.parse(JSON.stringify(object_one));
console.log(object_two); 



// question Five
//using for-in
for (let party in presidentialCandidates) {
  console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
}

//using for-of
for (let [party, candidate] of Object.entries(presidentialCandidates)) {
  console.log(`${candidate} is the presidential candidate of ${party}`);
}




