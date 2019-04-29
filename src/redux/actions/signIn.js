const createRequestTypes = type => ({
  SUCCESS: `${type}_SUCCESS`,
  FAIL: `${type}_FAIL`,
});


export const actionConstants = {
  SIGN_IN: createRequestTypes('SIGN_IN'),
};

const signIn = (payload) => {
  console.log('payload', payload);
  return (dispatch) => {
    let status = null;
    return fetch('https://lab.lectrum.io/redux/api/user/login', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        status = res.status;

        return res.json();
      })
      .then(res => {
        if (status !== 200) {
          return dispatch({
            type: actionConstants.SIGN_IN.FAIL,
            error: res,
          });
        }

        dispatch({
          type: actionConstants.SIGN_IN.SUCCESS,
          payload: res,
        })
      });
  };
};

export const actionCreators = {
  signIn,
};
