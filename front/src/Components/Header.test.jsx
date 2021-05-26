import { shallow } from "enzyme";
import Header from "./Header";
describe('Header.jsx', () => {
    it("should render Header Component's content",()=>{
       let wrapper = shallow(<Header/>);
       expect(wrapper.text()).toBe("3WShop");
    })
})
