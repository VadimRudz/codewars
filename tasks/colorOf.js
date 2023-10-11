function colorOf(r,g,b){

    r = (r < 16) ? '0' + r.toString(16) : r.toString(16);
    g = (g < 16) ? '0' + g.toString(16) : g.toString(16); 
    b = (b < 16) ? '0' + b.toString(16) : b.toString(16);  

    return '#' + r + g + b;
}
  
console.log(colorOf(255,0,0));
console.log(colorOf(0,111,0));
console.log(colorOf(1, 2 ,3));

// Test.assertSimilar(colorOf(255,0,0), "#ff0000");
// showColor("#ff0000");
// Test.assertSimilar(colorOf(0,111,0), "#006f00");
// showColor("#006f00");
// Test.assertSimilar(colorOf(1, 2 ,3), "#010203");
// showColor("#010203");
