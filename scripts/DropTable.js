console.log('script active');

const delay = setTimeout(() => {
	console.log('timeout function triggered')


  }, 1000);

if (!isPageQuest()) {
	clearTimeout(delay);
	console.log('canceled timeout');
};

function isPageQuest() {
	const firstTh = document.getElementsByTagName('th');
	return firstTh[0].innerHTML.includes('Quest icon.png');
};