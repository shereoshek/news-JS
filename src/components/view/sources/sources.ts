import './sources.css';
import { NewsSource } from '../../../types/news';

class Sources {
    draw(data: NewsSource[]): void {
        const fragment = document.createDocumentFragment();

        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        const sourcesContainer = document.querySelector<HTMLElement>('.sources');

        if (!sourceItemTemp || !sourcesContainer) {
            throw new Error('Sources template or container not found');
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const sourceName = sourceClone.querySelector<HTMLElement>('.source__item-name');
            const sourceElement = sourceClone.querySelector<HTMLElement>('.source__item');

            if (!sourceName || !sourceElement) {
                throw new Error('Source template elements not found');
            }

            sourceName.textContent = item.name;
            sourceElement.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        sourcesContainer.append(fragment);
    }
}

export default Sources;
