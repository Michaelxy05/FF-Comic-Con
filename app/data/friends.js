// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [

{
    name: "John",
    photo: "https://image.freepik.com/free-photo/shirt-confident-retro-man-happiness_1187-6055.jpg",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    name: "Peter",
    photo: "https://image.freepik.com/free-photo/man-smiling-with-arms-crossed_1187-2903.jpg",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    name: "David",
    photo: "https://image.freepik.com/free-photo/handsome-man-pointing-to-the-lateral_1368-5182.jpg",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    name: "Andrew",
    photo: "https://image.freepik.com/free-photo/close-up-of-distracted-guy-with-glasses_1149-895.jpg",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }

];



  // Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;