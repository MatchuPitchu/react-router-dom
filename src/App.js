import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

// UPDATE with React Router DOM v6 - to access v5 look at previous commits */}
// a) <Routes> replaces <Switch>
// b) have to wrap always <Route> components into <Routes>
// b) components are not anymore wrapped into <Route></Route> ->
//   they're passed via element prop as JSX into <Route>
// c) exact prop AND its behavior no longer exists ->
//   now Router looks always for exact matches
// d) if you want to imitate old behavior to render multiple <Route> components,
//   then use '/*' (-> <Route path='/products/*' />); if URL path matches root
//   (here '/product') then it's rendered
// e) BUT NOTICE to d): internal algorithm of React Router was improved, that
//   Router searches best fit for a path, so if two Routes available
//   <Route path='/products/*' /> and <Route path='/products/:productId' />
//   it would pick the most exact or explicitly declared path, that means
//   here the second one;
// f) in context of e): order of Route components is no longer important;
// g) <Navigate> replaces <Redirect> -> add replace prop to <Navigate> when
//   you wanna have real Redirect, otherwise link is only pushed to browser history
// h) Links and nested Routes have relative paths depending on the root path
//   of the current component (-> you won't need custom path resolving
//   with useRouteMatch hook anymore)
// i) nested routes:
//   - when using nested routes then at top level you have to add '/*'
//     in path to tell React Router that the passed element is even displayed if there
//     is no exact path match (-> since nested routes extend the whole path)
//   - nested routes are now relative paths, so only add extension of root path in child component
//   - nested routes could be defined in the child component as with v5 OR defined
//     directly in the root component wrapped into the root <Route>;
//     notice: nested route then still uses relative path;
//     -> advantage to have all routes in one place;
//     -> use <Outlet> component in child component to position nested route
// j) useHistory is replaced by useNavigate hook
//     const navigate = useNavigate();
//     navigate('/welcome', { replace: true });
//     -> omit second argument if you wanna push path to browser history
//     navigate(-1) -> navigates to previous page (-x or x for xth page before or forward)

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Navigate replace to='/welcome' />} />
          <Route path='/welcome/*' element={<Welcome />}>
            <Route path='hello' element={<p>Welcome in the nested route</p>} />
          </Route>
          <Route path='/products' element={<Products />} />
          {/* dynamic routes with params;
          :productId is a dynamic placeholder that accepts every value;
          inside component you can get access to param ':productId' */}
          <Route path='/products/:productId' element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
