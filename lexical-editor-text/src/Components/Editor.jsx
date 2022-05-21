import React from 'react'
import { $getRoot, $getSelection } from 'lexical'
import LexicalComposer from '@lexical/react/LexicalComposer'
import LexicalRichTextPlugin from '@lexical/react/LexicalRichTextPlugin'
import LexicalContentEditable from '@lexical/react/LexicalContentEditable'
import LexicalOnChangePlugin from '@lexical/react/LexicalOnChangePlugin'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { Container } from './styled'

function onChange(state) {
  state.read(() => {
    const root = $getRoot()
    console.log(root)
    const selection = $getSelection()
    console.log(selection)
  })
}

export const Editor = () => {
  return (
    <Container>
      <LexicalComposer
        initialConfig={{
          theme: {
            paragraph: 'mb-1',
          },
          onError(error) {
            throw error
          },
        }}
      >
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