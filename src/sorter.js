let peoples = [];

const state = {
    sortNameBy: 'descending',
    sortMassBy: 'descending',
    filterGenderBy: 'all',
};

const getDatasetValue = (elements, key) => {
    const checked = Array.from(elements).find(({ checked }) => checked);

    return checked.dataset[key];
};

export const sortPeoples = peoples => {
    const sliced = peoples.slice();
    const runSorting = (a, b) => a.mass - b.mass;

    if (state.sortMassBy === 'descending') {
        sliced.sort(runSorting)
    } else {
        sliced.sort((a, b) => runSorting(b, a));
    }
    return sliced;
};
export const filterPeoples = peoples => {
    if (state.filterGenderBy === 'all') {
        return peoples;
    }
    return peoples.filter(({ gender }) => gender === state.filterGenderBy);
};

const formListener = ({ currentTarget }) => {
    const selectedName = getDatasetValue(currentTarget.elements.name, 'order');
    const selectedMass = getDatasetValue(currentTarget.elements.mass, 'order');
    const selectedGender = getDatasetValue(currentTarget.elements.gender, 'gender');

    state.sortNameBy = selectedName;
    state.sortMassBy = selectedMass;
    state.filterGenderBy = selectedGender;

    console.log({ peoples });

    const sorted = sortPeoples(peoples);
    const filtered = filterPeoples(sorted);
    console.log({ filtered });
};

export default initData => {
    peoples = initData;

    return formListener;
};
