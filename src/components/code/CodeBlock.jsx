import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import './CodeBlock.css'

export default function CodeBlock({ code, language }) {
    const [copied, setCopied] = useState(false)

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(code)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        } catch (error) {
            console.error('Copie impossible :', error)
        }
    }

    return (
        <div className="code-block">
            <div className="code-header">
                <span>{language}</span>
                <button onClick={copy}>
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copié !' : 'Copier'}
                </button>
            </div>
            <pre><code>{code}</code></pre>
        </div>
    )
}