import React from 'react'
import Mustache from 'mustache'

export default function ShowItem({src, answers}) {
    const hasAnswer = () => {
        const slugs = src.values.map(v => v.slug)
        const hits = slugs.map(x => Boolean(answers[x]))
        return hits.some(b => b === true)
    }

    return (
        <>
            {hasAnswer() ? Mustache.render(src.snippet, answers) : ''}
        </>
    )
}
