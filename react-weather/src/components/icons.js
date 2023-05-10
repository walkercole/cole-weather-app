import React from 'react'
function Icons(e) {    
    const rainRegex = /(^.*\srain$)|(^rain\s.*)|(^rain$)|(^.*\srain\s.*$)/i;
    const snowRegex = /(^.*\ssnow$)|(^snow\s.*)|(^snow$)|(^.*\ssnow\s.*$)|(^.*\sfreezing$)|(^freezing\s.*)|(^freezing$)|(^.*\sfreezing\s.*$)/i;

    if (e.e === 'Sunny') {
        return <div className="sunny ml-6 mt-12" />;
    } else if (e.e === 'Clear') {
        return <div className="starry ml-6 mt-12" />;
    } else if (rainRegex.test(e.e)) {
        return <div className="rainy ml-6 mt-12" />;
    } else if (snowRegex.test(e.e)) {
        return <div className="snowy ml-6 mt-12" />;
    }
    else {
        return <div className="cloudy ml-6 mt-12" />;
    }
  
  }
export default Icons