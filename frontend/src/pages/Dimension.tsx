import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import content from '../html/sunpo_prot.html?raw'

export default function DimensionPage() {
  const navigate = useNavigate()
  useEffect(() => {
    const btn = document.getElementById('confirmButton')
    const handler = () => navigate('/materials')
    btn?.addEventListener('click', handler)
    return () => btn?.removeEventListener('click', handler)
  }, [navigate])
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
