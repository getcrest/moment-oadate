import moment from "moment";
import '../moment-oadate';

let m = moment("21/10/2015", "DD/MM/YYYY");

let date = m.toDate()
console.log(date);

const oaDate = m.toOADate();
console.log(oaDate);

// TODO: Not build this file
