import { Injectable } from '@angular/core';

Injectable();
export class General {

    constructor() {}

    public justFirstOne(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1) + "";
    }

}