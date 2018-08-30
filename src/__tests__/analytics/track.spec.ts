import GoogleAnalytics from '../../analytics/GoogleAnalytics';
import {track} from '../../analytics/track';

const event = {
  action: 'Click Button',
  category: 'Click'
};

describe('Decorator', () => {
  describe('Decorator factory', () => {
    it('should create a decorator', () => {
      const decorator = track(event, GoogleAnalytics);
      expect(decorator).toBeInstanceOf(Function);
    });

    it('should not change primary function', () => {
      const mock = jest.fn();
      class Component {
        handleClick() {
          return mock();
        }
      }
      track(event, GoogleAnalytics)(
        Component.prototype,
        'handleClick',
        Object.getOwnPropertyDescriptor(Component.prototype, 'handleClick')
      );
      new Component().handleClick();
      expect(mock).toBeCalled();
    });
  });

  describe('@track() decorator', () => {
    beforeEach(() => {
      GoogleAnalytics.track = jest.fn();
    });

    it('should call track function from service', () => {
      // tslint:disable-next-line:max-classes-per-file
      class Component {
        @track(event, GoogleAnalytics)
        handleClick() {
          // do stuff
        }
      }
      const component = new Component();
      component.handleClick();
      expect(GoogleAnalytics.track).toBeCalled();
    });

    it('should accept multiple analytics services', () => {
      // tslint:disable-next-line:max-classes-per-file
      class Component {
        @track(event, GoogleAnalytics, GoogleAnalytics)
        handleClick() {
          // do stuff
        }
      }
      const component = new Component();
      component.handleClick();
      expect(GoogleAnalytics.track).toHaveBeenCalledTimes(2);
    });
  });
});
