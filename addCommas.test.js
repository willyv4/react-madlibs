const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("1234 =>	“1,234”", () => {
    const num = 1234;
    const res = addCommas(num);
    console.log(res);
    expect(res).toEqual(`1,234`);
  });

  test("1000000	=> “1,000,000”", () => {
    const num = 1000000;
    const res = addCommas(num);
    expect(res).toEqual(`1,000,000`);
  });
  test("9876543210 =>	“9,876,543,210”", () => {
    const num = 9876543210;
    const res = addCommas(num);
    expect(res).toEqual(`9,876,543,210`);
  });
  test("6	=> “6”", () => {
    const num = 6;
    const res = addCommas(num);
    expect(res).toEqual("6");
  });
  test("-10 =>	“-10”", () => {
    const num = -10;
    const res = addCommas(num);
    expect(res).toEqual("-10");
  });
  test("-5678 => “-5,678”", () => {
    const num = -5678;
    const res = addCommas(num);
    expect(res).toEqual(`-5,678`);
  });

  test("12345.678 => “12,345.678”", () => {
    const num = 12345.678;
    const res = addCommas(num);
    expect(res).toEqual(`12,345.678`);
  });

  test("-3141592.65	“-3,141,592.65”", () => {
    const num = -3141592.65;
    const res = addCommas(num);
    expect(res).toEqual(`-3,141,592.65`);
  });
});
