import React from "react"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
React.useLayoutEffect = React.useEffect

configure({ adapter: new Adapter() });
global.fetch = require('jest-fetch-mock');
