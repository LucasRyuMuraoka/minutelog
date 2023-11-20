const useTimeout = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export { useTimeout };
