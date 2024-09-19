import spinWords from "./stopGnippips";

export default function stopGninnipSRequestHandler({ sentence }) {
  if (!sentence) {
    return "";
  }

  return spinWords(sentence);
}
