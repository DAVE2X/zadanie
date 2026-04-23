import {multiply} from "/multiply.js";

test("multiply", ()=>{
    expect(multiply(2, 2)).toEqual(4);
    expect(multiply(306, 2)).toEqual(612);

    expect(multiply(-26, 2)).toEqual(-52);

    expect(multiply(18, 0)).toEqual(0);
    expect(multiply(0, 17)).toEqual(0);

    expect(multiply(0, 0)).toEqual(0);
});