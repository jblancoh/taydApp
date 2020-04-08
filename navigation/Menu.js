import React from 'react';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import Icon from '../components/Icon';
import Images from '../constants/Images';
import { DrawerItem } from '../components/index';

import nowTheme from '../constants/Theme';

const { width } = Dimensions.get('screen');

const Drawer = props => (
  <Block style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
    <Block row style={styles.header}>
      <Image source={Images.ProfilePicture} style={{ borderRadius: 50, height: 60, width: 60, marginRight: 25 }} />
      <Block flex>
        <Text style={styles.nameTitle}>Christopher</Text>
        <Text>ejemplo@hotmail.com</Text>
      </Block>
      {/* <Image style={styles.logo} source={Images.Logo} />
      <Block right style={styles.headerIcon}>
        <Icon name="align-left-22x" family="NowExtra" size={15} color={'white'} />
      </Block> */}
    </Block>

    <Block flex>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Text style={styles.sectionTitle}>Cuenta</Text>

        <DrawerNavigatorItems {...props} />

        <Text style={styles.sectionTitle}>Extra</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate('Onboarding')} style={{fontFamily: 'trueno-semibold', paddingTop: 20 }}>
          <DrawerItem {...props} title="Cupones" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Onboarding')} style={{ fontFamily: 'trueno-semibold' }}>
          <DrawerItem {...props} title="Comparte y gana" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Onboarding')} style={{ fontFamily: 'trueno-semibold' }}>
          <DrawerItem {...props} title="Genera ingresos extras" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Onboarding')} style={{ fontFamily: 'trueno-semibold' }}>
          <DrawerItem {...props} title="Cerrar sesión" />
        </TouchableOpacity>
      </ScrollView>
    </Block>

    <Block style={{justifyContent: 'center', alignSelf: 'center', paddingBottom: 30}}>
      <Image source={Images.TaydLogoGris} style={{height: 30, width: 140}} />
    </Block>
  </Block>
);

const Menu = {
  contentComponent: props => <Drawer {...props} />,
  drawerBackgroundColor: '#F7F7F7',
  drawerWidth: width * 0.95,
  contentOptions: {
    activeTintColor: nowTheme.COLORS.SECONDARY,
    inactiveTintColor: nowTheme.COLORS.SECONDARY,
    activeBackgroundColor: 'transparent',
    itemStyle: {
      width: width * 1,
      backgroundColor: 'transparent'
    },
    labelStyle: {
      fontSize: 18,
      marginLeft: 20,
      fontWeight: 'normal'
    },
    itemsContainerStyle: {
      paddingVertical: 16,
      paddingHorizonal: 12,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingHorizontal: 28,
    paddingTop: theme.SIZES.BASE,
    justifyContent: 'center'
  },
  sectionTitle: {
    fontFamily: 'trueno-extrabold',
    fontSize: 32,
    color: nowTheme.COLORS.SECONDARY,
    paddingLeft: 20,
  },
  nameTitle: {
    fontFamily: 'trueno-extrabold',
    fontSize: 24,
    color: nowTheme.COLORS.SECONDARY,
    lineHeight: 29,
  },
  headerIcon: {
    marginTop: -20
  },
  logo: {
    height: 40,
    width: 37
  }
});

export default Menu;
