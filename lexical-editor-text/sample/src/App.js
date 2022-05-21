import React from 'react';
import { Editor } from './Editor';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBold,
  faStrikethrough,
  faItalic,
  faUnderline,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
  faRotateLeft,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import './style.css';

library.add(
  faBold,
  faStrikethrough,
  faItalic,
  faUnderline,
  faAlignLeft,
  faAlignRight,
  faAlignCenter,
  faAlignJustify,
  faRotateLeft,
  faRotateRight
);

export default function App() {
  return (
    <div>
      <h1 className="text-gray-800 font-bold text-center mt-2">
        Lexical Editor
      </h1>
      <div className="max-w-[900px] mx-4 mt-8 mb-4">
        <Editor />
      </div>
    </div>
  );
}
