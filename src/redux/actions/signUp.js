const createRequestTypes = type => ({
  SUCCESS: `${type}_SUCCESS`,
  FAIL: `${type}_FAIL`,
});


export const actionConstants = {
  SIGN_UP: createRequestTypes('SIGN_UP'),
};
// actions

console.log('actionConstants', actionConstants);

const groupId = '6vf77z4hd5';
const token = 'rtASDLastuev77';

const signUp = (payload) => {
  console.log('payload', payload);
  return (dispatch) => {
    let status = null;
    return fetch(`https://lab.lectrum.io/redux/api/user/${groupId}`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ ...payload, invite: token }),
    })
      .then((res) => {
        status = res.status;

        return res.json();
      })
      .then(res => {
        if (status !== 200) {
          return dispatch({
            type: actionConstants.SIGN_UP.FAIL,
            error: res,
          });
        }

        dispatch({
          type: actionConstants.SIGN_UP.SUCCESS,
          payload: res,
        })
      });
  };
};

export const actionCreators = {
  signUp,
};
