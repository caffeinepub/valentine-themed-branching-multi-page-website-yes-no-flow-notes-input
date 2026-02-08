import { useState } from 'react';
import ValentineLayout from './components/valentine/ValentineLayout';
import {
  FirstScreen,
  NoScreen,
  YesStep1,
  YesStep2,
  YesFinal,
} from './components/valentine/Screens';
import ScreenTransition from './components/valentine/ScreenTransition';

type Screen = 'first' | 'no' | 'yes-1' | 'yes-2' | 'yes-final';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('first');
  const [previousScreen, setPreviousScreen] = useState<Screen>('first');
  const [note, setNote] = useState('');
  const [savedNote, setSavedNote] = useState('');

  const handleScreenChange = (newScreen: Screen) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(newScreen);
  };

  const handleYes = () => handleScreenChange('yes-1');
  const handleNo = () => handleScreenChange('no');
  const handleSaveNote = () => {
    setSavedNote(note);
  };
  const handleYesStep1Next = () => handleScreenChange('yes-2');
  const handleYesStep2Next = () => handleScreenChange('yes-final');

  // Determine slide direction based on screen flow
  const getDirection = (): 'left' | 'right' => {
    const flow: Record<Screen, number> = {
      first: 0,
      no: 1,
      'yes-1': 1,
      'yes-2': 2,
      'yes-final': 3,
    };
    return flow[currentScreen] > flow[previousScreen] ? 'left' : 'right';
  };

  return (
    <ValentineLayout>
      <ScreenTransition key={currentScreen} direction={getDirection()}>
        {currentScreen === 'first' && (
          <FirstScreen onYes={handleYes} onNo={handleNo} />
        )}
        {currentScreen === 'no' && (
          <NoScreen
            note={note}
            savedNote={savedNote}
            onNoteChange={setNote}
            onSaveNote={handleSaveNote}
          />
        )}
        {currentScreen === 'yes-1' && <YesStep1 onNext={handleYesStep1Next} />}
        {currentScreen === 'yes-2' && <YesStep2 onNext={handleYesStep2Next} />}
        {currentScreen === 'yes-final' && <YesFinal />}
      </ScreenTransition>
    </ValentineLayout>
  );
}

export default App;
