import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import content from '../html/zairyo_prot.html?raw'

export default function MaterialsPage() {
  const navigate = useNavigate()
  useEffect(() => {
    const btn = document.getElementById('exportButton')
    const handler = () => navigate('/process')
    btn?.addEventListener('click', handler)
    return () => btn?.removeEventListener('click', handler)
  }, [navigate])
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
