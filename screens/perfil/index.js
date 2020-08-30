import React from 'react';
import { StyleSheet, Image, Dimensions, Platform } from 'react-native';
import { Block, Text, } from 'galio-framework';

import { Input } from '../../components';
import { Images, nowTheme } from '../../constants';
import Actions from "../../lib/actions";

const { width, height } = Dimensions.get('screen');

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userData    : null,
        name        : '',
        lastname    : '',
        phone       : '',
        email       : ''
    };
  }

  async componentDidMount() {
    await Actions.extractUserData().then((result) => {
         if(result != null) {
             this.setState({
                 userData   : result.user,
                 name       : result.user.info.name,
                 lastname   : result.user.info.last_name,
                 phone      : result.user.info.phone,
                 email      : result.user.email,
            });
         }
    });
}

  render() {
    let { name, lastname, phone, email } = this.state;
    return (
        <Block style={styles.container}>
            <Block center style={styles.cardContainer}>
                <Text style={styles.title} color={nowTheme.COLORS.SECONDARY} size={28}>
                    Sobre mí
                </Text>

                <Block width={width * 0.8}>
                    <Input
                        editable={false}
                        value={name}
                        placeholder="Nombre(s)"
                        placeholderTextColor={nowTheme.COLORS.PLACEHOLDER}
                        color={nowTheme.COLORS.BASE_OPACITY}
                        style={styles.inputs}
                        iconContent={
                            <Image style={styles.inputIcons} source={Images.Icons.Nombre} />
                        }
                    />
                </Block>
                <Block width={width * 0.8}>
                    <Input
                        editable={false}
                        value={lastname}
                        placeholder="Apellido(s)"
                        placeholderTextColor={nowTheme.COLORS.PLACEHOLDER}
                        color={nowTheme.COLORS.BASE_OPACITY}
                        style={styles.inputs}
                        iconContent={
                            <Image style={styles.inputIcons} source={Images.Icons.Apellido} />
                        }
                    />
                </Block>
                <Block width={width * 0.8}>
                    <Input
                        editable={false}
                        value={phone}
                        placeholder="Número telefónico"
                        placeholderTextColor={nowTheme.COLORS.PLACEHOLDER}
                        color={nowTheme.COLORS.BASE_OPACITY}
                        style={styles.inputs}
                        iconContent={
                            <Image style={styles.inputIcons} source={Images.Icons.Telefono} />
                        }
                    />
                </Block>
                <Block width={width * 0.8}>
                    <Input
                        editable={false}
                        value={email}
                        placeholder="Correo electrónico"
                        placeholderTextColor={nowTheme.COLORS.PLACEHOLDER}
                        color={nowTheme.COLORS.BASE_OPACITY}
                        style={styles.inputs}
                        iconContent={
                            <Image style={styles.inputIcons} source={Images.Icons.Correo} />
                        }
                    />
                </Block>
            </Block>

            <Block style={styles.logoContainer}>
                <Image source={Images.TaydLogoGris} style={{height: 30, width: 140, marginTop: 20}} />
            </Block>
        </Block>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: nowTheme.COLORS.BACKGROUND,
        flex: 1,
    },
    cardContainer: {
        width: width * 0.9,
        height: height * 0.45,
        top: 50,
        marginBottom: 45,
        backgroundColor: nowTheme.COLORS.WHITE,
        borderRadius: 25,
        shadowColor: nowTheme.COLORS.BLACK,
        shadowOffset: {
        width: 0,
        height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignSelf: 'center',
        paddingBottom: 30
    },
    title: {
        fontFamily: 'trueno-extrabold',
        textAlign: 'center',
        marginVertical: 20
    },

    inputIcons: {
        marginRight: 25,
        width: 25,
        height: 25,
    },
    inputs: {
        borderWidth: 1,
        borderColor: nowTheme.COLORS.BASE,
        borderRadius: 21.5,
    },
});

export default ProfileScreen;