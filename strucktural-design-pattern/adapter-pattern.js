// Adapter pattern
/* The Adapter allows two objects with incompatible interfaces to interact with each other.
example: xml api can comunicate with json api with this pattern(this means that logic 
to convert format is also called adapter pattern) */

//list of province
const provinceHabitantsInMillions = [
  { province: "Middle Java", habitants: 36.5 },
  { province: "East Java", habitants: 40.6 },
  { province: "West Java", habitants: 38.2 },
  { province: "Jakarta", habitants: 10.5 },
  { province: "Banten", habitants: 11.9 },
];

//new province we want to add
const yogyakarta = { province: "Yogyakarta", habitants: 373589 };

// Our adapter function takes our province and converts the habitants property to the same format all the other province have
const toMillionAdapter = (province) => {
  province.habitants = parseFloat((province.habitants / 1000000).toFixed(1));
};

toMillionAdapter(yogyakarta);

//add convered province to our list province
provinceHabitantsInMillions.push(yogyakarta);

console.log(provinceHabitantsInMillions)