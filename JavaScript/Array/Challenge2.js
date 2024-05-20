const ages = [12, 18, 22, 30, 8, 19, 25];

const adults = ages.filter(function(age){
  return age >= 18;
});

console.log(adults);