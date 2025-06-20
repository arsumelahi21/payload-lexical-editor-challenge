import {
    ElementNode,
    SerializedElementNode,
    LexicalNode,
    NodeKey,
  } from 'lexical'
  
  export class MarkNode extends ElementNode {
    static getType(): string {
      return 'mark'
    }
  
    static clone(node: MarkNode): MarkNode {
      return new MarkNode(node.__key)
    }
  
    constructor(key?: NodeKey) {
      super(key)
    }
  
    createDOM(): HTMLElement {
      return document.createElement('mark')
    }
  
    updateDOM(): boolean {
      return false
    }
  
    static importDOM(): any {
        return {
          mark: () => ({
            conversion: () => ({ node: new MarkNode() }),
            priority: 1 as const, // 👈 cast to literal
          }),
        }
      }
  
    static importJSON(): MarkNode {
      return new MarkNode()
    }
  
    exportJSON(): SerializedElementNode {
      return {
        ...super.exportJSON(),
        type: 'mark',
        version: 1,
      }
    }
  }
  
  export function $createMarkNode(): MarkNode {
    return new MarkNode()
  }
  
  export function $isMarkNode(node: LexicalNode | null | undefined): node is MarkNode {
    return node instanceof MarkNode
  }