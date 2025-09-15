import { merge } from "../src/merge";

// เรียงอาเรย์สามตัว
describe("merge", () => {
  it("merge three sorted arrays correctly", () => {
    const collection_1 = [1, 3, 5, 7];
    const collection_2 = [2, 4, 6, 8];
    const collection_3 = [10, 8, 6, 4, 2]; 
    const result = merge(collection_1, collection_2, collection_3);

    
    const expected = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 10];
    expect(result).toEqual(expected);
  });

  // ถ้าอาเรย์ว่างหนึ่งตัว
  test("handle empty arrays", () => {
    const collection1: number[] = [];
    const collection2 = [10, 20];
    const collection3 = [30, 25];

    const expected = [10, 20, 25, 30];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });

  //  ถ้าอาเรย์ติดลบ
  test("arrays with negative numbers", () => {
        const collection1 = [-5, -3, -1];
        const collection2 = [-4, -2, 0];
        const collection3 = [10, 5, 2]; // Max to Min

        const expected = [-5, -4, -3, -2, -1, 0, 2, 5, 10];
        expect(merge(collection1, collection2, collection3)).toEqual(expected);
    });

});