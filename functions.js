var topSkillNum = {
	"ivis": 1,
	"ux": 2,
	"stats": 3,
	"prog": 4,
	"art": 5,
	"user": 8,
	"math": 7,
	"hci": 6,
};
var topSkills = [
	"ivis",
	"ux",
	"stats",
	"prog",
	"art",
	"user",
	"math",
	"hci",
];

var dataToHeatmap = function(data) {
	// each OUTPUT datum should be
	// layout_block_id, start, end, value
	//['g1',0,1,1368001,'Gandalf'],	

	var output_data = [];

	for (var i=0; i<data.length; i++) {
		var curr = data[i]; //current obj
		var currArray = [];

		currArray.push('grp' + String(curr.group)); // group id
		currArray.push(curr.groupindex-1);
		currArray.push(curr.groupindex);
		currArray.push(topSkillNum[String(curr.top)]);
		//currArray.push(curr.top);
		currArray.push(curr.alias);

		output_data.push(currArray);
	}

	return output_data;
};

var dataToGroupNum = function(data) {
	var output_data = {};

	for (var i=0; i<data.length; i++) {
		var curr = data[i]; //current obj

		output_data[curr.alias] = {
			group: curr.group,
			groupindex: curr.groupindex
		};
	}

	return output_data;
};

var dataToChord = function(data, groupRef) {
	// input: [['Arsenal','Aston Villa',6]
	//			,['Arsenal','Bournemouth',4]
	//			,['Arsenal','Chelsea',0]]
	//
	// output: var chords_data = [
	//			source_id, source_start, source_end, target_id, target_start, target_end, value
    //			['g2', 1, 2, 'g6', 4, 5, 2],
    //			['g3', 2, 3, 'g9', 6, 7, 1]];

    var output_data = [];

    for (var i=0; i<data.length; i++) {
		var curr = data[i]; //current obj
		var alias1 = groupRef[curr[0]];
		var alias2 = groupRef[curr[1]];
		var currArray = [];

		currArray.push('grp' + String(alias1.group)); // group id
		currArray.push(alias1.groupindex-1);
		currArray.push(alias1.groupindex);

		currArray.push('grp' + String(alias2.group)); // group id
		currArray.push(alias2.groupindex-1);
		currArray.push(alias2.groupindex);

		currArray.push(curr[2]);

		output_data.push(currArray);
	}

	return output_data;
};

var interestData = function(data) {
	// output data: [
	//				['Aldor','Aragorn',1]  
	//				,['Aldor','Arwen',0] ]
	var output_data = [];

    for (var i=0; i<data.length; i++) {
		var currStudent = data[i]; //current student

		for (var j=0; j<data.length; j++) {
			var currArray = [];
			var commonInt = 0; // common interests
			var nextStudent = data[j];

			if (currStudent.alias !== nextStudent.alias) {
				if (currStudent.hobbycreative && nextStudent.hobbycreative) {
					commonInt += 1;
				}
				if (currStudent.hobbyphysical && nextStudent.hobbyphysical) {
					commonInt += 1;
				}
				if (currStudent.hobbytech && nextStudent.hobbytech) {
					commonInt += 1;
				}
				if (currStudent.hobbymedia && nextStudent.hobbymedia) {
					commonInt += 1;
				}
				if (currStudent.hobbygames && nextStudent.hobbygames) {
					commonInt += 1;
				}
				if (currStudent.hobbypsychology && nextStudent.hobbypsychology) {
					commonInt += 1;
				}
				if (currStudent.hobbysocial && nextStudent.hobbysocial) {
					commonInt += 1;
				}
				if (currStudent.hobbyprogramming && nextStudent.hobbyprogramming) {
					commonInt += 1;
				}
				if (currStudent.hobbygraphics && nextStudent.hobbygraphics) {
					commonInt += 1;
				}
				if (currStudent.hobbytravel && nextStudent.hobbytravel) {
					commonInt += 1;
				}
				if (currStudent.hobbyfood && nextStudent.hobbyfood) {
					commonInt += 1;
				}
				if (currStudent.hobbypolitics && nextStudent.hobbypolitics) {
					commonInt += 1;
				}
				if (currStudent.hobbysociety && nextStudent.hobbysociety) {
					commonInt += 1;
				}
				if (currStudent.hobbyscience && nextStudent.hobbyscience) {
					commonInt += 1;
				}
				if (currStudent.hobbydesign && nextStudent.hobbydesign) {
					commonInt += 1;
				}
				if (currStudent.hobbyculture && nextStudent.hobbyculture) {
					commonInt += 1;
				}
				if (currStudent.hobbyeducation && nextStudent.hobbyeducation) {
					commonInt += 1;
				}

				currArray.push(currStudent.alias, nextStudent.alias, commonInt);

				output_data.push(currArray);
			}
				

		}
	}
	return output_data;
		

};


var renderSkills = function(id) {
	var container = document.getElementById(id);
	for (var i=0;i<topSkills.length;i++) {
		//console.log(topSkills[i]);

		var skill = document.createElement("div");
		skill.className = "skill colr" + topSkillNum[topSkills[i]];
		skill.innerHTML = topSkills[i];

		container.appendChild(skill);
	}
}






























