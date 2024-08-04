import must from "must";

import { absHumidity } from "./absHumidity";

describe("absHumidity", () => {
    it("calculates absolute humidity", async () => {
        must(absHumidity(60, 25)).equal(13.8224092766819);
        must(absHumidity(100, 25)).equal(23.037348794469835);
    });
});
