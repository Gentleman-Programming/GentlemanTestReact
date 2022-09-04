import { People } from '@/data';
import { addPeople } from '@/redux/states';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PeopleTable } from './components';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return <PeopleTable />;
};

export default Home;
