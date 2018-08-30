import GoogleAnalytics from '../../analytics/GoogleAnalytics';

import ReactGA from 'react-ga';

describe('Analytics', () => {
  describe('GoogleAnalytics', () => {
    describe('setup() method', () => {
      ReactGA.initialize = jest.fn();
      it('should call GA initialize() method', () => {
        const key = 'key';
        GoogleAnalytics.setup(key);
        expect(ReactGA.initialize).toBeCalled();
      });
    });

    describe('track() method', () => {
      ReactGA.event = jest.fn();
      it('should call GA event() method', () => {
        const event = {
          action: 'Click Button',
          category: 'Click'
        };
        GoogleAnalytics.track(event);
        expect(ReactGA.event).toBeCalled();
      });
    });
  });
});
