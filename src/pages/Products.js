import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
  // dummy example for useNavigate hook (replaces useHistory of v5)
  const navigate = useNavigate();
  navigate('/welcome', { replace: true });

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>Book</Link>
        </li>
        <li>
          <Link to='/products/p2'>Carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
