import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './AppRouter';

const rootElement = document.querySelector('.wrapper');

render(
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>,
    rootElement
);
