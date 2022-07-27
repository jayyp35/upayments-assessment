import React,{useState,useEffect} from 'react'
import Input from '../../_custom/Input'
import Dropdown from '../../_custom/Dropdown'
import * as actions from "../../store/action"
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'

function AddProduct(props) {

    const [name,setName] = useState('')
    const [desc,setDesc] = useState('')
    const [url,setUrl] = useState('')
    const [price,setPrice] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if(props.categories.length <= 1) props.getCategories()
        return () => props.setSelectedCategory()
    },[])

    const selectItem = (item) => {
        props.setSelectedCategory(item)
    }

    const changeName = (e) => {
        if(e.target.value.length <=40) setName(e.target.value)
    }

    const addProduct = () => {
        if(!props.addingProduct) {
            props.addProduct({
                data: {
                    name: name,
                    price: price,
                    category: props.selectedCategory?.value,
                    description: desc,
                    avatar: url,
                    developerEmail: "j7prabhu@gmail.com"
                },
                navigate
            })
        }
    }

    return (
        <div className='border-solid border-slate-200 border-2 rounded-xl w-6/12 mt-20 px-10 py-2'>
            <div className='my-8 font-bold text-3xl'>Create Product</div>

            <Input placeholder="Product Name" onChange={changeName} value={name}/>
            <Input placeholder="Description" onChange={e => setDesc(e.target.value)} value={desc}/>
            <Input placeholder="Image URL" onChange={e => setUrl(e.target.value)} value={url}/>
            <Dropdown
                optionsList={props.categories}
                selectedOption={props.selectedCategory}
                itemClickHandler={selectItem}
            />
            <Input placeholder="Price" type="number" onChange={e => setPrice(e.target.value)} value={price}/>

            <div 
                className={`my-10 border-solid border-black border-2 p-2 rounded text-black hover:bg-black hover:text-white ${!props.addingProduct ? "cursor-pointer hover:bg-white hover:text-black" : ""}`}
                onClick={addProduct}
            >
                {props.addingProduct ? "Adding Product":"Submit" }
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        categories: state?.app?.categories,
        selectedCategory: state?.app?.selectedCategory,
        addingProduct: state?.app?.addingProduct
    }
}

const mapDispatchWithProps = (dispatch) => {
    return {
        setSelectedCategory : payload => dispatch(actions.setSelectedCategory(payload)),
        getCategories: payload => dispatch(actions.getCategories(payload)),
        addProduct: payload => dispatch(actions.addProduct(payload))
    }
}

export default connect(mapStateToProps,mapDispatchWithProps)(AddProduct)