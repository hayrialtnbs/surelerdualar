import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import withModalProvider from './withModalProvider';

export const FooterNote = () => {
    //#region state
    const [enablePanDownToClose, setEnablePanDownToClose] = useState(true);
    const [enableDismissOnClose, setEnableDismissOnClose] = useState(true);
    //#endregion

    // refs
    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    //#region callbacks
    const handleChange = useCallback((index) => {
        // eslint-disable-next-line no-console
        console.log('index', index);
    }, []);
    const handleDismiss = useCallback(() => {
        // eslint-disable-next-line no-console
        console.log('on dismiss');
    }, []);


    const handleClosePress = useCallback(() => {
        bottomSheetRef.current?.close();
    }, []);

    const handlePresentPress = useCallback(() => {
        bottomSheetRef.current?.present();
    }, []);

    return (
        <View style={styles.container}>
            <Button title="Present Modal" onPress={handlePresentPress} />
            <BottomSheetModal
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                enablePanDownToClose={enablePanDownToClose}
                enableDismissOnClose={enableDismissOnClose}
                onDismiss={handleDismiss}
                onChange={handleChange}
            >
                <Text style={{ color: 'black' }}> Bu bir modal </Text>
                <Button title="Close" onPress={handleClosePress} />

            </BottomSheetModal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
});

export default withModalProvider(FooterNote);