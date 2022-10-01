const formatDate = stringDate => {
    const date = new Date(stringDate);
    return new Intl.DateTimeFormat('en-US').format(date);
};

const makePersonHtml = person => {
    const li = document.createElement('li');

    li.innerHTML = `
        <h2>Name:${person.name};</h2>
        <p>Mass:${person.mass};</p>
        <p>Date:${formatDate(person.created)};</p>
    `;
    return li;
};

export const makePeoplesList = peoples => {
    const list = document.createElement('ul');
    const domElements = peoples.map(makePersonHtml);
    list.append(...domElements);

    return list;

};
