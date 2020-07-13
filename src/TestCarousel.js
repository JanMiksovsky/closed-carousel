import {
  defaultState,
  shadowRootMode,
} from "../node_modules/elix/src/base/internal.js";
import PlainArrowDirectionButton from "../node_modules/elix/src/plain/PlainArrowDirectionButton.js";
import PlainCarousel from "../node_modules/elix/src/plain/PlainCarousel.js";
import PlainCenteredStripOpacity from "../node_modules/elix/src/plain/PlainCenteredStripOpacity.js";
import PlainPageDot from "../node_modules/elix/src/plain/PlainPageDot.js";
import PlainSlidingStage from "../node_modules/elix/src/plain/PlainSlidingStage.js";

export class TestArrowDirectionButton extends PlainArrowDirectionButton {
  get [shadowRootMode]() {
    return "closed";
  }
}

export class TestPageDot extends PlainPageDot {
  get [shadowRootMode]() {
    return "closed";
  }
}

export class TestCenteredStripOpacity extends PlainCenteredStripOpacity {
  get [shadowRootMode]() {
    return "closed";
  }
}

export class TestSlidingStage extends PlainSlidingStage {
  get [shadowRootMode]() {
    return "closed";
  }
}

export class TestCarousel extends PlainCarousel {
  get [defaultState]() {
    return Object.assign(super[defaultState], {
      arrowButtonPartType: TestArrowDirectionButton,
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
