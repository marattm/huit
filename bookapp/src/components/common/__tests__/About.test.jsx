import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import axios from 'axios';

import About from '../About';

import { googleAPICallResult } from '../../../services/utils';

describe('About renders properly ..', () => {

    const healthData = {
        status: 'click on the button',
        message: 'waiting for a message..'
    }

    const wrapper = shallow(<About />);

    it('renders properly', () => {
        const button = wrapper.find('Button');
        expect(button.length).toBe(2);
        expect(button.get(0).props.children).toBe('Check Google API Health!');

        const information = wrapper.find('p');
        expect(information.length).toBe(4);
        expect(information.get(0).props.children[1].props.children).toBe(' Status Code: ');
        expect(information.get(0).props.children[2].props.children.props.children).toBe(healthData.status);
        expect(information.get(1).props.children[0].props.children).toBe('Total Item received: ');
        expect(information.get(1).props.children[2].props.children.props.children).toBe(healthData.message);
    })

    it('calls componentDidMount', () => {
        sinon.spy(About.prototype, 'componentDidMount');
        const about = mount(<About />);
        expect(About.prototype.componentDidMount.calledOnce).toBe(true);
    });

    // it('renders a snapshot properly', () => {
    //     const tree = renderer.create(<About />).toJSON();
    //     expect(tree).toMatchSnapshot();
    // })

})


describe('About Component behavior', () => {

    const healthDataBefore = {
        status: 'click on the button',
        message: 'waiting for a message..'
    }

    const healthDataAfter = {
        status: '200',
        message: '122'
    }

    const result = googleAPICallResult
    const promise = Promise.resolve(result)


    beforeEach(() => {
        sinon.stub(axios, 'get').withArgs('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes').returns(promise)
    })

    afterEach(() => {
        axios.get.restore()
    })


})

