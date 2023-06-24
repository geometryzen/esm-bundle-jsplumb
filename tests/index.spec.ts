import { newInstance, ready } from "../src/index";

test("", function () {
    // expect(true).toBeTruthy();
    expect(typeof ready).toBe('function');
    expect(typeof newInstance).toBe('function');
});
