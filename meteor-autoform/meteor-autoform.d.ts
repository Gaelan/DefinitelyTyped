interface AutoFormHooks<Doc, Result> {
    before?: {[type: string]: (doc: Doc) => (Object | boolean | void)}
    after?: {[type: string]: () => void}
    onSubmit?(insertDoc: Doc, updateDoc: Mongo.Modifier, currentDoc: Doc): Result
    onSuccess?(formType: string, result: Result): void
    onError?(formType: string, error: Error): void
    formToDoc?(doc: Doc): Object
    formToModifier?(modifier: Mongo.Modifier): Object
    docToForm?(doc: Doc, schema: SimpleSchema): Object
    beginSubmit?(): void
    endSubmit?(): void
}

declare module AutoForm {
    export function addHooks<D, R>(forms: (string | string[]), hooks: AutoFormHooks<D, R>): void;
}