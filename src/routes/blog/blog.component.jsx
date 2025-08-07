import { Route, Routes } from 'react-router-dom';
import './blog.styles.css';
import BlogPage from './blog-page/BlogPage';
import BlogPost from './blog-posts/BlogPost';
const Blog = () => {
    return (
        <Routes>
            <Route index element={<BlogPage/>}/>
            <Route path='/post/:id' element={<BlogPost/>} />
        </Routes>
    );
}

export default Blog;