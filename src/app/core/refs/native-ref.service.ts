import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';

function _document(): any {
  return document as Document;
}

function _window(): any {
  return window as Window;
}

@Injectable()
export class NativeRefService {

  private elmHtml: HTMLElement = this._doc.getElementsByTagName('html')[0];
  private emlBody: HTMLElement = this._doc.getElementsByTagName('body')[0];

  constructor(@Inject(DOCUMENT) private _doc: Document) {
  }

  public get nativeDocument(): Document {
    return this._doc || _document;
  }

  public get nativeWindow(): any {
    return _window();
  }

  public get html(): HTMLElement {
    return this.elmHtml;
  }

  public get body(): HTMLElement {
    return this.emlBody;
  }
}

// (window as any).global = window;
// // @ts-ignore
// window.Buffer = window.Buffer || require('buffer').Buffer;

