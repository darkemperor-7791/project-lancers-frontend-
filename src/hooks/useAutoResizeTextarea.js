import { useRef } from "react";

function useARTA() {                        /*AutoResizeTextArea = ARTA*/
                                            /*made to make the textboxes flexible as per the user input and not require any scrollbar to look for long text inputs.*/
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  return {
    textareaRef,
    handleInput
  };
}

export default useARTA;
