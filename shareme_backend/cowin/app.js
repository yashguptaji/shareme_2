const express = require("express");
const app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

app.listen(process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());

function getDate() {
  today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //As January is 0.
  var yyyy = today.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  date = dd + "-" + mm + "-" + yyyy;
  return date;
}

function abcd(districtID, date = getDate()) {
  return new Promise((resolve, reject) => {
    url =
      "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=" +
      districtID +
      "&date=" +
      date;
    // console.log(url);
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        data = JSON.parse(request.responseText); //bug over here
        console.log(data);
        resolve(data);
      } else {
        reject(request.status);
        // We reached our target server, but it returned an error
      }
    };
    request.onerror = function () {
      // There was a connection error of some sort
    };
    request.send();
  });
}

// console.log(data);

app.get("/", (req, res) => res.redirect("/form"));

// app.get("/", (req, res) => res.redirect("/form"));

app.get("/show/:id", (req, res) => {
  const path = req.params.id;
  [id, age] = path.split(" ");
  // console.log(id, age);
  // id = arr[0];
  abcd(id)
    .then((data) => {
      res.render("index", { centres: data["centers"], age });
    })
    .catch((err) => console.log(err));
});

app.get("/form", (req, res) => res.render("getDistrict"));

app.post("/form", (req, res) => {
  const { districtID, date, age } = req.body;
  // console.log(districtID, date, age);
  res.json({ redirect: "/show/" + districtID + " " + age });
});

function get_cert(districtID, date = getDate()) {
  return new Promise((resolve, reject) => {
    url =
      "https://cdn-api.co-vin.in/api/v2/registration/certificate/public/download?beneficiary_reference_id=" +
      BF_ID;
    // console.log(url);
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        data = JSON.parse(request.responseText); //bug over here
        resolve(data);
      } else {
        reject(request.status);
        // We reached our target server, but it returned an error
      }
    };
    request.onerror = function () {
      // There was a connection error of some sort
    };
    request.send();
  });
}
