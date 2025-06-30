import content from '../html/report_prot.html?raw'

export default function ReportPage() {
  return (
    <div
      className="bg-gray-100 flex h-screen overflow-hidden text-lg font-sans"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
