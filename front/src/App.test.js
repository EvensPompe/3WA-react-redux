import App from './App';
import Header from './Components/Header';
import { shallow } from "enzyme";
import Main from './Components/Main';
describe('App.js', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<App/>);
  })

  it('should render Header component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render Main component', () => {
    expect(wrapper.find(Main)).toHaveLength(1);
  });
})

