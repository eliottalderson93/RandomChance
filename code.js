var Q = 25;
function Game(numQ){
    var win = 42;
    while(numQ>0){
        var cur = Math.floor(100*Math.random());
        console.log(cur);
        if (cur == win){
            numQ = Math.floor(numQ+Math.random()*(40)+50);
            return numQ;
        }
        else{
            numQ = numQ-1;
        }
    }
    if (numQ <= 0){
        return 0;
    }
}

Game(Q);