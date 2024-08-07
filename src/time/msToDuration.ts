/* eslint-disable @typescript-eslint/no-magic-numbers */

/**
 * A function that will tell you how many days, hours, minutes, seconds and milliseconds are in a given number of
 * milliseconds.
 * You can pass the output directly to `Intl.DurationFormat` to get a human-readable, localized string.
 * @param durationMs - The duration in milliseconds
 */
const msToDuration = (durationMs: number) => {
    const msInSecond = 1000;
    const msInMinute = 60 * msInSecond;
    const msInHour = 60 * msInMinute;
    const msInDay = 24 * msInHour;

    let ms = durationMs;
    const days = Math.floor(ms / msInDay);
    ms %= msInDay;

    const hours = Math.floor(ms / msInHour);
    ms %= msInHour;

    const minutes = Math.floor(ms / msInMinute);
    ms %= msInMinute;

    const seconds = Math.floor(ms / 1000);
    ms %= 1000;
    const milliseconds = ms;

    return {
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
    };
};

export {
    msToDuration,
};
