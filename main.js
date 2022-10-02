import { fetchPeople } from './src/api.js';
import { makePeoplesList } from './src/list.js';

import makeSorter from './src/sorter.js';

const root = document.querySelector('.wrapper');
const form = document.querySelector('.filters');

const start = () => {
    fetchPeople().then(peoples => {
        const peoplesList = makePeoplesList(peoples);
        root.append(peoplesList);

        const handleChange = makeSorter(peoples);
        form.addEventListener('change', handleChange);
    });
};

start();
