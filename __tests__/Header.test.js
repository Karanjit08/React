import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router"
import appStore from "../src/utils/appStore"
import Header from "../src/component/Header"

test('Should Load the header component', () => { 
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
 })