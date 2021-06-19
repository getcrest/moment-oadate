import moment from "moment";

declare module "moment" {
  interface Moment {
    toOADate(): number;
  }
}

export function extendMoment(): void {
  // TODO: Handle timezone offsets issue
  moment.prototype.toOADate = function (): number {
    const DAY_MILLISECONDS = 86400000;
    const MS_DAY_OFFSET = 25569;

    const ms = this.valueOf();
    return ms / DAY_MILLISECONDS + MS_DAY_OFFSET;
  };
}

extendMoment();
