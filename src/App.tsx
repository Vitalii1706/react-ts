
import { BrowserRouter, Route } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import { NavLink } from 'react-router-dom';
import TodosItemPage from './components/TodosItemPage';
import UserItemPage from './components/UserItemPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to={'/users'}>Користувачі</NavLink>
          <NavLink to={'/todos'}>Список справ</NavLink>
        </div>
        <Route path={'/users'} exact>
          <UsersPage />
        </Route>
        <Route path={'/todos'} exact>
          <TodosPage />
        </Route>
        <Route path={'/user/:id'}>
          <UserItemPage />
        </Route>
        <Route path={'/todos/:id'}>
          <TodosItemPage />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;

/* <EventExample />
        <Card
          onClick={(num: number) => console.log('click', num)}
          variant={CardVariant.primary}
          width="200px"
          height="200px"
        >
          <button>Кнопка</button>
          <div>Hello</div>
        </Card>*/
