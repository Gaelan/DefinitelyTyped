interface AttachSchemaOptions {
    replace: boolean;
}

declare module Mongo {
    interface Collection<T> {
        // Not sure if the "void" return value is accurate.
        attachSchema(schema: SimpleSchema, options?: AttachSchemaOptions): void;
    }
}