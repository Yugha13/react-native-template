import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import './global.css';

import Home from './src/pages/Home';

const runnerImage = require('./assets/runner.png');

export default function App() {
  return (
    <SafeAreaProvider>
      <Home runnerImage={runnerImage} />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
