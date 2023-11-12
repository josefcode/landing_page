import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/defaultLayout'
import { ThankYou } from './pages/ThankYou'
import Home from './pages/Home'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/thanks" element={<ThankYou />} />
      </Route>
    </Routes>
  )
}