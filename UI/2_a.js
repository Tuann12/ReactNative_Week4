import { StyleSheet, Text, View, Pressable, TextInput, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Eye from '../assets/eye.png';
import Lock from '../assets/lock.png';
import User from '../assets/user.png';

function Ui2a() {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['rgba(251, 203, 0, 1)', 'rgba(191, 154, 0, 1)']} style={styles.container}>
                <View style={styles.ui}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>LOGIN</Text>
                    </View> 

                    <View style={styles.wrapInp}>
                        <TextInput placeholder="Name" style={styles.inp} />
                        <Image style={styles.iconUser} source={User} />
                        <TextInput secureTextEntry={true} placeholder="Password" style={styles.inp} />
                        <Image style={styles.iconLock} source={Lock} />
                        <Image style={styles.iconEye} source={Eye} />
                    </View>

                    <View style={styles.btnWrap}>
                        <Pressable style={styles.btnVerifyCode}>
                            <Text style={styles.btnTitle}>LOGIN</Text>
                        </Pressable>
                    </View>
                    <Text style={styles.textToggle}>FORGOT YOUR PASSWORD</Text>
                </View>
            </LinearGradient>
        </View>
    );
}

export default Ui2a;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(49, 170, 82, 0.19)',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    iconUser: {
        width: '32px',
        height: '32px',
        position: 'absolute',
        left: 10,
        top: 14,
    },
    iconLock: {
        width: '32px',
        height: '32px',
        position: 'absolute',
        left: 10,
        top: 95,
    },
    ui: {
        width: '360px',
        height: '480px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        marginTop: '40px',
        width: '100%',
        height: '23px',
    },
    headerTitle: {
        fontSize: '30px',
        fontWeight: '700',
        textAlign: 'left',
        marginLeft: 15,
    },
    wrapInp: {
        marginTop: 100,
    },

    inp: {
        width: '330px',
        height: '54px',
        backgroundColor: 'rgba(196, 196, 196, 0.3)',
        paddingLeft: '50px',
        marginBottom: '30px',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(242, 242, 242, 1)',
    },
    iconEye: {
        width: '38px',
        height: '36px',
        position: 'absolute',
        right: 20,
        top: 95,
    },

    btnWrap: {
        marginTop: '30px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnVerifyCode: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '330px',
        height: '45px',
        backgroundColor: 'rgba(6, 0, 0, 1)',
    },
    btnTitle: {
        color: 'rgba(255, 255, 255, 1)',
        fontWeight: '700',
        fontSize: '15px',
    },
    textToggle: {
        marginTop: 50,
        fontWeight: 700,
        fontSize: '20px',
        textAlign: 'center',
    },
});
