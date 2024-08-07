import must from "must";

import { msToDuration } from "./msToDuration";

describe("duration", () => {
    it("should work with few ms", async () => {
        must(msToDuration(0)).eql({ days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
        must(msToDuration(15)).eql({ days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 15 });
    });

    it("should work with seconds", async () => {
        must(msToDuration(1000)).eql({ days: 0, hours: 0, minutes: 0, seconds: 1, milliseconds: 0 });
        must(msToDuration(1500)).eql({ days: 0, hours: 0, minutes: 0, seconds: 1, milliseconds: 500 });
    });

    it("should work with minutes", async () => {
        must(msToDuration(60000)).eql({ days: 0, hours: 0, minutes: 1, seconds: 0, milliseconds: 0 });
        must(msToDuration(90001)).eql({ days: 0, hours: 0, minutes: 1, seconds: 30, milliseconds: 1 });
    });

    it("should work with hours", async () => {
        must(msToDuration(3600000)).eql({ days: 0, hours: 1, minutes: 0, seconds: 0, milliseconds: 0 });
        must(msToDuration(5401001)).eql({ days: 0, hours: 1, minutes: 30, seconds: 1, milliseconds: 1 });
    });

    it("should work with days", async () => {
        must(msToDuration(86400000)).eql({ days: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
        must(msToDuration(86400000 + 36000000 + 2400000 + 1000 + 1))
            .eql({ days: 1, hours: 10, minutes: 40, seconds: 1, milliseconds: 1 });
    });
});
