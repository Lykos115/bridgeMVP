import React from "react";
import {
    View,
    SafeAreaView,
    Text
} from 'react-native';
import GradientBackground from "../components/GradientBackground";

const Profile = () => {
    return(
        <GradientBackground>
            <SafeAreaView className='w-screen h-screen p-4'>
                <View>
                    <Text>Prifle Section</Text>
                </View>
            </SafeAreaView>
        </GradientBackground>
    )
}

export default Profile