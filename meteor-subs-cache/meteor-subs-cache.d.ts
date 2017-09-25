/// <reference path='../types/meteor/meteor.d.ts' />
declare class SubsCache {
    subscribe(name: string, ...args: any[]): Meteor.SubscriptionHandle;
}