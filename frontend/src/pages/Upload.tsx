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
  return (
    <div
      className="bg-gray-100 flex h-screen overflow-hidden text-lg font-sans"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
