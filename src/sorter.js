let peoples = [];

const state = {
    sortMassBy: 'descending',
    sortNameBy: 'descending',
};

export const sortPeoples = peoples => { };
export const filterPeoples = peoples => { };

const formListener = ({ currentTarget }) => {
    const selectedName = Array.from(currentTarget.elements.name).find(({ checked }) => checked);
    const selectedMass = Array.from(currentTarget.elements.mass).find(({ checked }) => checked);

    state.sortNameBy = selectedName.dataset.order;
    state.sortMassBy = selectedMass.dataset.order;
};

export default initData => {
    peoples = initData;

    return formListener;
};
