import React from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { observer } from 'mobx-react';

const withModalProvider = (Component) => () =>
(
  <BottomSheetModalProvider>
    <Component />
  </BottomSheetModalProvider>
);

export default withModalProvider;