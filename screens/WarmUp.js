import React, {useState} from "react";
import {
    SafeAreaView,
} from 'react-native';

import GradientBackground from "../components/GradientBackground";
import Start from "./warmup/start.js";
import Rules from "./warmup/rules.js";


const WarmUp = ({navigation}) => {
    const [page, setPage] = useState(0)
    
    const warmUpScreens = [
        <Rules next={() => setPage(c => c + 1)}/>,
        <Start next={() => navigation.navigate('Profile')}/>,
    ]
    return(
        <GradientBackground>
            <SafeAreaView className='w-screen h-screen flex flex-col justify-center items-center'>
                {warmUpScreens[page]}
            </SafeAreaView>
        </GradientBackground>
    )
}

export default WarmUp