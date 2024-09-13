import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainContainer from './MainContainer';
import {FormProvider} from './context/FormProvider';

export default function App() {
  return (
    <FormProvider>
      <MainContainer />
    </FormProvider>
  );
}
