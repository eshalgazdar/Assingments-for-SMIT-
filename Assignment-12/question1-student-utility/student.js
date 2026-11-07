
function getIntroduction(name, course) {
    return `My name is ${name} and I am enrolled in ${course}.`;
}

function calculatePercentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}

// Export both functions using CommonJS
module.exports = {
    getIntroduction,
    calculatePercentage
};
