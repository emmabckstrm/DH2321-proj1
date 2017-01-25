var layout_data = [
    { "len": 8, "color": "#8dd3c7", "label": "Group 1", "id": "g1" },
    { "len": 8, "color": "#ffffb3", "label": "Group 2", "id": "g2" },
    { "len": 8, "color": "#bebada", "label": "Group 3", "id": "g3" },
    { "len": 8, "color": "#fb8072", "label": "Group 4", "id": "g4" },
    { "len": 8, "color": "#80b1d3", "label": "Group 5", "id": "g5" },
    { "len": 8, "color": "#fdb462", "label": "Group 6", "id": "g6" },
    { "len": 8, "color": "#b3de69", "label": "Group 7", "id": "g7" },
    { "len": 8, "color": "#fccde5", "label": "Group 8", "id": "g8" },
    { "len": 8, "color": "#d9d9d9", "label": "Group 9", "id": "g9" },
    { "len": 8, "color": "#bc80bd", "label": "Group 10", "id": "g10" }
];
var chords_data = [
    // source_id, source_start, source_end, target_id, target_start, target_end, value
    ['january', 1, 12, 'april', 18, 20, 2],
    ['february', 20, 28, 'december', 1, 13, 1],
];

var heatmap = [
    // each datum should be
    // layout_block_id, start, end, value
    ['g1',0,1,1368001,'Aldor'],
    ['g1',1,2,1458583,'Aragorn'],
    ['g1',2,3,1481633],
    ['g1',3,4,1408424],
    ['g1',4,5,1400597],
    ['g1',5,6,1548933],
    ['g1',6,7,1537059],
    ['g1',7,8,1517383],
    ['g2',0,1,1577419],
    ['g2',1,2,1509311],
    ['g2',2,3,1688266],
    ['g2',3,4,1690517],
    ['g2',4,5,1719390],
    ['g2',5,6,1693426],
    ['g2',6,7,1613806],
    ['g2',7,8,1521449],
    ['g3',0,1,1500834],
    ['g3',1,2,1424820],
    ['g3',2,3,1607011],
    ['g3',3,4,1615301],
    ['g3',4,5,1559021],
    ['g3',5,6,1547753],
    ['g3',6,7,1508006],
    ['g3',7,8,1309583],
    ['g4',0,1,1283014],
    ['g4',1,2,1270569],
    ['g4',2,3,1293570],
    ['g4',3,4,1293439],
    ['g4',4,5,1150461],
    ['g4',5,6,1050257],
    ['g4',6,7,1209470],
    ['g4',7,8,1260725],
    ['g5',0,1,1036144],
    ['g5',1,2,1156135],
    ['g5',2,3,1106555],
    ['g5',3,4,1041413],
    ['g5',4,5,1182786],
    ['g5',5,6,1192434],
    ['g5',6,7,1193624],
    ['g5',7,8,1047831],
    ['g5',8,9,1106669],
    ['g6',0,1,935590],
    ['g6',1,2,1119046],
    ['g6',2,3,1150676],
    ['g6',3,4,1169570],
    ['g6',4,5,1162795],
    ['g6',5,6,1147372],
    ['g6',6,7,1004244],
    ['g6',7,8,921713],
    ['g7',0,1,1143862],
    ['g7',1,2,1150514],
    ['g7',2,3,1167512],
    ['g7',3,4,1150024],
    ['g7',4,5,1008307],
    ['g7',5,6,934687],
    ['g7',6,7,1106666],
    ['g7',7,8,1143473],
    ['g8',0,1,1071402],
    ['g8',1,2,951503],
    ['g8',2,3,878472],
    ['g8',3,4,996356],
    ['g8',4,5,1016188],
    ['g8',5,6,1022237],
    ['g8',6,7,1027197],
    ['g8',7,8,1024299],
    ['g9',0,1,1103673],
    ['g9',1,2,1143909],
    ['g9',2,3,1149438],
    ['g9',3,4,1157452],
    ['g9',4,5,1149054],
    ['g9',5,6,1010272],
    ['g9',6,7,942892],
    ['g9',7,8,1135215],
    ['g9',8,9,1163859],
    ['g10',0,1,1169047],
    ['g10',1,2,1166792],
    ['g10',2,3,1151218],
    ['g10',3,4,1013653],
    ['g10',4,5,961694],
    ['g10',5,6,1173529],
    ['g10',6,7,1208669],
    ['g10',7,8,1218388],
];
days_off = [
    ['g1',0,1,2],
    ['g1',1,2,0],
    ['g1',2,3,0],
    ['g1',3,4,1],
    ['g1',4,5,1],
    ['g1',5,6,0],
    ['g1',6,7,0],
    ['g1',7,8,0],
    ['g1',8,9,0],
    ['g1',9,10,0],
    ['g1',10,11,1],
    ['g1',11,12,1],
    ['g1',12,13,0],
    ['g1',13,14,0],
    ['g1',14,15,0],
    ['g1',15,16,0],
    ['g1',16,17,0],
    ['g1',17,18,1],
    ['g1',18,19,1],
    ['g1',19,20,0],
    ['g1',20,21,0],
    ['g1',21,22,0],
    ['g1',22,23,0],
    ['g1',23,24,0],
    ['g1',24,25,1],
    ['g1',25,26,1],
    ['g1',26,27,0],
    ['g1',27,28,0],
    ['g1',28,29,0],
    ['g1',29,30,0],
    ['g1',30,31,0],
    ['g2',0,1,1],
    ['g2',1,2,1],
    ['g2',2,3,0],
    ['g2',3,4,0],
    ['g2',4,5,0],
    ['g2',5,6,0],
    ['g2',6,7,0],
    ['g2',7,8,1],
    ['g2',8,9,1],
    ['g2',9,10,0],
    ['g2',10,11,0],
    ['g2',11,12,0],
    ['g2',12,13,0],
    ['g2',13,14,0],
    ['g2',14,15,1],
    ['g2',15,16,1],
    ['g2',16,17,0],
    ['g2',17,18,0],
    ['g2',18,19,0],
    ['g2',19,20,0],
    ['g2',20,21,0],
    ['g2',21,22,1],
    ['g2',22,23,1],
    ['g2',23,24,0],
    ['g2',24,25,0],
    ['g2',25,26,0],
    ['g2',26,27,0],
    ['g2',27,28,0],
    ['g3',0,1,1],
    ['g3',1,2,1],
    ['g3',2,3,0],
    ['g3',3,4,0],
    ['g3',4,5,0],
    ['g3',5,6,0],
    ['g3',6,7,0],
    ['g3',7,8,1],
    ['g3',8,9,1],
    ['g3',9,10,0],
    ['g3',10,11,0],
    ['g3',11,12,0],
    ['g3',12,13,0],
    ['g3',13,14,0],
    ['g3',14,15,1],
    ['g3',15,16,1],
    ['g3',16,17,0],
    ['g3',17,18,0],
    ['g3',18,19,0],
    ['g3',19,20,0],
    ['g3',20,21,0],
    ['g3',21,22,1],
    ['g3',22,23,1],
    ['g3',23,24,0],
    ['g3',24,25,0],
    ['g3',25,26,0],
    ['g3',26,27,0],
    ['g3',27,28,0],
    ['g3',28,29,1],
    ['g3',29,30,1],
    ['g3',30,31,0],
    ['g4',0,1,0],
    ['g4',1,2,0],
    ['g4',2,3,0],
    ['g4',3,4,0],
    ['g4',4,5,1],
    ['g4',5,6,1],
    ['g4',6,7,0],
    ['g4',7,8,0],
    ['g4',8,9,0],
    ['g4',9,10,0],
    ['g4',10,11,0],
    ['g4',11,12,1],
    ['g4',12,13,1],
    ['g4',13,14,0],
    ['g4',14,15,0],
    ['g4',15,16,0],
    ['g4',16,17,0],
    ['g4',17,18,0],
    ['g4',18,19,1],
    ['g4',19,20,1],
    ['g4',20,21,2],
    ['g4',21,22,0],
    ['g4',22,23,0],
    ['g4',23,24,0],
    ['g4',24,25,0],
    ['g4',25,26,1],
    ['g4',26,27,1],
    ['g4',27,28,0],
    ['g4',28,29,0],
    ['g4',29,30,0],
    ['g5',0,1,2],
    ['g5',1,2,0],
    ['g5',2,3,1],
    ['g5',3,4,1],
    ['g5',4,5,0],
    ['g5',5,6,0],
    ['g5',6,7,0],
    ['g5',7,8,2],
    ['g5',8,9,0],
    ['g5',9,10,1],
    ['g5',10,11,1],
    ['g5',11,12,0],
    ['g5',12,13,0],
    ['g5',13,14,0],
    ['g5',14,15,0],
    ['g5',15,16,0],
    ['g5',16,17,1],
    ['g5',17,18,1],
    ['g5',18,19,0],
    ['g5',19,20,0],
    ['g5',20,21,0],
    ['g5',21,22,0],
    ['g5',22,23,0],
    ['g5',23,24,1],
    ['g5',24,25,1],
    ['g5',25,26,0],
    ['g5',26,27,0],
    ['g5',27,28,0],
    ['g5',28,29,2],
    ['g5',29,30,0],
    ['g5',30,31,1],
    ['g6',0,1,1],
    ['g6',1,2,0],
    ['g6',2,3,0],
    ['g6',3,4,0],
    ['g6',4,5,0],
    ['g6',5,6,0],
    ['g6',6,7,1],
    ['g6',7,8,1],
    ['g6',8,9,2],
    ['g6',9,10,0],
    ['g6',10,11,0],
    ['g6',11,12,0],
    ['g6',12,13,0],
    ['g6',13,14,1],
    ['g6',14,15,1],
    ['g6',15,16,0],
    ['g6',16,17,0],
    ['g6',17,18,0],
    ['g6',18,19,0],
    ['g6',19,20,0],
    ['g6',20,21,1],
    ['g6',21,22,1],
    ['g6',22,23,0],
    ['g6',23,24,0],
    ['g6',24,25,0],
    ['g6',25,26,0],
    ['g6',26,27,0],
    ['g6',27,28,1],
    ['g6',28,29,1],
    ['g6',29,30,0],
    ['g7',0,1,0],
    ['g7',1,2,0],
    ['g7',2,3,0],
    ['g7',3,4,0],
    ['g7',4,5,1],
    ['g7',5,6,1],
    ['g7',6,7,0],
    ['g7',7,8,0],
    ['g7',8,9,0],
    ['g7',9,10,0],
    ['g7',10,11,0],
    ['g7',11,12,1],
    ['g7',12,13,1],
    ['g7',13,14,2],
    ['g7',14,15,0],
    ['g7',15,16,0],
    ['g7',16,17,0],
    ['g7',17,18,0],
    ['g7',18,19,1],
    ['g7',19,20,1],
    ['g7',20,21,0],
    ['g7',21,22,0],
    ['g7',22,23,0],
    ['g7',23,24,0],
    ['g7',24,25,0],
    ['g7',25,26,1],
    ['g7',26,27,1],
    ['g7',27,28,0],
    ['g7',28,29,0],
    ['g7',29,30,0],
    ['g7',30,31,0],
    ['g8',0,1,0],
    ['g8',1,2,1],
    ['g8',2,3,1],
    ['g8',3,4,0],
    ['g8',4,5,0],
    ['g8',5,6,0],
    ['g8',6,7,0],
    ['g8',7,8,0],
    ['g8',8,9,1],
    ['g8',9,10,1],
    ['g8',10,11,0],
    ['g8',11,12,0],
    ['g8',12,13,0],
    ['g8',13,14,0],
    ['g8',14,15,2],
    ['g8',15,16,1],
    ['g8',16,17,1],
    ['g8',17,18,0],
    ['g8',18,19,0],
    ['g8',19,20,0],
    ['g8',20,21,0],
    ['g8',21,22,0],
    ['g8',22,23,1],
    ['g8',23,24,1],
    ['g8',24,25,0],
    ['g8',25,26,0],
    ['g8',26,27,0],
    ['g8',27,28,0],
    ['g8',28,29,0],
    ['g8',29,30,1],
    ['g8',30,31,1],
    ['g9',0,1,0],
    ['g9',1,2,0],
    ['g9',2,3,0],
    ['g9',3,4,0],
    ['g9',4,5,0],
    ['g9',5,6,1],
    ['g9',6,7,1],
    ['g9',7,8,0],
    ['g9',8,9,0],
    ['g9',9,10,0],
    ['g9',10,11,0],
    ['g9',11,12,0],
    ['g9',12,13,1],
    ['g9',13,14,1],
    ['g9',14,15,0],
    ['g9',15,16,0],
    ['g9',16,17,0],
    ['g9',17,18,0],
    ['g9',18,19,0],
    ['g9',19,20,1],
    ['g9',20,21,1],
    ['g9',21,22,0],
    ['g9',22,23,0],
    ['g9',23,24,0],
    ['g9',24,25,0],
    ['g9',25,26,0],
    ['g9',26,27,1],
    ['g9',27,28,1],
    ['g9',28,29,0],
    ['g9',29,30,0],
    ['g10',0,1,0],
    ['g10',1,2,0],
    ['g10',2,3,0],
    ['g10',3,4,1],
    ['g10',4,5,1],
    ['g10',5,6,0],
    ['g10',6,7,0],
    ['g10',7,8,0],
    ['g10',8,9,0],
    ['g10',9,10,0],
    ['g10',10,11,1],
    ['g10',11,12,1],
    ['g10',12,13,0],
    ['g10',13,14,0],
    ['g10',14,15,0],
    ['g10',15,16,0],
    ['g10',16,17,0],
    ['g10',17,18,1],
    ['g10',18,19,1],
    ['g10',19,20,0],
    ['g10',20,21,0],
    ['g10',21,22,0],
    ['g10',22,23,0],
    ['g10',23,24,0],
    ['g10',24,25,1],
    ['g10',25,26,1],
    ['g10',26,27,0],
    ['g10',27,28,0],
    ['g10',28,29,0],
    ['g10',29,30,0],
    ['g10',30,31,0]
];