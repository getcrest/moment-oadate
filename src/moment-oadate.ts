import moment from "moment";

// Extend types
declare module "moment" {
  interface Moment {
    /**
     * Returns the date in OADate format for the moment object
     * @returns number
     */
    toOADate(): number;
    fromOADate(oaDate: number): moment.Moment;
  }
}

const DAY_MILLISECONDS = 86400000;
const MS_DAY_OFFSET = 25569;

function extendMoment(): void {
  /**
   * Returns the date in OADate format for the moment object
   * @returns number
   */
  moment.prototype.toOADate = function (): number {
    // Get moment time in milliseconds
    const ms = this.valueOf();

    // TODO: Handle negative values
    return ms / DAY_MILLISECONDS + MS_DAY_OFFSET;
  };

  moment.prototype.fromOADate = function (oaDate: number): moment.Moment {
    // TODO: Implement method
    return this;
  };
}

extendMoment();
