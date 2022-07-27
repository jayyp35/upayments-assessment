import React from 'react'
import { useNavigate } from 'react-router';
import bin from '../../../assets/bin.png'

function SingleProduct(props) {

    const {name,img,price,id,selectProduct} = props;
    const navigate = useNavigate();

    const clickItem = (e) => {
        e.stopPropagation()
        selectProduct(name,id)
    }

    return (
        <div className='flex flex-col h-108'>
            <div className='bg-white rounded-xl p-8 cursor-pointer relative h-72' onClick={()=>navigate(`/product/${id}`)}>
                <img src={img} alt="img"/>
                <img className="absolute right-4 top-4 h-4" src={bin} alt="img" onClick={(e) => clickItem(e,name,id)}/>
            </div>
            <div className='h-16 my-2 font-bold'>
                {name}
            </div>
            <div className='p-1 border-solid border-slate-800 border-2 my-2'>${price}</div>
        </div>

    )
}

export default SingleProduct