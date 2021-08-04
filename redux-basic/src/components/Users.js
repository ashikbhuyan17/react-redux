import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { userList } from './services/actions/userAction';

const Users = () => {
    const state = useSelector(state => state.userReducer)
    console.log(state);
    const { users, loading, error } = state
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userList())
    }, [])

    return (
        <div>
            {
                loading ? <h3>loading...</h3> : error ? <h3>{error}</h3> :
                    <div>
                        {
                            users.slice(0, 10).map(user => {
                                return <h4>{user.title}</h4>
                            })
                        }
                    </div>
            }
        </div>
    );
};

export default Users



// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { userList } from './services/actions/userAction';

// const Users = ({ userList, loading, users, error }) => {
//     useEffect(() => {

//         userList()
//     }, [])
//     return (
//         <div>
//             {
//                 loading ? <h3>loading...</h3> : error ? <h3>{error}</h3> :
//                     <div>
//                         {
//                             users.slice(0, 10).map(user => {
//                                 return <h4>{user.title}</h4>
//                             })
//                         }
//                     </div>
//             }
//         </div>
//     );
// };

// const mapStateToProps = (state) => ({
//     loading: state.userReducer.loading,
//     users: state.userReducer.users,
//     error: state.userReducer.error
// })

// // export default Users;
// export default connect(mapStateToProps, { userList })(Users)