import React from "react";
import {
    ImageBackground,
    StyleSheet,
    StatusBar,
    Dimensions,
    Text, View
} from "react-native";
import { Block, Button, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import nowTheme from "../../constants/Theme";
import Images from "../../constants/Images";

class AgendaIndexScreen extends React.Component {
    render() {
        const { navigation } = this.props;

        return (
            <Block flex style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Block flex center>
                    <ImageBackground source={Images.AgendaInicio} style={{ height, width, zIndex: 1 }} />
                </Block>

                <Block flex space="between" style={styles.padded}>
                    <Block middle row style={styles.cardContainer}>
                        <Block middle style={{paddingHorizontal: 40, paddingVertical: 20}}>
                            <Text style={[styles.title, {paddingBottom: 20}]}>
                                El futuro de la limpieza
                            </Text>

                            <Text style={[styles.subtitle, {paddingBottom: 20}]}>
                                En TAYD ordenamos y limpiamos tu domicilio de manera profesional y segura.
                            </Text>

                            <Text style={[styles.subtitle, {paddingBottom: 30}]}>
                                Nuestros TAYDERS son el mejor equipo capacitado que harán todo.
                            </Text>

                            <Text style={[styles.title, {paddingBottom: 20}]}>
                                ¿Te ayudamos?
                            </Text>

                            <Text style={styles.subtitle}>
                                <Text>Por </Text>
                                <Text style={{ fontWeight: '500' }}>$350.00 </Text>
                                <Text>limpiamos un cuarto, un baño, una cocina (incluye la limpieza de trastes, refrigerador y estufa), sala y comedor.</Text>
                            </Text>
                        </Block>
                    </Block>

                    <Block middle flex space="around" style={{ zIndex: 2 }}>
                        <Button
                            round
                            color={nowTheme.COLORS.BASE}
                            style={styles.button}
                            onPress={() => {}}>
                            <Text style={{ fontFamily: 'trueno-semibold', color: nowTheme.COLORS.WHITE, }} size={14}>
                                AGENDAR
                            </Text>
                        </Button>
                    </Block>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.COLORS.BLACK
    },
    cardContainer: {
        height          : height < 812 ? height * 0.50 : height * 0.50,

        backgroundColor : nowTheme.COLORS.WHITE,
        borderRadius    : 25,
        shadowColor     : nowTheme.COLORS.BLACK,
        shadowOffset    : {
            width: 0,
            height: 4
        },
        shadowRadius    : 8,
        shadowOpacity   : 0.1,
        elevation       : 1,
        overflow        : 'hidden',
    },
    padded: {
        top: 300,
        paddingHorizontal: theme.SIZES.BASE * 2,
        position: 'absolute',
        bottom: theme.SIZES.BASE,
        zIndex: 2
    },
    title: {
        fontFamily: 'trueno-extrabold',
        color: nowTheme.COLORS.SECONDARY,
        fontSize: 32,
        textAlign: 'center',
    },
    subtitle: {
        fontFamily: 'trueno',
        fontSize: 14,
        color: nowTheme.COLORS.SECONDARY,
        textAlign: 'center',
    },
    button: {
        width: width * 0.4,
        height: theme.SIZES.BASE * 2.5,
        borderColor: nowTheme.COLORS.WHITE,
        borderWidth: 1,
        shadowRadius: 0,
        shadowOpacity: 0
    },
});

export default AgendaIndexScreen;
