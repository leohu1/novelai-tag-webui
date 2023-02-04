import { defineCustomElement } from 'vue'
import NovelAITag from './NovelAITag.ce.vue'

NovelAITag.components = import.meta.glob('./components/*.vue', {
    import: 'default',
    eager: true,
})

const deepStylesOf = ({ styles = [], components = {} }) => {
    const unique = array => [...new Set(array)];
    return unique([...styles, ...Object.values(components).flatMap(deepStylesOf)]);
}

NovelAITag.styles = deepStylesOf(NovelAITag)

const NovelAITagElement = defineCustomElement(NovelAITag)
// 注册
customElements.define('novelai-tag', NovelAITagElement)
