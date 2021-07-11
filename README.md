# moment-oadate

### Installation

From [NPM](https://www.npmjs.com/):

`npm install moment-oadate`

### Usage

#### Convert __Moment__ to __OA Date__:
```ts
import moment from "moment";
import "moment-oadate"; // Extends the moment library 

const momentDate = moment.utc("21/10/2015", "DD/MM/YYYY");
const oaDate = momentDate.toOADate();   // 42298
```

#### Convert __OA Date__ to __Moment__:
```ts
import moment from "moment";
import { fromOADate } from "moment-oadate";

const momentDate = fromOADate(42298.4642);
console.log(momentDate.toDate()); // 2015-10-21T11:08:26.880Z
```
_Note: This library will return all values based on UTC time._

### Dependencies

_None_
### Peer dependencies

[moment](https://www.npmjs.com/package/moment)
