import React from 'react'
import {connect} from 'react-redux'
import { useParams } from 'react-router'
import ReactLoading from 'react-loading';
import * as actions from '../../store/action'

function Product(props) {

    const {productId} = useParams();
    const {productData,loadingProduct} = props;

    React.useEffect(() => {
        props.getProductData({id: productId})

        return () => props.resetData()
    },[])

    return (
        <div className='max-w-screen-lg w-full mt-10 p-5'>
            {!loadingProduct ? (
                <>
                    <div className='flex items-center h-full'>
                        <div className='p-10 bg-white rounded-xl'>
                            <img src={productData?.avatar} alt="avatar" style={{height:"200px"}}/>
                        </div>
                        <div className='ml-10 grow h-56 flex flex-col  text-left'>
                            <div className='font-bold text-3xl'>{productData?.name}</div>
                            <div className='font-bold mt-5'>${productData?.price}</div>
                        </div>
                    </div>
                    <hr className='m-10'/>
                    <div className='text-left'>
                        <div className='font-bold text-2xl'>Description</div>
                        <div className='mt-5'>{productData?.description}</div>
                    </div>
                </>
            ): (
                <div className='w-full flex justify-center items-center h-80'>
                    <ReactLoading type={"spinningBubbles"} color={"rgb(100, 10, 100)"} height={'100px'} width={'100px'}/>
                </div>
            )}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loadingProduct: state?.app?.loadingProduct,
        productData: state?.app?.productData
    }
}

const mapDispatchWithProps = (dispatch) => {
    return {
        getProductData: payload => dispatch(actions.getProductData(payload)),
        resetData: () => dispatch(actions.resetProductData())
    }
}

export default connect(mapStateToProps,mapDispatchWithProps)(Product)