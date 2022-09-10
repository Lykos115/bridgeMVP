import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const GradientBackground = ({children}) => (
  <LinearGradient colors={['#FDE5BE','#FCCB7E']} start={{x: 0.6, y: 0.0}} end={{x:0.0, y: 0.6}} className="h-screen w-screen">
    {children}
  </LinearGradient>
);

export default GradientBackground;
