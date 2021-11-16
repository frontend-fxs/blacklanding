type TSProps = {
  isActive: {
    signals: boolean;
    strategies: boolean;
    webinars: boolean;
    recordings: boolean;
    experts: boolean;
  };
  setIsActive: (isActive: any) => void;
};

export default TSProps;
