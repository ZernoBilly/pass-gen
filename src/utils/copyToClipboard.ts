const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return { text, error: false };
  } catch (error) {
    return { text, error: true };
  }
};

export default copyToClipboard;
