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

		currArray.push('g' + String(curr.group)); // group id
		currArray.push(curr.groupindex-1);
		currArray.push(curr.groupindex);
		currArray.push(topSkillNum[String(curr.top)]);
		//currArray.push(curr.top);
		currArray.push(curr.alias);

		output_data.push(currArray);
	}

	return output_data;
};