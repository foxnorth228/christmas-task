import { IChangeFilter, IFilter, filterPosOrUndefined } from '@services/filterTypes';

function filterReducer(filter: IFilter, { section, position }: IChangeFilter) {
  let filterSection = filter[section];
  const posCurrentValue: filterPosOrUndefined = Object.entries(filterSection).find(
    (el) => el[0] === position
  );
  if (posCurrentValue !== undefined) {
    filterSection = {
      ...filterSection,
      [position]: !posCurrentValue[1],
    };
  }
  return {
    ...filter,
    [section]: filterSection,
  };
}

export default filterReducer;
