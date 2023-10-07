import { StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native';
import USB from '../assets/usb.jpg';
import Star from '../assets/star.png';
import Camera from '../assets/camera.png';
function Ui2b() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.iconUSB} source={USB} />
                <Text style={styles.content}>
                    USB Bluetooth Music Recevier <br /> HJX-001- Biến loa thường thành loa <br /> Bluetooth
                </Text>
            </View>
            <View style={styles.vote}>
                <Text style={styles.title}>Cực kỳ hài lòng</Text>
                <View style={styles.wrapIconVote}>
                    <Image style={styles.iconVote} source={Star} />
                    <Image style={styles.iconVote} source={Star} />
                    <Image style={styles.iconVote} source={Star} />
                    <Image style={styles.iconVote} source={Star} />
                    <Image style={styles.iconVote} source={Star} />
                </View>
            </View>
            <View style={styles.addImage}>
                <Image style={styles.iconCamera} source={Camera} />
                <Text style={styles.titleCamera}>Thêm hình ảnh</Text>
            </View>
            <View style={styles.describe}>
                <TextInput placeholder="Hãy chia sẽ những điều mà bạn thích về sản phẩm" />
            </View>
            <View style={styles.btnSubmit}>
                <Text style={styles.titleBtn}>Gửi</Text>
            </View>
        </View>
    );
}
export default Ui2b;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
    },
    iconUSB: {
        width: 60,
        height: 60,
        marginRight: 15,
    },
    content: {
        fontSize: 16,
        fontWeight: 700,
    },
    wrapIconVote: {
        flexDirection: 'row',
    },
    vote: {
        marginTop: 60,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 700,
    },
    iconVote: {
        width: 40,
        height: 40,
        marginTop: 20,
        marginLeft: 15,
        justifyContent: 'center',
    },
    addImage: {
        flexDirection: 'row',
        marginTop: 50,
        alignItems: 'center',
        borderColor: 'blue',
        borderStyle: 'solid',
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 40,
        padding: 40,
        borderRadius: 5,
    },
    iconCamera: {
        width: 50,
        height: 50,
        marginRight: 20,
    },
    titleCamera: {
        fontSize: 20,
        fontWeight: 700,
    },
    describe: {
        width: '290px',
        height: '200px',
        marginTop: 20,
        padding: 15,
        fontSize: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        color: 'rgba(242, 242, 242, 1)',
    },
    btnSubmit: {
        width: 290,
        height: 45,
        backgroundColor: 'blue',
        borderRadius: 5,
        marginTop: 20,
    },
    titleBtn: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 700,
        color: 'white',
        paddingTop: 5,
    },
});
