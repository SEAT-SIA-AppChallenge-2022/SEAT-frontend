import React, { useEffect, useState } from 'react';

import PageWithHeader from '@components/PageWithHeader';
import OptionsDropdown from '@components/OptionsDropdown';
import TopNavigationBar from '@components/TopNavigationBar';
import AttractionCard from '@components/AttractionCard';
import Option from '@components/OptionsDropdown/Option';
import Button from '@components/Button';
import Loading from '@components/Loading';

import { useApi } from '@/api/ApiHandler';
import RecommendationService from '@/api/recommendation/RecommendationService';

import {
  getAllAttractions,
  setAllAttractions,
  getChosenAttractions,
  setRecommendedAttractions,
  getRecommendedAttractions,
} from '@/store/attractions/attractionSlice';
import { dummyAttractions, TRIP_REF } from '@/constants/dummyData';
import Routes from '@/utilities/routes';
import { navigationStates, attractions, attractionTypes } from '@/constants/constants';
import { AttractionOption } from '@/types/attractions/attractions';
import { getCurrentUser } from '@/store/authentication/authSlice';

import { IonFooter } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const AddOns: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(getCurrentUser);

  useEffect(() => {
    if (!currentUser) history.push(Routes.start);
    dispatch(setAllAttractions(dummyAttractions));
  });

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [getRecommendation] = useApi(() => RecommendationService.getRecommendation(currentUser!));

  const [attractionOptions] = useState<AttractionOption[]>(attractionTypes);
  const [selected, setSelected] = useState<AttractionOption>(attractionOptions[0]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const chosenAttractions = useSelector(getChosenAttractions);
  const recommendedAttractions = useSelector(getRecommendedAttractions);

  const getData = async () => {
    setIsLoading(true);
    const req = await getRecommendation();
    if (!req.isSuccess) return;
    const recommendations = req.attractions.map(id => parseInt(id));
    const newRecommendedAttractions = dummyAttractions.filter(attraction => recommendations.includes(attraction.id));

    dispatch(setRecommendedAttractions(newRecommendedAttractions));
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <PageWithHeader>
        <Loading isLoading={isLoading} loadingMessage='Personalising...' />
        <TopNavigationBar state={navigationStates.pickAttractions} />
        <div className='grid grid-cols-1 h-full w-screen'>
          <div className='z-20'>
            <div className='w-full px-10 pt-2'>
              <p className='text-base font-semibold'>Booking Ref: {TRIP_REF}</p>
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
            {recommendedAttractions &&
              recommendedAttractions
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
          <Button onClick={() => history.push(Routes.overview)} badge={chosenAttractions?.length} className='w-full'>
            Itinerary Overview
          </Button>
        </IonFooter>
      </PageWithHeader>
    </>
  );
};

export default AddOns;
