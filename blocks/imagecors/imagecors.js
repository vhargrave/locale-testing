import {getLibs} from "../../scripts/utils";

export default async function init(el) {
    const link = el.querySelector('a');
    debugger;
    if (link) {
        const { createTag } = await import(`${getLibs()}/utils/utils.js`);
        const img = createTag('img', { src: link.href });
        el.append(img);
    }
}
