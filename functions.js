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