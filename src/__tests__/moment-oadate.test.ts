import moment from "moment";
import "../moment-oadate";
import { fromOADate } from "../moment-oadate";

/**
 * Date used for testing this package
 */
const MOMENT_DATE_1 = moment.utc("21/10/2015", "DD/MM/YYYY");
/**
 * Equivalent OA date
 */
const OA_DATE_1 = 42298

describe("fromOADate", () => {
  test("fromOADate to Moment object", () => {
    const momentDate = fromOADate(OA_DATE_1);

    expect(momentDate.toDate()).toMatchObject(MOMENT_DATE_1.toDate());
  });
});

describe("toOADate", () => {
  test("Moment object to toOADate", () => {
    const oaDate = MOMENT_DATE_1.toOADate();

    expect(oaDate).toBe(OA_DATE_1);
  });
});
