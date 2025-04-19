function calculateOverallPercentage() {
    const english = parseInt(document.getElementById('english').value);
    const math = parseInt(document.getElementById('math').value);
    const science = parseInt(document.getElementById('science').value);
    const ssc = parseInt(document.getElementById('ssc').value);
    const kannada = parseInt(document.getElementById('kannada').value);
    const hindi = parseInt(document.getElementById('hindi').value);

    if (isNaN(english) || isNaN(math) || isNaN(science) || isNaN(ssc) || isNaN(kannada) || isNaN(hindi)) {
        document.getElementById('overall-result').textContent = "Please enter valid marks for all subjects.";
        return;
    }

    const totalMarks = english + math + science + ssc + kannada + hindi;
    const overallPercentage = (totalMarks / (6 * 80)) * 100; // Assuming overall is still based on the final exam weight

    document.getElementById('overall-result').textContent = `Overall Percentage: ${overallPercentage.toFixed(2)}%`;
}

function calculateSubjectPercentage() {
    const subject = document.getElementById('subject-select-year').value;
    const pt1 = parseInt(document.getElementById('pt1').value) || 0;
    const hy = parseInt(document.getElementById('hy').value) || 0;
    const pt2 = parseInt(document.getElementById('pt2').value) || 0;
    const ae = parseInt(document.getElementById('ae').value) || 0;

    // PT1: 10, HY: 60, PT2: 10, AE: 80
    const totalPossibleMarks = (pt1 !== 0 ? 1 : 0) * 10 + (hy !== 0 ? 1 : 0) * 60 + (pt2 !== 0 ? 1 : 0) * 10 + (ae !== 0 ? 1 : 0) * 80;
    const obtainedMarks = pt1 + hy + pt2 + ae;

    if (totalPossibleMarks === 0 && obtainedMarks === 0) {
        document.getElementById('subject-result').textContent = `Please enter marks for ${subject}.`;
        return;
    }

    const subjectPercentage = (obtainedMarks / totalPossibleMarks) * 100;

    document.getElementById('subject-result').textContent = `${subject} Percentage (Year): ${subjectPercentage.toFixed(2)}%`;
}

function calculateAndDisplayOverallAverages() {
    const english = parseInt(document.getElementById('english').value) || 0;
    const math = parseInt(document.getElementById('math').value) || 0;
    const science = parseInt(document.getElementById('science').value) || 0;
    const ssc = parseInt(document.getElementById('ssc').value) || 0;
    const kannada = parseInt(document.getElementById('kannada').value) || 0;
    const hindi = parseInt(document.getElementById('hindi').value) || 0;

    const totalSubjects = 6;
    const averageEnglish = english;
    const averageMath = math;
    const averageScience = science;
    const averageSsc = ssc;
    const averageKannada = kannada;
    const averageHindi = hindi;
    const overallAverage = (english + math + science + ssc + kannada + hindi) / totalSubjects;

    const resultsDiv = document.getElementById('overall-average-results');
    resultsDiv.innerHTML = `
        <p>Average English Marks: ${averageEnglish.toFixed(2)}</p>
        <p>Average Math Marks: ${averageMath.toFixed(2)}</p>
        <p>Average Science Marks: ${averageScience.toFixed(2)}</p>
        <p>Average Social Science Marks: ${averageSsc.toFixed(2)}</p>
        <p>Average Kannada Marks: ${averageKannada.toFixed(2)}</p>
        <p>Average Hindi Marks: ${averageHindi.toFixed(2)}</p>
        <p><b>Overall Average Marks: ${overallAverage.toFixed(2)}</b></p>
    `;
}

