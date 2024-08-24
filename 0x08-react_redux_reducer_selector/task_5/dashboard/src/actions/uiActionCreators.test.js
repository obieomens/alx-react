import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest, loginSuccess, loginFailure, LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates LOGIN and LOGIN_SUCCESS when the API returns a success response', () => {
        fetchMock.getOnce('/dist/login-success.json', {
            body: { success: true },
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [
            { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
            { type: LOGIN_SUCCESS }
        ];

        const store = mockStore({});

        return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates LOGIN and LOGIN_FAILURE when the API returns an error response', () => {
        fetchMock.getOnce('/dist/login-success.json', {
            throws: new Error('Something went wrong'),
        });

        const expectedActions = [
            { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
            { type: LOGIN_FAILURE }
        ];

        const store = mockStore({});

        return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
