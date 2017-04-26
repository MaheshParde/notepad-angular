import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Note } from './notes.component';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NotesService {
	constructor(private http: Http) {}
	private apiUrl = 'http://localhost:8080/symfony/notepad/web/app_dev.php/api/';
	private notesUrl = this.apiUrl + 'notes';

	getNotes() {
		return this.http.get(this.notesUrl)
			.map((res:Response) => res.json());
	}
}