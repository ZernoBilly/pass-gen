import React, { createContext, useState } from "react";

type StyleContextProps = {
  backgroundOpacity: string;
};

const initState = {
  backgroundOpacity: "1",
};

const StyleContext = createContext<
  [StyleContextProps, React.Dispatch<React.SetStateAction<StyleContextProps>>]
>([initState, () => {}]);

const StyleProvider = ({ children }: any) => {
  const [style, setStyle] = useState<StyleContextProps>(initState);

  return (
    <StyleContext.Provider value={[style, setStyle]}>
      {children}
    </StyleContext.Provider>
  );
};

export { StyleContext, StyleProvider };
