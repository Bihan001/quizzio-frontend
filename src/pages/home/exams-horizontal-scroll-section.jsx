import { LeftArrow, RightArrow } from './arrows';
import { useState } from 'react';
import ExamDetailsCard2 from 'components/exam-details-card2';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Card, CardContent, Button, Typography } from '@mui/material';

const ExamsHorizontalScrollSection = ({ allData }) => {
  //swipable states===============================

  const elemPrefix = 'test';
  const getId = (index) => `${elemPrefix}${index}`;

  const getItems = () => {
    return allData.map((data, id) => {
      data[id] = id;
      return data;
    });
  };

  const [items, setItems] = useState(getItems);
  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };
  //==============================================

  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    startDate: null,
    examVisibility: null,
    examStatus: null,
  });

  const handleFilterChange = (e) =>
    setSelectedFilters((f) => ({ ...f, [e.target.name]: e.target.value }));
  const hideFilters = () => setShowFilters(false);

  return (
    <ScrollMenu
      style={{
        marginTop: '4rem',
        width: '100vw !important',
        overflow: 'auto',
        whiteSpace: 'nowrap',
        border: '0px solid red',
        display: 'flex',
        alignItems: 'center',
        height: '55rem',
      }}
      LeftArrow={<LeftArrow />}
      RightArrow={<RightArrow />}
      onWheel={onWheel}
    >
      {/*  array.map(()  =>  {}) */}
      {allData &&
        allData.map((Obj, id) => (
          <ExamDetailsCard2
            itemId={id} // NOTE: itemId is required for track items
            title={id}
            key={id}
            onClick={handleClick(id)}
            selected={isItemSelected(id)}
            cardDetails={Obj}
            style={{
              marginBottom: id === 4 ? '0.3rem' : '2rem',
              width: '40rem',
              height: 'fit-content',
              margin: '1rem',
              display: 'inline-block',
              flexShrink: 0,
            }}
            data={{ name: 'asd', email: 'ankur' }}
          />
        ))}
    </ScrollMenu>
  );
};

function onWheel(apiObj, ev) {
  console.log(apiObj, 'sss', ev);
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

export default ExamsHorizontalScrollSection;
