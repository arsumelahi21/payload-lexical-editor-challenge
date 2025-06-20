import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useEffect } from 'react'
import { FootnoteNode } from '../nodes/FootnoteNode'

export const RegisterFootnoteNode = () => {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    try {
      (editor as any)._nodes.set(FootnoteNode.getType(), FootnoteNode)
    } catch (err) {
      console.warn('Custom node registration not supported in v3.43.0')
    }
  }, [editor])

  return null
}
