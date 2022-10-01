import { fetchPeople } from './src/api.js';
import { makePeoplesList } from './src/list.js';

const root = document.getElementById('i-am-root');

const start = () => {
    fetchPeople().then(peoples => {
        const peoplesList = makePeoplesList(peoples);
        root.append(peoplesList);
    });
};

start();
