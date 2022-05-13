import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetail from "../components/ItemDetail/ItemDetail"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import Layout from "../components/Layout/Layout"
import NavBar from "../components/NavBar/NavBar"
import CategoryContainer from "../components/Views/CategoryContainer"
import Error from "../components/Views/Error"

const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                  <Route index element={<ItemListContainer/>}/>
                  <Route path="/item-detail" element={<ItemDetailContainer/>}/>
                  <Route path="/item-detail/:id" element={<ItemDetailContainer/>}/>
                  <Route path="/category/:categoryId" element={<CategoryContainer/>}/>                  
                  <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Rutas