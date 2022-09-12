class NoteModel {
    id: string;
    title: string;
    body: string;
    color: string;
    localId: string;
    
    constructor(title: string, body: string, color: string, id: string, localId: string) {
        this.title = title;
        this.body = body;
        this.color = color;
        this.id = id;
        this.localId = localId;
    }
}
export default NoteModel
