import React from 'react'
import {connect} from 'react-redux'

import * as actions from '../../store/action'

function Home(props) {

    React.useEffect(() => {
        props.getProducts()
    },[])

    return (
        <div>Home</div>
    )
}

const mapDispatchWithProps = (dispatch) => {
    return {
        getProducts: payload => dispatch(actions.getProducts(payload))
    }
}

export default connect(null,mapDispatchWithProps)(Home)