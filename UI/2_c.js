import { Button, TextInput } from 'react-native-web';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Ui2c() {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['rgba(59, 59, 152, 1)', 'rgba(196, 196, 196, 0)']} style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.header}>
                        PASSWORD <br />
                        GENERATOR
                    </View>
                    <View style={styles.showPassword}></View>
                    <View style={styles.wrapContent}>
                        <View style={styles.passwordLength}>
                            <Text style={styles.lbtPasswordLength}>Password length</Text>
                            <TextInput style={styles.inpPasswordLength} />
                        </View>
                        <View style={styles.lower}>
                            <View style={styles.passwordLength}>
                                <Text style={styles.lbtPasswordLength}>Include lower case letters</Text>
                                <TextInput style={styles.inpLower} />
                            </View>
                        </View>
                        <View style={styles.higher}>
                            <View style={styles.passwordLength}>
                                <Text style={styles.lbtPasswordLength}>Include upcase letters</Text>
                                <TextInput style={styles.inpLower} />
                            </View>
                        </View>
                        <View style={styles.number}>
                            <View style={styles.passwordLength}>
                                <Text style={styles.lbtPasswordLength}>Include number</Text>
                                <TextInput style={styles.inpLower} />
                            </View>
                        </View>
                        <View style={styles.specialSymbol}>
                            <View style={styles.passwordLength}>
                                <Text style={styles.lbtPasswordLength}>Include special symbol</Text>
                                <TextInput style={styles.inpLower} />
                            </View>
                        </View>
                    </View>
                    <View styles={styles.btnGeneratePassword}>
                        <Button title="GENERATE PASSWORD" style={styles.btnGeneratePassword} />
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}

export default Ui2c;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    wrapper: {
        width: 322,
        height: 605,
        borderRadius: 15,
        backgroundColor: 'rgba(35, 35, 91, 1)',
        margin: 'auto',
    },
    header: {
        width: 181,
        height: 64,
        fontSize: 25,
        fontWeight: 700,
        color: 'rgba(255, 255, 255, 1)',
        marginLeft: 85,
        marginTop: 25,
        marginBottom: 25,
    },
    showPassword: {
        width: 297,
        height: 55,
        backgroundColor: 'rgba(21, 21, 55, 1)',
        margin: 'auto',
        marginTop: 0,
        marginBottom: 40,
    },
    wrapContent: {
        width: 297,
        alignItems: 'center',
    },
    passwordLength: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    lbtPasswordLength: {
        fontSize: 20,
        fontWeight: 700,
        color: 'rgba(255, 255, 255, 1)',
        paddingRight: 10,
    },
    inpPasswordLength: {
        width: 118,
        height: 33,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    inpLower: {
        width: 25,
        height: 25,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    btnGeneratePassword: {
        width: 269,
        height: 55,
        color: 'white',
        backgroundColor: 'rgba(59, 59, 152, 1)',
    },
});
