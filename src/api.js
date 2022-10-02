const getData = url =>
    fetch(url).then(res => {
        if (res.ok) {
            return res.json()
        };
        throw new Error(res.statusText);
    });

export const fetchPeople = () =>
    getData('https://swapi.dev/api/people/').then(({ results }) => {
        return Promise.all(
            results.map(person =>
                fetchStarships(person.starships).then(starships => ({
                    ...person,
                    starships,
                })))
        );
    });

export const fetchStarships = urls => Promise.all(urls.map(getData));
