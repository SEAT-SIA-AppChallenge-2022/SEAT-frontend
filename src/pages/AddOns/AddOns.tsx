import React, { useEffect, useState } from 'react';

import PageWithHeader from '@components/PageWithHeader';
import OptionsDropdown from '@components/OptionsDropdown';
import TopNavigationBar from '@components/TopNavigationBar';
import AttractionCard from '@components/AttractionCard';
import BackButton from '@components/BackButton';
import Option from '@components/OptionsDropdown/Option';
import Button from '@components/Button';
import { getAllAttractions, setAllAttractions, getChosenAttractions } from '@/store/attractions/attractionSlice';

import { navigationStates, attractions } from '@/constants/constants';
import { dummyAttractions } from '@/constants/dummyData';
import { AttractionCategory } from '@/types/attractions/attractions';
import { IonFooter } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';

type AttractionOption = {
  id: number;
  option: AttractionCategory;
};

const attractionTypes: AttractionOption[] = [
  { id: 1, option: attractions.all },
  { id: 2, option: attractions.activities },
  { id: 3, option: attractions.accommodations },
  { id: 4, option: attractions.dining },
  { id: 5, option: attractions.tours },
];

const AddOns: React.FC = () => {
  const dispatch = useDispatch();
  const [attractionOptions] = useState<AttractionOption[]>(attractionTypes);
  const [selected, setSelected] = useState<AttractionOption>(attractionOptions[0]);
  const allAttractions = useSelector(getAllAttractions);
  const chosenAttractions = useSelector(getChosenAttractions);

  useEffect(() => {
    dispatch(setAllAttractions(dummyAttractions));
  });

  return (
    <>
      <PageWithHeader>
        <TopNavigationBar state={navigationStates.pickAttractions} />
        <div className='grid grid-cols-1 h-full w-screen'>
          <div className='z-20'>
            <BackButton backRoute='' className='pt-5 pl-8' />
            <div className='w-full px-10'>
              <h1 className='font-bold text-3xl'>Escape the Ordinary</h1>
              <p className='text-base'>Recommendations curated for you</p>

              <OptionsDropdown currentState={selected.option} className='mt-8'>
                {attractionOptions
                  .filter(attraction => attraction.option !== selected.option)
                  .map(attraction => (
                    <Option onClick={() => setSelected(attraction)} key={attraction.id}>
                      {attraction.option}
                    </Option>
                  ))}
              </OptionsDropdown>
            </div>
            {allAttractions &&
              allAttractions
                .filter(attraction => (selected.option !== attractions.all ? attraction.category === selected.option : true))
                .map(attraction => (
                  <AttractionCard
                    key={attraction.id}
                    id={attraction.id}
                    className='mt-8'
                    title={attraction.title}
                    imgUrl={attraction.imgUrl}
                    price={attraction.price}
                    rating={attraction.rating}
                  />
                ))}
            <div className='w-full p-16'></div>
          </div>
        </div>
        <IonFooter className='px-4 flex items-center z-40 fixed bottom-0 h-24 bg-transparentGrey'>
          <Button badge={chosenAttractions?.length} className='w-full'>
            Itinerary Overview
          </Button>
        </IonFooter>
      </PageWithHeader>
    </>
  );
};

export default AddOns;
