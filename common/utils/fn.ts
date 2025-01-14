// sleep current thread for millisecond: ms
function sleep(ms: number) {
    var unixtime_ms = new Date().getTime();
    while(new Date().getTime() < unixtime_ms + ms) {}
}


export {sleep}