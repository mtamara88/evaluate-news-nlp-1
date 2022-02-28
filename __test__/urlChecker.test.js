import { checkURL } from '../src/client/js/urlChecker';

describe('Testing the function "chekURL" for valid url', function () {
    test('Returns true on valid url', function () {
        const urlTest = "https://www.valentinog.com/blog/jest/";
        const response = checkURL(urlTest);
        expect(response).toBe(true);
        expect(response).toBeDefined();
    });
});
describe('Testing the function "chekURL" for invalid url', () => {
    let url = "";
    test("Return true", () => {
        const response = checkURL(url);
        expect(response).toBeDefined();
        expect(response).toBeFalsy();
    });
});