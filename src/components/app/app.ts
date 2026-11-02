import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsResponse, SourcesResponse } from '../../types/news';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourcesContainer = document.querySelector<HTMLElement>('.sources');

        if (!sourcesContainer) {
            throw new Error('Sources container not found');
        }

        sourcesContainer.addEventListener('click', (e: MouseEvent) => {
            this.controller.getNews(e, (data: NewsResponse) => {
                this.view.drawNews(data);
            });
        });

        this.controller.getSources((data: SourcesResponse) => {
            this.view.drawSources(data);
        });
    }
}

export default App;
