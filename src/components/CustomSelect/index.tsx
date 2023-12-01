import React, { useCallback, useRef } from 'react';
import './style.scss';
import { useFilterChangeValue } from '@src/store/slices/filterSlice/hooks';
import config from './config';

const CustomSelect = () => {
  const [filter, setFilter] = useFilterChangeValue();

  const refList = useRef<HTMLUListElement>(null);
  const refArrow = useRef<HTMLDivElement>(null);

  const onClickList = useCallback(() => {
    if (refList.current === null || refArrow.current === null) {
      return;
    }
    refList.current.classList.toggle('customSelect__list_clicked');
    refArrow.current.classList.toggle('customSelect__arrow_clicked');
  }, []);

  const onClickItem = useCallback(
    (i: number) => setFilter({ section: 'sort', value: i }),
    [setFilter]
  );
  return (
    <div className="customSelect">
      <span className="customSelect__title">Сортировка</span>
      <div className="customSelect__select" onClick={onClickList}>
        <ul ref={refList} className="customSelect__list">
          {config.listItems.map((el, i) => (
            <li
              key={i}
              onClick={() => onClickItem(i)}
              style={{ order: filter.sort === i ? -1 : 0 }}
              className="customSelect__item"
            >
              {el}
            </li>
          ))}
        </ul>
        <div ref={refArrow} className="customSelect__arrow"></div>
      </div>
    </div>
  );
};

export default CustomSelect;
