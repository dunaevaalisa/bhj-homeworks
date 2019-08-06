const poleTitle = document.querySelector('.poll__title'),
                    poleAnswers = document.querySelector('.poll__answers');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', handler);

function handler() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        
        const pole = JSON.parse(xhr.response);

        setPoleTitle(pole);
        setPoleAnswers(pole);

        return pole;
    };
};

function setPoleTitle(pole) {
    poleTitle.textContent = pole.data.title;
};

function setPoleAnswers(pole) {
    for (const answer of pole.data.answers) {
        const html = `<button class="poll__answer">
                        ${answer}
                    </button>`;

        poleAnswers.insertAdjacentHTML('afterbegin', html);
    };
};

poleAnswers.addEventListener('click', (e) => {
    if (!e.target.classList.contains('poll__answer')) return;

    alert('Спасибо, ваш голос засчитан!');
    getAnswerStatistics(e.target.textContent.trim());
});

function getAnswerStatistics(answer) {

    const pole = handler(),
            answerID = pole.data.answers.indexOf(answer);

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
    xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
    xhr.send(`vote=${pole.id}&answer=${answerID}`);

    xhr.addEventListener('readystatechange', () => {

        if (xhr.readyState === 4 && xhr.status === 200) {

            const stats = JSON.parse(xhr.response).stat;

            cleanUpPoleAnswers();
            displayAnswerStatistics(stats);
        };
    });
};

function displayAnswerStatistics(stats) {

    for ( const stat of stats ) {
        const statPercent = (stat.votes * 100 / getTotalVoteCount(stats)).toFixed(2);
        const html = `<div>
                        ${stat.answer}:
                        <b>${statPercent}%</b>
                    </div>`;

        poleAnswers.insertAdjacentHTML('afterbegin', html)
    }; 
};

function getTotalVoteCount(stats) {
    let allVotes = 0;
    stats.forEach(stat => allVotes += stat.votes);
    return allVotes;
};

function cleanUpPoleAnswers() {
    poleAnswers.innerHTML = '';
};
