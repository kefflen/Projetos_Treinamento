import React from 'react';
import {
  $getRoot,
  $getSelection,
} from 'lexical';
import LexicalComposer from '@lexical/react/LexicalComposer';
import LexicalRichTextPlugin from '@lexical/react/LexicalRichTextPlugin';
import LexicalContentEditable from '@lexical/react/LexicalContentEditable';
import LexicalOnChangePlugin from '@lexical/react/LexicalOnChangePlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { Container } from './styled';
import Toolbar from './Toolbar';


function onChange(state) {
  state.read(() => {
    const root = $getRoot()
    const selection = $getSelection()
    console.log(selection)
  })
}

export const Editor = () => {
  return (
    <Container>
      <LexicalComposer
        className="lexical-composer"
        initialConfig={{
          theme: {
            paragraph: 'mb-1',
            rtl: 'text-right',
            ltr: 'text-left',
            text: {
              bold: 'font-bold',
              italic: 'italic',
              underline: 'underline',
              strikethrough: 'line-through',
            }
          },
          onError(error) {
            throw error
          },
        }}
      >
        <Toolbar />
        <LexicalRichTextPlugin
          contentEditable={
            <LexicalContentEditable className="edit-block" />
          }
          placeholder={
            <div className="placehoder">
              Now write something brilliant...
            </div>
          }
        />
        <LexicalOnChangePlugin onChange={onChange} />
        <HistoryPlugin />
      </LexicalComposer>
    </Container>
  )
}
