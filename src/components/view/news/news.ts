import './news.css';
import { Article } from '../../../types/news';

function getRequiredElement<T extends Element>(root: ParentNode, selector: string): T {
    const element = root.querySelector<T>(selector);

    if (!element) {
        throw new Error(`Element "${selector}" not found`);
    }

    return element;
}

class News {
    draw(data: Article[]): void {
        const news = data.slice(0, 10);

        const fragment = document.createDocumentFragment();
        const newsItemTemp = getRequiredElement<HTMLTemplateElement>(document, '#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) {
                getRequiredElement<HTMLElement>(newsClone, '.news__item').classList.add('alt');
            }

            getRequiredElement<HTMLElement>(newsClone, '.news__meta-photo').style.backgroundImage =
                `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            getRequiredElement<HTMLElement>(newsClone, '.news__meta-author').textContent =
                item.author || item.source.name;

            getRequiredElement<HTMLElement>(newsClone, '.news__meta-date').textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            getRequiredElement<HTMLElement>(newsClone, '.news__description-title').textContent = item.title;

            getRequiredElement<HTMLElement>(newsClone, '.news__description-source').textContent = item.source.name;

            getRequiredElement<HTMLElement>(newsClone, '.news__description-content').textContent = item.description;

            getRequiredElement<HTMLAnchorElement>(newsClone, '.news__read-more a').setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = getRequiredElement<HTMLElement>(document, '.news');
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
