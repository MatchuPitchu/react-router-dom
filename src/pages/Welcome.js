import { Link, Outlet } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      {/* with Update React Router v6, Links and nested Routes have relative paths */}
      <Link to='hello'>Link to nested Route</Link>
      {/* nested routes:
      can use Routes wherever I want -> here if Welcome page is active, Route below is evaluated; */}
      {/* <Routes>
        <Route path='/hello' element={<p>Welcome in the nested route</p>} />
      </Routes> */}
      <Outlet />
    </section>
  );
};

export default Welcome;
