import { createStore} from 'redux';
import { users } from './../server/db';
import { getDefaultState } from './../server/getDefaultState';
import { initializeDB } from './../server/db/initializeDB';

initializeDB();

const currentUser = users[0];
const defaultState = getDefaultState(currentUser);

const reducer = state => state;

const store = createStore(reducer);

export const getStore = ()=>store;
