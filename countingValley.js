const valleyingValley = (n, s) => {
  let altitude = 0; // stores the altitude
  let valley = 0; // store number of valleys
  let arr = s.split('') // convert to a string

  for (var i = 0; i < n; i++) {
    /**
     * check if sinking on sea level 
     * the add to vally count
     */
    if (arr[i] === "D" && altitude == 0) {
      valley++;
      altitude--;
    } else if (arr[i] === "D" && altitude !== 0) {
      altitude--;
    } else if (arr[i] === "U") {
      altitude++;
    }
  }
  return valley;
}

valleyingValley(5, 'UDDUD')