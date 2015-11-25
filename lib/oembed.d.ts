// Type definitions for node-oembed (aendrew's fork)
// Project: https://github.com/aendrew/node-oembed
// Definitions by: Ændrew Rininsland <https://github.com/aendrew>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../typings/superagent/superagent.d.ts' />

declare module "oembed" {
  import request = require("superagent");

  type CallbackHandler = { (err: any, res: request.Response): void; }|{ (res: request.Response): void; };

  export module oembed {
    function fetch(url:string, parameters:IOembedOptions, cb:CallbackHandler):void;

    function discover(url:string, cb:CallbackHandler):void;

    function fetchJSON(url:string, cb:CallbackHandler):void;

    function fetchXML(url:string, cb:CallbackHandler):void;

    var EMBEDLY_KEY:string;

    interface IOembedOptions {
      key?: string;
      url?: string;
      format?: string;
    }
  }
}