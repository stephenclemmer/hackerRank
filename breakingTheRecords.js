function breakingRecords(scores) {
    let minimum = scores[0];
    let maximum = scores[0];
    let minCount = 0;
    let maxCount = 0;
    let answer = [];
    
    for (let i = 1; i < scores.length; i++){
        if (scores[i] > maximum){
            maxCount++;
            maximum = scores[i];
        }
        if (scores[i] < minimum){
            minCount++
            minimum = scores[i];
        }
    }
    
    answer.push(maxCount);
    answer.push(minCount);
    
    return answer;
}