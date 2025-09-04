import { createRoot, Root } from 'react-dom/client'
import Comp from './comp'

class AntdWebComponent extends HTMLElement {
  static get observedAttributes() {
    return []
  } // 监听的 attribute
  name = 'antd-web-component'
  root: Root | null = null // 挂载的根节点
  mountPoint: any

  constructor() {
    super()
  }

  // 当自定义元素第一次被连接到文档 DOM 时被调用
  async connectedCallback() {
    // 挂载点
    const mountPoint = document.createElement('div')

    // this === 给当前自定义的元素
    // 给当前自定义的元素挂载一个 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' })

    shadowRoot.appendChild(mountPoint)

    // 渲染react
    this.root = createRoot(mountPoint)
    this.mountPoint = mountPoint
    this.root.render(<Comp mountPoint={mountPoint} />)
  }
}

// 定义和注册的自定义元素
if (!window.customElements.get('antd-web-component')) {
  window.customElements.define('antd-web-component', AntdWebComponent)
}
