/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import work from '../data/work.json';


describe("ExampleWork Component", () => {
	let component = shallow(<ExampleWork />);

	it ("Should be a span element", () => {
		expect(component.type()).toEqual('span');
	});

	it ("Should contain as many children as there are records in data file", () => {
		expect(component.find('ExampleWorkBubble').length).toEqual(work.length);
	});

	it("Should allow the modal to open and close", () => {
		component.instance().openModal();
		expect(component.instance().state.modalOpen).toBe(true);
		component.instance().closeModal();
		expect(component.instance().state.modalOpen).toBe(false);
	});
});

describe("ExampleWorkBubble Component", () => {
	let mockOpenModalFn = jest.fn();
	let component = shallow(<ExampleWorkBubble example={work[1]}
		openModal={mockOpenModalFn}/>);
	let images = component.find("img");

	it ("Should contain a single image element", () => {
		expect(images.length).toEqual(1);
	});

	it ("Should have the image src set correctly", () => {
		expect(images.prop("src")).toEqual(work[1].image.src);
	});

	it("Should call the openModal handler when clicked", () => {
		component.find(".section__exampleWrapper").simulate('click');
		expect(mockOpenModalFn).toHaveBeenCalled();
	});



});
