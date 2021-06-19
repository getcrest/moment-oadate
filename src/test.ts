import moment from "moment";
import './moment-oadate';

let m = moment('05-17-2018 11:40 PM', 'MM-DD-YYYY hh:mm A')

m.fn('xyz');
let date = m.toDate()
console.log(date);