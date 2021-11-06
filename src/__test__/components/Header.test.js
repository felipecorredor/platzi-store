import React from 'react';
import { mount, render, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';
import { create } from 'react-test-renderer';

describe('<Header />', () => {
  test('Render component', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });

  test('Render of title', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });

  test('Render of title documento', () => {
    const header = render(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});


describe('Header SnapShot', () => {
  test('test snapshot header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    )
    expect(header.toJSON()).toMatchSnapshot()
  })

})
