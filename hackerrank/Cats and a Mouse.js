function catAndMouse(x, y, z) {
    const catAndMouseDiff1 = Math.abs(z - x);
    const catAndMouseDiff2 = Math.abs(z - y);
    
    if(catAndMouseDiff1 === catAndMouseDiff2) return "Mouse C";
    
    if(catAndMouseDiff1 > catAndMouseDiff2) return "Cat B";
    else return "Cat A";
}