/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	//Сдвигаем массив вправо, теперь N = Index
	preferences.splice(0, 0, 0);
	var lovers = preferences;

	var count = 0;
	var first;
	var second;
	var third;
	var used = [];

  for(var i = 1; i < lovers.length - 2; i++){
  	
  	first = lovers[i];
  	second = lovers[first];
  	if(second == third) continue;
  	third = lovers[second];
  	if(second == first) continue;

  	if( used.indexOf(first) != -1 
  		|| used.indexOf(second) != -1
  		|| used.indexOf(third) != -1 ){
  		continue;
  	}

  	if(third == i){
  		used.push(first);
  		used.push(second);
  		used.push(third);
  		count++;
  	}
  }
  return count;
};
