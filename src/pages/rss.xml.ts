import rss from '@astrojs/rss'
import type { AstroConfig } from 'astro'
import { getCollection } from 'astro:content'
import sanitizeHtml from 'sanitize-html'
import MarkdownIt from 'markdown-it'

const parser = new MarkdownIt();

export async function get(context: AstroConfig) { 
    const letter = await getCollection('newsletter')

    return rss({
        title: 'Raise Up LA Newsletter',
        description: 'A weekly newsletter about the best tactics to learn technology.',
        site: context.site as string,
        items: letter.map((letter) => {
            return {
                title: letter.data.title,
                pubDate: letter.data.date,
                description: sanitizeHtml(parser.render(letter.data.description)),
                link: `/newsletter/${letter.data.slug}`,
                content: sanitizeHtml(parser.render(letter.data.content)),
            }
        })
    })
}