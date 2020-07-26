import React from 'react';
import { Image, StyleSheet, StatusBar, Dimensions, Platform, View, DatePickerAndroid, DatePickerIOS, TimePickerAndroid } from 'react-native';
import { Block, Button, Text, theme, Toast } from 'galio-framework';
import { Icon } from '../../components';
import { HeaderHeight } from '../../constants/utils';

const { height, width } = Dimensions.get('screen');
import { Images, nowTheme } from '../../constants/';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AgendaFechaScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDateTime    : false,
            isIphone        : Platform.OS === 'ios',
            date            : new Date(),
            time            : new Date(),
            weekDay         : ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            months          : ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
        };
    }

    _handleNextAction() {
        this.props.navigation.navigate("AgendaInsumos");
    }

    _openDatePicker = async() => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: this.state.date,
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                this.setState({date : new Date(year, month, day)});
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    _dateFormat() {
        let date    = this.state.date;
        let week    = this.state.weekDay[date.getDay()];
        let month   = this.state.months[date.getMonth()];

        return `${week} ${date.getDate()}/${month}/${date.getFullYear()}`;
    }

    _timeFormat() {
        let time    = this.state.time;
        let type    = "a.m.";
        let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
        let hour    = time.getHours();

        if(hour > 12) {
            hour    -= 12;
            type    = "p.m.";
        }

        return `${hour}:${minutes} ${type}`;
    }

    _openTimePicker = async () => {
        try {
            const { action, hour, minute } = await TimePickerAndroid.open({
                hour    : this.state.time.getHours(),
                minute  : this.state.time.getMinutes(),
                is24Hour: false
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                this.setState({ time: new Date(2020, 4, 4, hour, minute) });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    render() {
        const { showDateTime, isIphone } = this.state;
        return (
            <Block flex style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Block flex>
                    <Image source={Images.AgendaFecha} style={styles.image} />
                </Block>

                <Block flex style={{ backgroundColor: 'white' }}>
                    <Block space="between" style={styles.padded}>
                        <Block>
                            <Text style={[styles.title, {paddingTop: 30}]}> Programa tu cita </Text>
                            <Text style={[styles.subtitle, {paddingVertical: 10}]}> Selecciona el día y hora del servicio </Text>

                            <View style={[styles.titleBorder, { flexDirection: 'row', justifyContent: 'space-between'}]}>
                                <Text style={styles.subtitle}>Agendar día</Text>
                                <TouchableOpacity onPress={() => this._openDatePicker()}>
                                    <Text style={styles.datetimeText}>{this._dateFormat()}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.titleBorder, { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15}]}>
                                <Text style={styles.subtitle}>Selecciona hora</Text>
                                <TouchableOpacity onPress={() => this._openTimePicker()}>
                                    <Text style={styles.datetimeText}>{this._timeFormat()}</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={[styles.title, { paddingTop: 20 }]}> Domicilio </Text>
                            <Text style={[styles.subtitle, { paddingTop: 10 }]}>Confirma el domicilio a limpiar</Text>

                            <Block row style={{ width: width - theme.SIZES.BASE * 4, paddingVertical: 15, paddingHorizontal: 25, justifyContent: 'center', alignContent: 'center' }}>
                                <Image source={require('../../assets/icons/T-casa.png')} style={{ width: 50, height: 50 }} />

                                <Text style={[styles.subtitle]} color={nowTheme.COLORS.SECONDARY}>
                                    Av. Paseo Tabasco 1234567 C.P. 20990 Esq. Av. Ruiz Cortines
                                </Text>
                            </Block>

                            <Block middle style={{ width: width - theme.SIZES.BASE * 4 }}>
                                <Button
                                    round
                                    color={nowTheme.COLORS.BASE}
                                    style={styles.createButton}
                                    onPress={() => this._handleNextAction()}>
                                    <Text style={{ fontFamily: 'montserrat-bold' }} size={14} color={nowTheme.COLORS.WHITE}>
                                        SIGUIENTE
                                    </Text>
                                </Button>
                            </Block>
                        </Block>
                    </Block>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? - HeaderHeight : 0,
    },
    padded: {
        paddingHorizontal: theme.SIZES.BASE * 2,
        bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3,
    },

    image: {
        width       : width,
        height      : 350,
        marginTop   : 70
    },
    title: {
        fontFamily: 'trueno-extrabold',
        paddingHorizontal: 20,
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
    },
    titleBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#E3E3E3'
    },
    subtitle: {
        fontFamily: 'trueno',
        textAlign: 'center',
        fontSize: 16,
        paddingBottom: 15,
    },
    datetimeText: {
        fontFamily: 'trueno-extrabold',
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: '700',
        color: nowTheme.COLORS.BASE
    },
    itemContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'baseline'
    },
    icons: {
        marginRight: 20,
        width: 25,
        height: 25,
    },
    labels: {
        fontFamily: 'trueno-semibold',
        fontSize: 16,
        width: 150,
        marginRight: 20,
    },

    createButton: {
        width: width * 0.5,
        marginTop: 10,
        marginBottom: 10
    },
});