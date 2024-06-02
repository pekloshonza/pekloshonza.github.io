let count = 0; //pocet pismen
let fname = sessionStorage.getItem('name');

if (fname) {
  document.write("<h2>" + fname + "</h2>");
} else {
  do {
    while (fname == null || fname == "") {
      fname = window.prompt("What's your name");
    }

    if (fname.length < 8) {
      document.write("<h2>" + fname + "</h2>");
    }

    count = 0;
    for (let i = 0; i < fname.length; i++) {
      if (fname.charAt(i) !== " ") {
        count++;
      }
    }

    if (count > 8) {
      fname = "";
      sessionStorage.removeItem('name');
    }
  } while (count > 8);

  sessionStorage.setItem('name', fname);
}

console.log("Final count: " + count);