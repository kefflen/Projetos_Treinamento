import React from 'react';
import { $getRoot, $getSelection } from 'lexical';
import LexicalComposer from '@lexical/react/LexicalComposer';
import LexicalPlainTextPlugin from '@lexical/react/LexicalPlainTextPlugin';
import LexicalRichTextPlugin from '@lexical/react/LexicalRichTextPlugin';
import LexicalContentEditable from '@lexical/react/LexicalContentEditable';
import LexicalOnChangePlugin from '@lexical/react/LexicalOnChangePlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';

function onChange(state) {
  state.read(() => {
    const root = $getRoot();
    const selection = $getSelection();
    console.log(selection);
  });
}

export const Editor = () => {
  return (
    <div className='bg-white relative rounded-sm'>
      <LexicalComposer
        initialConfig={{
          theme: {
            paragraph: 'mb-1',
          },
          onError(error) {
            throw error;
          },
        }}
      >
        <LexicalRichTextPlugin
          contentEditable={
            <LexicalContentEditable className="min-h-[450px] outline-none py-[15px] px-2.5 resize-none overflow-hidden text-ellipsis" />
          }
          placeholder={
            <div className="absolute top-[15px] left-[10px] pointer-events-none select-none">
              Now write something brilliant...
            </div>
          }
        />
        <LexicalOnChangePlugin onChange={onChange} />
        <HistoryPlugin />
      </LexicalComposer>
    </div>
  )
}