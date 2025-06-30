import type { RouteObject } from "react-router-dom"
import UploadPage from './pages/Upload'
import SearchPage from './pages/Search'
import DimensionPage from './pages/Dimension'
import MaterialsPage from './pages/Materials'
import ProcessPage from './pages/Process'
import ReportPage from './pages/Report'

export const routes: RouteObject[] = [
  { path: '/upload', element: <UploadPage /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/dimension', element: <DimensionPage /> },
  { path: '/materials', element: <MaterialsPage /> },
  { path: '/process', element: <ProcessPage /> },
  { path: '/report', element: <ReportPage /> },
  { path: '*', element: <UploadPage /> },
]
