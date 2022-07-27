import React from 'react'
import {connect} from 'react-redux'
import { useNavigate } from 'react-router'
import ReactLoading from 'react-loading';

import plus from '../../assets/plus.png'
import Input from '../../_custom/Input'
import Dropdown from '../../_custom/Dropdown'
import * as actions from '../../store/action'
import Products from './components/Products'



function Home(props) {

    const navigate = useNavigate()
    const [search,setSearch] = React.useState('')
    const [debounce,setDebounce] = React.useState(null)

    React.useEffect(() => {
        props.getProducts()
        if(props.categories.length <= 1) props.getCategories()

        return () => props.setSelectedCategory()
    },[])

    const selectItem = (item) => {
        props.getCategory({id: item.id})
        props.setSelectedCategory(item)
        props.filterProducts({search: search, category: item?.value})
    }

    const searchFunction = (value) => {
        setSearch(value)
        props.filterProducts({search: value, category: props.selectedCategory?.value})
    }

    return (
        <div className="flex flex-col items-center min" style={{width:"80vw"}}>
            <div className='flex justify-between mt-5 w-full'>
                <Input style={{width:"350px"}} placeholder="Apple Watch, Samsung S21" value={search} onChange={(e) => searchFunction(e.target.value)}/>
                <Dropdown
                    optionsList={props.categories}
                    selectedOption={props.selectedCategory}
                    itemClickHandler={selectItem}
                />
            </div>

            {props?.loading ? (
                <div className='mt-10'>
                    <ReactLoading type={"spinningBubbles"} color={"rgb(100, 10, 100)"} height={'100px'} width={'100px'}/>
                </div>
            ): (
                <Products search={search} deleting={props.deleting}/>
            )}


            <img className="fixed bottom-10 right-10 cursor-pointer hover:scale-105" src={plus} alt="plus" style={{height:"60px"}} onClick={()=> navigate("/add")}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state?.app?.categories,
        selectedCategory: state?.app?.selectedCategory,

        loading: state?.app?.loading,
    }
}

const mapDispatchWithProps = (dispatch) => {
    return {
        getProducts: payload => dispatch(actions.getProducts(payload)),
        getCategories: payload => dispatch(actions.getCategories(payload)),
        getCategory: payload => dispatch(actions.getCategory(payload)),
        filterProducts: payload => dispatch(actions.filterProducts(payload)),

        setSelectedCategory: payload => dispatch(actions.setSelectedCategory(payload)),
        resetProductData: payload => dispatch(actions.resetProductData(payload))
    }
}

export default connect(mapStateToProps,mapDispatchWithProps)(Home)