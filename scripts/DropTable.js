const idList = ['Bluefull', 'Greenill', 'Oran', 'Pinkal', 'Purplenum', 'Redria', 'Skyly', 'Viridia', 'Yellowboze', 'Whitill'];
const areaList = ['Forest', 'Cave', 'Mine', 'Ruins', 'VR Temple', 'VR Spaceship', 'Mountain', 'Jungle', 'Seaside', 'Central Control Area', 'Seabed', 'Tower', 'Crater', 'Desert', 'Bosses', 'Meteor'];
let areaTables = [];
	
tbodies = document.getElementsByTagName('tbody');

for (let i = 1; i < tbodies.length; i++ ) {
	areaList.forEach((area) => {
		if (tbodies[i].getElementsByTagName('th')[0].innerText.includes(area)) {
			areaTables.push(tbodies[i]);
		};
	});
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
	elSelect.onchange = (event) => { addToTables() };
	elEnemyCounts.append(elSelect);
})();

function getEpisode() {
	const episode = document.getElementsByTagName('th')[1].innerText.toUpperCase()
	if (episode === 'EPISODE 1' || episode === 'EPISODE 2' || episode === 'EPISODE 4') {
		return episode;
	}
};

function getSectionID() {
	return document.getElementById('section-id').value;
}

function getEnemies() {
	const episode = getEpisode();
	const sectionID = getSectionID();
	return ultimate[episode][sectionID];
};

function addToTables() {
	const elDropTd = document.getElementsByClassName('drop');
	while(elDropTd.length > 0){
		elDropTd[0].remove();
	};
	areaTables.forEach((table) => {
		const enemyList = getEnemies();
		let enemyInTable = [];
		for (let i = 0; i < table.children.length; i++) {
			const elTR = table.children[i];
			for (let j = 0; j < enemyList.length; j++) {
				const enemy = enemyList[j];
				if (enemy.target.includes(elTR.children[0].innerText)) {
					let elTd = document.createElement('td');
					elTd.className = 'drop';
					elTd.innerText = enemy.item + ' ' + getDropRate(enemy);
					elTR.appendChild(elTd);
					enemyInTable.push([enemy]);
					break; // Prevent multiple matches with Dimenian. Also more efficient then letting it continue to loop.
				}
			};
		};
	});
};

function getDropRate(item) {
	const denom = 100 / (item.dar * parseFloat(item.rare) / 100);

	// rounds to the 2nd decimal
	let adjustedRate = ': 1/' + (Math.round(denom * 100) / 100).toString();
	return adjustedRate;
};
addToTables();