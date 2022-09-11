class NoteModel {
    id: string;
    title: string;
    body: string;
    color: string;
    
    constructor(title: string, body: string, color: string, id: string) {
        this.title = title;
        this.body = body;
        this.color = color;
        this.id = id;
    }
}
export default NoteModel
