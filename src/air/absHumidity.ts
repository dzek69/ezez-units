/**
 * Calculates the absolute humidity given relative humidity and temperature.
 * @param relativeHumidity - The relative humidity (in percentage, ie: 5 means 5%).
 * @param temperature - The current temperature (in degrees Celsius).
 * @returns The absolute humidity (in grams per cubic meter).
 */
const absHumidity = (relativeHumidity: number, temperature: number): number => {
    const a = 17.27;
    const b = 237.3;
    const c = 6.112;

    const R = 461.5;
    const kelvin = 273.15;

    const tempK = temperature + kelvin; // Convert temperature to Kelvin
    const SVP = c * Math.exp((a * temperature) / (b + temperature));

    const AVP = (relativeHumidity) * SVP;

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    return (AVP * 1000) / (R * tempK);
};

export {
    absHumidity,
};
