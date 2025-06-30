import content from '../html/report_prot.html?raw'

export default function ReportPage() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