function drawOverallWormGraph() {
    // Get Term 1 Marks
    const englishTerm1 = parseInt(document.getElementById('english-term1').value) || 0;
    const mathTerm1 = parseInt(document.getElementById('math-term1').value) || 0;
    const scienceTerm1 = parseInt(document.getElementById('science-term1').value) || 0;
    const sscTerm1 = parseInt(document.getElementById('ssc-term1').value) || 0;
    const kannadaTerm1 = parseInt(document.getElementById('kannada-term1').value) || 0;
    const hindiTerm1 = parseInt(document.getElementById('hindi-term1').value) || 0;
    const englishTerm1MA = parseInt(document.getElementById('english-term1-ma').value) || 0;
    const englishTerm1SEA = parseInt(document.getElementById('english-term1-sea').value) || 0;
    const mathTerm1MA = parseInt(document.getElementById('math-term1-ma').value) || 0;
    const mathTerm1SEA = parseInt(document.getElementById('math-term1-sea').value) || 0;
    const scienceTerm1MA = parseInt(document.getElementById('science-term1-ma').value) || 0;
    const scienceTerm1SEA = parseInt(document.getElementById('science-term1-sea').value) || 0;
    const sscTerm1MA = parseInt(document.getElementById('ssc-term1-ma').value) || 0;
    const sscTerm1SEA = parseInt(document.getElementById('ssc-term1-sea').value) || 0;
    const kannadaTerm1MA = parseInt(document.getElementById('kannada-term1-ma').value) || 0;
    const kannadaTerm1SEA = parseInt(document.getElementById('kannada-term1-sea').value) || 0;
    const hindiTerm1MA = parseInt(document.getElementById('hindi-term1-ma').value) || 0;
    const hindiTerm1SEA = parseInt(document.getElementById('hindi-term1-sea').value) || 0;

    // Calculate Total Marks for Term 1
    const totalMarksTerm1 = (
        englishTerm1 + englishTerm1MA + englishTerm1SEA +
        mathTerm1 + mathTerm1MA + mathTerm1SEA +
        scienceTerm1 + scienceTerm1MA + scienceTerm1SEA +
        sscTerm1 + sscTerm1MA + sscTerm1SEA +
        kannadaTerm1 + kannadaTerm1MA + kannadaTerm1SEA +
        hindiTerm1 + hindiTerm1MA + hindiTerm1SEA
    );
    const totalPossibleMarksTerm1 = 6 * 90; // 6 subjects * (80 + 5 + 5)

    // Calculate Overall Percentage for Term 1
    const overallPercentageTerm1 = (totalMarksTerm1 / totalPossibleMarksTerm1) * 100;

    // Get Term 2 Marks
    const englishTerm2 = parseInt(document.getElementById('english-term2').value) || 0;
    const mathTerm2 = parseInt(document.getElementById('math-term2').value) || 0;
    const scienceTerm2 = parseInt(document.getElementById('science-term2').value) || 0;
    const sscTerm2 = parseInt(document.getElementById('ssc-term2').value) || 0;
    const kannadaTerm2 = parseInt(document.getElementById('kannada-term2').value) || 0;
    const hindiTerm2 = parseInt(document.getElementById('hindi-term2').value) || 0;
    const englishTerm2MA = parseInt(document.getElementById('english-term2-ma').value) || 0;
    const englishTerm2SEA = parseInt(document.getElementById('english-term2-sea').value) || 0;
    const mathTerm2MA = parseInt(document.getElementById('math-term2-ma').value) || 0;
    const mathTerm2SEA = parseInt(document.getElementById('math-term2-sea').value) || 0;
    const scienceTerm2MA = parseInt(document.getElementById('science-term2-ma').value) || 0;
    const scienceTerm2SEA = parseInt(document.getElementById('science-term2-sea').value) || 0;
    const sscTerm2MA = parseInt(document.getElementById('ssc-term2-ma').value) || 0;
    const sscTerm2SEA = parseInt(document.getElementById('ssc-term2-sea').value) || 0;
    const kannadaTerm2MA = parseInt(document.getElementById('kannada-term2-ma').value) || 0;
    const kannadaTerm2SEA = parseInt(document.getElementById('kannada-term2-sea').value) || 0;
    const hindiTerm2MA = parseInt(document.getElementById('hindi-term2-ma').value) || 0;
    const hindiTerm2SEA = parseInt(document.getElementById('hindi-term2-sea').value) || 0;

    // Calculate Total Marks for Term 2
    const totalMarksTerm2 = (
        englishTerm2 + englishTerm2MA + englishTerm2SEA +
        mathTerm2 + mathTerm2MA + mathTerm2SEA +
        scienceTerm2 + scienceTerm2MA + scienceTerm2SEA +
        sscTerm2 + sscTerm2MA + sscTerm2SEA +
        kannadaTerm2 + kannadaTerm2MA + kannadaTerm2SEA +
        hindiTerm2 + hindiTerm2MA + hindiTerm2SEA
    );
    const totalPossibleMarksTerm2 = 6 * 90; // 6 subjects * (80 + 5 + 5)

    // Calculate Overall Percentage for Term 2
    const overallPercentageTerm2 = (totalMarksTerm2 / totalPossibleMarksTerm2) * 100;

    // Prepare Data for the Chart
    const labels = ['Term 1', 'Term 2'];
    const data = [overallPercentageTerm1.toFixed(2), overallPercentageTerm2.toFixed(2)];

    const ctx = document.getElementById('overallWormGraph').getContext('2d');

    // Destroy any existing chart to prevent conflicts
    if (window.overallWormChart) {
        window.overallWormChart.destroy();
    }

    window.overallWormChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Overall Performance',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Percentage'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Term'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y + '%';
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

function drawSubjectWormGraph() {
    const selectedSubject = document.getElementById('subject-graph-select').value;

    // Get marks based on the selected subject
    let pt1Marks, hyMarks, pt2Marks, aeMarks;

    switch (selectedSubject) {
        case 'english':
            pt1Marks = parseInt(document.getElementById('pt1').value) || 0;
            hyMarks = parseInt(document.getElementById('hy').value) || 0;
            pt2Marks = parseInt(document.getElementById('pt2').value) || 0;
            aeMarks = parseInt(document.getElementById('ae').value) || 0;
            break;
        case 'math':
            pt1Marks = parseInt(document.getElementById('pt1').value) || 0;
            hyMarks = parseInt(document.getElementById('hy').value) || 0;
            pt2Marks = parseInt(document.getElementById('pt2').value) || 0;
            aeMarks = parseInt(document.getElementById('ae').value) || 0;
            break;
        case 'science':
            pt1Marks = parseInt(document.getElementById('pt1').value) || 0;
            hyMarks = parseInt(document.getElementById('hy').value) || 0;
            pt2Marks = parseInt(document.getElementById('pt2').value) || 0;
            aeMarks = parseInt(document.getElementById('ae').value) || 0;
            break;
        case 'ssc':
            pt1Marks = parseInt(document.getElementById('pt1').value) || 0;
            hyMarks = parseInt(document.getElementById('hy').value) || 0;
            pt2Marks = parseInt(document.getElementById('pt2').value) || 0;
            aeMarks = parseInt(document.getElementById('ae').value) || 0;
            break;
        case 'kannada':
            pt1Marks = parseInt(document.getElementById('pt1').value) || 0;
            hyMarks = parseInt(document.getElementById('hy').value) || 0;
            pt2Marks = parseInt(document.getElementById('pt2').value) || 0;
            aeMarks = parseInt(document.getElementById('ae').value) || 0;
            break;
        case 'hindi':
            pt1Marks = parseInt(document.getElementById('pt1').value) || 0;
            hyMarks = parseInt(document.getElementById('hy').value) || 0;
            pt2Marks = parseInt(document.getElementById('pt2').value) || 0;
            aeMarks = parseInt(document.getElementById('ae').value) || 0;
            break;
        default:
            console.error("Invalid subject selected for graph.");
            return;
    }

    const labels = ['PT1', 'Half-Yearly', 'PT2', 'Annual Exam'];
    const data = [pt1Marks, hyMarks, pt2Marks, aeMarks];

    const ctx = document.getElementById('subjectWormGraph').getContext('2d');

    // Destroy any existing subject chart
    if (window.subjectWormChart) {
        window.subjectWormChart.destroy();
    }

    window.subjectWormChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${selectedSubject} Performance`,
                data: data,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Marks'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Assessment'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// Initialize variables to hold chart instances
window.overallWormChart = null;
window.subjectWormChart = null;