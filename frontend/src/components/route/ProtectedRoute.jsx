// import React, { Fragment } from 'react'
// import { Route,  Navigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {

//     const { isAuthenticated, loading, user } = useSelector(state => state.auth)

//     return (
//         <Fragment>
//             {loading === false && (
//                 <Route
//                     {...rest}
//                     render={props => {
//                         if (isAuthenticated === false) {
//                             return <Navigate to='/login' />
//                         }

//                         if (isAdmin === true && user.role !== 'admin') {
//                             return <Navigate to="/" />
//                         }

//                         return <Component {...props} />
//                     }}
//                 />
//             )}
//         </Fragment>
//     )
// }

// export default ProtectedRoute



import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Navigate } from 'react-router-dom'
import { loadUser } from '../../actions/userActions'
import Loader from '../layouts/Loader'

const ProtectedRoute = ({ isAdmin, children}) => {
    const {  isAuthenticated = false, loading=true, user } = useSelector( state => state.auth) //isAuthenticated by default is false

    const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(loadUser());
    // }, [isAuthenticated, loading, dispatch, user])
  if(loading) {<h1><Loader/></h1>}

  if(!loading && isAuthenticated){
    if(isAdmin === "true" && user.role !== "admin"){
      <Navigate to="/"/>
    }
    else{
      return children
    }
  }
  else if(isAuthenticated){
    return <Navigate to={"/login"}/>
  }
}

export default ProtectedRoute