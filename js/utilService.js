'use strict';

function fromTimeStempToDate(timestemp) {
    var time = new Date(timestemp).toLocaleTimeString()
    if (!time) return;
    return time
}