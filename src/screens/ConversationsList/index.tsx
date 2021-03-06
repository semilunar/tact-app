import React, { useEffect } from 'react';
import { Colors } from '@app/theme';
import { SafeAreaView, StyleSheet, FlatList, View } from 'react-native';
import ConversationListItem from './components/ConversationListItem';
import Contacts from 'react-native-contacts';
// import DragTabs from '@app/components/_organisms/DragTabs';
import { useDispatch, useSelector } from '@app/hooks';
import { setContacts } from '@app/store/contacts/actions';
import HeaderMain from '@app/components/_molecules/HeaderMain';
import SquareButton from '@app/components/_atoms/SquareButton';
import Switcher from '@app/components/_molecules/Switcher';
import InfoBanner from '@app/components/_molecules/InfoBanner';
import { ScreenNames } from '@app/types';
import { useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();

const ConversationsList = () => {
  const navigation = useNavigation();
  const contacts = useSelector((state) => state.contacts.list);
  const dispatch = useDispatch();
  useEffect(() => {
    Contacts.getAll().then((data) => {
      if (Array.isArray(data)) {
        dispatch(setContacts(data));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderConversation = ({ item }: any) => (
    <ConversationListItem item={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMain />

      <View style={{ marginHorizontal: 20 }}>
        <SquareButton icon="👤" onPress={() => navigation.navigate(ScreenNames.ACCOUNT)} />

        <Switcher />
      </View>

      {/* <ScrollView> */}
      {/* Tabs: */}
      {/*  {contacts.length > 0 && <DragTabs />} */}
      {/* <DragToSort /> */}
      {/* <Chrome /> */}
      {/* </ScrollView> */}

      <FlatList
        data={contacts}
        keyExtractor={(item) => `conversation${item.recordID}`}
        renderItem={renderConversation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BG_GREY,
    flex: 1,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default ConversationsList;
