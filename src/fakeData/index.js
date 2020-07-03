import breakfastes from './breakfasts';
import lunches from './lunches';
import dinners from './dinners';

const fakeData = [...breakfastes, ...lunches, ...dinners];

const shuffle = (a) => {
	for (let i = a.length; i; i--) {
		let j = Math.floor(Math.random() * i);
		[a[i - 1], a[j]] = [a[j], a[i - 1]];
	}
};

shuffle(fakeData);

export default fakeData;
