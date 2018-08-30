import Amplitude from '../../analytics/Amplitude';
import Analytics from '../../analytics/Analytics';
import GoogleAnalytics from '../../analytics/GoogleAnalytics';

jest.mock('react-ga');
jest.mock('amplitude-js');

describe('Analytics', () => {
  describe('GoogleAnalytics', () => {
    const setupAndGetInstance = (key: string) => {
      GoogleAnalytics.setup(key);
      return GoogleAnalytics.getInstance();
    };

    it('should setup', () => {
      expect(setupAndGetInstance('key')).toBeDefined();
    });

    it('should be a singleton', () => {
      const firstInstance = setupAndGetInstance('key');
      const secondInstance = setupAndGetInstance('one more key');
      expect(firstInstance).toEqual(secondInstance);
    });

    it('shold be a child class of Analytics', () => {
      expect(setupAndGetInstance('key')).toBeInstanceOf(Analytics);
    });
  });

  describe('Amplitude', () => {
    const setupAndGetInstance = (key: string) => {
      Amplitude.setup(key);
      return GoogleAnalytics.getInstance();
    };

    it('should setup', () => {
      expect(setupAndGetInstance('key')).toBeDefined();
    });

    it('should be a singleton', () => {
      const firstInstance = setupAndGetInstance('key');
      const secondInstance = setupAndGetInstance('one more key');
      expect(firstInstance).toEqual(secondInstance);
    });

    it('shold be a child class of Analytics', () => {
      expect(setupAndGetInstance('key')).toBeInstanceOf(Analytics);
    });
  });
});
