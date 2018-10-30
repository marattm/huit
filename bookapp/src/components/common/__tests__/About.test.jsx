import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import axios from 'axios';
import { before, after } from 'mocha';

import About from '../About';
// import { checkHealth } from '../About';

describe('About renders properly ..', () => {

    const healthData = {
        status: 'click on the button',
        message: 'waiting for a message..'
    }

    const wrapper = shallow(<About />);

    it('renders properly', () => {
        const button = wrapper.find('Button');
        expect(button.length).toBe(1);
        expect(button.get(0).props.children).toBe('Check Health!');

        const information = wrapper.find('p');
        expect(information.length).toBe(2);
        expect(information.get(0).props.children).toBe('Status Code: ' + healthData.status);
        expect(information.get(1).props.children).toBe('Total Item received: ' + healthData.message);
    })

    // describe('About Component', () => {
    //     it('calls componentDidMount', () => {
    //         sinon.spy(wrapper.prototype, 'componentDidMount');

    //         expect(wrapper.prototype.componentDidMount.calledOnce).to.equal(true);
    //     });
    // });

    describe('About Component', () => {
        const result = [3, 5, 9];
        const promise = Promise.resolve(result);

        before(() => {
            sinon.stub(axios, 'get').withArgs('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes').returns(promise);
        });

        after(() => {
            axios.get.restore();
        });


        it('fetches async counters', () => {

            expect(wrapper.state().asyncCounters).to.equal(null);

            promise.then(() => {
                expect(wrapper.state().asyncCounters).to.equal(result);
            });
        });
    });

    // describe('Local State', () => {
    //     it('should update the status & message in state', () => {
    //         const state = {
    //             healthData: {
    //                 status: 'click on the button',
    //                 message: 'waiting for a message..'
    //             }
    //         };
    //         const newState = checkHealth(state);

    //         expect(newState.healthData.status).toBe(200);
    //     });

    // it('should decrement the message in state', () => {
    //     const state = { counter: 0 };
    //     const newState = checkHealth(state);

    //     expect(newState.counter).to.equal(-1);
    // });
    // });

    it('renders a snapshot properly', () => {
        const tree = renderer.create(<About />).toJSON();
        expect(tree).toMatchSnapshot();
    })

})


