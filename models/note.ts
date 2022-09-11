class NoteModel {
    id: string;
    title: string;
    body: string;
    category: string;
    
    constructor(title: string, body: string, category: string) {
        this.title = title;
        this.body = body;
        this.category = category;
        this.id = new Date().toISOString();
    }
}
export default NoteModel
