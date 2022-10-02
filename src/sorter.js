let peoples = [];

const state = {
    sortMassBy: 'descending',
    sortNameBy: 'descending',
};

export const sortPeoples = peoples => { };
export const filterPeoples = peoples => { };

const formListener = ({ currentTarget }) => {
    const selectedMass = Array.from(currentTarget.elements.mass).find(({ checked }) => checked);
    state.sortMassBy = selectedMass.dataset.order;
    console.log(state);
};

const init = initData => {
    peoples = initData;

    return formListener;
}

export default init;