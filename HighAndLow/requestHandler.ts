import { highAndLow } from "./highAndLow";

export default function highAndLowRequestHandler({ numbers }) {
  if (!numbers) {
    return "";
  }

  return highAndLow.process(numbers);
}
