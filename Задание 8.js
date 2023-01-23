let map = new Map([
    ['name', 'kirill'],
    ['age', '18'],
    ['lang', 'rus']
])
for (let name of map.keys()) {

    console.log(name); 
  
  }
  for (let color of map.values()) {

    console.log(color);
  
  }
  for (let elem of map) { 

    console.log(elem)
 
 }