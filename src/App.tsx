import { Cart } from './components/Cart';
import { ChatWidget } from './components/ChatWidget';
import { Comment } from './components/Comment';
import { Counter } from './components/Counter';
import { Gallery } from './components/Gallery';
import { PagedList } from './components/Pagination';
import { SearchBox } from './components/SearchBox';
import { SignupForm } from './components/SignupForm';
import { Timer } from './components/Timer';
import { TodoList } from './components/TodoList';
import { UserProfile } from './components/UserProfile';
import { CartProvider } from './store/cartContext';

export default function App() {
  return (
    <CartProvider>
      <h1>Shopfront</h1>
      <SearchBox />
      <UserProfile userId={1} />
      <Cart coupon="SAVE20" />
      <Counter />
      <Timer />
      <TodoList />
      <SignupForm />
      <ChatWidget />
      <Comment html="<i>Great product</i>" />
      <PagedList items={['a', 'b', 'c', 'd', 'e']} pageSize={2} />
      <Gallery urls={[]} filter="" />
    </CartProvider>
  );
}
