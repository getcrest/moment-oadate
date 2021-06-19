import moment from "moment";
import "../moment-oadate";

const m = moment.utc("21/10/2015", "DD/MM/YYYY");

// Moment's native method
let date = m.toDate();
console.log("UTC:", date);  // 2015-10-21T00:00:00.000Z

// Extended method
const oaDate = m.toOADate();
console.log("OADate:", oaDate); // 42298
