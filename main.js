import { fetchPeople } from './src/api.js';
import { makePeoplesList } from './src/list.js';

import makeSorter from './src/sorter.js';

const wrapper = document.querySelector('.wrapper');
const form = document.querySelector('.filters');

const drawPeoples = peoples => {
    const peoplesList = makePeoplesList(peoples);

    wrapper.innerHTML = '';
    wrapper.append(peoplesList);
};

const start = () => {
    fetchPeople().then(peoples => {
        drawPeoples(peoples);

        const handleChange = makeSorter(peoples, drawPeoples);
        form.addEventListener('change', handleChange);
    });
};

start();
