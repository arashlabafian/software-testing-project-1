const { primeNums, secondDegreeEquation, subStrIndex } = require('../app');

describe('primeNums', () => {
	test('must be [2,3,5] for input 6', () => {
		var res = primeNums(6);
		expect(res).toEqual(expect.arrayContaining([2, 3, 5]));
	});

	test('must be [2,3,5,7,11,13,17,19] for input 20', () => {
		var res = primeNums(20);
		expect(res).toEqual(
			expect.arrayContaining([2, 3, 7, 5, 13, 11, 13, 17, 19])
		);
	});
});

describe('subStrIndex', () => {
	test('must be 4 for (narmAfzar, Afzar)', () => {
		const res = subStrIndex('narmAfzar', 'Afzar');
		expect(res).toEqual(4);
	});

	test('must be -1 for (narmAfzar, marm)', () => {
		const res = subStrIndex('narmAfzar', 'marm');
		expect(res).toEqual(-1);
	});
});

describe('secondDegreeEquation', () => {
	test('must be -1 for (1,2,1)', () => {
		var res = secondDegreeEquation(1, 2, 1);
		expect(res).toEqual(-1);
	});

	test('must be 0,-4 for (1, 4, 0) ', () => {
		var res = secondDegreeEquation(1, 4, 0);
		expect(res).toEqual(expect.arrayContaining([0, -4]));
	});

	test("doesn't have answer for for (40,1,9)", () => {
		var res = secondDegreeEquation(40, 1, 9);
		expect(res).toContain('answer not found');
	});
});
