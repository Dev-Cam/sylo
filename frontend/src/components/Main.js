import { Route, Routes} from 'react-router-dom'
import { HomePage, BillsPage, ChoresPage, ShoppingListPage, SocialEventsPage} from '../pages/index'
import { styled } from 'styled-components'

const Container = styled.div`
	background-color: #feeaa5;
	

text-align: center;
`
export default function Main() {
  return <Container >
    <Routes>
      <Route path='/' element= {<HomePage />}></Route>
      <Route path='/bills' element= {<BillsPage />}></Route>
      <Route path='/socialEvents' element= {<SocialEventsPage />}></Route>
      <Route path='/chores' element= {<ChoresPage />}></Route>
      <Route path='/shoppingList' element= {<ShoppingListPage />}></Route>
    </Routes>
  </Container>
}