import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { Map } from 'immutable';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    const initialState = Map({
      courses: Map(),
    });
    const action = { type: '' };
    const result = courseReducer(undefined, action);
    expect(result).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS and return the data normalized', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };
    const expectedState = Map({
      courses: Map({
        '1': Map({ id: 1, name: 'ES6', isSelected: false, credit: 60 }),
        '2': Map({ id: 2, name: 'Webpack', isSelected: false, credit: 20 }),
        '3': Map({ id: 3, name: 'React', isSelected: false, credit: 40 }),
      }),
    });
    const result = courseReducer(undefined, action);
    expect(result.toJS()).toEqual(expectedState.toJS());
  });

  it('should handle SELECT_COURSE
