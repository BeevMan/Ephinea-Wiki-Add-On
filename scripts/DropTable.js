console.log('script active');

const idList = ['Bluefull', 'Greenill', 'Oran', 'Pinkal', 'Purplenum', 'Redria', 'Skyly', 'Viridia', 'Yellowboze', 'Whitill'];

const delay = setTimeout( async () => {
	console.log('timeout function triggered');
	console.log(ultimate[getEpisode()][getSectionID()]);

  }, 1000);

if (!isPageQuest()) {
	clearTimeout(delay);
	console.log('quest page not detected, canceled timeout');
};

function isPageQuest() {
	const firstTh = document.getElementsByTagName('th')[0];
	return firstTh.innerHTML.includes('Quest icon.png');
};

(function addSectionIdSelect() {
	const elSelect = document.createElement("select");
	elSelect.id = 'section-id';
	elSelect.name = 'section-id';
	idList.forEach((id) => {
		const option = new Option(id, id);
		elSelect.add(option)
	});
	const elEnemyCounts = document.getElementById('Enemy_Counts');
	elEnemyCounts.append(elSelect);
})();

function getEpisode() {
	const episode = document.getElementsByTagName('th')[1].innerText.toUpperCase()
	//let episode = document.getElementsByTagName('th')[1].innerText.toLowerCase();
	//episode = episode.charAt(0).toUpperCase() + episode.slice(1);
	if (episode === 'EPISODE 1' || episode === 'EPISODE 2' || episode === 'EPISODE 4') {
		return episode;
	}
};

function getSectionID() {
	return document.getElementById('section-id').value;
}

function getEnemies() {

};

function getItems() {

};

function addToTables() {
	
};