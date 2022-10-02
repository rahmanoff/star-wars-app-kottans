const formatDate = stringDate => {
    const date = new Date(stringDate);
    return new Intl.DateTimeFormat('en-US').format(date);
};

const makePersonHtml = ({ name, mass, created, gender, starships }) => {
    const li = document.createElement('li');
    li.classList.add('peoples-list');
    // li.className = 'peoples-list';

    li.innerHTML = `
        <h2>Name: ${name};</h2>
        <p>Mass: ${mass};</p>
        <p>Gender: ${gender};</p>
        <p>Starships: ${starships.map(({ name }) => name).join(', ')}</p>
        <p>Date: ${formatDate(created)};</p>
    `;
    return li;
};

export const makePeoplesList = peoples => {
    const list = document.createElement('ul');
    const domElements = peoples.map(makePersonHtml);
    list.append(...domElements);

    return list;

};
