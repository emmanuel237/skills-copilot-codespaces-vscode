function skillsMember() {
  var member = {
    name: "John Doe",
    age: 30,
    location: "USA",
    skills: ["HTML", "CSS", "JavaScript"],
    bio: function() {
      console.log(
        `${this.name} is ${this.age} years old, lives in ${this.location}, and knows ${this.skills.join(
          ", "
        )}.`
      );
    }
  };

  return member;
}