function dayDictionary(dictionary){

    // this will be our ans returned after filling.
    var weekday = {'Mon' : null, 'Tue' : null, 'Wed' : null, 'Thu' : null, 'Fri' : null, 'Sat' : null, 'Sun' : null};
    // to store the value for particular days and fill every value null.
    var value = new Array(7).fill(null);
    // traverse the dictionary and store the value to my array
    for (var key in dictionary){
        if( dictionary.hasOwnProperty(key) ) {
            var day = new Date(key);
            var index = day.getDay(day);
            if(index-1<0)
                index = index + 7;
            if(value[index-1]==null)
                value[index-1] = dictionary[key];
            else
                value[index-1]+=dictionary[key];
        }
    }
    // initialize the variables.
    var flag = 0, start = -1, end = -1;
    // filling the missing elements of the array.
    for(var i=1;i<6;i++){

        // getting the start and end of the missing patch so
        // that we can distribute the numbers equally.
        if(value[i] == null && flag ==0){
            start = i;
            flag = 1;
        }
        if(value[i] == null && value[i+1]!=null){
            end = i;
            flag = 0;
        }

        // after we get the start and end of a missing patch 
        // we find the difference between the missing patch's 
        // previous and next number and divide it by number of 
        // elements+1 to get the lineNumber.
        if(start!=-1 && end!=-1){
            var space = end - start + 2;
            var diff = value[end+1]-value[start-1];
            var lineNumber = Math.round(diff/space);
            for(var j=start;j<=end;j++){
                value[j]=value[j-1]+lineNumber;
            }
            start=-1;
            end=-1;
        }
    }
    // store all the value in my array to the ans dictionary.
    var k =0;
    for (var key in weekday){
        weekday[key] = value[k++];
    }
    return weekday;
}
module.exports = dayDictionary;