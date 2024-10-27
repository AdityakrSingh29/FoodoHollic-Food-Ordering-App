import { sum } from "../Sum";

test("Sum Function that calculate the sum of two number",()=>{
    const result=sum(4,6);
    expect(result).toBe(10);
})