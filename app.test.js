import { describe, it , expect } from "vitest"
import { countSheeps } from "./app.js"

describe('countSheeps', () => {
    it('should return There are 17 sheep in total', () => {
        expect(countSheeps([true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true])).toBe("There are 17 sheep in total");
    });
    it('should return UPS!!! Wolfs eaten Sheeps', () => {
        expect(countSheeps([false, false, false])).toBe("UPS!!! Wolfs eaten Sheeps");
    });
})