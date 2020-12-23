import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });






// Enzyme Component Renderer's

//Static
//Renders immutable static HTML that allows us to assert it's info

//Shallow
//Renders just the component and none of its children

//Full DOM
//Renders component and all of its children which are also interactable
