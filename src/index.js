/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  //Сдвигаем массив вправо, теперь индексы соотвествуют
  preferences.splice(0, 0, 0);

	let count = 0;

  for(let i = 1, len = preferences.length; i < len; i++){
    const firstPos = preferences[i];
    const secondPos = preferences[firstPos];
    const thirdPos = preferences[secondPos];

    const isRealTriangle = thirdPos == i;
    const isNotSelfLove = firstPos != i && 
                          secondPos != firstPos &&
                          thirdPos != secondPos;
                          
    if(isRealTriangle && isNotSelfLove){
      count++;      
    }
  }

  return count / 3;
};
