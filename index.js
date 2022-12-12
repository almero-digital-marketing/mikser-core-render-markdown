import MarkdownIt from 'markdown-it'
import removeMarkdown from 'remove-markdown'

export function load({ runtime, config = { options: [], plugins: [] } }) {
    let markdown = new MarkdownIt({
		html: true,
		breaks: true, 
		...config.options,
	})
	config.plugins.forEach(({ plugin, options }) => {
		markdown.use(plugin, options)
	})
    runtime.markdown = source => markdown.render(source || '')
    runtime.removeMarkdown = (source, options = {}) => removeMarkdown(source || '', options)
}