import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('should call handleDisplayDrawer when clicking on menu item', () => {
    const mockHandleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications handleDisplayDrawer={mockHandleDisplayDrawer} />
    );
    wrapper.find('.menuItem').simulate('click');
    expect(mockHandleDisplayDrawer).toHaveBeenCalled();
  });

  it('should call handleHideDrawer when clicking on the close button', () => {
    const mockHandleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        handleHideDrawer={mockHandleHideDrawer}
      />
    );
    wrapper.find('button[aria-label="Close"]').simulate('click');
    expect(mockHandleHideDrawer).toHaveBeenCalled();
  });
});
