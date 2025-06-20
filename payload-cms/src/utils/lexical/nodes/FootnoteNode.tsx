import {
    DecoratorNode,
    EditorConfig,
    LexicalEditor,
    LexicalNode,
    NodeKey,
    SerializedLexicalNode,
    Spread,
  } from 'lexical'
  import * as React from 'react'
import { JSX } from 'react'
  
  type SerializedFootnoteNode = Spread<
    {
      id: string
      number: number
      content: string
    },
    SerializedLexicalNode
  >
  
  export class FootnoteNode extends DecoratorNode<JSX.Element> {
    __id: string
    __number: number
    __content: string
  
    static getType(): string {
      return 'footnote'
    }
  
    static clone(node: FootnoteNode): FootnoteNode {
      return new FootnoteNode(node.__id, node.__number, node.__content, node.__key)
    }
  
    constructor(id: string, number: number, content: string, key?: NodeKey) {
      super(key)
      this.__id = id
      this.__number = number
      this.__content = content
    }
  
    createDOM(config: EditorConfig): HTMLElement {
      const sup = document.createElement('sup')
      sup.innerHTML = `<a href="#footnote-${this.__number}">${this.__number}</a>`
      return sup
    }
  
    updateDOM(): boolean {
      return false
    }
  
    decorate(): JSX.Element {
      return <sup><a href={`#footnote-${this.__number}`}>{this.__number}</a></sup>
    }
  
    exportJSON(): SerializedFootnoteNode {
      return {
        type: 'footnote',
        id: this.__id,
        number: this.__number,
        content: this.__content,
        version: 1,
      }
    }
  
    static importJSON(json: SerializedFootnoteNode): FootnoteNode {
      return new FootnoteNode(json.id, json.number, json.content)
    }
  
    static importDOM(): any {
      return null 
    }
  
    static register(editor: LexicalEditor) {
     // editor.registerNodeType(FootnoteNode)
    }
  }
  
  export function $createFootnoteNode(id: string, number: number, content: string): FootnoteNode {
    return new FootnoteNode(id, number, content)
  }
  
  export function $isFootnoteNode(node: LexicalNode): node is FootnoteNode {
    return node instanceof FootnoteNode
  }
  