"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStringHoursToMinutes = void 0;
function convertStringHoursToMinutes(hoursString) {
    const [hours, minutes] = hoursString.split(':').map(Number);
    const minutesAmount = (hours * 60) + minutes;
    return minutesAmount;
}
exports.convertStringHoursToMinutes = convertStringHoursToMinutes;
