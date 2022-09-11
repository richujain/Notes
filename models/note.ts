class NoteModel {
    id: string;
    title: string;
    body: string;
    category: string;
    color: string;
    
    constructor(title: string, body: string, category: string, color: string) {
        this.title = title;
        this.body = body;
        this.category = category;
        this.color = color;
        this.id = new Date().toISOString();
    }
}
export default NoteModel
