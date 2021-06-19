import moment from "moment";

declare module 'moment' {
    interface Moment {
        fn(name: string): void;
    }
}

export function extendMoment(): void {
    moment.prototype.fn = function (name: string) {
        console.log("Name:", name);
    };
}

extendMoment();
