let Title = [
  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Premier League",
  "Premier League",

  "Coppa Italia",

  "Liga Profesional Argentina",
  "Liga Profesional Argentina",

  /**/
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR"
];
let Match = [
  "Deportivo Alavés - Espanyol",
  "Osasuna - Getafe",
  "Sevilla - Mallorca",
  "Elche - Atlético Madrid",

  "Leeds United - Chelsea",
  "Wolverhampton Wanderers - Manchester City",

  "Juventus - Internazionale",

  "Estudiantes - Argentinos Juniors",
  "River Plate - Tigre"
];

var Est = [];

let ustat = [
  /** ***TEST*** */
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html"
];

for (var i = 0; i <= ustat.length - 23; i++) {
  //Est.push("" + ustat[i]);
  Est.push("https://pirlotv2.herokuapp.com/full/app/test/est?url=" + ustat[i]);
}

let Enl = [
  "",
  "",
  "",
  "",

  "",
  "",

  "",

  "",
  "",

  /** */
  /** */
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1"
];

function formatDate(date) {
  var year = date.getFullYear().toString();
  var month = (date.getMonth() + 101).toString().substring(1);
  var day = (date.getDate() + 100).toString().substring(1);
  return day + "/" + month + "/" + year;
}

//Usage example:
//alert(formatDate(new Date()));
let HOY = formatDate(new Date());
