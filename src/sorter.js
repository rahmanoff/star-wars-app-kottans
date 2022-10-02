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

export const sortPeoples = peoples => { };
export const filterPeoples = peoples => { };

const formListener = ({ currentTarget }) => {
    const selectedName = getDatasetValue(currentTarget.elements.name, 'order');
    const selectedMass = getDatasetValue(currentTarget.elements.mass, 'order');
    const selectedGender = getDatasetValue(currentTarget.elements.gender, 'gender');
    console.log({ selectedName, selectedMass, selectedGender });
};

export default initData => {
    peoples = initData;

    return formListener;
};
