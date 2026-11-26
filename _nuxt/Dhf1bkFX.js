import { i as inflate_1 } from "./ByZNE5QS.js";
import { B as BaseDecoder } from "./DpsuqxLW.js";
class DeflateDecoder extends BaseDecoder {
  /** @param {ArrayBuffer} buffer */
  decodeBlock(buffer) {
    return inflate_1(new Uint8Array(buffer)).buffer;
  }
}
export {
  DeflateDecoder as default
};
//# sourceMappingURL=Dhf1bkFX.js.map
