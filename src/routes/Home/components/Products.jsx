import React from 'react'
import {connect} from 'react-redux'
import DeletePopup from '../../../_custom/Delete';
import SingleProduct from './SingleProduct';
import * as actions from '../../../store/action'

function Products(props) {

    const {products,search,filteredProducts,selectedCategory,deleting} = props;

    const [selectedProduct,setSelectedProduct] = React.useState(null)

    const deleteItem = () => {
        props.deleteProduct({id: selectedProduct.id,closeModal: () => setSelectedProduct(null)})
    }

    return (
        <div className='mt-10 grid grid-cols-4 gap-10 min-h-80 h-fit'>
            {((search?.length || selectedCategory) ? filteredProducts: products).map( (p,index) => (
                <SingleProduct key={index} id={p?.id} name={p?.name} img={p?.avatar} price={p?.price} selectProduct={(name,id) => setSelectedProduct({name:name,id:id})}/>
            ))}
            {selectedProduct ? (
                <DeletePopup setSelectedProduct={setSelectedProduct} deleteItem={deleteItem} deleting={deleting}/>
            ):null}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state?.app?.products,
        filteredProducts: state?.app?.filteredProducts,
        selectedCategory: state?.app?.selectedCategory,
        deleting: state?.app?.deleting
    }

}

const mapDispatchWithProps = (dispatch) => {
    return {
        deleteProduct: payload => dispatch(actions.deleteProduct(payload))
    }
}

export default connect(mapStateToProps,mapDispatchWithProps)(Products)