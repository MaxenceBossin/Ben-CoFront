import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment'
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Database, getDatabase, ref, set, onValue } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import { Chat } from 'src/app/modules/garbage-collector/components/eboueur-messages/chat'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import jwtDecode from "jwt-decode";
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-eboueur-messages',
  templateUrl: './eboueur-messages.component.html',
  styleUrls: ['./eboueur-messages.component.css']
})
export class EboueurMessagesComponent implements OnInit {

  title = 'firechat';
  app: FirebaseApp;
  db: Database;
  form: FormGroup;
  username = '';
  message = '';
  chats: Chat[] = [];
  userMail: any
  userMessage: any

  constructor(private formBuilder: FormBuilder, private UserService: UserService) {
    this.app = initializeApp(environment.firebase);
    this.db = getDatabase(this.app);
    this.form = this.formBuilder.group({
      'message': [],
      'username': []
    });
  }

  onChatSubmit(form: any) {
    const chat = form;
    chat.timestamp = new Date().toString();
    chat.id = uuidv4();
    set(ref(this.db, `chats/${chat.id}`), chat);
    this.form = this.formBuilder.group({
      'message': [],
      'username': [this.userMail],
    });
  }

  ngOnInit(): void {
    this.UserService.getGarbageCollector().subscribe((users: any) => {

      const jwt = this.getJwt(localStorage.getItem("jwtToken"))
      // @ts-ignore
      const email = jwt.email
      console.log(email);
      const temp = users.filter((g: any) => g.email == email)
      this.userMail = temp[0].email
      console.log(this.userMail);

      this.form = this.formBuilder.group({
        'message': [],
        'username': [this.userMail]
      });


      this.userMessage = this.chats.filter((c: any) => c.username == this.userMail)
      console.log("fix ", this.userMessage);
      this.chats = this.chats.sort((a: any, b: any) =>  new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
      console.log("fix chat after sort", this.chats);
    })

    const chatsRef = ref(this.db, 'chats');
    onValue(chatsRef, (snapshot: any) => {
      const data = snapshot.val();
      for (let id in data) {
        if (!this.chats.map(chat => chat.id).includes(id)) {
          this.chats.push(data[id])
        }
      }
    });
  }

  getJwt(jtwToken: any) {
    return jwtDecode(jtwToken);
  }

}
