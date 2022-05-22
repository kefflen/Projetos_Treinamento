import React from 'react'
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
} from 'lexical'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { mergeRegister } from '@lexical/utils'
import IconButton from '../IconButton'
import { faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight, faBold, faItalic, faRotateLeft, faRotateRight, faStrikethrough, faUnderline } from '@fortawesome/free-solid-svg-icons'
import { Container } from './styled'


const Toolbar = () => {
  const [editor] = useLexicalComposerContext()
  const [isBold, setIsBold] = React.useState(false)
  const [isItalic, setIsItalic] = React.useState(false)
  const [isStrikethrough, setIsStrikethrough] = React.useState(false)
  const [isUnderline, setIsUnderline] = React.useState(false)

  const updateToolbar = React.useCallback(() => {
    const selection = $getSelection()

    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'))
      setIsItalic(selection.hasFormat('italic'))
      setIsStrikethrough(selection.hasFormat('strikethrough'))
      setIsUnderline(selection.hasFormat('underline'))
    }
  }, [editor])

  React.useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar()
        })
      })
    )
  }, [updateToolbar, editor])

  return (
    <Container>
      <div className='button-block'>
        <IconButton
          icon={faBold}
          active={isBold}
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
          }}
        />
        <IconButton
          icon={faStrikethrough}
          active={isStrikethrough}
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')
          }}
        />
        <IconButton
          icon={faItalic}
          active={isItalic}
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
          }}
        />
        <IconButton
          icon={faUnderline}
          active={isUnderline}
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')
          }}
        />
      </div>
      <div className='button-block'>
        <IconButton
          icon={faAlignLeft}
          active={false}
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left')
          }}
        />
        <IconButton
          icon={faAlignCenter}
          active={false}
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center')
          }}
        />
        <IconButton
          icon={faAlignRight}
          active={false}
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right')
          }}
        />
        <IconButton
          icon={faAlignJustify}
          active={false}
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify')
          }}
        />
      </div>

      <div className='button-block'>
        <IconButton
          icon={faRotateLeft}
          active={false}
          onClick={() => {
            editor.dispatchCommand(UNDO_COMMAND)
          }}
        />
        <IconButton
          icon={faRotateRight}
          active={false}
          onClick={() => {
            editor.dispatchCommand(REDO_COMMAND)
          }}
        />
      </div>

    </Container>
  )
}

export default Toolbar