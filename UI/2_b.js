import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import USB from '../assets/usb.jpg';
import Star from '../assets/star.png';
import Camera from '../assets/camera.png';
import { Button } from 'react-native-web';
import { useState } from 'react';
function Ui2b() {
    const [imageSource, setImageSource] = useState(null);
    const handleChooseImage = () => {
        const options = {
            title: 'Chọn hình ảnh',
            cancelButtonTitle: 'Hủy',
            takePhotoButtonTitle: 'Chụp ảnh',
            chooseFromLibraryButtonTitle: 'Chọn từ thư viện',
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('Hủy tải lên');
            } else if (response.error) {
                console.log('Lỗi: ', response.error);
            } else {
                // Hình ảnh đã được chọn hoặc chụp từ máy ảnh
                const source = { uri: response.uri };

                setImageSource(source);
            }
        });
    };

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
            {/* {imageSource && ( */}
            <View style={styles.addImage}>
                <Image style={styles.iconCamera} source={Camera} />
                <Text style={styles.titleCamera}>Thêm hình ảnh</Text>
            </View>
            {/* )} */}
            <View style={styles.describe}>
                <TextInput style={styles.txtInpDes} placeholder="Hãy chia sẽ những điều mà bạn thích về sản phẩm" />
            </View>
            <View style={styles.btnSubmit}>
                <Button title="Gửi" style={styles.titleBtn} onPress={handleChooseImage} />
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
    },
    txtInpDes: {
        fontSize: 20,
        paddingTop: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 130,
    },
    btnSubmit: {
        width: 290,
        height: 45,
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
