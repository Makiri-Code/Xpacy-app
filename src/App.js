import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Admin from "./routes/admin/admin.component";
import Blog from "./routes/blog/blog.component";
import Contacts from "./routes/contacts/contacts.component";
import Home from "./routes/home/home.component";
import Rent from "./routes/rent/rent.component";
import Buy from "./routes/buy/buy.component";
import Footer from "./routes/footer/footer.component"

const App = () => {
  return(
    <>
    <Routes>
      <Route path = "/" element = {<Navigation/>}>
        <Route index element = {<Home/>} />
        <Route path="/admin" element = {<Admin/>} />
        <Route path="contact" element = {<Contacts/>} />
        <Route path="rent/*" element = {<Rent/>} />/
        <Route path="buy/*" element = {<Buy/>} />
        <Route path="blog" element = {<Blog/>} />
      </Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
