import { getLibs } from '../../scripts/utils.js';

export default async function init(el) {
  // other test
  const link = el.querySelector('a');
  if (link) {
    const { createTag } = await import(`${getLibs()}/utils/utils.js`);
    const img = createTag('img', { src: link.href });
    el.append(img); //more
  }
}
