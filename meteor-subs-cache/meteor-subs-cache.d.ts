/// <reference path='../meteor/meteor.d.ts' />
declare class SubsCache {
    subscribe(name: string, ...args: any[]): Meteor.SubscriptionHandle;
}