import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import {
    listProducts,
    ListproductbyCg, 
    Listproductbyfiter,
    Listproductbysearch
} from '../../redux/actions/productActions';
import Search from '../../components/Search';
import CardProduct from '../../components/CardProduct';

const Home = ({match,history}) => {

    let Cg = window.location.search ? window.location.search.split('=')[1] : null
    const keyword = window.location.pathname.split('/')[2] 
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const productbycg = useSelector((state)=>{
        return state.ListproductbyCg
    })
    const productbyfilter = useSelector((state)=>{
        return state.Listproductbyfiter
    })
    
    const {loading,error,products} = productbycg ? productbycg : productList ;
    useEffect(()=>{
        if(Cg){
            console.log()
            const type = window.location.search.split('=')[0];
            switch (type) {
                case '?cg':
                    dispatch(ListproductbyCg(Cg))
                    break;
                case '?filter':
                    dispatch(Listproductbyfiter(Cg))
                    break;
                case '?search':
                    dispatch(Listproductbysearch(Cg))
                    break;
                default:
                    break;
            }
             
        }
        else
            dispatch(listProducts(keyword))

    },[dispatch,Cg,keyword])
    
    const [showfilter, setshowfilter] = useState(false);
    const [showsearch, setshowsearch] = useState(false);
    
    const filterfunc = () =>{
        setshowfilter(!showfilter);
        if(showsearch) setshowsearch(false)
    }
    const searchfunc=()=>{
        setshowsearch(!showsearch);
        if(showfilter) setshowfilter(false);
    }

    return (
        <>
        <div className='cg-filter'>
            <h1>{Cg ? Cg : keyword ?  "*" + keyword + "* Search" : 'All'} Products</h1>
            <div className='filters-btn'>
                <button 
                    className={`filterbtn ${showfilter ? 'activebtn' : ''}` }  
                    onClick={filterfunc} > 
                        {showfilter ?  <span> CLOSE </span>: <span>SORT</span> } 
                </button>
                {showfilter && 
                    <div className='sortbydiv'>
                        <ul>
                            <li><Link onClick={()=>(setshowfilter(false))} className ='lined' to='?filter'>Default</Link></li>
                            <li><Link onClick={()=>(setshowfilter(false))} className ='lined' to='?filter=highprice'>Low to high price</Link></li>
                            <li><Link onClick={()=>(setshowfilter(false))} className ='lined' to='?filter=lowprice'>high to low price</Link></li>
                        </ul> 
                    </div>
                }
                <button 
                    className = {`searchbtn ${showsearch ? 'activebtn' : ''}` } 
                    onClick = {searchfunc}>
                        {showsearch ?  <span> CLOSE </span>:<span>SEARCH</span>}
                </button>
                {showsearch && 
                    <div className='sortbydiv'>
                        <Route render = {({history}) => <Search  history = {history}/> }/>
                    </div>
                } 
            </div>
        
            <div className = 'filters'> 
                <ul>
                    <Link className = 'lined' to = '?cg'>All</Link>
                    <Link className = 'lined'  to = '?cg=Men'>Men</Link>
                    <Link className = 'lined'  to = '?cg=Women'>Women</Link>
                    <Link className = 'lined'  to = '?cg=Watches'>Watches</Link>
                    <Link className = 'lined' to = '?cg=Shoes'>Shoes</Link>
                    <Link to = '?cg=Bag' className = 'lined'>Bag</Link>
                </ul>
            </div>
        </div>
       
        <div className = {`filterarea ${showfilter ? 'filter' : 'filteroff' }`}>
 
    </div>
        { loading 
            ? <div className='loading'>Loading....</div> 
            : error 
                ? <h2>{error} </h2> 
                : products.length === 0 
                    ?   <h1 className='nothingfound'>Nothing Found !!!</h1> 
                    :   <div className='cards-product'>
                            { 
                                products.map((product) => 
                                    (<CardProduct key={product._id} product={product} />))
                            }
                        </div> 
            }          
        </> 
    )
}

export default Home;

