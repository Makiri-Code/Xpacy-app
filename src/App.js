import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Admin from "./routes/admin/admin.component";
import Blog from "./routes/blog/blog.component";
import Contacts from "./routes/contacts/contacts.component";
import Home from "./routes/home/home.component";
import Rent from "./routes/rent/rent.component";
import Shop from "./routes/shop/shop.component";
import Footer from "./routes/footer/footer.component";

const App = () => {
  return(
    <div>
      <Routes>
        <Route path = "/" element = {<Navigation/>}>
          <Route index element = {<Home/>} />
          <Route path="/admin" element = {<Admin/>} />
          <Route path="/contact" element = {<Contacts/>} />
          <Route path="/rent" element = {<Rent/>} />/
          <Route path="/shop" element = {<Shop/>} />
          <Route path="/blog" element = {<Blog/>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
