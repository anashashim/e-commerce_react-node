import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import {
    listProducts,
    ListproductbyCg, 
    Listproductbyfiter
} from '../../redux/actions/productAction';
// import { BsFilter, AiOutlineSearch, IoMdClose } from 'react-icons/all';
import Search from '../../components/Search';
import CardProduct from '../../components/CardProduct';

const Home = ({match,history}) => {
    const [From, setFrom] = useState(0)
    const [To, setTo] = useState(0)

    let Cg = window.location.search ? window.location.search.split('=')[1] : null
    const keyword = window.location.pathname.split('/')[2] 
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const productbycg = useSelector((state)=>{
        return state.ListproductbyCg
    })
    const productbyfilter = useSelector((state)=>{
        return state.Listproductbyfilter
    })
    
    const {loading,error,products} = productbycg ? productbycg : productList ;
    useEffect(()=>{
 
        if(Cg){
            console.log(window.location.search.split('=')[0])
            if(window.location.search.split('=')[0] === '?cg'){
                dispatch(ListproductbyCg(Cg))
                console.log(products)

            }else{
                dispatch(Listproductbyfiter(Cg))

            }
        }else{
            dispatch(listProducts(keyword))
        }

    },[dispatch,Cg,keyword])
    const [showfilter,setshowfilter] = useState(false);
    const [showsearch,setshowsearch] = useState(false);
    const filterfunc = () =>{
        setshowfilter(!showfilter);
        if(showsearch){
            setshowsearch(false)
        }
 
    }
    const searchfunc=()=>{
        setshowsearch(!showsearch);
        if(showfilter){
            setshowfilter(false)
        }
    }

    return (
        <>
        <div className = 'Cgfilter'>
            <h1>{Cg ? Cg : keyword ?  "*" + keyword + "* Search" : 'All'} Products</h1>
            <div className = 'filtersbtn '>
            <button className = {`filterbtn ${showfilter ? 'activebtn' : ''}` }  
            onClick = {filterfunc} > {showfilter ?  <span> CLOSE </span>: <span>FILTER</span> } 
            Filter
            </button>
       
            <button className = {`searchbtn ${showsearch ? 'activebtn' : ''}` } onClick = {searchfunc}>{showsearch ?  <span> CLOSE </span>:<span>SEARCH</span>}Search</button>
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
        {showsearch && <Route render = {({history}) => <Search  history = {history}/> }/>} 
        <div className = {`filterarea ${showfilter ? 'filter' : 'filteroff' }`}>
        <div className = 'sortbydiv'>
            <h1> Sort By</h1>
            <ul>
                <Link onClick = {()=>(setshowfilter(false))} className = 'lined' to = '?filter'>Default</Link>
                <Link onClick = {()=>(setshowfilter(false))} className = 'lined' to = '?filter=Rating'>Rating</Link>
                <Link onClick = {()=>(setshowfilter(false))} className = 'lined' to = '?filter=date'>Date</Link>
                <Link onClick = {()=>(setshowfilter(false))} className = 'lined' to = '?filter=highprice'>Low to high price</Link>
                <Link onClick = {()=>(setshowfilter(false))} className = 'lined' to = '?filter=lowprice'>high to low price</Link>
            </ul> 
        </div>
 
    </div>
            { loading 
            ? <div className='loading'>Loading....</div> 
            : error 
                ? <h2>{error} </h2> 
                : products.length === 0 
                    ?   <h1 className = 'nothingfound'>Nothing Found !!!</h1> 
                    :   <div className='cardsProduct'>
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

