
console.log('start');

var arr = [[2,2,2,2],
           [4,4,2,0],
           [2,8,2,16],
           [0,2,0,2]];


var table = document.getElementById('playground');

var tableRow = table.getElementsByTagName('tr');
console.log(tableRow);
for(var row=0; row<tableRow.length;  row++){
//    console.log('a:',row);
    var td = tableRow[row].getElementsByTagName('td');
        for(var i in td){
            if(arr[row][i]!=0){
                td[i].innerHTML = arr[row][i];    
            }else{
                td[i].innerHTML = "";    
            }
        }   

}





console.log('arr before',arr);


function moveLeft(){
    
    var dimen = arr.length;
    var start = 0;
    var end = dimen-1;
    
    for(var i=0; i<dimen; i++){
        var arrRow = arr[i];
            
        console.log('move left: ', arrRow);
        arrRow = move(arrRow,start,end);
        console.log('arr after arrange: ',arrRow);
        console.log('\n');
    }
    
    updateTable();
}


function moveRight(){
    
    var dimen = arr.length;
    var start = dimen-1;
    var end = 0;
    
    for(var i=0; i<dimen; i++){
        var arrRow = arr[i];
            
        console.log('move left: ', arrRow);
        arrRow = move(arrRow,start,end);
        console.log('arr after arrange: ',arrRow);
        console.log('\n');
    }
    updateTable();
}


function moveUp(){
    var dimen = arr.length;
    var start = 0;
    var end = dimen-1;
    
    for(var col=0; col<dimen; col++){
        var arrRow = [];
        for(var row=0; row<dimen; row++){
            arrRow.push(arr[row][col]);
        }
        console.log('move left: ', arrRow);
        arrRow = move(arrRow,start,end);
        
        for(var row=0; row<dimen;row++){
            arr[row][col]=arrRow[row];
        }
        
        console.log('arr after arrange: ',arrRow);
        console.log('\n');
    }
    updateTable();
}

function moveDown(){
    var dimen = arr.length;
    var start = dimen-1;
    var end = 0;
    
    for(var col=0; col<dimen; col++){
        var arrRow = [];
        for(var row=0; row<dimen; row++){
            arrRow.push(arr[row][col]);
        }
        console.log('move left: ', arrRow);
        arrRow = move(arrRow,start,end);
        
        for(var row=0; row<dimen;row++){
            arr[row][col]=arrRow[row];
        }
        
        console.log('arr after arrange: ',arrRow);
        console.log('\n');
    }
    updateTable();
}


function move(arrSingle, start, end){
    
    var arrRow = arrSingle;
    var start = start;
    var end = end;
    var inc;
    
    if(start<end){
        var lastNum=-1;
        var lastNumIndex;

        //scan
        for(var a=start; a<=end; a++){
            if(arrRow[a]!=0){
                if(lastNum!=-1){
                    if(arrRow[a]==lastNum){
                        //merge part
                        arrRow[lastNumIndex]+=arrRow[a];
                        arrRow[a]=0;
                        lastNum = -1;
                    }else{
                        lastNum=arrRow[a];
                        lastNumIndex=a;    
                    }
                }else{
                    lastNum=arrRow[a];
                    lastNumIndex=a;
                }
            }
        }

        console.log('from move after scan: ',arrRow);


        for(var a=start; a<=end; a++){
            if(arrRow[a]==0){
                for(var b=start; b<=end; b++){
                    if(b>a){
                        if(arrRow[b]!=0){
                            arrRow[a] = arrRow[b];
                            arrRow[b]=0;
                            break;
                        }
                    }
                }       
            }
        }

        console.log('from move after arrange: ',arrRow);  
    }else{
        console.log('condition 1');
        var lastNum=-1;
        var lastNumIndex;

        //scan
        for(var a=start; a>=end; a--){
            if(arrRow[a]!=0){
                if(lastNum!=-1){
                    if(arrRow[a]==lastNum){
                        //merge part
                        arrRow[lastNumIndex]+=arrRow[a];
                        arrRow[a]=0;
                        lastNum = -1;
                    }else{
                        lastNum=arrRow[a];
                        lastNumIndex=a;    
                    }
                }else{
                    lastNum=arrRow[a];
                    lastNumIndex=a;
                }
            }
        }

        console.log('from move after scan: ',arrRow);


        for(var a=start; a>=end; a--){
            if(arrRow[a]==0){
                for(var b=start; b>=end; b--){
                    if(b<a){
                        if(arrRow[b]!=0){
                            arrRow[a] = arrRow[b];
                            arrRow[b]=0;
                            break;
                        }
                    }
                }       
            }
        }

        console.log('from move after arrange: ',arrRow);  
    }
    
          
    return arrRow;
}


function updateTable(){
    for(var row in tableRow){
        console.log(tableRow[row]);
        var td = tableRow[row].getElementsByTagName('td');
            for(var i in td){
                if(arr[row][i]!=0){
                    td[i].innerHTML = arr[row][i];    
                }else{
                    td[i].innerHTML = "";    
                }
                
            }
    }
}




function generateNewNum(){
    var emptyIndices = [];
    console.log('hello');
//    arr.length;
    console.log('hello: ',arr.length)
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length; j++){
            if(arr[i][j]==0){
                var temp = arr.length*i+j;
                emptyIndices.push(temp);
            }
        }
    }
    
    console.log('empty',emptyIndices);
}

generateNewNum();





