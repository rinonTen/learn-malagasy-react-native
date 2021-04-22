import React, { useState } from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import PhraseTextarea from './phraseTextarea';


storiesOf('PhraseTextarea', module)
  .add('UneditableTextarea', () => { 
   return (
      <PhraseTextarea
        multiline={true}
        numberOfLines={4}
        editable={false}
        value={'roa ambin’ny folo'}
      />
    )
  })
   
  .add('EditableTextarea', () => {
    
  function Parent({ children }) {
    const [state, setState] = useState({value: ''});
    return <View>{children(state, setState)}</View>;
  }

   return (
     <Parent>
      {(state, setState) => (
          <PhraseTextarea 
            multiline={true}
            numberOfLines={4}
            placeholder= {'Enter here'}
            placeholderTextColor={'rgba(17, 24, 39, 0.5)'}
            editable={true}
            value={state.value}
            onChange={(text) => setState({ value: text })}
          />
    )}
    </Parent>)}
  )