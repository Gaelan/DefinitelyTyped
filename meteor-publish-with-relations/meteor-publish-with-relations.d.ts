declare module Meteor {
    interface PublishWithRelationsCollectionOptions {
        collection: {
            _name: string,
            find(selector?: Mongo.Selector, options?: {
				sort?: Mongo.SortSpecifier;
				skip?: number;
				limit?: number;
				fields?: Mongo.FieldSpecifier;
				reactive?: boolean;
			}): Mongo.Cursor<any>
        },
        filter?: Object,
        options?: {
            sort?: Mongo.SortSpecifier;
            skip?: number;
            limit?: number;
            fields?: Mongo.FieldSpecifier;
            reactive?: boolean;
        },
    }
    interface PublishWithRelationsMapping extends PublishWithRelationsCollectionOptions {
        foreign_key?: string;
        key?: string;
    }

    interface PublishWithRelationsOptions extends PublishWithRelationsCollectionOptions {
        handle: Subscription,
        mappings?: PublishWithRelationsMapping[],
    }
    function publishWithRelations(options: PublishWithRelationsOptions): void
}