import React from 'react'
import ReactLoading from 'react-loading';

function DeletePopup(props) {

    const {setSelectedProduct,deleteItem,deleting} = props;

    const deleteClick = () => {
        deleteItem()
    }

    const cancel = () => {
        setSelectedProduct(null)
    }

    return (
        <div className='fixed top-0 left-0 h-screen w-screen bg-black/[0.8] flex items-center justify-center'>
            <div className='bg-white h-fit p-5 rounded-xl'>
                    Are you sure you want to delete this item
                <div className='flex items-center justify-center my-2'>
                    <div className='px-3 py-1 bg-rose-700 h-8 w-24 text-white rounded cursor-pointer hover:bg-rose-800' onClick={deleteClick}>
                        {deleting ? (
                            <div className='h-full w-full flex items-center justify-center'>
                            <ReactLoading type={"spin"} color={"rgb(215, 215, 215)"} height={'20px'} width={'20px'}/>
                            </div>
                        ): "Delete"}
                    </div>
                    <div className='mx-2 px-3 py-1 bg-blue-800 w-fit text-white rounded cursor-pointer hover:bg-blue-900' onClick={cancel}>Cancel</div>
                </div>
            </div>
        </div>
    )
}

export default DeletePopup