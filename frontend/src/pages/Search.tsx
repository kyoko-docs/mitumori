import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import content from '../html/search_prot.html?raw'

export default function SearchPage() {
  const navigate = useNavigate()
  useEffect(() => {
    const btn = document.querySelector('#confirm-button') as HTMLButtonElement | null
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    const update = () => {
      const anyChecked = Array.from(checkboxes).some(cb => (cb as HTMLInputElement).checked)
      if (btn) btn.disabled = !anyChecked
    }
    checkboxes.forEach(cb => cb.addEventListener('change', update))
    const handler = () => navigate('/dimension')
    btn?.addEventListener('click', handler)
    return () => {
      checkboxes.forEach(cb => cb.removeEventListener('change', update))
      btn?.removeEventListener('click', handler)
    }
  }, [navigate])
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
