const useDinamicPageTitle = (title) => {
	const defaultTitle = "MinuteLog Plataform";
  document.title = `${defaultTitle} - ${title}` ;
}

export { useDinamicPageTitle };
