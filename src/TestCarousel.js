import {
  defaultState,
  shadowRootMode,
} from "../node_modules/elix/src/base/internal.js";
import PlainArrowDirectionButton from "../node_modules/elix/src/plain/PlainArrowDirectionButton.js";
import PlainCarousel from "../node_modules/elix/src/plain/PlainCarousel.js";
import PlainCenteredStripOpacity from "../node_modules/elix/src/plain/PlainCenteredStripOpacity.js";
import PlainPageDot from "../node_modules/elix/src/plain/PlainPageDot.js";
import PlainSlidingStage from "../node_modules/elix/src/plain/PlainSlidingStage.js";

class TestArrowDirectionButton extends PlainArrowDirectionButton {
  get [defaultState]() {
    return Object.assign(super[defaultState], {
      detectDarkMode: "off",
    });
  }

  get [shadowRootMode]() {
    return "closed";
  }
}

class TestPageDot extends PlainPageDot {
  get [defaultState]() {
    return Object.assign(super[defaultState], {
      detectDarkMode: "off",
    });
  }

  get [shadowRootMode]() {
    return "closed";
  }
}

class TestCenteredStripOpacity extends PlainCenteredStripOpacity {
  get [shadowRootMode]() {
    return "closed";
  }
}

class TestSlidingStage extends PlainSlidingStage {
  get [shadowRootMode]() {
    return "closed";
  }
}

class TestCarousel extends PlainCarousel {
  get [defaultState]() {
    return Object.assign(super[defaultState], {
      arrowButtonPartType: TestArrowDirectionButton,
      detectDarkMode: "off",
      proxyListPartType: TestCenteredStripOpacity,
      proxyPartType: TestPageDot,
      stagePartType: TestSlidingStage,
    });
  }

  get [shadowRootMode]() {
    return "closed";
  }
}
customElements.define("test-carousel", TestCarousel);
