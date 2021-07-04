import moment from "moment";

// Extend Moment types
declare module "moment" {
  interface Moment {
    /**
     * Returns the date in OADate format for the moment object
     * @returns number
     */
    toOADate(): number;
  }
}

const DAY_TO_MILLISECONDS = 86400000;
const OADATE_DAY_OFFSET = 25569;

/**
 * Returns the moment object for the provided OADate value
 * @param { number } oaDate value
 * @returns { moment.Moment } moment date
 */
export const fromOADate = function (oaDate: number): moment.Moment {
  let ms = (oaDate - OADATE_DAY_OFFSET) * DAY_TO_MILLISECONDS;

  if (oaDate < 0) {
    const frac = (oaDate - Math.trunc(oaDate)) * DAY_TO_MILLISECONDS;
    if (frac !== 0) {
      ms -= frac * 2;
    }
  }

  return moment(ms).utc();
};

function extendMoment(): void {
  /**
   * Returns the date in OADate format for the moment object
   * @returns number
   */
  moment.prototype.toOADate = function (): number {
    // Get moment time in milliseconds
    const ms = this.valueOf();

    let oaDate = ms / DAY_TO_MILLISECONDS + OADATE_DAY_OFFSET;
    if (oaDate < 0) {
      const fractionPart = oaDate - Math.trunc(oaDate);
      if (fractionPart !== 0) {
        oaDate = Math.ceil(oaDate) - fractionPart - 2;
      }
    }

    return oaDate;
  };
}

// Run the method to extend moment prototype
extendMoment();
