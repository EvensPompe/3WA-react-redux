import SignUp from "./SignUp";
import { shallow } from "enzyme";
describe('SignUp.jsx',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<SignUp/>)
    })
    it('should render SignUp component and find id "signUp"',()=>{
        expect(wrapper.find("#signUp").length).toBe(1);
    })

    it('should render SignUp component and not find id "signUp"',()=>{
        expect(wrapper.find("#sigUp").length).toBe(0);
    })

    it('should set values in form and submit',()=>{
       expect(wrapper.find("#firstName").props().value).toEqual('');
       wrapper.find("#firstName").simulate('change', { target:{ value : "test"} });
       expect(wrapper.find("#firstName").props().value).toEqual('test');

       expect(wrapper.find("#lastName").props().value).toEqual('');
       wrapper.find("#lastName").simulate('change', { target:{ value : "test2"} });
       expect(wrapper.find("#lastName").props().value).toEqual('test2');

       expect(wrapper.find("#email").props().value).toEqual('');
       wrapper.find("#email").simulate('change', { target:{ value : "test@test.fr"} });
       expect(wrapper.find("#email").props().value).toEqual('test@test.fr');

       expect(wrapper.find("#password").props().value).toEqual('');
       wrapper.find("#password").simulate('change', { target:{ value : "testPass"} });
       expect(wrapper.find("#password").props().value).toEqual('testPass');

       expect(wrapper.find("#address").props().value).toEqual('');
       wrapper.find("#address").simulate('change', { target:{ value : "123 rue test"} });
       expect(wrapper.find("#address").props().value).toEqual('123 rue test');

       expect(wrapper.find("#zip").props().value).toEqual('');
       wrapper.find("#zip").simulate('change', { target:{ value : "12345"} });
       expect(wrapper.find("#zip").props().value).toEqual('12345');

       expect(wrapper.find("#city").props().value).toEqual('');
       wrapper.find("#city").simulate('change', { target:{ value : "testVille"} });
       expect(wrapper.find("#city").props().value).toEqual('testVille');

       expect(wrapper.find("#phone").props().value).toEqual('');
       wrapper.find("#phone").simulate('change', { target:{ value : "0987654321"} });
       expect(wrapper.find("#phone").props().value).toEqual('0987654321');

       wrapper.find("#subButton").simulate('click');
    })
})