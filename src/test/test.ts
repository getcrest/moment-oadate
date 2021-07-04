import moment from "moment";
import "../moment-oadate";
import { fromOADate } from "../moment-oadate";

const m = moment.utc("21/10/2015", "DD/MM/YYYY");

// Moment's native method
const date = m.toDate();
console.log("Input UTC date:", date);  // 2015-10-21T00:00:00.000Z

// Extended toOADate method
const oaDate = m.toOADate();
console.log("Moment to OADate:", oaDate); // 42298

// Moment from OADate method
const m2 = fromOADate(42298)
console.log("Moment from OADate:", m2.toDate());  // 2015-10-21T00:00:00.000Z