export const onScroll = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  id: string
) => {
  const target = event.target as Node;
  const anchor = (target.ownerDocument || document).querySelector(id);

  if (anchor) {
    anchor.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
