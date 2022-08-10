import { Link } from 'react-router-dom';
import customer from './Component/Img/customer.svg';
import Package from './Component/Img/Package.svg' ;

export default function Header() {
  return (
    <>
      <span className="Ap">
        <Link to='/Customer'><img className='img' src={customer} /></Link>
        <Link to='/Edit-product'><img className='img' src={Package}/></Link>
      </span>
    </>
  )
}