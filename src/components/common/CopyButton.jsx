import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CopyButton({ text }) {
    const [copied, setCopied] = useState(false)

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        } catch (error) {
            console.error('Copie impossible :', error)
        }
    }

    return (
        <button className="copy-btn" onClick={copy} aria-label="Copier">
            {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
    )
}