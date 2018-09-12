import GoogleAnalytics from '../../analytics/GoogleAnalytics';
import Segment from '../../analytics/Segment';

import ReactGA from 'react-ga';

const event = {
  details: {
    category: 'Lykke Web Terminal',
    info: 'Market',
    location: 'Order Widget',
    type: 'Button'
  },
  title: 'Change Order Type'
};

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
        GoogleAnalytics.track(event);
        expect(ReactGA.event).toBeCalled();
      });
    });
  });

  describe('Segment', () => {
    window.analytics = {
      load: jest.fn(),
      track: jest.fn()
    };

    describe('setup() method', () => {
      it('should call GA initialize() method', () => {
        const key = 'key';
        Segment.loadCdn = jest.fn();
        Segment.setup(key);
        expect(window.analytics.load).toBeCalled();
      });
    });

    describe('track() method', () => {
      it('should call GA event() method', () => {
        Segment.track(event);
        expect(window.analytics.track).toBeCalled();
      });
    });
  });
});
