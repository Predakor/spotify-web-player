function useTheme() {
  const html = document.querySelector('html');
  const attribute = 'data-theme';
  const activeTheme = html?.getAttribute(attribute);
  const newTheme = activeTheme === 'forest' ? 'emerald' : 'forest';
  html?.setAttribute(attribute, newTheme);
}
export default useTheme;
