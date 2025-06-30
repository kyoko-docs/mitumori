import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import content from '../html/kakouhi_prot.html?raw'

export default function ProcessPage() {
  const navigate = useNavigate()
  useEffect(() => {
    const btns = Array.from(document.querySelectorAll('button'))
    const nextBtn = btns.find(b => b.textContent?.includes('次へ'))
    const handler = () => navigate('/report')
    nextBtn?.addEventListener('click', handler)
    return () => nextBtn?.removeEventListener('click', handler)
  }, [navigate])
  return (
    <div
      className="bg-gray-100 flex h-screen overflow-hidden text-lg font-sans"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
