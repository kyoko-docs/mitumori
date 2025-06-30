import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import content from '../html/upload_after_prot.html?raw'

export default function UploadPage() {
  const navigate = useNavigate()
  useEffect(() => {
    const buttons = Array.from(document.querySelectorAll('button'))
    const target = buttons.find(b => b.textContent?.includes('類似図面検索'))
    const handler = () => navigate('/search')
    target?.addEventListener('click', handler)
    return () => target?.removeEventListener('click', handler)
  }, [navigate])
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
