import { short, medium, long } from '../lib/timeouts';
import { mobile, tablet, desktop } from '../lib/deviceDimensions';

class Base {
  pauseShort() {
    browser.pause(short);
  }

  pauseMedium() {
    browser.pause(medium);
  }

  pauseLong() {
    browser.pause(long);
  }

  setMobileResolution() {
    browser.setWindowSize(mobile[0], mobile[1]);
  }

  setTabletResolution() {
    browser.setWindowSize(tablet[0], tablet[1]);
  }

  setDesktopResolution() {
    browser.setWindowSize(desktop[0], desktop[1]);
  }

  clearInputField(elem) {
    const textLength = elem.getValue().length;
    let i = 0;

    for(i = 0; i < textLength; i++) {
      elem.doubleClick();
      browser.keys('Delete');
    }
  }

  createRandomNumberBetweenTwoValues(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
}

export default Base;
