import React, { useRef, useState } from 'react';
import './custom-select.scss';

const CustomSelect = () => {
  const [firstElem, setFirstElem] = useState(0);
  const listItems = [
    'По названию от А до Я',
    'По названию от Я до А',
    'По количеству по возрастанию',
    'По количеству по убыванию',
  ];
  const refList = useRef<HTMLUListElement>(null);
  const refArrow = useRef<HTMLDivElement>(null);
  return (
    <div className="customSelect">
      <span className="customSelect__title">Сортировать</span>
      <div
        className="customSelect__select"
        onClick={() => {
          refList!.current!.classList.toggle('customSelect__list_clicked');
          refArrow!.current!.classList.toggle('customSelect__arrow_clicked');
        }}
      >
        <ul ref={refList} className="customSelect__list">
          {listItems.map((el, i) => (
            <li
              key={i}
              style={{
                order: firstElem === i ? -1 : 0,
                background: firstElem === i ? 'transparent' : '',
              }}
              onClick={() => setFirstElem(i)}
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