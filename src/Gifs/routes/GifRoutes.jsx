import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/Navbar"
import { HomePage, SearchPage, TrendingGifsPage } from "../pages"


export const GifRoutes = () => {
    return (
        <>
        <Navbar/>
      <div className='container'>
        <Routes>
              <Route path="trending" element={<TrendingGifsPage/>} />
              <Route path="search" element={<SearchPage />} />
              <Route path="/" element={<HomePage/>} />
            </Routes>
      
      </div>
      
        </>
      
        )
}
